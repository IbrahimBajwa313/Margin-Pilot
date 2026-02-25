import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Workshop from "@/lib/models/Workshop";
import UserProfile from "@/lib/models/UserProfile";
import { getSessionEmail } from "@/lib/session";
import { getEffectiveOwnerAndRole, canWriteWorkshop } from "@/lib/role";
import { calculateEfficiencyServer, type EfficiencyInput } from "@/lib/efficiency-server";

/** Keys that the frontend may send; only these are persisted. efficiencyRequired is computed on backend, not taken from client. */
const WORKSHOP_PERSIST_KEYS = [
    "avgLabourRate", "currentMonth", "workingDaysInMonth", "currentBranch", "currentScenario",
    "fixedExpensesTotal", "marketingTotal", "loansTotal", "staffTotal", "techniciansTotal",
    "estimatedMonthlyPartsProfitEuro", "workingDaysPerMonth", "monthlyWorkingDays", "ownerProfitGoal",
    "fixedExpenses", "marketing", "loans", "staff", "technicians",
    "workshopSize", "ramps", "techs", "monthlyData",
    "todayActual", "dailyActualStatus",
    "userPreferences", "efficiencyCalendar", "isStarterTemplate",
] as const;

function sanitizeWorkshopBody(body: Record<string, unknown>): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (const key of WORKSHOP_PERSIST_KEYS) {
        if (Object.prototype.hasOwnProperty.call(body, key)) {
            out[key] = body[key];
        }
    }
    return out;
}

export async function GET() {
    const email = await getSessionEmail();
    if (!email) {
        return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
    }
    await dbConnect();
    const effective = await getEffectiveOwnerAndRole(email);
    if (!effective) {
        return NextResponse.json({ error: "Profile not found." }, { status: 404 });
    }
    let data = await Workshop.findOne({ ownerEmail: effective.ownerEmail })
        .sort({ createdAt: -1 })
        .lean();
    if (!data) {
        return NextResponse.json({ error: "No workshop data found. Please run seed." }, { status: 404 });
    }
    const dataObj = data as Record<string, unknown>;
    const workshopSize = (dataObj.workshopSize as number) ?? 0;
    const ramps = (dataObj.ramps as number) ?? 0;
    if (workshopSize === 0 && ramps === 0) {
        const profile = await UserProfile.findOne({ email: effective.ownerEmail }).lean() as {
            company?: { branches?: Array<{ facilities?: { size?: number; ramps?: number } }> };
        } | null;
        const firstBranch = profile?.company?.branches?.[0];
        if (firstBranch?.facilities && (firstBranch.facilities.size !== undefined || firstBranch.facilities.ramps !== undefined)) {
            const size = Math.max(0, Number(firstBranch.facilities.size) || 0);
            const r = Math.max(0, Number(firstBranch.facilities.ramps) || 0);
            if (size > 0 || r > 0) {
                const doc = await Workshop.findOne({ ownerEmail: effective.ownerEmail }).sort({ createdAt: -1 });
                if (doc) {
                    doc.workshopSize = size;
                    doc.ramps = r;
                    await doc.save();
                    const refetched = await Workshop.findOne({ ownerEmail: effective.ownerEmail }).sort({ createdAt: -1 }).lean();
                    if (refetched) data = refetched;
                }
            }
        }
    }
    const payload = { ...(data as Record<string, unknown>) };
    delete (payload as Record<string, unknown>).__v;
    return NextResponse.json(payload);
}

export async function POST(req: Request) {
    const email = await getSessionEmail();
    if (!email) {
        return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
    }
    await dbConnect();
    const effective = await getEffectiveOwnerAndRole(email);
    if (!effective) {
        return NextResponse.json({ error: "Profile not found." }, { status: 404 });
    }
    if (!canWriteWorkshop(effective.role)) {
        return NextResponse.json({ error: "You do not have permission to edit workshop data." }, { status: 403 });
    }
    const raw = (await req.json()) as Record<string, unknown>;
    const body = sanitizeWorkshopBody(raw);
    const efficiency = computeEfficiencyFromBody(body);
    const existing = await Workshop.findOne({ ownerEmail: effective.ownerEmail }).sort({ createdAt: -1 });
    if (existing) {
        for (const key of Object.keys(body)) {
            (existing as Record<string, unknown>)[key] = body[key];
        }
        for (const [k, v] of Object.entries(efficiency)) {
            (existing as Record<string, unknown>)[k] = v;
        }
        await existing.save();
        const saved = await Workshop.findById(existing._id).lean();
        const out = saved ? { ...saved } : existing.toObject();
        delete (out as Record<string, unknown>).__v;
        return NextResponse.json(out);
    }
    const newDoc = await Workshop.create({ ...body, ...efficiency, ownerEmail: effective.ownerEmail });
    const out = newDoc.toObject ? newDoc.toObject() : (newDoc as unknown as Record<string, unknown>);
    delete (out as Record<string, unknown>).__v;
    return NextResponse.json(out);
}

function computeEfficiencyFromBody(body: Record<string, unknown>): Record<string, number> {
    const data = {
        fixedExpenses: Array.isArray(body.fixedExpenses) ? body.fixedExpenses as EfficiencyInput["fixedExpenses"] : [],
        marketing: Array.isArray(body.marketing) ? body.marketing as EfficiencyInput["marketing"] : [],
        loans: Array.isArray(body.loans) ? body.loans as EfficiencyInput["loans"] : [],
        staff: Array.isArray(body.staff) ? body.staff as EfficiencyInput["staff"] : [],
        technicians: Array.isArray(body.technicians) ? body.technicians as EfficiencyInput["technicians"] : [],
        monthlyWorkingDays: Array.isArray(body.monthlyWorkingDays) ? body.monthlyWorkingDays as number[] : [],
        ownerProfitGoal: Number(body.ownerProfitGoal) || 0,
        estimatedMonthlyPartsProfitEuro: Number(body.estimatedMonthlyPartsProfitEuro) || 0,
        avgLabourRate: Number(body.avgLabourRate) || 75,
    };
    const result = calculateEfficiencyServer(data);
    return {
        efficiencyRequired: result.requiredEfficiency,
        requiredEfficiency: result.requiredEfficiency,
        breakevenEfficiency: result.breakevenEfficiency,
        maxPotentialLaborRevenue: result.maxPotentialLaborRevenue,
        totalTechHours: result.totalTechHours,
        laborBurden: result.laborBurden,
        breakevenBurden: result.breakevenBurden,
    };
}


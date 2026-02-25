import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Workshop from "@/lib/models/Workshop";
import UserProfile from "@/lib/models/UserProfile";
import { getSessionEmail } from "@/lib/session";
import { getEffectiveOwnerAndRole } from "@/lib/role";
import { calculateEfficiencyServer } from "@/lib/efficiency-server";

// Helper to generate monthly data matching the frontend logic
function generateMonthlyData() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    const workingDays = [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22];

    return months.map((month, index) => ({
        month,
        workingDays: workingDays[index],
        dailyTarget: 850,
        monthlyTarget: 850 * workingDays[index],
    }));
}

export async function POST() {
    try {
        const email = await getSessionEmail();
        if (!email) {
            return NextResponse.json({ error: "Unauthorized. Please log in to seed your workshop." }, { status: 401 });
        }
        await dbConnect();
        const effective = await getEffectiveOwnerAndRole(email);
        if (!effective) {
            return NextResponse.json({ error: "Profile not found." }, { status: 404 });
        }
        if (effective.role !== "admin") {
            return NextResponse.json({ error: "Only company admins can create or reset workshop data." }, { status: 403 });
        }

        // Use branch facilities from user profile (setup wizard) only; no hardcoded fallbacks
        let workshopSize = 0;
        let ramps = 0;
        const profile = await UserProfile.findOne({ email: effective.ownerEmail }).lean() as {
            company?: { branches?: Array<{ facilities?: { size?: number; ramps?: number } }> };
        } | null;
        const firstBranch = profile?.company?.branches?.[0];
        if (firstBranch?.facilities) {
            const sizeVal = firstBranch.facilities.size;
            const rampsVal = firstBranch.facilities.ramps;
            workshopSize = Math.max(0, Number(sizeVal) || 0);
            ramps = Math.max(0, Number(rampsVal) || 0);
        }

        const seedTechnicians = [
            { id: "1", name: "Tech 1", hourlyPayRate: 22, billableHoursPerWeek: 40, targetEfficiency: 85 },
            { id: "2", name: "Tech 2", hourlyPayRate: 20, billableHoursPerWeek: 40, targetEfficiency: 80 },
        ];
        const techs = seedTechnicians.length;

        const initialData = {
            ownerEmail: effective.ownerEmail,
            avgLabourRate: 75,
            currentMonth: "January",
            workingDaysInMonth: 22,
            currentBranch: "Main Branch",
            currentScenario: "Main Scenario",

            fixedExpensesTotal: 2500,
            marketingTotal: 500,
            loansTotal: 1500,
            staffTotal: 4500,
            techniciansTotal: 8000,
            estimatedMonthlyPartsProfitEuro: 1200,
            workingDaysPerMonth: 21.1,

            monthlyWorkingDays: [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22],
            ownerProfitGoal: 2000,

            fixedExpenses: [
                { id: "1", name: "Rent", value: 2000, notes: "Monthly workshop rent" },
                { id: "2", name: "Electricity", value: 300, notes: "" },
                { id: "3", name: "Insurance", value: 200, notes: "" },
            ],
            marketing: [
                { id: "1", name: "Digital Marketing", value: 300, notes: "" },
                { id: "2", name: "Social Media", value: 200, notes: "" },
            ],
            loans: [
                { id: "1", name: "Equipment Loan", monthlyRepayment: 500 },
                { id: "2", name: "Expansion Loan", monthlyRepayment: 1000 },
            ],
            staff: [
                {
                    id: "1",
                    name: "Manager",
                    annualSalary: 30000,
                    pensionPercentage: 8,
                    employerTaxPercentage: 10,
                },
                {
                    id: "2",
                    name: "Receptionist",
                    annualSalary: 20000,
                    pensionPercentage: 8,
                    employerTaxPercentage: 10,
                },
            ],
            technicians: seedTechnicians,

            workshopSize,
            ramps,
            techs,

            monthlyData: generateMonthlyData(),

            todayActual: 0,
            dailyActualStatus: null,

            userPreferences: { currency: "EUR", darkMode: false },
            efficiencyCalendar: {
                daysInYear: 260,
                bankHolidays: 8,
                annualLeave: 20,
                sickDays: 2,
                efficiencyWorkingDays: 19.25,
            },
            isStarterTemplate: true,
        };

        const efficiency = calculateEfficiencyServer({
            fixedExpenses: initialData.fixedExpenses,
            marketing: initialData.marketing,
            loans: initialData.loans,
            staff: initialData.staff,
            technicians: initialData.technicians,
            monthlyWorkingDays: initialData.monthlyWorkingDays,
            ownerProfitGoal: initialData.ownerProfitGoal,
            estimatedMonthlyPartsProfitEuro: initialData.estimatedMonthlyPartsProfitEuro,
            avgLabourRate: initialData.avgLabourRate,
        });

        // Use computed required efficiency, not a hardcoded 60%
        const efficiencyRequired = efficiency.requiredEfficiency;

        await Workshop.deleteMany({ ownerEmail: effective.ownerEmail });
        const created = await Workshop.create({ ...initialData, efficiencyRequired, ...efficiency });

        return NextResponse.json({ success: true, message: "Database seeded successfully", data: created });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

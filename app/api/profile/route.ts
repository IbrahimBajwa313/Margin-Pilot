import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import UserProfile from "@/lib/models/UserProfile";
import { hashPassword } from "@/lib/password";
import { getSessionEmail } from "@/lib/session";
import { getEffectiveOwnerAndRole } from "@/lib/role";

export async function GET() {
    try {
        const email = await getSessionEmail();
        if (!email) {
            return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
        }
        await dbConnect();
        const profile = await UserProfile.findOne({ email });
        if (!profile) {
            return NextResponse.json({ error: "No profile found." }, { status: 404 });
        }
        const obj = profile.toObject() as Record<string, unknown>;
        delete obj.password;

        const ownerEmail = (obj.companyOwnerEmail as string) || "";
        if (ownerEmail.trim()) {
            const owner = await UserProfile.findOne({ email: ownerEmail.trim() });
            if (owner) {
                const ownerObj = owner.toObject() as Record<string, unknown>;
                const company = (ownerObj.company as { users?: { email?: string; role?: string }[] }) || {};
                const users = Array.isArray(company.users) ? company.users : [];
                const me = users.find((u: { email?: string }) => (u.email || "").trim().toLowerCase() === (email || "").trim().toLowerCase());
                obj.effectiveRole = (me?.role as string) || "staff";
                obj.effectiveCompany = ownerObj.company;
            } else {
                obj.effectiveRole = "staff";
                obj.effectiveCompany = obj.company;
            }
        } else {
            obj.effectiveRole = "admin";
            obj.effectiveCompany = obj.company;
        }

        return NextResponse.json(obj);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const email = body.email;
        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }
        const existing = await UserProfile.findOne({ email: String(email).trim() });
        if (existing) {
            const existingId = String((existing as Record<string, unknown>)._id ?? existing.id);
            const bodyId = body._id ?? body.id;
            if (bodyId !== existingId) {
                return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
            }
            const sessionEmail = await getSessionEmail();
            const effective = sessionEmail ? await getEffectiveOwnerAndRole(sessionEmail) : null;
            const canWriteCompany = effective?.role === "admin" || effective?.role === "manager";
            const { password, company, ...restUpdates } = body;
            const updates = { ...restUpdates } as Record<string, unknown>;
            if (company !== undefined && !canWriteCompany) delete updates.company;
            if (company !== undefined && canWriteCompany) {
                const companyToSave = company && typeof company === "object"
                    ? {
                        ...company,
                        branches: Array.isArray(company.branches)
                            ? company.branches.map((b: Record<string, unknown>) => {
                                if (!b.facilities || typeof b.facilities !== "object") return b;
                                const f = b.facilities as Record<string, unknown>;
                                return {
                                    ...b,
                                    facilities: {
                                        ...f,
                                        size: Math.max(0, Number(f.size) || 0),
                                        ramps: Math.max(0, Number(f.ramps) || 0),
                                        parking: Math.max(0, Number(f.parking) || 0),
                                    },
                                };
                            })
                            : company.branches,
                    }
                    : company;
                if (effective?.role === "admin") {
                    updates.company = companyToSave;
                } else if (effective?.role === "manager" && effective.ownerEmail) {
                    const ownerProfile = await UserProfile.findOne({ email: effective.ownerEmail });
                    if (ownerProfile) {
                        (ownerProfile as any).company = companyToSave;
                        await ownerProfile.save();
                    }
                    delete updates.company;
                }
            } else if (company !== undefined) {
                delete updates.company;
            }
            if (password !== undefined && String(password).length > 0) {
                (existing as Record<string, unknown>).password = await hashPassword(String(password));
            }
            Object.assign(existing, updates);
            await existing.save();
            const obj = existing.toObject();
            delete (obj as Record<string, unknown>).password;
            return NextResponse.json(obj);
        }
        const bodyWithHash = { ...body };
        if (bodyWithHash.password) {
            bodyWithHash.password = await hashPassword(String(bodyWithHash.password));
        }
        const created = await UserProfile.create(bodyWithHash);
        const obj = created.toObject();
        delete (obj as Record<string, unknown>).password;
        return NextResponse.json(obj);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

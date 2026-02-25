import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import UserProfile from "@/lib/models/UserProfile";
import { hashPassword } from "@/lib/password";

const DEMO_PASSWORD_PLAIN = "demo1234";

export async function POST() {
    try {
        await dbConnect();
        const existing = await UserProfile.findOne();
        if (existing) {
            return NextResponse.json({
                success: true,
                message: "Profile already exists. Skipped seed.",
                data: existing,
            });
        }
        const hashedPassword = await hashPassword(DEMO_PASSWORD_PLAIN);
        const seedProfile = {
            id: `user_${Date.now()}_seed`,
            firstName: "Demo",
            lastName: "User",
            email: "demo@marginpilot.com",
            password: hashedPassword,
            company: {
                id: "company_seed",
                name: "Demo Workshop",
                ownerName: "Demo User",
                email: "demo@marginpilot.com",
                multiLocation: false,
                branches: [
                    {
                        id: "branch_seed",
                        name: "Main Branch",
                        code: "MAIN",
                        currency: "EUR",
                        facilities: { size: 5000, parking: 10, ramps: 4 },
                        calculations: [
                            {
                                id: "calc_seed",
                                name: "Main",
                                dateCreated: new Date().toISOString(),
                                staffCount: 0,
                                gpTarget: 0,
                                isActive: true,
                            },
                        ],
                    },
                ],
                users: [],
            },
            preferences: { darkMode: false, beginnerMode: true },
            hasCompletedSetup: false,
            createdAt: new Date().toISOString(),
        };
        const created = await UserProfile.create(seedProfile);
        const obj = created.toObject();
        delete (obj as Record<string, unknown>).password;
        return NextResponse.json({ success: true, message: "Profile seeded.", data: obj });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}

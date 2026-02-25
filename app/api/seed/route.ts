import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import UserProfile from "@/lib/models/UserProfile";
import { hashPassword } from "@/lib/password";

/**
 * Seed demo profile only. Workshops are per-user and created when a user first loads the dashboard (POST /api/workshop/seed with session).
 * POST /api/seed
 */
export async function POST() {
    try {
        await dbConnect();
        const existing = await UserProfile.findOne();
        if (!existing) {
            const hashed = await hashPassword("demo1234");
            await UserProfile.create({
                id: `user_${Date.now()}_seed`,
                firstName: "Demo",
                lastName: "User",
                email: "demo@marginpilot.com",
                password: hashed,
                company: { id: "company_seed", name: "Demo Workshop", ownerName: "Demo User", email: "demo@marginpilot.com", multiLocation: false, branches: [{ id: "branch_seed", name: "Main Branch", code: "MAIN", currency: "EUR", facilities: { size: 5000, parking: 10, ramps: 4 }, calculations: [{ id: "calc_seed", name: "Main", dateCreated: new Date().toISOString(), staffCount: 0, gpTarget: 0, isActive: true }] }], users: [] },
                preferences: { darkMode: false, beginnerMode: true },
                hasCompletedSetup: false,
                createdAt: new Date().toISOString(),
            });
        }
        return NextResponse.json({ success: true, message: "Profile seed done. Workshop is created per user on first dashboard load." });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}

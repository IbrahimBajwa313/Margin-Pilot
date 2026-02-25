import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import UserProfile from "@/lib/models/UserProfile";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const { email, password } = body;
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password required" }, { status: 400 });
        }
        const profile = await UserProfile.findOne({ email: String(email).trim() });
        if (!profile) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }
        const doc = profile.toObject() as Record<string, unknown>;
        const storedPassword = doc.password;
        if (storedPassword !== password) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }
        delete doc.password;
        return NextResponse.json(doc);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

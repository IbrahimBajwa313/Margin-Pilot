import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import UserProfile from "@/lib/models/UserProfile";

export async function GET(req: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");
        const query = email ? { email } : {};
        const profile = await UserProfile.findOne(query).sort({ createdAt: -1 });
        if (!profile) {
            return NextResponse.json({ error: "No profile found. Run seed or sign up." }, { status: 404 });
        }
        const obj = profile.toObject();
        delete (obj as Record<string, unknown>).password;
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
            const { password, ...updates } = body;
            if (password !== undefined) (existing as Record<string, unknown>).password = password;
            Object.assign(existing, updates);
            await existing.save();
            const obj = existing.toObject();
            delete (obj as Record<string, unknown>).password;
            return NextResponse.json(obj);
        }
        const created = await UserProfile.create(body);
        const obj = created.toObject();
        delete (obj as Record<string, unknown>).password;
        return NextResponse.json(obj);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

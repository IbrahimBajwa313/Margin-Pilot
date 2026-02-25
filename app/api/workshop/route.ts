import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Workshop from "@/lib/models/Workshop";
import { getSessionEmail } from "@/lib/session";
import { getEffectiveOwnerAndRole, canWriteWorkshop } from "@/lib/role";

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
    const data = await Workshop.findOne({ ownerEmail: effective.ownerEmail }).sort({ createdAt: -1 });
    if (!data) {
        return NextResponse.json({ error: "No workshop data found. Please run seed." }, { status: 404 });
    }
    return NextResponse.json(data);
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
    const body = await req.json();
    delete (body as Record<string, unknown>).ownerEmail;
    const existing = await Workshop.findOne({ ownerEmail: effective.ownerEmail }).sort({ createdAt: -1 });
    if (existing) {
        Object.assign(existing, body);
        await existing.save();
        return NextResponse.json(existing);
    }
    const newDoc = await Workshop.create({ ...body, ownerEmail: effective.ownerEmail });
    return NextResponse.json(newDoc);
}

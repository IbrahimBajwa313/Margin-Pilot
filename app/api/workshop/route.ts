
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Workshop from "@/lib/models/Workshop";

export async function GET() {
    await dbConnect();
    // Fetch the most recent workshop data
    const data = await Workshop.findOne().sort({ createdAt: -1 });

    if (!data) {
        return NextResponse.json({ error: "No workshop data found. Please run seed." }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function POST(req: Request) {
    await dbConnect();
    const body = await req.json();

    // Find the existing document to update
    const existing = await Workshop.findOne().sort({ createdAt: -1 });

    if (existing) {
        Object.assign(existing, body);
        await existing.save();
        return NextResponse.json(existing);
    } else {
        // Should not normally happen if seeded, but fallback to create
        const newDoc = await Workshop.create(body);
        return NextResponse.json(newDoc);
    }
}

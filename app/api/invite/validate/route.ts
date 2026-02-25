import { NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Invite from "@/lib/models/Invite"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")?.trim()
    if (!token) {
      return NextResponse.json({ error: "Token required" }, { status: 400 })
    }

    await dbConnect()
    const invite = await Invite.findOne({ token })
    if (!invite) {
      return NextResponse.json({ error: "Invalid or expired invite" }, { status: 404 })
    }

    const inv = invite as any
    if (inv.usedAt) {
      return NextResponse.json({ error: "This invite has already been used" }, { status: 400 })
    }
    if (new Date() > new Date(inv.expiresAt)) {
      return NextResponse.json({ error: "This invite has expired" }, { status: 400 })
    }

    return NextResponse.json({
      companyName: inv.companyName,
      email: inv.email,
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : "Validation failed"
    const isConnectionError = /ETIMEDOUT|ECONNREFUSED|ENOTFOUND|MongoNetworkError|MongoServerSelectionError/i.test(message)
    const userMessage = isConnectionError
      ? "Service temporarily unavailable. Please check your connection and try again."
      : message
    return NextResponse.json(
      { error: userMessage },
      { status: isConnectionError ? 503 : 500 }
    )
  }
}

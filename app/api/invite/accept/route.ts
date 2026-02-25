import { NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import UserProfile from "@/lib/models/UserProfile"
import Invite from "@/lib/models/Invite"
import { getSessionEmail } from "@/lib/session"

export async function POST(req: Request) {
  try {
    const sessionEmail = await getSessionEmail()
    if (!sessionEmail) {
      return NextResponse.json({ error: "Sign in to accept this invitation" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const token = (body.token as string)?.trim()
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

    const inviteEmail = (inv.email || "").trim().toLowerCase()
    if (sessionEmail.trim().toLowerCase() !== inviteEmail) {
      return NextResponse.json(
        { error: "This invitation was sent to a different email. Sign in with that email to accept." },
        { status: 403 }
      )
    }

    const ownerProfile = await UserProfile.findOne({ email: inv.companyOwnerEmail })
    if (!ownerProfile) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 })
    }

    const accepterProfile = await UserProfile.findOne({ email: sessionEmail })
    const firstName = accepterProfile?.firstName ?? "Invited"
    const lastName = accepterProfile?.lastName ?? "User"

    const company = (ownerProfile as any).company || {}
    const users = Array.isArray(company.users) ? [...company.users] : []
    const idx = users.findIndex((u: { email?: string }) => (u.email || "").trim().toLowerCase() === inviteEmail)
    const member = {
      id: idx >= 0 ? users[idx].id : `user_${Date.now()}`,
      firstName,
      lastName,
      email: inviteEmail,
      role: inv.role,
      status: "active",
      lastActive: new Date().toISOString(),
      createdAt: idx >= 0 ? users[idx].createdAt : new Date().toISOString(),
    }
    if (idx >= 0) {
      users[idx] = member
    } else {
      users.push(member)
    }

    ;(ownerProfile as any).company = { ...company, users }
    await ownerProfile.save()

    inv.usedAt = new Date()
    await invite.save()

    if (accepterProfile) {
      (accepterProfile as any).companyOwnerEmail = inv.companyOwnerEmail
      await accepterProfile.save()
    }

    return NextResponse.json({
      success: true,
      companyName: inv.companyName,
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to accept invite"
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

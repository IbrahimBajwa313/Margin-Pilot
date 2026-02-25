import { NextResponse } from "next/server"
import { randomBytes } from "crypto"
import dbConnect from "@/lib/db"
import UserProfile from "@/lib/models/UserProfile"
import Invite from "@/lib/models/Invite"
import { getSessionEmail } from "@/lib/session"
import { getEffectiveOwnerAndRole } from "@/lib/role"
import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY
// Use a verified domain (e.g. invites@yourdomain.com) to send to any recipient.
// With onboarding@resend.dev, Resend only allows sending to your own email.
const INVITE_FROM = process.env.RESEND_INVITE_FROM || "MarginPilot <onboarding@resend.dev>"
const INVITE_EXPIRY_DAYS = 7
const RESEND_DOMAINS_URL = "https://resend.com/domains"

function generateToken(): string {
  return randomBytes(32).toString("base64url")
}

export async function POST(req: Request) {
  try {
    const email = await getSessionEmail()
    if (!email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const inviteEmail = (body.email as string)?.trim()?.toLowerCase()
    const role = (body.role as string) || "staff"
    if (!inviteEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }
    if (!["admin", "manager", "staff"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 })
    }

    await dbConnect()
    const effective = await getEffectiveOwnerAndRole(email)
    if (!effective || effective.role !== "admin") {
      return NextResponse.json({ error: "Only admins can invite users." }, { status: 403 })
    }
    const profile = await UserProfile.findOne({ email: effective.ownerEmail })
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    const ownerEmail = (profile as any).email
    if (inviteEmail === ownerEmail) {
      return NextResponse.json({ error: "You cannot invite yourself" }, { status: 400 })
    }

    const company = (profile as any).company || {}
    const users = Array.isArray(company.users) ? company.users : []
    const alreadyInCompany = users.some(
      (u: { email?: string }) => (u.email || "").trim().toLowerCase() === inviteEmail
    )
    if (alreadyInCompany) {
      return NextResponse.json({ error: "This email is already in your company" }, { status: 400 })
    }

    const companyName = company.name || "Your company"
    const token = generateToken()
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + INVITE_EXPIRY_DAYS)

    await Invite.create({
      token,
      email: inviteEmail,
      role,
      companyOwnerEmail: ownerEmail,
      companyName,
      expiresAt,
    })

    const newUser = {
      id: `user_${Date.now()}_${randomBytes(4).toString("hex")}`,
      firstName: "Invited",
      lastName: "User",
      email: inviteEmail,
      role,
      status: "invited",
      lastActive: "",
      createdAt: new Date().toISOString(),
    }
    const updatedUsers = [...users, newUser]
    ;(profile as any).company = { ...company, users: updatedUsers }
    await profile.save()

    const origin = req.headers.get("origin") || req.headers.get("x-url") || "http://localhost:3000"
    const acceptUrl = `${origin}/invite/accept?token=${encodeURIComponent(token)}`

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY)
      const { error } = await resend.emails.send({
        from: INVITE_FROM,
        to: inviteEmail,
        subject: `You're invited to join ${companyName} on MarginPilot`,
        html: `
          <p>You've been invited to join <strong>${companyName}</strong> on MarginPilot.</p>
          <p>Click the link below to accept the invitation and join the team:</p>
          <p><a href="${acceptUrl}" style="display:inline-block; background:#000; color:#fff; padding:12px 24px; text-decoration:none; border-radius:6px;">Accept invitation</a></p>
          <p>Or copy this link: ${acceptUrl}</p>
          <p>This link expires in ${INVITE_EXPIRY_DAYS} days.</p>
          <p>If you didn't expect this email, you can ignore it.</p>
        `,
      })
      if (error) {
        console.error("Resend invite email error:", error)
        const msg = typeof error === "object" && error !== null && "message" in error
          ? String((error as { message?: unknown }).message)
          : String(error)
        const onlyOwnEmail =
          /only send.*your own email|verify a domain|verify your domain/i.test(msg)
        if (onlyOwnEmail) {
          return NextResponse.json(
            {
              error:
                "Resend only allows sending to your own email until you verify a domain. " +
                "Add and verify your domain at resend.com/domains, then set RESEND_INVITE_FROM to an address on that domain (e.g. MarginPilot <invites@yourdomain.com>).",
              resendDomainsUrl: RESEND_DOMAINS_URL,
            },
            { status: 403 }
          )
        }
        return NextResponse.json(
          { error: "Invite created but email failed to send. You can still share the accept link." },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({
      success: true,
      message: RESEND_API_KEY
        ? "Invitation sent by email."
        : "Invite created. Add RESEND_API_KEY to send emails. Share the accept link manually.",
      acceptUrl,
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to create invite"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

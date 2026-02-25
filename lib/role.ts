import UserProfile from "@/lib/models/UserProfile"

export type Role = "admin" | "manager" | "staff"

export interface EffectiveOwnerAndRole {
  ownerEmail: string
  role: Role
}

/**
 * Resolve the effective company owner email and the current user's role.
 * - If the user has companyOwnerEmail set (they accepted an invite), they're a member: owner = companyOwnerEmail, role from owner's company.users.
 * - Otherwise they're the owner: owner = their email, role = admin.
 */
export async function getEffectiveOwnerAndRole(sessionEmail: string): Promise<EffectiveOwnerAndRole | null> {
  const profile = await UserProfile.findOne({ email: sessionEmail })
  if (!profile) return null
  const p = profile as any
  const ownerEmail = (p.companyOwnerEmail || "").trim()
  if (ownerEmail) {
    const owner = await UserProfile.findOne({ email: ownerEmail })
    if (!owner) return { ownerEmail: sessionEmail, role: "admin" }
    const company = (owner as any).company || {}
    const users = Array.isArray(company.users) ? company.users : []
    const me = users.find((u: { email?: string }) => (u.email || "").trim().toLowerCase() === sessionEmail.trim().toLowerCase())
    return { ownerEmail, role: (me?.role as Role) || "staff" }
  }
  return { ownerEmail: sessionEmail, role: "admin" }
}

export function canAccessBranchSettings(role: Role): boolean {
  return role === "admin" || role === "manager"
}

export function canAccessCompanySettings(role: Role): boolean {
  return role === "admin" || role === "manager"
}

export function canAccessCompanyUsers(role: Role): boolean {
  return role === "admin"
}

export function canWriteWorkshop(role: Role): boolean {
  return role === "admin" || role === "manager"
}

export function canWriteCompanyProfile(role: Role): boolean {
  return role === "admin"
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Users, 
  Plus, 
  Mail, 
  Edit,
  Trash2,
  Crown,
  Shield,
  User as UserIcon,
  Clock,
  AlertCircle,
  UserCheck,
  Loader2
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { AccessDenied } from "@/components/access-denied"
import { toast } from "sonner"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidEmail(email: string) {
  return EMAIL_REGEX.test((email || "").trim())
}

const ROLES = [
  { value: "admin", label: "Admin", icon: Crown, description: "Full access to all settings" },
  { value: "manager", label: "Manager", icon: Shield, description: "Manage branch operations" },
  { value: "staff", label: "Staff", icon: UserIcon, description: "View and update daily data" }
]

export default function CompanyUsers() {
  const { userProfile, updateProfile, refreshProfile } = useAuth()
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteError, setInviteError] = useState("")
  const [selectedRole, setSelectedRole] = useState<"admin" | "manager" | "staff">("staff")
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false)
  const [isInviting, setIsInviting] = useState(false)
  const [editingUser, setEditingUser] = useState<string | null>(null)
  const [editingRole, setEditingRole] = useState<"admin" | "manager" | "staff">("staff")
  const [savingUserId, setSavingUserId] = useState<string | null>(null)
  const [removingUserId, setRemovingUserId] = useState<string | null>(null)

  const role = userProfile?.effectiveRole || "admin"
  const canAccessCompanyUsers = role === "admin"
  const company = userProfile?.effectiveCompany ?? userProfile?.company
  const companyUsers = company?.users || []

  if (userProfile && !canAccessCompanyUsers) {
    return <AccessDenied message="Only admins can access Company Users." />
  }

  if (!userProfile) {
    return (
      <div className="container mx-auto py-6 px-4 md:py-8 md:px-6 min-w-0">
        <div className="text-center">
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">No Company Found</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            You need to complete the setup wizard first.
          </p>
        </div>
      </div>
    )
  }

  const currentUserIsAdmin = canAccessCompanyUsers

  const handleInviteUser = async () => {
    setInviteError("")
    const email = inviteEmail.trim().toLowerCase()
    if (!email || !userProfile) return

    if (!isValidEmail(email)) {
      setInviteError("Please enter a valid email address.")
      return
    }
    if (email === userProfile.email.trim().toLowerCase()) {
      setInviteError("You cannot invite yourself.")
      return
    }
    const alreadyInCompany = companyUsers.some(
      (u) => (u.email || "").trim().toLowerCase() === email
    )
    if (alreadyInCompany) {
      setInviteError("This email is already in your company.")
      return
    }

    setIsInviting(true)
    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: selectedRole }),
        credentials: "include",
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const errMsg = (data as { error?: string }).error || "Failed to send invitation"
        const domainsUrl = (data as { resendDomainsUrl?: string }).resendDomainsUrl
        setInviteError(errMsg)
        toast.error(errMsg, domainsUrl ? { action: { label: "Open Resend Domains", onClick: () => window.open(domainsUrl, "_blank") } } : undefined)
        return
      }
      setInviteEmail("")
      setSelectedRole("staff")
      setIsInviteDialogOpen(false)
      toast.success(
        (data as { message?: string }).message ||
          "Invitation sent by email. They can accept the link to join your company."
      )
      await refreshProfile()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to send invitation")
    } finally {
      setIsInviting(false)
    }
  }

  const handleUpdateRole = async (userId: string) => {
    if (!userProfile) return

    const updatedUsers = (company?.users || []).map((user) =>
      user.id === userId ? { ...user, role: editingRole } : user
    )

    setSavingUserId(userId)
    try {
      await updateProfile({
        company: {
          ...company,
          users: updatedUsers
        }
      })
      setEditingUser(null)
      toast.success("Role updated successfully")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to update role")
    } finally {
      setSavingUserId(null)
    }
  }

  const handleRemoveUser = async (userId: string) => {
    if (!userProfile) return

    const user = (company?.users || []).find((u) => u.id === userId)
    if (!user) return
    if (!confirm(`Remove ${user.firstName} ${user.lastName} (${user.email}) from the company?`)) return

    setRemovingUserId(userId)
    try {
      const updatedUsers = (company?.users || []).filter((u) => u.id !== userId)
      await updateProfile({
        company: {
          ...company,
          users: updatedUsers
        }
      })
      toast.success(`${user.firstName} ${user.lastName} removed from company`)
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to remove user")
    } finally {
      setRemovingUserId(null)
    }
  }

  const getRoleBadge = (role: "admin" | "manager" | "staff") => {
    const roleConfig = ROLES.find(r => r.value === role)
    const Icon = roleConfig?.icon || UserIcon
    
    return (
      <Badge variant={role === "admin" ? "default" : role === "manager" ? "secondary" : "outline"} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {roleConfig?.label}
      </Badge>
    )
  }

  const getStatusBadge = (status: "active" | "invited" | "inactive") => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "invited":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const formatLastActive = (dateString?: string) => {
    if (!dateString) return "Never"
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return formatDate(dateString)
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const allUsers = [
    {
      id: userProfile.id,
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      email: userProfile.email,
      role: "admin" as const,
      status: "active" as const,
      lastActive: new Date().toISOString(),
      createdAt: userProfile.createdAt,
      isCurrentUser: true
    },
    ...companyUsers.map((user) => ({ ...user, isCurrentUser: false }))
  ]

  if (!currentUserIsAdmin) {
    return (
      <div className="container mx-auto py-6 px-4 md:py-8 md:px-6 min-w-0">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Only admins can view and manage company users.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 md:space-y-6 p-4 md:p-6 lg:p-8 pt-4 md:pt-6 min-h-screen pb-20 min-w-0">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white min-w-0">
          Company Users
        </h2>
        <Dialog
          open={isInviteDialogOpen}
          onOpenChange={(open) => {
            setIsInviteDialogOpen(open)
            if (!open) setInviteError("")
          }}
        >
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto shrink-0">
              <Plus className="h-4 w-4 mr-2" />
              Invite User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite New User</DialogTitle>
              <DialogDescription>
                Add a team member by email and role. They can sign up with this email to join your company.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {inviteError && (
                <Alert variant="destructive">
                  <AlertDescription>{inviteError}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="invite-email">Email Address</Label>
                <Input
                  id="invite-email"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => {
                    setInviteEmail(e.target.value)
                    setInviteError("")
                  }}
                  placeholder="colleague@example.com"
                  disabled={isInviting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={selectedRole}
                  onValueChange={(value: "admin" | "manager" | "staff") => setSelectedRole(value)}
                  disabled={isInviting}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((role) => {
                      const Icon = role.icon
                      return (
                        <SelectItem key={role.value} value={role.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            <div>
                              <div className="font-medium">{role.label}</div>
                              <div className="text-sm text-muted-foreground">{role.description}</div>
                            </div>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 pt-4">
                <Button
                  onClick={handleInviteUser}
                  disabled={!inviteEmail.trim() || isInviting}
                  className="w-full sm:w-auto"
                >
                  {isInviting ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Mail className="h-4 w-4 mr-2" />
                  )}
                  {isInviting ? "Sending…" : "Send invitation"}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setIsInviteDialogOpen(false)}
                  className="w-full sm:w-auto"
                  disabled={isInviting}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12 lg:grid-cols-12 min-w-0">
        <div className="lg:col-span-12 space-y-4 md:space-y-6 min-w-0">
          {/* Privacy Notice */}
          <Alert className="min-w-0">
        <AlertCircle className="h-4 w-4 shrink-0" />
        <AlertDescription className="text-sm md:text-base">
          <strong>Privacy Notice:</strong> Only admins can see this user management list. User management and permissions are controlled here. All user data is stored securely and only accessible to authorized administrators.
        </AlertDescription>
      </Alert>

      {/* Users Table */}
      <Card className="min-w-0 overflow-hidden">
        <CardHeader className="px-4 md:px-6">
          <CardTitle className="text-base md:text-lg">Team Members</CardTitle>
          <CardDescription className="text-sm">
            {allUsers.length} users in your company
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6 overflow-x-hidden">
          {allUsers.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Team Members Yet</h3>
              <p className="text-muted-foreground mb-4">
                Invite your first team member to get started.
              </p>
              <Button onClick={() => setIsInviteDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Invite User
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto w-full -mx-1 px-1">
              <Table className="min-w-[640px]">
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allUsers?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.isCurrentUser && userProfile.photo ? userProfile.photo : undefined} />
                          <AvatarFallback>
                            {getInitials(user.firstName, user.lastName)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {user.firstName} {user.lastName}
                            {user.isCurrentUser && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                <UserCheck className="h-3 w-3 mr-1" />
                                You
                              </Badge>
                            )}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {user.isCurrentUser ? "Company Admin" : "Team Member"}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatLastActive(user.lastActive)}
                    </TableCell>
                    <TableCell>
                      {editingUser === user.id ? (
                        <Select value={editingRole} onValueChange={(value: "admin" | "manager" | "staff") => setEditingRole(value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {ROLES?.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        getRoleBadge(user.role)
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {editingUser === user.id ? (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleUpdateRole(user.id)}
                              disabled={savingUserId === user.id}
                            >
                              {savingUserId === user.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                "Save"
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingUser(null)}
                              disabled={savingUserId === user.id}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setEditingUser(user.id)
                                setEditingRole(user.role)
                              }}
                              disabled={user.isCurrentUser || removingUserId === user.id}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveUser(user.id)}
                              disabled={user.isCurrentUser || removingUserId === user.id}
                            >
                              {removingUserId === user.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          )}
        </CardContent>
      </Card>
        </div>
      </div>
    </div>
  )
}

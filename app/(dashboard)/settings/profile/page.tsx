"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  User, 
  Camera, 
  Mail, 
  Lock, 
  Building2, 
  Settings, 
  AlertTriangle, 
  UserX, 
  Star,
  LifeBuoy
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { uploadFile } from "@/lib/upload"
import { toast } from "sonner"

export default function MySettings() {
  const { userProfile, updateProfile, isLoading } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [newEmail, setNewEmail] = useState("")
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Loading guard - prevent runtime errors
  if (isLoading || !userProfile) {
    return (
      <div className="flex-1 space-y-6 p-4 md:p-6 lg:p-8 pt-4 md:pt-6 min-h-screen pb-20 min-w-0">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading settings...</p>
          </div>
        </div>
      </div>
    )
  }

  const [formData, setFormData] = useState({
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    jobTitle: userProfile.jobTitle || "",
    linkedinUrl: userProfile.linkedinUrl || "",
    darkMode: userProfile?.preferences?.darkMode ?? false,
    beginnerMode: userProfile?.preferences?.beginnerMode ?? true,
  })

  const companyAssociations = [
    {
      id: userProfile.company.id,
      name: userProfile.company.name,
      role: "Admin",
      joinedDate: userProfile.createdAt,
      isDefault: true,
      logo: userProfile.company.logo
    }
  ]

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setIsUploadingPhoto(true)
    try {
      const url = await uploadFile(file, "profile")
      setPhotoPreview(url)
      toast.success("Photo uploaded. Click Save to update your profile.")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed")
    } finally {
      setIsUploadingPhoto(false)
      event.target.value = ""
    }
  }

  const handleSave = () => {
    updateProfile({
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle || undefined,
      linkedinUrl: formData.linkedinUrl || undefined,
      photo: photoPreview || undefined,
      preferences: {
        darkMode: formData.darkMode,
        beginnerMode: formData.beginnerMode
      }
    })
    setIsEditing(false)
    toast.success("Profile updated successfully!")
  }

  const handleCancel = () => {
    setFormData({
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      jobTitle: userProfile.jobTitle || "",
      linkedinUrl: userProfile.linkedinUrl || "",
      darkMode: userProfile?.preferences?.darkMode ?? false,
      beginnerMode: userProfile?.preferences?.beginnerMode ?? true,
    })
    setPhotoPreview(userProfile.photo || null)
    setIsEditing(false)
  }

  const handleChangePassword = async () => {
    setPasswordError("")
    if (!currentPassword.trim()) {
      setPasswordError("Enter your current password.")
      return
    }
    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.")
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation do not match.")
      return
    }
    setIsChangingPassword(true)
    try {
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userProfile.email, password: currentPassword }),
        credentials: "include",
      })
      if (!loginRes.ok) {
        setPasswordError("Current password is incorrect.")
        return
      }
      await updateProfile({ ...userProfile, password: newPassword })
      toast.success("Password changed successfully. Use your new password next time you sign in.")
      setIsPasswordDialogOpen(false)
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch {
      setPasswordError("Something went wrong. Please try again.")
      toast.error("Failed to change password.")
    } finally {
      setIsChangingPassword(false)
    }
  }

  const handleChangeEmail = () => {
    // In a real app, this would call an API
    toast.success("Email updated successfully!")
    setIsEmailDialogOpen(false)
    setNewEmail("")
  }

  const handleLeaveCompany = () => {
    if (confirm("Are you sure you want to leave this company?")) {
      toast.success("You have left the company.")
      // In a real app, this would redirect or update user state
    }
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast.success("Account deleted successfully.")
      // In a real app, this would delete the account and redirect
    }
  }

  const handleSetDefaultCompany = (companyId: string) => {
    toast.success("Default company updated!")
    // In a real app, this would update the user's default company
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="flex-1 space-y-4 md:space-y-6 p-4 md:p-6 lg:p-8 pt-4 md:pt-6 min-h-screen pb-20 min-w-0">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white min-w-0">
          My Settings
        </h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="w-full sm:w-auto shrink-0">
            Edit Profile
          </Button>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12 lg:grid-cols-12 min-w-0">
        <div className="lg:col-span-12 space-y-4 md:space-y-6 min-w-0">
          {/* Profile Section */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-base md:text-lg">Profile</CardTitle>
              <CardDescription className="text-sm">
                {isEditing ? "Edit your personal information" : "View your personal information"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-4 md:px-6 overflow-x-hidden">
              {/* Photo Upload */}
              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-medium flex items-center gap-2">
                  <Camera className="h-5 w-5 shrink-0" />
                  Profile Photo
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {photoPreview || userProfile.photo ? (
                    <div className="relative">
                      <img 
                        src={photoPreview || userProfile.photo} 
                        alt="Profile Photo" 
                        className="h-20 w-20 object-cover rounded-full border"
                      />
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setPhotoPreview(null)}
                          className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          ×
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                  {isEditing && (
                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <Button
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploadingPhoto}
                      >
                        {isUploadingPhoto ? "Uploading…" : "Upload Photo"}
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Your role at the company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                  <Input
                    id="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 pt-4">
                  <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-500 dark:active:bg-teal-400 w-full sm:w-auto">
                    Save Profile
                  </Button>
                  <Button variant="outline" onClick={handleCancel} className="w-full sm:w-auto">
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preferences Section */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-base md:text-lg">Preferences</CardTitle>
              <CardDescription className="text-sm">
                Customize your application experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-4 md:px-6 overflow-x-hidden">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <Label htmlFor="darkMode" className="text-base flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Dark Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark theme
                  </p>
                </div>
                <Switch
                  id="darkMode"
                  checked={formData.darkMode}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, darkMode: checked }))}
                  disabled={!isEditing}
                />
              </div>

              <Separator />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1 min-w-0">
                  <Label htmlFor="beginnerMode" className="text-base flex items-center gap-2">
                    <LifeBuoy className="h-4 w-4" />
                    Beginner Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Show helpful tooltips and guidance throughout the app
                  </p>
                </div>
                <Switch
                  id="beginnerMode"
                  checked={formData.beginnerMode}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, beginnerMode: checked }))}
                  disabled={!isEditing}
                />
              </div>

              {isEditing && (
                <div className="flex gap-4 pt-4">
                  <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-500 dark:active:bg-teal-400">
                    Save Preferences
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Lock className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Password</DialogTitle>
                      <DialogDescription>
                        Enter your current password, then your new password twice.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      {passwordError && (
                        <Alert variant="destructive">
                          <AlertDescription>{passwordError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={currentPassword}
                          onChange={(e) => { setCurrentPassword(e.target.value); setPasswordError("") }}
                          placeholder="Enter current password"
                          autoComplete="current-password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={newPassword}
                          onChange={(e) => { setNewPassword(e.target.value); setPasswordError("") }}
                          placeholder="At least 8 characters"
                          autoComplete="new-password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => { setConfirmPassword(e.target.value); setPasswordError("") }}
                          placeholder="Confirm new password"
                          autoComplete="new-password"
                        />
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button
                          onClick={handleChangePassword}
                          disabled={!currentPassword || !newPassword || !confirmPassword || isChangingPassword}
                        >
                          {isChangingPassword ? "Updating…" : "Change Password"}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsPasswordDialogOpen(false)
                            setCurrentPassword("")
                            setNewPassword("")
                            setConfirmPassword("")
                            setPasswordError("")
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Change Email
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Email</DialogTitle>
                      <DialogDescription>
                        Update your email address for account access.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="newEmail">New Email Address</Label>
                        <Input
                          id="newEmail"
                          type="email"
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          placeholder="Enter new email"
                        />
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button onClick={handleChangeEmail} disabled={!newEmail}>
                          Update Email
                        </Button>
                        <Button variant="outline" onClick={() => {
                          setIsEmailDialogOpen(false)
                          setNewEmail("")
                        }}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Company Associations Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Associations
              </CardTitle>
              <CardDescription>
                Manage your company memberships and default settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              {companyAssociations.length === 0 ? (
                <div className="text-center py-8">
                  <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Company Associations</h3>
                  <p className="text-muted-foreground">
                    You are not currently associated with any companies.
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {companyAssociations.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {company.logo ? (
                              <img 
                                src={company.logo} 
                                alt={company.name} 
                                className="h-8 w-8 object-cover rounded"
                              />
                            ) : (
                              <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium">{company.name}</div>
                              {company.isDefault && (
                                <Badge variant="outline" className="text-xs mt-1">
                                  <Star className="h-3 w-3 mr-1" />
                                  Default
                                </Badge>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{company.role}</Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(company.joinedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {!company.isDefault && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleSetDefaultCompany(company.id)}
                              >
                                Set Default
                              </Button>
                            )}
                            {companyAssociations.length > 1 && (
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => handleLeaveCompany()}
                              >
                                Leave
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible actions that affect your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Leave Company</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Remove yourself from this company. You will lose access to all company data.
                  </p>
                  <Button variant="outline" onClick={handleLeaveCompany}>
                    Leave Company
                  </Button>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    <UserX className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  These actions cannot be undone. Please be certain before proceeding.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
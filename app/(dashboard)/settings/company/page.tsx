"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Building2, 
  Upload, 
  Trash2, 
  AlertTriangle,
  Globe,
  Phone,
  Mail,
  User,
  MapPin,
  Image,
  Palette
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { uploadFile } from "@/lib/upload"
import { AccessDenied } from "@/components/access-denied"
import { toast } from "sonner"

export default function CompanySettings() {
  const { userProfile, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const company = userProfile?.effectiveCompany ?? userProfile?.company
  const [logoPreview, setLogoPreview] = useState<string | null>(company?.logo || null)
  const [isUploadingLogo, setIsUploadingLogo] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const role = userProfile?.effectiveRole || "admin"
  const canAccess = role === "admin" || role === "manager"

  if (userProfile && !canAccess) {
    return <AccessDenied message="Only admins and managers can access Company Settings." />
  }

  if (!userProfile) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Company Found</h2>
          <p className="text-muted-foreground">
            You need to complete the setup wizard first.
          </p>
        </div>
      </div>
    )
  }

  const [formData, setFormData] = useState({
    name: company?.name ?? "",
    ownerName: company?.ownerName ?? "",
    address: company?.address || "",
    postcode: company?.address ? "" : "",
    email: company?.email ?? "",
    phone: company?.phone || "",
    website: company?.website || "",
    multiLocation: company?.multiLocation ?? false
  })

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setIsUploadingLogo(true)
    try {
      const url = await uploadFile(file, "company")
      setLogoPreview(url)
      toast.success("Logo uploaded. Click Save to update company settings.")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed")
    } finally {
      setIsUploadingLogo(false)
      event.target.value = ""
    }
  }

  const handleSave = () => {
    updateProfile({
      company: {
        ...company,
        name: formData.name,
        ownerName: formData.ownerName,
        address: formData.address || undefined,
        email: formData.email,
        phone: formData.phone || undefined,
        website: formData.website || undefined,
        multiLocation: formData.multiLocation,
        logo: logoPreview || undefined
      }
    })
    setIsEditing(false)
    toast.success("Company settings saved successfully!")
  }

  const handleCancel = () => {
    setFormData({
      name: company?.name ?? "",
      ownerName: company?.ownerName ?? "",
      address: company?.address || "",
      postcode: company?.address ? "" : "",
      email: company?.email ?? "",
      phone: company?.phone || "",
      website: company?.website || "",
      multiLocation: company?.multiLocation ?? false
    })
    setLogoPreview(company?.logo || null)
    setIsEditing(false)
  }

  const handleDeleteCompany = () => {
    if (confirm("Are you sure you want to delete your company? This action cannot be undone and will delete all associated data.")) {
      // In a real app, this would call an API
      toast.error("Company deletion would be handled by an API call")
    }
  }

  const handleDeleteBranch = (branchId: string) => {
    const branch = company?.branches?.find(b => b.id === branchId)
    if (branch && confirm(`Are you sure you want to delete "${branch.name}"? This will also delete all associated calculations.`)) {
      const updatedBranches = (company?.branches ?? []).filter(b => b.id !== branchId)
      updateProfile({
        company: {
          ...company,
          branches: updatedBranches
        }
      })
      toast.success(`Branch "${branch.name}" deleted successfully`)
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 min-h-screen pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Company Settings
        </h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            Edit Company
          </Button>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-12 lg:grid-cols-12">
        <div className="lg:col-span-12 space-y-6">
          {/* Section 1: Branding */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Branding
              </CardTitle>
              <CardDescription>
                Your company's visual identity
              </CardDescription>
            </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company Logo</h3>
            <div className="flex items-center gap-6">
              {logoPreview ? (
                <div className="relative">
                  <img 
                    src={logoPreview} 
                    alt="Company Logo" 
                    className="h-20 w-20 object-cover rounded-lg border border-border"
                  />
                  {isEditing && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setLogoPreview(null)}
                      className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              ) : (
                <div className="h-20 w-20 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center bg-muted/50">
                  <Building2 className="h-10 w-10 text-muted-foreground/50" />
                </div>
              )}
              {isEditing && (
                <div>
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="mb-2"
                    disabled={isUploadingLogo}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {isUploadingLogo ? "Uploading…" : "Upload Logo"}
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <p className="text-xs text-muted-foreground">
                    Recommended: Square image, at least 200x200px. Max 5MB.
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Details */}
      <Card>
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>
            Basic information about your business
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerName">Business Owner</Label>
                <Input
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, ownerName: e.target.value }))}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Address Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="123 Business Street, City, Country"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  value={formData.postcode}
                  onChange={(e) => setFormData(prev => ({ ...prev, postcode: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="SW1A 1AA"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="+44 20 1234 5678"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Website
              </Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                disabled={!isEditing}
                placeholder="https://www.example.com"
              />
            </div>
          </div>

          <Separator />

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Features</h3>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="multiLocation" className="text-base">Multi-Location Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Enable multiple branch management
                </p>
              </div>
              <Switch
                id="multiLocation"
                checked={formData.multiLocation}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, multiLocation: checked }))}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-4 pt-4">
              <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-500 dark:active:bg-teal-400">
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Branch Management */}
      {(company?.branches?.length ?? 0) > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Branch Management</CardTitle>
            <CardDescription>
              Manage your company branches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(company?.branches ?? []).map((branch) => (
                <div key={branch.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{branch.name}</h4>
                    <p className="text-sm text-muted-foreground">{branch.address || "No address"}</p>
                    <p className="text-sm text-muted-foreground">{branch.calculations.length} calculations</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteBranch(branch.id)}
                    disabled={(company?.branches?.length ?? 0) === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Section 3: Danger Zone */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible actions that affect your entire company
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-destructive/50 bg-destructive/10">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive-foreground">
              Deleting your company will permanently remove all data including branches, calculations, and user information. This action cannot be undone.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg bg-background">
              <div>
                <h4 className="font-medium text-destructive">Delete this company</h4>
                <p className="text-sm text-muted-foreground">
                  Permanently remove your company and all associated data
                </p>
              </div>
              <Button
                variant="destructive"
                onClick={handleDeleteCompany}
                disabled={(company?.branches?.length ?? 0) > 1}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Company
              </Button>
            </div>

            {(company?.branches?.length ?? 0) > 1 && (
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  ⚠️ You must delete all branches except one before deleting the company.
                </p>
              </div>
            )}

            <Separator className="bg-destructive/20" />

            <div className="p-4 border border-destructive/20 rounded-lg bg-background">
              <h4 className="font-medium text-destructive mb-3">Delete Branch Data</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Remove specific branches and their associated calculations
              </p>
              <div className="space-y-2">
                {(company?.branches ?? []).map((branch) => (
                  <div key={branch.id} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <span className="font-medium">{branch.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({branch.calculations.length} calculations)
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteBranch(branch.id)}
                      disabled={(company?.branches?.length ?? 0) === 1}
                      className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
              {(company?.branches?.length ?? 0) === 1 && (
                <p className="text-xs text-muted-foreground mt-2">
                  Cannot delete the last branch. Create a new branch first.
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  </div>
  )
}

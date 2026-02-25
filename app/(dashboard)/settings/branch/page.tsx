"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { 
  Building2, 
  MapPin, 
  User, 
  Calculator, 
  Plus,
  Edit,
  Trash2,
  Settings,
  Car,
  Warehouse,
  Gauge
} from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useAppContext } from "@/lib/app-context"
import { AccessDenied } from "@/components/access-denied"
import { toast } from "sonner"

const CURRENCIES = [
  { value: "GBP", label: "British Pound (£)", symbol: "£" },
  { value: "EUR", label: "Euro (€)", symbol: "€" },
  { value: "USD", label: "US Dollar ($)", symbol: "$" },
  { value: "ISK", label: "Icelandic Króna (kr)", symbol: "kr" },
  { value: "ZAR", label: "South African Rand (R)", symbol: "R" },
  { value: "OTHER", label: "Other", symbol: "" }
]

export default function BranchSettings() {
  const { userProfile, updateProfile } = useAuth()
  const { updateData } = useAppContext()
  const [isEditing, setIsEditing] = useState(false)
  const role = userProfile?.effectiveRole || "admin"
  const canAccess = role === "admin" || role === "manager"

  if (userProfile && !canAccess) {
    return <AccessDenied message="Only admins and managers can access Branch Settings." />
  }

  const company = userProfile?.effectiveCompany ?? userProfile?.company
  if (!userProfile || !company || company.branches.length === 0) {
    return (
      <div className="container mx-auto py-6 px-4 md:py-8 md:px-6 min-w-0">
        <div className="text-center">
          <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">No Branches Found</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            You need to complete the setup wizard first to create a branch.
          </p>
          <Button onClick={() => window.location.href = '/setup-wizard'}>
            Complete Setup
          </Button>
        </div>
      </div>
    )
  }

  const branch = company.branches[0] // For now, just handle the first branch
  const [formData, setFormData] = useState({
    name: branch.name,
    code: branch.code,
    address: branch.address || "",
    postcode: branch.postcode || "",
    managerName: branch.managerName || "",
    managerContact: "", // New field
    currency: branch.currency,
    facilities: {
      size: branch.facilities.size,
      parking: branch.facilities.parking,
      ramps: branch.facilities.ramps
    }
  })

  const parkingRatio = formData.facilities.parking > 0 && formData.facilities.ramps > 0 
    ? (formData.facilities.parking / formData.facilities.ramps).toFixed(1)
    : "N/A"

  const handleSave = async () => {
    if (!userProfile) return

    const updatedBranches = company.branches.map(b =>
      b.id === branch.id
        ? {
            ...branch,
            name: formData.name,
            code: formData.code,
            address: formData.address || undefined,
            postcode: formData.postcode || undefined,
            managerName: formData.managerName || undefined,
            currency: formData.currency,
            facilities: formData.facilities
          }
        : b
    )

    try {
      await updateProfile({
        company: {
          ...company,
          branches: updatedBranches
        }
      })
      const size = Number(formData.facilities.size) || 0
      const ramps = Number(formData.facilities.ramps) || 0
      updateData({ workshopSize: size, ramps })
      setIsEditing(false)
      toast.success("Branch settings saved successfully!")
    } catch {
      toast.error("Failed to save branch settings.")
    }
  }

  const handleCancel = () => {
    setFormData({
      name: branch.name,
      code: branch.code,
      address: branch.address || "",
      postcode: branch.postcode || "",
      managerName: branch.managerName || "",
      managerContact: "",
      currency: branch.currency,
      facilities: {
        size: branch.facilities.size,
        parking: branch.facilities.parking,
        ramps: branch.facilities.ramps
      }
    })
    setIsEditing(false)
  }

  const getCurrencySymbol = (currency: string) => {
    const currencyObj = CURRENCIES.find(c => c.value === currency)
    return currencyObj?.symbol || currency
  }

  return (
    <div className="flex-1 space-y-4 md:space-y-6 p-4 md:p-6 lg:p-8 pt-4 md:pt-6 min-h-screen pb-20 min-w-0">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display min-w-0">
          Branch Settings
        </h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="w-full sm:w-auto shrink-0">
            <Edit className="h-4 w-4 mr-2" />
            Edit Branch
          </Button>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12 lg:grid-cols-12 min-w-0">
        {/* Main Content */}
        <div className="lg:col-span-9 space-y-4 md:space-y-6 min-w-0">
          {/* Section 1: Branch Information */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Building2 className="h-5 w-5 shrink-0" />
                <span className="truncate">Branch Information</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Basic details about your branch location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-4 md:px-6 overflow-x-hidden">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Branch Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="code">Branch Code</Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="123 Main Street"
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
            </CardContent>
          </Card>

          {/* Section 2: Branch Manager */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <User className="h-5 w-5 shrink-0" />
                <span className="truncate">Branch Manager</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Manager contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-4 md:px-6 overflow-x-hidden">
              <div className="space-y-2">
                <Label htmlFor="managerName">Manager Name</Label>
                <Input
                  id="managerName"
                  value={formData.managerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, managerName: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="Branch Manager Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="managerContact">Contact</Label>
                <Input
                  id="managerContact"
                  value={formData.managerContact}
                  onChange={(e) => setFormData(prev => ({ ...prev, managerContact: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="manager@example.com or +44 20 1234 5678"
                />
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Workshop Facilities */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Warehouse className="h-5 w-5 shrink-0" />
                <span className="truncate">Workshop Facilities</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Physical capacity and equipment details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-4 md:px-6 overflow-x-hidden">
              <div className="space-y-2">
                <Label htmlFor="workshopSize">Workshop Size (sq ft)</Label>
                <Input
                  id="workshopSize"
                  type="number"
                  value={formData.facilities.size || ""}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    facilities: { ...prev.facilities, size: parseInt(e.target.value) || 0 }
                  }))}
                  disabled={!isEditing}
                  placeholder="1000"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ramps" className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 shrink-0" />
                    Ramps
                  </Label>
                  <Input
                    id="ramps"
                    type="number"
                    value={formData.facilities.ramps || ""}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      facilities: { ...prev.facilities, ramps: parseInt(e.target.value) || 0 }
                    }))}
                    disabled={!isEditing}
                    placeholder="2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parking" className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Car Park Spaces
                  </Label>
                  <Input
                    id="parking"
                    type="number"
                    value={formData.facilities.parking || ""}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      facilities: { ...prev.facilities, parking: parseInt(e.target.value) || 0 }
                    }))}
                    disabled={!isEditing}
                    placeholder="10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Configuration */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Settings className="h-5 w-5 shrink-0" />
                <span className="truncate">Configuration</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Regional and operational settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-4 md:px-6 overflow-x-hidden">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select 
                  value={formData.currency} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value }))}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.value} value={currency.value}>
                        {currency.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  This changes the currency symbol used throughout the application
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Calculation Management */}
          <Card className="min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Calculator className="h-5 w-5 shrink-0" />
                <span className="truncate">Calculation Management</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Financial calculations and performance targets
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 md:px-6 overflow-x-hidden">
              {branch.calculations.length === 0 ? (
                <div className="text-center py-8">
                  <Calculator className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Calculations Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Create your first calculation to start tracking financial performance.
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Calculation
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto w-full -mx-1 px-1">
                  <Table className="min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created Date</TableHead>
                      <TableHead>GP Target</TableHead>
                      <TableHead>Staff Count</TableHead>
                      <TableHead>Efficiency Req %</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {branch.calculations.map((calc) => (
                      <TableRow key={calc.id}>
                        <TableCell className="font-medium">{calc.name}</TableCell>
                        <TableCell>
                          {calc.isActive ? (
                            <Badge className="bg-green-100 text-green-800">Current</Badge>
                          ) : (
                            <Badge variant="secondary">Inactive</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {new Date(calc.dateCreated).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {getCurrencySymbol(formData.currency)}
                          {calc.gpTarget.toLocaleString()}
                        </TableCell>
                        <TableCell>{calc.staffCount}</TableCell>
                        <TableCell>
                          {calc.staffCount > 0 ? 
                            ((calc.gpTarget / (calc.staffCount * 250)) * 100).toFixed(1) : 
                            "N/A"
                          }%
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
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

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-500 dark:active:bg-teal-400 w-full sm:w-auto">
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel} className="w-full sm:w-auto">
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar - Branch Facilities Summary */}
        <div className="lg:col-span-3 min-w-0">
          <Card className="lg:sticky lg:top-8 min-w-0 overflow-hidden">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Warehouse className="h-5 w-5 shrink-0" />
                <span className="truncate">Branch Facilities</span>
              </CardTitle>
              <CardDescription className="text-sm">
                Current facility overview
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-4 md:px-6 overflow-x-hidden">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Size</span>
                  <span className="text-sm text-muted-foreground">
                    {formData.facilities.size.toLocaleString()} sq ft
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Ramps</span>
                  <span className="text-sm text-muted-foreground">
                    {formData.facilities.ramps} bays
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Parking</span>
                  <span className="text-sm text-muted-foreground">
                    {formData.facilities.parking} spaces
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Parking:Ramps Ratio</span>
                  <span className="text-sm font-bold text-teal-600">
                    {parkingRatio}:1
                  </span>
                </div>
              </div>

              {parkingRatio !== "N/A" && parseFloat(parkingRatio) < 2 && (
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                  <p className="text-xs text-yellow-800 dark:text-yellow-200">
                    ⚠️ Low parking ratio detected. Consider adding more parking spaces for better customer experience.
                  </p>
                </div>
              )}

              {parkingRatio !== "N/A" && parseFloat(parkingRatio) >= 3 && (
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-xs text-green-800 dark:text-green-200">
                    ✅ Good parking ratio! Your facility has adequate parking for your ramp capacity.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { WorkshopLoader } from "@/components/workshop-loader"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Building2, MapPin, Calculator, ArrowRight, ArrowLeft, Check } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Branch, Calculation } from "@/lib/auth-context"
import { useAppContext } from "@/lib/app-context"

const CURRENCIES = [
  { value: "GBP", label: "British Pound (£)" },
  { value: "EUR", label: "Euro (€)" },
  { value: "USD", label: "US Dollar ($)" },
  { value: "ISK", label: "Icelandic Króna (kr)" },
  { value: "ZAR", label: "South African Rand (R)" },
  { value: "OTHER", label: "Other" }
]

export default function SetupWizard() {
  const router = useRouter()
  const { userProfile, updateProfile } = useAuth()
  const { refreshWorkshopData } = useAppContext()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader on initial mount
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // Invited members belong to an existing workspace — send them to dashboard, not setup wizard
  useEffect(() => {
    if (userProfile?.companyOwnerEmail) {
      router.replace("/")
    }
  }, [userProfile?.companyOwnerEmail, router])

  // Form states (invited users have no company; owners may have company from profile)
  const [companyName, setCompanyName] = useState(userProfile?.company?.name ?? "")
  const [branchData, setBranchData] = useState({
    name: "",
    address: "",
    postcode: "",
    currency: "GBP",
    facilities: {
      size: 0,
      parking: 0,
      ramps: 0
    }
  })
  const [calculationName, setCalculationName] = useState("Main")

  const progress = (currentStep / 3) * 100

  // Don't render the wizard for invited members; useEffect above redirects them to dashboard
  if (userProfile?.companyOwnerEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <WorkshopLoader size="medium" loadingText="Taking you to your workspace..." />
      </div>
    )
  }

  const handleNext = async () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateId = (prefix: string) => {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  const handleSubmit = async () => {
    if (!userProfile) return

    setIsSubmitting(true)

    try {
      // Coerce to numbers so we never send strings (input values can be string in some environments)
      const rawSize = branchData.facilities.size
      const rawParking = branchData.facilities.parking
      const rawRamps = branchData.facilities.ramps
      const size = Math.max(0, Number(rawSize) || 0)
      const parking = Math.max(0, Number(rawParking) || 0)
      const ramps = Math.max(0, Number(rawRamps) || 0)
      const newBranch: Branch = {
        id: generateId("branch"),
        name: branchData.name,
        code: branchData.name.toUpperCase().replace(/\s+/g, "_"),
        address: branchData.address || undefined,
        postcode: branchData.postcode || undefined,
        currency: branchData.currency,
        facilities: { size, parking, ramps },
        calculations: []
      }

      // Create first calculation
      const newCalculation: Calculation = {
        id: generateId("calc"),
        name: calculationName,
        dateCreated: new Date().toISOString(),
        staffCount: 0,
        gpTarget: 0,
        isActive: true
      }

      newBranch.calculations.push(newCalculation)

      // Update user profile and persist to DB before redirect so workshop seed reads correct facilities
      const updatedProfile = {
        ...userProfile,
        company: {
          ...(userProfile.company || {}),
          name: companyName,
          branches: [newBranch]
        },
        hasCompletedSetup: true
      }

      await updateProfile(updatedProfile)

      // Refetch workshop so dashboard shows updated facilities (workshopSize, ramps) without a full reload
      await refreshWorkshopData()

      router.push("/")
    } catch (error) {
      console.error("Setup failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Building2 className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-2xl font-bold">Welcome to Workshop Pilot</h2>
              <p className="text-muted-foreground">Let's get your business set up.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                  className="h-11"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 mx-auto text-teal-600" />
              <h2 className="text-2xl font-bold">Create Your First Branch</h2>
              <p className="text-muted-foreground">Each branch represents a location. You need at least one.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branchName">Branch Name *</Label>
                  <Input
                    id="branchName"
                    value={branchData.name}
                    onChange={(e) => setBranchData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Main Branch"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={branchData.address}
                    onChange={(e) => setBranchData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="123 Main Street"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postcode">Postcode</Label>
                  <Input
                    id="postcode"
                    value={branchData.postcode}
                    onChange={(e) => setBranchData(prev => ({ ...prev, postcode: e.target.value }))}
                    placeholder="SW1A 1AA"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={branchData.currency} onValueChange={(value) => setBranchData(prev => ({ ...prev, currency: value }))}>
                    <SelectTrigger className="h-11">
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
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-4">Facilities (Optional)</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workshopSize">Workshop Size (sq ft)</Label>
                    <Input
                      id="workshopSize"
                      type="number"
                      min={0}
                      value={branchData.facilities.size === 0 ? "" : branchData.facilities.size}
                      onChange={(e) => {
                        const v = e.target.value
                        const num = v === "" ? 0 : Math.max(0, Number(v))
                        setBranchData(prev => ({ 
                          ...prev, 
                          facilities: { ...prev.facilities, size: Number.isNaN(num) ? 0 : num }
                        }))
                      }}
                      placeholder="1000"
                      className="h-11"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="carParkSpaces">Car Park Spaces</Label>
                      <Input
                        id="carParkSpaces"
                        type="number"
                        min={0}
                        value={branchData.facilities.parking === 0 ? "" : branchData.facilities.parking}
                        onChange={(e) => {
                          const v = e.target.value
                          const num = v === "" ? 0 : Math.max(0, Number(v))
                          setBranchData(prev => ({ 
                            ...prev, 
                            facilities: { ...prev.facilities, parking: Number.isNaN(num) ? 0 : num }
                          }))
                        }}
                        placeholder="10"
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ramps">Ramps</Label>
                      <Input
                        id="ramps"
                        type="number"
                        min={0}
                        value={branchData.facilities.ramps === 0 ? "" : branchData.facilities.ramps}
                        onChange={(e) => {
                          const v = e.target.value
                          const num = v === "" ? 0 : Math.max(0, Number(v))
                          setBranchData(prev => ({ 
                            ...prev, 
                            facilities: { ...prev.facilities, ramps: Number.isNaN(num) ? 0 : num }
                          }))
                        }}
                        placeholder="2"
                        className="h-11"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Calculator className="h-12 w-12 mx-auto text-teal-600" />
              <h2 className="text-2xl font-bold">Create Your First Calculation</h2>
              <p className="text-muted-foreground">Calculations allow you to model financial performance.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calculationName">Calculation Name</Label>
                <Input
                  id="calculationName"
                  value={calculationName}
                  onChange={(e) => setCalculationName(e.target.value)}
                  className="h-11"
                />
                <p className="text-sm text-muted-foreground">
                  Start with a Main calculation as your baseline.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 rounded-lg p-4">
              <h3 className="font-medium text-primary mb-2">Ready to go!</h3>
              <p className="text-sm text-primary/80 dark:text-primary/90">
                After this step, you'll be redirected to your dashboard where you can start configuring your financial targets and tracking performance.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-teal-900/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep} of 3</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {renderStep()}

          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="h-11"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep === 3 ? (
              <Button
                onClick={handleSubmit}
                disabled={!companyName || !branchData.name || isSubmitting}
                className="h-11"
              >
                {isSubmitting ? (
                  "Creating..."
                ) : (
                  <>
                    Create & Continue
                    <Check className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={(currentStep === 1 && !companyName) || (currentStep === 2 && !branchData.name)}
                className="h-11"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

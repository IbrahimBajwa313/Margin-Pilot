"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WorkshopLoader } from "@/components/workshop-loader"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Check, X, Mail, Lock, User, Building } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface FormErrors {
  firstName?: string
  lastName?: string
  workspaceName?: string
  email?: string
  password?: string
  confirmPassword?: string
  terms?: string
}

interface PasswordValidation {
  length: boolean
  uppercase: boolean
  lowercase: boolean
  number: boolean
  special: boolean
}

interface SignUpScreenProps {
  onSwitchToLogin?: () => void
}

export function SignUp({ onSwitchToLogin }: SignUpScreenProps) {
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Show loader on initial mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  const PROFILE_API = '/api/profile'

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workspaceName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  })

  // Password validation regex
  const validatePassword = (password: string): PasswordValidation => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password)
    }
  }

  // Update password validation as user types
  const handlePasswordChange = (value: string) => {
    setFormData(prev => ({ ...prev, password: value }))
    setPasswordValidation(validatePassword(value))

    // Clear password error if it exists
    if (errors.password) {
      setErrors(prev => ({ ...prev, password: undefined }))
    }
  }

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.workspaceName.trim()) {
      newErrors.workspaceName = "Workspace name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    const passwordValid = validatePassword(formData.password)
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (!Object.values(passwordValid).every(Boolean)) {
      newErrors.password = "Password does not meet all requirements"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const newUser = {
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        company: {
          id: `company_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: formData.workspaceName.trim(),
          ownerName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
          email: formData.email.trim(),
          multiLocation: false,
          branches: [],
          users: []
        },
        preferences: { darkMode: false, beginnerMode: true },
        hasCompletedSetup: false,
        createdAt: new Date().toISOString()
      }

      const res = await fetch(PROFILE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (res.status === 409 || (res.status === 400 && String(data?.error || '').toLowerCase().includes('already exists'))) {
          setErrors({ email: "An account with this email already exists." })
        } else {
          setErrors({ email: data?.error || "An error occurred. Please try again." })
        }
        return
      }
      login(data)
    } catch (error) {
      console.error("Sign Up | Error creating account:", error)
      setErrors({ email: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isPasswordValid = Object.values(passwordValidation).every(Boolean)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="large" loadingText="Loading Sign Up..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 flex items-center justify-center p-3 sm:p-4 py-6 sm:py-8">
      <Card className="w-full max-w-xl min-w-0 bg-card/95 backdrop-blur-xl shadow-2xl border-border/50 rounded-2xl p-4 sm:p-6 md:p-10 mx-auto overflow-x-hidden overflow-y-auto max-h-[100dvh]">
        <CardHeader className="space-y-3 md:space-y-4 text-center px-0">
          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative w-40 h-14 sm:w-44 sm:h-16 md:w-48 md:h-20">
              <img
                src="/logo for light screen.png"
                alt="MarginPilot Logo"
                className="absolute inset-0 w-full h-full object-contain dark:hidden"
              />
              <img
                src="/logo for dark screen.png"
                alt="MarginPilot Logo"
                className="absolute inset-0 w-full h-full object-contain hidden dark:block"
              />
            </div>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
              Create Account
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Join MarginPilot and get started
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit} className="min-w-0">
          <CardContent className="space-y-3 md:space-y-4 px-0 min-w-0 overflow-x-hidden">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 min-w-0">
              <div className="space-y-2 min-w-0">
                <Label htmlFor="firstName" className="text-slate-700 dark:text-slate-300">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, firstName: e.target.value }))
                    if (errors.firstName) setErrors(prev => ({ ...prev, firstName: "" }))
                  }}
                  className={`h-12 w-full min-w-0 rounded-lg border-border bg-input focus:ring-2 focus:ring-primary/20 focus:border-primary/50 ${errors.firstName ? 'border-destructive' : ''}`}
                  required
                />
                {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-700 dark:text-slate-300">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, lastName: e.target.value }))
                    if (errors.lastName) setErrors(prev => ({ ...prev, lastName: "" }))
                  }}
                  className={`h-12 w-full min-w-0 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.lastName ? 'border-destructive' : ''}`}
                  required
                />
                {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
              </div>
            </div>

            {/* Workspace Name */}
            <div className="space-y-2 min-w-0">
              <Label htmlFor="workspaceName" className="text-slate-700 dark:text-slate-300">Workspace Name</Label>
              <Input
                id="workspaceName"
                type="text"
                placeholder="JD Motors Workshop"
                value={formData.workspaceName}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, workspaceName: e.target.value }))
                  if (errors.workspaceName) setErrors(prev => ({ ...prev, workspaceName: "" }))
                }}
                className={`h-12 w-full min-w-0 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.workspaceName ? 'border-destructive' : ''}`}
                required
              />
              {errors.workspaceName && <p className="text-xs text-destructive">{errors.workspaceName}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2 min-w-0">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email Address</Label>
              <div className="relative min-w-0">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground shrink-0 pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                    if (errors.email) setErrors(prev => ({ ...prev, email: "" }))
                  }}
                  className={`h-12 w-full min-w-0 pl-10 pr-3 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.email ? 'border-destructive' : ''}`}
                  required
                />
              </div>
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2 min-w-0">
              <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
              <div className="relative min-w-0">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground shrink-0 pointer-events-none" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, password: e.target.value }))
                    handlePasswordChange(e.target.value)
                    if (errors.password) setErrors(prev => ({ ...prev, password: "" }))
                  }}
                  className={`h-12 w-full min-w-0 pl-10 pr-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.password ? 'border-destructive' : ''}`}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 top-1 h-9 w-9 p-0"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}

              {/* Password Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs min-w-0">
                <div className="flex items-center gap-2">
                  {passwordValidation.length ? (
                    <Check className="h-3 w-3 text-success" />
                  ) : (
                    <X className="h-3 w-3 text-destructive" />
                  )}
                  <span className={passwordValidation.length ? "text-success" : "text-muted-foreground"}>
                    At least 8 characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.uppercase ? (
                    <Check className="h-3 w-3 text-success" />
                  ) : (
                    <X className="h-3 w-3 text-destructive" />
                  )}
                  <span className={passwordValidation.uppercase ? "text-success" : "text-slate-500"}>
                    One uppercase letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.lowercase ? (
                    <Check className="h-3 w-3 text-success" />
                  ) : (
                    <X className="h-3 w-3 text-destructive" />
                  )}
                  <span className={passwordValidation.lowercase ? "text-success" : "text-slate-500"}>
                    One lowercase letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.number ? (
                    <Check className="h-3 w-3 text-success" />
                  ) : (
                    <X className="h-3 w-3 text-destructive" />
                  )}
                  <span className={passwordValidation.number ? "text-success" : "text-slate-500"}>
                    One number
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordValidation.special ? (
                    <Check className="h-3 w-3 text-success" />
                  ) : (
                    <X className="h-3 w-3 text-destructive" />
                  )}
                  <span className={`min-w-0 break-words ${passwordValidation.special ? "text-success" : "text-slate-500"}`}>
                    One special character (!@#$%^&*)
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2 min-w-0">
              <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-300">Confirm Password</Label>
              <div className="relative min-w-0">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground shrink-0 pointer-events-none" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))
                    if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: "" }))
                  }}
                  className={`h-12 w-full min-w-0 pl-10 pr-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.confirmPassword ? 'border-destructive' : ''}`}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-1 top-1 h-9 w-9 p-0"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:space-x-2 min-w-0">
              <div className="flex items-start gap-2 min-w-0 flex-1">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => {
                    setTermsAccepted(checked === true)
                    if (errors.terms) setErrors(prev => ({ ...prev, terms: "" }))
                  }}
                  className="mt-0.5 h-5 w-5 min-w-[1.25rem] shrink-0 text-primary focus:ring-primary rounded border-border"
                />
                <div className="space-y-1 sm:ml-0 min-w-0 flex-1">
                <Label htmlFor="terms" className="text-sm text-foreground leading-relaxed break-words block">
                  I agree to the{" "}
                  <Button type="button" variant="link" className="p-0 h-auto text-primary underline inline break-words">
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button type="button" variant="link" className="p-0 h-auto text-primary underline inline break-words">
                    Privacy Policy
                  </Button>
                </Label>
                {errors.terms && <p className="text-xs text-destructive">{errors.terms}</p>}
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-4 md:pt-6 px-0">
            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30"
              disabled={isSubmitting || !isPasswordValid || !termsAccepted}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              I already have an account{" "}
              {onSwitchToLogin ? (
                <Button
                  type="button"
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 underline"
                  onClick={onSwitchToLogin}
                >
                  Sign in
                </Button>
              ) : (
                "Sign in"
              )}
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

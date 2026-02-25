"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WorkshopLoader } from "@/components/workshop-loader"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Check, X, Mail, Lock, UserPlus } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface FormErrors {
  firstName?: string
  lastName?: string
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

interface SignUpInviteProps {
  onSwitchToLogin?: (message?: string) => void
  /** Pre-fill email from invite link */
  initialEmail?: string
}

export function SignUpInvite({ onSwitchToLogin, initialEmail }: SignUpInviteProps) {
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  const PROFILE_API = "/api/profile"

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: initialEmail || "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    if (initialEmail) setFormData((prev) => ({ ...prev, email: initialEmail }))
  }, [initialEmail])

  const [errors, setErrors] = useState<FormErrors>({})
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  })

  const validatePassword = (password: string): PasswordValidation => ({
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  })

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, password: value }))
    setPasswordValidation(validatePassword(value))
    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    const pv = validatePassword(formData.password)
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (!Object.values(pv).every(Boolean)) {
      newErrors.password = "Password does not meet all requirements"
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    if (!termsAccepted) newErrors.terms = "You must accept the terms and conditions"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      const newUser = {
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        preferences: { darkMode: false, beginnerMode: true },
        hasCompletedSetup: false,
        createdAt: new Date().toISOString(),
      }
      const res = await fetch(PROFILE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (res.status === 409 || String(data?.error || "").toLowerCase().includes("already exists")) {
          setErrors({ email: "An account with this email already exists. Sign in instead." })
        } else {
          setErrors({ email: data?.error || "Something went wrong. Please try again." })
        }
        return
      }
      onSwitchToLogin?.("Account created. Sign in with your email and password to join your team.")
    } catch (err) {
      console.error("SignUpInvite error:", err)
      setErrors({ email: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isPasswordValid = Object.values(passwordValidation).every(Boolean)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="large" loadingText="Loading..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 flex items-center justify-center p-3 sm:p-4 py-6 sm:py-8">
      <Card className="w-full max-w-md min-w-0 bg-card/95 backdrop-blur-xl shadow-2xl border-border/50 rounded-2xl p-4 sm:p-6 mx-auto overflow-x-hidden overflow-y-auto max-h-[100dvh]">
        <CardHeader className="space-y-3 text-center px-0">
          <div className="flex justify-center mb-2">
            <div className="relative w-36 h-12 sm:w-40 sm:h-14">
              <img src="/logo for light screen.png" alt="MarginPilot" className="absolute inset-0 w-full h-full object-contain dark:hidden" />
              <img src="/logo for dark screen.png" alt="MarginPilot" className="absolute inset-0 w-full h-full object-contain hidden dark:block" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <UserPlus className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
              Join your team
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Create your account to join the workspace. You only need your name and a password.
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit} className="min-w-0">
          <CardContent className="space-y-3 md:space-y-4 px-0 min-w-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="invite-firstName" className="text-slate-700 dark:text-slate-300">First name</Label>
                <Input
                  id="invite-firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                    if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: undefined }))
                  }}
                  className={`h-11 rounded-lg ${errors.firstName ? "border-destructive" : ""}`}
                  required
                />
                {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="invite-lastName" className="text-slate-700 dark:text-slate-300">Last name</Label>
                <Input
                  id="invite-lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                    if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: undefined }))
                  }}
                  className={`h-11 rounded-lg ${errors.lastName ? "border-destructive" : ""}`}
                  required
                />
                {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-email" className="text-slate-700 dark:text-slate-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="invite-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                  }}
                  className={`h-11 pl-10 rounded-lg ${errors.email ? "border-destructive" : ""}`}
                  required
                />
              </div>
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-password" className="text-slate-700 dark:text-slate-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="invite-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, password: e.target.value }))
                    handlePasswordChange(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  className={`h-11 pl-10 pr-10 rounded-lg ${errors.password ? "border-destructive" : ""}`}
                  required
                />
                <Button type="button" variant="ghost" size="sm" onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 p-0">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {[
                  [passwordValidation.length, "8+ characters"],
                  [passwordValidation.uppercase, "One uppercase"],
                  [passwordValidation.lowercase, "One lowercase"],
                  [passwordValidation.number, "One number"],
                  [passwordValidation.special, "One of !@#$%^&*"],
                ].map(([ok, text], i) => (
                  <div key={i} className="flex items-center gap-2">
                    {ok ? <Check className="h-3 w-3 text-green-600" /> : <X className="h-3 w-3 text-destructive" />}
                    <span className={ok ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invite-confirmPassword" className="text-slate-700 dark:text-slate-300">Confirm password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="invite-confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
                    if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                  }}
                  className={`h-11 pl-10 pr-10 rounded-lg ${errors.confirmPassword ? "border-destructive" : ""}`}
                  required
                />
                <Button type="button" variant="ghost" size="sm" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 p-0">
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="invite-terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => {
                  setTermsAccepted(checked === true)
                  if (errors.terms) setErrors((prev) => ({ ...prev, terms: undefined }))
                }}
                className="mt-0.5 h-5 w-5 shrink-0 rounded border-border"
              />
              <Label htmlFor="invite-terms" className="text-sm text-foreground leading-relaxed">
                I agree to the{" "}
                <Button type="button" variant="link" className="p-0 h-auto text-primary underline">Terms of Service</Button>
                {" "}and{" "}
                <Button type="button" variant="link" className="p-0 h-auto text-primary underline">Privacy Policy</Button>
              </Label>
            </div>
            {errors.terms && <p className="text-xs text-destructive">{errors.terms}</p>}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-4 px-0">
            <Button
              type="submit"
              className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
              disabled={isSubmitting || !isPasswordValid || !termsAccepted}
            >
              {isSubmitting ? "Creating account…" : "Create account & join"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button type="button" variant="ghost" className="p-0 h-auto text-primary underline" onClick={() => onSwitchToLogin?.()}>
                Sign in
              </Button>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

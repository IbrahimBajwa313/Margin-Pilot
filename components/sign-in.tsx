"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WorkshopLoader } from "@/components/workshop-loader"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface SignInScreenProps {
  onSwitchToSignup: () => void
  successMessage?: string | null
  clearSuccessMessage?: () => void
}

export function SignInScreen({ onSwitchToSignup, successMessage, clearSuccessMessage }: SignInScreenProps) {
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const LOGIN_API = '/api/auth/login'

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // Show loader on initial mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const res = await fetch(LOGIN_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim(), password: formData.password }),
        credentials: 'include',
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(res.status === 401 ? "Invalid email or password." : (data?.error || "An error occurred. Please try again."))
        return
      }
      await login(data)
    } catch (error) {
      console.error("Sign In | Error during login:", error)
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="large" loadingText="Loading Sign In..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 flex items-center justify-center p-3 sm:p-4 py-8">
      <Card className="w-full max-w-xl bg-card/95 backdrop-blur-xl shadow-2xl border-border/50 rounded-2xl p-4 sm:p-6 md:p-10 mx-auto">
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
            <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400 text-sm">
              Sign in to your workspace
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-3 md:space-y-4 px-0 sm:px-0">
            {successMessage && (
              <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                <AlertDescription className="text-green-800 dark:text-green-200">
                  {successMessage}
                </AlertDescription>
              </Alert>
            )}
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                    if (error) setError("")
                  }}
                  className={`h-12 pl-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${error ? 'border-destructive' : ''}`}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, password: e.target.value }))
                    if (error) setError("")
                  }}
                  className={`h-12 pl-10 pr-10 rounded-lg border-border bg-input focus:ring-2 focus:ring-primary/20 focus:border-primary/50 ${error ? 'border-destructive' : ''}`}
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
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Forgot Password Link */}
            <div className="text-right">
              <Button type="button" variant="ghost" className="p-0 h-auto text-sm text-primary hover:text-primary/80">
                Forgot your password?
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-4 md:pt-6 px-0">
            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button
                type="button"
                variant="ghost"
                className="p-0 h-auto text-primary hover:text-primary/80 underline"
                onClick={onSwitchToSignup}
              >
                Create one
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

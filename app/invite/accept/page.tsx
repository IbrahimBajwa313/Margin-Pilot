"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth-context"
import { Loader2, LogIn, UserPlus, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"

const PENDING_TOKEN_KEY = "invite_pending_token"

function InviteAcceptContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")?.trim() || ""
  const { isAuthenticated, userProfile, logout, refreshProfile } = useAuth()

  const [validateLoading, setValidateLoading] = useState(!!token)
  const [acceptLoading, setAcceptLoading] = useState(false)
  const [error, setError] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [inviteEmail, setInviteEmail] = useState("")
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    if (!token) {
      setError("Missing invitation token.")
      setValidateLoading(false)
      return
    }
    fetch(`/api/invite/validate?token=${encodeURIComponent(token)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.companyName) {
          setCompanyName(data.companyName)
          setInviteEmail(data.email || "")
        } else {
          setError(data.error || "Invalid or expired invitation.")
        }
      })
      .catch(() => setError("Could not reach the server. Please check your connection and try again."))
      .finally(() => setValidateLoading(false))
  }, [token])

  useEffect(() => {
    if (!isAuthenticated || !userProfile || !token || accepted || acceptLoading) return
    const sessionEmail = (userProfile.email || "").trim().toLowerCase()
    const invited = (inviteEmail || "").trim().toLowerCase()
    if (sessionEmail && invited && sessionEmail !== invited) return

    setAcceptLoading(true)
    fetch("/api/invite/accept", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.success) {
          setAccepted(true)
          toast.success(`You've joined ${data.companyName}!`)
          await refreshProfile()
          setTimeout(() => router.replace("/"), 1500)
        } else {
          setError(data.error || "Failed to accept.")
        }
      })
      .catch(() => setError("Failed to accept invitation."))
      .finally(() => setAcceptLoading(false))
  }, [isAuthenticated, userProfile, token, inviteEmail, accepted, acceptLoading, router, refreshProfile])

  const saveTokenAndGoSignIn = () => {
    if (token && typeof window !== "undefined") {
      sessionStorage.setItem(PENDING_TOKEN_KEY, token)
    }
    logout()
    router.push("/?invite=" + encodeURIComponent(token))
  }

  const saveTokenAndGoSignUp = () => {
    if (token && typeof window !== "undefined") {
      sessionStorage.setItem(PENDING_TOKEN_KEY, token)
    }
    logout()
    const signup = inviteEmail ? `&signup=${encodeURIComponent(inviteEmail)}` : ""
    router.push("/?invite=" + encodeURIComponent(token) + signup)
  }

  if (validateLoading || (token && !error && !companyName)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (error && !companyName) {
    const isServerError = /temporarily unavailable|Could not reach|connection/i.test(error)
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              {isServerError ? "Service unavailable" : "Invalid invitation"}
            </CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Go to home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              You've joined!
            </CardTitle>
            <CardDescription>Redirecting you to the dashboard...</CardDescription>
          </CardHeader>
          <CardContent>
            <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isAuthenticated && userProfile) {
    const sessionEmail = (userProfile.email || "").trim().toLowerCase()
    const invited = (inviteEmail || "").trim().toLowerCase()
    if (sessionEmail !== invited) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Wrong account</CardTitle>
              <CardDescription>
                This invitation was sent to <strong>{inviteEmail}</strong>. Sign in with that email to accept, or sign up with that email first.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button onClick={saveTokenAndGoSignIn} variant="outline" className="w-full">
                <LogIn className="h-4 w-4 mr-2" />
                Sign in with invited email
              </Button>
              <Button onClick={saveTokenAndGoSignUp} variant="outline" className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign up with invited email
              </Button>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/">Go to home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      )
    }
    if (acceptLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">Accepting invitation...</p>
              <Loader2 className="h-8 w-8 animate-spin mx-auto mt-4 text-muted-foreground" />
            </CardContent>
          </Card>
        </div>
      )
    }
    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-destructive">Could not accept</CardTitle>
              <CardDescription>{error}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Go to home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-primary/5">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>You're invited</CardTitle>
          <CardDescription>
            You've been invited to join <strong>{companyName}</strong> on MarginPilot. Sign in or create an account to accept.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button onClick={saveTokenAndGoSignIn} className="w-full">
            <LogIn className="h-4 w-4 mr-2" />
            Sign in
          </Button>
          <Button onClick={saveTokenAndGoSignUp} variant="outline" className="w-full">
            <UserPlus className="h-4 w-4 mr-2" />
            Create account
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default function InviteAcceptPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-4">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      }
    >
      <InviteAcceptContent />
    </Suspense>
  )
}

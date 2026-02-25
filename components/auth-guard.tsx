"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { SignUp } from "@/components/sign-up"
import { SignUpInvite } from "@/components/sign-up-invite"
import { SignInScreen } from "@/components/sign-in"
import { WorkshopLoader } from "@/components/workshop-loader"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, userProfile, isLoading } = useAuth()
  const searchParams = useSearchParams()
  const inviteEmail = searchParams.get("signup")?.trim() || undefined
  const [authView, setAuthView] = useState<'signup' | 'login'>('signup')
  const [loginSuccessMessage, setLoginSuccessMessage] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const handleSwitchToLogin = (message?: string) => {
    setLoginSuccessMessage(typeof message === 'string' ? message : null)
    setAuthView('login')
  }

  // When arriving with ?invite=: show signup if ?signup= (create account to join), else show login
  useEffect(() => {
    const invite = searchParams.get("invite")?.trim()
    const signup = searchParams.get("signup")?.trim()
    if (invite && signup) setAuthView("signup")
    else if (invite) setAuthView("login")
  }, [searchParams])

  // Redirect to setup wizard only for owners who haven't completed setup (not for invite flow or invited members)
  const inviteTokenParam = searchParams.get("invite")?.trim()
  useEffect(() => {
    if (!isAuthenticated || !userProfile || pathname === '/setup-wizard') return
    if (inviteTokenParam) return // let invite redirect take user to invite/accept first
    if (userProfile.companyOwnerEmail) return // invited member: they belong to owner's workspace, no setup wizard
    if (!userProfile.hasCompletedSetup) router.push('/setup-wizard')
  }, [isAuthenticated, userProfile, pathname, router, inviteTokenParam])

  // After login/signup with invite token, redirect to accept page (same for existing and new users)
  useEffect(() => {
    if (!isAuthenticated || !inviteTokenParam || isLoading) return
    router.replace(`/invite/accept?token=${encodeURIComponent(inviteTokenParam)}`)
  }, [isAuthenticated, inviteTokenParam, isLoading, router])

  // While authenticated with invite token, show loader and redirect — never render dashboard (avoids setup-wizard redirect race)
  if (isAuthenticated && inviteTokenParam && pathname !== "/invite/accept") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="medium" loadingText="Taking you to accept the invitation..." />
      </div>
    )
  }

  // Allow invite accept page to render when not authenticated
  if (pathname === "/invite/accept") {
    return <>{children}</>
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="large" loadingText="Initializing..." />
      </div>
    )
  }

  if (!isAuthenticated) {
    if (authView === "signup") {
      if (inviteTokenParam) {
        return (
          <SignUpInvite
            onSwitchToLogin={handleSwitchToLogin}
            initialEmail={inviteEmail}
          />
        )
      }
      return (
        <SignUp
          onSwitchToLogin={handleSwitchToLogin}
          initialEmail={inviteEmail}
        />
      )
    }
    return (
      <SignInScreen
        onSwitchToSignup={() => { setLoginSuccessMessage(null); setAuthView('signup') }}
        successMessage={loginSuccessMessage}
        clearSuccessMessage={() => setLoginSuccessMessage(null)}
      />
    )
  }

  // If user is owner who hasn't completed setup, show setup wizard (skip for invite flow or invited members)
  if (userProfile && !userProfile.hasCompletedSetup && !userProfile.companyOwnerEmail && !inviteTokenParam && pathname !== '/setup-wizard') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="medium" loadingText="Redirecting to setup..." />
      </div>
    )
  }

  return <>{children}</>
}

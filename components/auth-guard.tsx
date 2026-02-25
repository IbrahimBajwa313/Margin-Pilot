"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { SignUp } from "@/components/sign-up"
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

  // When arriving with ?invite=, show sign-in first
  useEffect(() => {
    if (searchParams.get('invite')?.trim()) setAuthView('login')
  }, [searchParams])

  // Redirect to setup wizard if user hasn't completed setup
  useEffect(() => {
    if (isAuthenticated && userProfile && !userProfile.hasCompletedSetup && pathname !== '/setup-wizard') {
      router.push('/setup-wizard')
    }
  }, [isAuthenticated, userProfile, pathname, router])

  // After login/signup with invite token, redirect to accept page
  const inviteToken = searchParams.get("invite")?.trim()
  useEffect(() => {
    if (!isAuthenticated || !inviteToken || isLoading) return
    router.replace(`/invite/accept?token=${encodeURIComponent(inviteToken)}`)
  }, [isAuthenticated, inviteToken, isLoading, router])

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
    if (authView === 'signup') {
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

  // If user is authenticated but hasn't completed setup, show setup wizard
  if (userProfile && !userProfile.hasCompletedSetup && pathname !== '/setup-wizard') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <WorkshopLoader size="medium" loadingText="Redirecting to setup..." />
      </div>
    )
  }

  return <>{children}</>
}

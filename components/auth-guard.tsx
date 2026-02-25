"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { SignUp } from "@/components/sign-up"
import { SignInScreen } from "@/components/sign-in"
import { WorkshopLoader } from "@/components/workshop-loader"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, userProfile, isLoading } = useAuth()
  const [authView, setAuthView] = useState<'signup' | 'login'>('signup')
  const router = useRouter()
  const pathname = usePathname()

  // Redirect to setup wizard if user hasn't completed setup
  useEffect(() => {
    if (isAuthenticated && userProfile && !userProfile.hasCompletedSetup && pathname !== '/setup-wizard') {
      router.push('/setup-wizard')
    }
  }, [isAuthenticated, userProfile, pathname, router])

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
          onSwitchToLogin={() => setAuthView('login')} 
        />
      )
    } else {
      return (
        <SignInScreen 
          onSwitchToSignup={() => setAuthView('signup')} 
        />
      )
    }
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

"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { WorkshopLoader } from "@/components/workshop-loader"

export function PageTransitionLoader() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayPath, setDisplayPath] = useState(pathname)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Handle initial load
    if (isInitialLoad) {
      setIsInitialLoad(false)
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 800)
      return () => clearTimeout(timer)
    }

    // Handle route changes - only show if pathname actually changed
    if (displayPath !== pathname) {
      setIsLoading(true)
      setDisplayPath(pathname)
      
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 400) // 400ms transition time for smoother UX

      return () => clearTimeout(timer)
    }
  }, [pathname, isInitialLoad, displayPath])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300">
      <WorkshopLoader 
        size="large" 
        loadingText={getPageName(displayPath)}
      />
    </div>
  )
}

function getPageName(pathname: string): string {
  const routes: Record<string, string> = {
    '/': 'Loading Dashboard...',
    '/data-inputs': 'Loading Data Inputs...',
    '/gross-profit-target': 'Loading Gross Profit Target...',
    '/simulator': 'Loading Simulator...',
    '/efficiency-analysis': 'Loading Efficiency Analysis...',
    '/settings': 'Loading Settings...',
    '/settings/profile': 'Loading Profile Settings...',
    '/settings/company': 'Loading Company Settings...',
    '/settings/branch': 'Loading Branch Settings...',
    '/settings/users': 'Loading Users...',
    '/setup-wizard': 'Loading Setup Wizard...',
  }

  return routes[pathname] || 'Loading...'
}

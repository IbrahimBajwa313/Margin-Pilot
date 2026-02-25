"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopHeader } from "@/components/top-header"
import { WorkshopLoader } from "@/components/workshop-loader"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useAppContext } from "@/lib/app-context"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { dataLoading } = useAppContext()

  if (dataLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <WorkshopLoader size="large" loadingText="Loading workshop data..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar (sticky on desktop: in flow, content gets remaining space) */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isMobileOpen={isMobileMenuOpen}
        setIsMobileOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area - flex-1 so it fills space next to sidebar; no margin needed with sticky */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0 transition-all duration-300 ease-in-out">
        {/* Spacer: reserves height in flow so fixed header doesn't overlap content (h-14 md:h-16 matches TopHeader) */}
        <div className="h-14 md:h-16 shrink-0" aria-hidden="true" />
        <TopHeader
          isSidebarOpen={isSidebarOpen}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        {/* Desktop Sidebar Open Button (only when closed) */}
        {!isSidebarOpen && (
          <div className="hidden lg:block fixed left-4 top-20 z-30">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="h-8 w-8 rounded-full shadow-lg mp-btn-ghost"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Main Content - starts below spacer; no overlap with fixed header */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 z-10 relative transition-all duration-300 ease-in-out bg-background min-h-0">
          {children}
        </main>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { useAppContext } from "@/lib/app-context"
import { Button } from "@/components/ui/button"
import { Plus, PanelLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddDailyActualsModal } from "@/components/add-daily-actuals-modal"

interface TopHeaderProps {
  isSidebarOpen?: boolean
  onOpenMobileMenu?: () => void
  isMobileMenuOpen?: boolean
}

export function TopHeader({ isSidebarOpen = true, onOpenMobileMenu, isMobileMenuOpen }: TopHeaderProps) {
  const { data, updateData } = useAppContext()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="mp-nav fixed top-0 left-0 right-0 h-14 md:h-16 z-50">
        <div
          className={`h-full flex items-center justify-between px-4 md:px-6 transition-[padding] duration-300 ease-in-out ${isSidebarOpen ? "lg:pl-[16rem]" : "lg:pl-6"}`}
        >
        {/* Left: Mobile menu button + Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Mobile: professional menu button to open sidebar */}
          {onOpenMobileMenu && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenMobileMenu}
              className="lg:hidden h-9 w-9 shrink-0 rounded-lg mp-btn-ghost flex items-center justify-center"
              aria-label="Open menu"
            >
              <PanelLeft className="h-5 w-5 shrink-0" />
            </Button>
          )}
          {/* Breadcrumbs: current page only on mobile, full path on desktop */}
          <div className="text-sm text-muted-foreground flex items-center gap-2 min-w-0 lg:pl-4 min-h-[2.25rem]">
          <span className="hidden md:inline hover:text-foreground transition-colors cursor-pointer">Home</span>
          <span className="hidden md:inline text-muted-foreground/50">/</span>
          <span className="text-lg md:text-xl text-foreground font-medium truncate leading-tight flex items-center">Dashboard</span>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Branch Selector */}
          {/* <Select value={data.currentBranch} onValueChange={(value) => updateData({ currentBranch: value })}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Main Branch">Main Branch</SelectItem>
              <SelectItem value="Branch B">Branch B</SelectItem>
              <SelectItem value="Branch C">Branch C</SelectItem>
            </SelectContent>
          </Select> */}

          {/* Scenario Selector */}
          {/* <Select value={data.currentScenario} onValueChange={(value) => updateData({ currentScenario: value })}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Main Scenario">Main Scenario</SelectItem>
              <SelectItem value="Aggressive Growth">Aggressive Growth</SelectItem>
              <SelectItem value="Conservative">Conservative</SelectItem>
            </SelectContent>
          </Select> */}

          <Button onClick={() => setIsModalOpen(true)} variant="default" className="gap-2">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Daily Actuals</span>
          </Button>
        </div>
        </div>
      </header>

      <AddDailyActualsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

"use client"

import { useState } from "react"
import { useAppContext } from "@/lib/app-context"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddDailyActualsModal } from "@/components/add-daily-actuals-modal"

interface TopHeaderProps {
  isSidebarOpen?: boolean
}

export function TopHeader({ isSidebarOpen = true }: TopHeaderProps) {
  const { toggleTheme, isDark, data, updateData } = useAppContext()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-card/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-4 md:px-6 z-50 lg:pl-6 shadow-sm"
        style={{ left: isSidebarOpen ? '16rem' : '0' }}
      >
        {/* Breadcrumbs: current page only on mobile, full path on desktop */}
        <div className="text-sm text-muted-foreground flex items-center gap-2 min-w-0">
          <span className="hidden md:inline hover:text-foreground transition-colors cursor-pointer">Home</span>
          <span className="hidden md:inline text-muted-foreground/50">/</span>
          <span className="text-lg md:text-xl text-foreground font-medium truncate">Dashboard</span>
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

          <Button
  onClick={() => setIsModalOpen(true)}
  className="
    gap-2
    bg-primary
    text-primary-foreground
    shadow-sm

    transition-colors duration-200

    hover:bg-primary/90
    hover:shadow-md

    active:bg-primary/85

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary/40
    focus-visible:ring-offset-2
  "
>
  <Plus className="w-4 h-4" />
  <span className="hidden sm:inline">Add Daily Actuals</span>
</Button>


          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-10 h-10 bg-transparent   border-border/50">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </header>

      <AddDailyActualsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

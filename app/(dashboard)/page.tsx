"use client"

import { useState } from "react"
import { HeroKPIs } from "@/components/hero-kpis"
import { FinancialSummary } from "@/components/financial-summary"
import { MonthlyTargetsCalendar } from "@/components/monthly-targets-calendar"
import { CostBreakdown } from "@/components/cost-breakdown"
import { BranchFacilities } from "@/components/branch-facilities"
import { useAppContext } from "@/lib/app-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Info, X } from "lucide-react"

export default function DashboardPage() {
  const { data, updateData } = useAppContext()
  const [dismissed, setDismissed] = useState(false)
  const showStarterBanner = (data.isStarterTemplate === true) && !dismissed

  const handleDismiss = () => {
    setDismissed(true)
    updateData({ isStarterTemplate: false })
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {showStarterBanner && (
        <Alert className="bg-primary/10 border-primary/30 dark:bg-primary/20 dark:border-primary/40">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <span>
              This is sample data to help you get familiar with the system. You can edit or replace it with your own numbers anytime from Data Inputs or Settings.
            </span>
            <Button variant="ghost" size="sm" className="shrink-0 gap-1 h-8" onClick={handleDismiss}>
              <X className="h-4 w-4" />
              Got it
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Hero KPIs */}
      <section>
        <HeroKPIs />
      </section>

      {/* Financial Summary */}
      <section>
        <FinancialSummary />
      </section>

      {/* Monthly Targets */}
      <section>
        <MonthlyTargetsCalendar />
      </section>

      {/* Bottom Row - Cost Breakdown & Facilities */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <CostBreakdown />
        <BranchFacilities />
      </section>
    </div>
  )
}

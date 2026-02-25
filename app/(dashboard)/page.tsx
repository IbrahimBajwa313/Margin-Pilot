"use client"

import { HeroKPIs } from "@/components/hero-kpis"
import { FinancialSummary } from "@/components/financial-summary"
import { MonthlyTargetsCalendar } from "@/components/monthly-targets-calendar"
import { CostBreakdown } from "@/components/cost-breakdown"
import { BranchFacilities } from "@/components/branch-facilities"

export default function DashboardPage() {
  return (
    <div className="space-y-4 lg:space-y-6">
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

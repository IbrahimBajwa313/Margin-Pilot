"use client"

import { useAppContext } from "@/lib/app-context"
import { useEfficiency } from "@/hooks/use-efficiency"
import { KPICard } from "@/components/kpi-card"
import { TodaysActualCard } from "@/components/todays-actual-card"
import { Badge } from "@/components/ui/badge"
import { useCurrency } from "@/hooks/use-currency"

export function HeroKPIs() {
  const { calculatedTargets, data } = useAppContext()
  const { requiredEfficiency, color, label } = useEfficiency()
  const { symbol } = useCurrency()

  const dailyTargetStatus = calculatedTargets.standardDailyGpTarget >= 473 ? "default" : "destructive"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <KPICard
        title="Monthly GP Target"
        value={`${symbol}${calculatedTargets.averageMonthlyGpTarget.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
        subtitle="Average monthly requirement"
        badge={
          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: "65%" }} />
          </div>
        }
      />

      <KPICard
        title="Daily GP Target"
        value={`${symbol}${calculatedTargets.standardDailyGpTarget.toFixed(0)}`}
        subtitle="Standard daily target"
        badge={
          <Badge variant={dailyTargetStatus}>
            {dailyTargetStatus === "destructive" ? "Action Needed" : "On Track"}
          </Badge>
        }
      />

      <TodaysActualCard />

      <KPICard
        title="Efficiency Required"
        value={`${requiredEfficiency}%`}
        badge={
          <Badge variant={color}>
            {label}
          </Badge>
        }
      />

      <KPICard title="Avg Labour Rate" value={`${symbol}${data.avgLabourRate}/hr`} subtitle="Market competitive" />
    </div>
  )
}

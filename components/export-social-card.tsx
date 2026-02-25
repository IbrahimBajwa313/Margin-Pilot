"use client"

import type { WorkshopData } from "@/components/shared/types"
import type { ExportTargets, ExportEfficiency } from "@/lib/export-utils"
import { useAuth } from "@/lib/auth-context"

interface ExportSocialCardProps {
  data: WorkshopData
  targets: ExportTargets
  efficiency: ExportEfficiency
  symbol: string
  /** When true, use share-optimized styling (light bg, dark text) so the image looks good everywhere */
  shareOptimized?: boolean
  className?: string
}

/** Card designed for sharing: 1200×630 (Open Graph), rich data, readable anywhere. */
export function ExportSocialCard({
  data,
  targets,
  efficiency,
  symbol,
  shareOptimized = true,
  className = "",
}: ExportSocialCardProps) {
  const { userProfile } = useAuth()
  const companyName = userProfile?.company?.name || "My Workshop"
  const techCount = data.technicians.length
  const staffCount = data.staff.length
  const ramps = data.ramps ?? 0
  const workshopSize = data.workshopSize ?? 0

  // Expense totals (from data or compute from arrays)
  const fixedTotal = data.fixedExpenses?.reduce((s, e) => s + e.value, 0) ?? data.fixedExpensesTotal ?? 0
  const marketingTotal = data.marketing?.reduce((s, e) => s + e.value, 0) ?? data.marketingTotal ?? 0
  const loansTotal = data.loans?.reduce((s, l) => s + l.monthlyRepayment, 0) ?? data.loansTotal ?? 0
  const staffTotal =
    data.staff?.reduce((s, st) => {
      const m = st.annualSalary / 12
      return s + m + (m * st.pensionPercentage) / 100 + (m * st.employerTaxPercentage) / 100
    }, 0) ?? data.staffTotal ?? 0
  const techTotal =
    data.technicians?.reduce((s, t) => s + t.hourlyPayRate * t.billableHoursPerWeek * 4.33, 0) ??
    data.techniciansTotal ??
    0

  const formatNum = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toFixed(0)
  const formatCurrency = (n: number) => `${symbol}${formatNum(n)}`

  const bg = shareOptimized
    ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
    : undefined
  const cardBg = shareOptimized ? "rgba(255,255,255,0.97)" : undefined
  const textPrimary = shareOptimized ? "#0f172a" : undefined
  const textMuted = shareOptimized ? "#475569" : undefined
  const accent = shareOptimized ? "#0ea5e9" : undefined
  const borderColor = shareOptimized ? "rgba(14, 165, 233, 0.35)" : undefined
  const borderLight = shareOptimized ? "#e2e8f0" : undefined

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-2xl ${className}`}
      style={{
        width: 1200,
        height: 630,
        background: bg,
        padding: 20,
        boxSizing: "border-box",
      }}
    >
      <div
        className="h-full w-full rounded-xl flex flex-col p-6"
        style={{
          background: cardBg ?? undefined,
          border: borderColor ? `2px solid ${borderColor}` : undefined,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: textPrimary ?? "var(--foreground)" }}
            >
              MarginPilot
            </span>
            <span
              className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                color: accent ?? "var(--primary)",
                backgroundColor: shareOptimized ? "rgba(14, 165, 233, 0.12)" : undefined,
              }}
            >
              Workshop snapshot
            </span>
          </div>
          <span
            className="text-xs font-medium"
            style={{ color: textMuted ?? "var(--muted-foreground)" }}
          >
            {companyName}
          </span>
        </div>

        {/* Row 1: Main KPIs – 4 big numbers */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <MetricBlock
            label="Labour rate"
            value={`${symbol}${data.avgLabourRate}/hr`}
            sub="Current average"
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
          <MetricBlock
            label="Daily GP target"
            value={`${symbol}${targets.standardDailyGpTarget.toFixed(0)}`}
            sub="To hit goals"
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
          <MetricBlock
            label="Monthly GP target"
            value={formatCurrency(targets.averageMonthlyGpTarget)}
            sub="Sustainable growth"
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
          <MetricBlock
            label="Efficiency required"
            value={`${efficiency.requiredEfficiency}%`}
            sub="To meet targets"
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
        </div>

        {/* Row 2: Secondary metrics */}
        <div
          className="grid grid-cols-4 gap-4 py-3 border-t border-b mb-3"
          style={{ borderColor: borderLight }}
        >
          <SmallMetric
            label="Monthly expenses"
            value={formatCurrency(targets.totalMonthlyExpenses)}
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
          <SmallMetric
            label="Annual expenses"
            value={formatCurrency(targets.totalAnnualExpenses)}
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
          <SmallMetric
            label="Breakeven efficiency"
            value={`${efficiency.breakevenEfficiency}%`}
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
          <SmallMetric
            label="Working days/month"
            value={targets.averageMonthlyWorkingDays.toFixed(1)}
            textPrimary={textPrimary}
            textMuted={textMuted}
          />
        </div>

        {/* Row 3: Expense breakdown – table so labels and values are fully visible */}
        <div className="mb-3">
          <p
            className="text-[10px] font-semibold uppercase tracking-wider mb-1.5"
            style={{ color: textMuted ?? "var(--muted-foreground)" }}
          >
            Monthly cost breakdown
          </p>
          <div
            className="grid grid-cols-5 gap-0 rounded-lg border overflow-hidden"
            style={{
              borderColor: borderLight ?? "var(--border)",
              backgroundColor: textMuted ? "rgba(71, 85, 105, 0.06)" : undefined,
              minHeight: 56,
            }}
          >
            <BreakdownCell label="Fixed" value={formatCurrency(fixedTotal)} textPrimary={textPrimary} textMuted={textMuted} borderLight={borderLight} />
            <BreakdownCell label="Marketing" value={formatCurrency(marketingTotal)} textPrimary={textPrimary} textMuted={textMuted} borderLight={borderLight} />
            <BreakdownCell label="Loans" value={formatCurrency(loansTotal)} textPrimary={textPrimary} textMuted={textMuted} borderLight={borderLight} />
            <BreakdownCell label="Staff" value={formatCurrency(staffTotal)} textPrimary={textPrimary} textMuted={textMuted} borderLight={borderLight} />
            <BreakdownCell label="Technicians" value={formatCurrency(techTotal)} textPrimary={textPrimary} textMuted={textMuted} borderLight={borderLight} />
          </div>
        </div>

        {/* Row 4: Workshop stats + CTA */}
        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: borderLight }}
        >
          <div className="flex gap-6 text-xs">
            <Stat label="Technicians" value={String(techCount)} labelColor={textMuted} valueColor={textPrimary} />
            <Stat label="Staff/Advisors" value={String(staffCount)} labelColor={textMuted} valueColor={textPrimary} />
            <Stat label="Ramps" value={ramps ? `${ramps}` : "—"} labelColor={textMuted} valueColor={textPrimary} />
            <Stat label="Workshop" value={workshopSize ? `${workshopSize} m²` : "—"} labelColor={textMuted} valueColor={textPrimary} />
            <Stat label="Parts profit/mo" value={formatCurrency(data.estimatedMonthlyPartsProfitEuro ?? 0)} labelColor={textMuted} valueColor={textPrimary} />
            {data.ownerProfitGoal != null && data.ownerProfitGoal > 0 && (
              <Stat label="Owner goal/mo" value={formatCurrency(data.ownerProfitGoal)} labelColor={textMuted} valueColor={textPrimary} />
            )}
          </div>
          <span
            className="text-xs font-medium shrink-0"
            style={{ color: textMuted ?? "var(--muted-foreground)" }}
          >
            marginpilot.app
          </span>
        </div>
      </div>
    </div>
  )
}

function MetricBlock({
  label,
  value,
  sub,
  textPrimary,
  textMuted,
}: {
  label: string
  value: string
  sub: string
  textPrimary?: string
  textMuted?: string
}) {
  return (
    <div>
      <p
        className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
        style={{ color: textMuted ?? "var(--muted-foreground)" }}
      >
        {label}
      </p>
      <p
        className="text-2xl font-bold tracking-tight leading-tight"
        style={{ color: textPrimary ?? "var(--foreground)" }}
      >
        {value}
      </p>
      <p
        className="text-[10px] mt-0.5"
        style={{ color: textMuted ?? "var(--muted-foreground)" }}
      >
        {sub}
      </p>
    </div>
  )
}

function SmallMetric({
  label,
  value,
  textPrimary,
  textMuted,
}: {
  label: string
  value: string
  textPrimary?: string
  textMuted?: string
}) {
  return (
    <div>
      <p
        className="text-[10px] font-medium uppercase tracking-wider"
        style={{ color: textMuted ?? "var(--muted-foreground)" }}
      >
        {label}
      </p>
      <p
        className="text-sm font-bold leading-tight mt-0.5"
        style={{ color: textPrimary ?? "var(--foreground)" }}
      >
        {value}
      </p>
    </div>
  )
}

function BreakdownCell({
  label,
  value,
  textPrimary,
  textMuted,
  borderLight,
}: {
  label: string
  value: string
  textPrimary?: string
  textMuted?: string
  borderLight?: string
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-2 px-1.5 min-w-0 border-r last:border-r-0 box-border"
      style={{ borderColor: borderLight ?? "var(--border)" }}
    >
      <p className="text-[9px] font-semibold uppercase leading-tight mb-0.5 whitespace-nowrap" style={{ color: textMuted ?? "var(--muted-foreground)" }}>
        {label}
      </p>
      <p className="text-[11px] font-bold leading-tight text-center break-all max-w-full" style={{ color: textPrimary ?? "var(--foreground)" }}>
        {value}
      </p>
    </div>
  )
}

function Stat({
  label,
  value,
  labelColor,
  valueColor,
}: {
  label: string
  value: string
  labelColor?: string
  valueColor?: string
}) {
  return (
    <div>
      <span className="text-[10px]" style={{ color: labelColor ?? "var(--muted-foreground)" }}>
        {label}:{" "}
      </span>
      <span className="font-semibold" style={{ color: valueColor ?? "var(--foreground)" }}>
        {value}
      </span>
    </div>
  )
}

"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToolsData } from "@/hooks/use-tools-data"

// ——— 2024/25 HMRC constants ———
const PERSONAL_ALLOWANCE = 12_570
const DIVIDEND_ALLOWANCE = 500
const BASIC_RATE_LIMIT = 50_270
const ADDITIONAL_RATE_LIMIT = 125_140
const HIGH_INCOME_TAPER_START = 100_000
const RATE_BASIC = 8.75
const RATE_HIGHER = 33.75
const RATE_ADDITIONAL = 39.35

const HIGHER_BAND_SIZE = ADDITIONAL_RATE_LIMIT - BASIC_RATE_LIMIT // 74,870

export interface DividendTaxResult {
  totalIncome: number
  effectivePersonalAllowance: number
  paUsedOnSalary: number
  paUsedOnDividends: number
  taxableSalary: number
  grossTaxableDividends: number
  dividendAllowanceUsed: number
  netTaxableDividends: number
  dividendInBasic: number
  dividendInHigher: number
  dividendInAdditional: number
  taxBasic: number
  taxHigher: number
  taxAdditional: number
  totalDividendTax: number
  afterTaxDividends: number
  effectiveRatePct: number
}

/**
 * UK HMRC 2024/25 Dividend Tax — strict order of operations.
 * 1. Total income → 2. PA taper if income > £100k → 3. Allocate PA to salary first → 4. Taxable dividends (minus DA £500) → 5. Stack and apply band rates.
 */
function calcDividendTax(
  dividendIncome: number,
  salary: number
): DividendTaxResult {
  const totalIncome = salary + dividendIncome

  // Step 2: Personal allowance adjustment (taper over £100k, zero at £125,140)
  let effectivePA = PERSONAL_ALLOWANCE
  if (totalIncome >= ADDITIONAL_RATE_LIMIT) {
    effectivePA = 0
  } else if (totalIncome > HIGH_INCOME_TAPER_START) {
    const reduction = (totalIncome - HIGH_INCOME_TAPER_START) / 2
    effectivePA = Math.max(0, Math.floor(PERSONAL_ALLOWANCE - reduction))
  }

  // Step 3: Allocate PA to salary first, then carry unused to dividends
  const paUsedOnSalary = Math.min(salary, effectivePA)
  const unusedPA = effectivePA - paUsedOnSalary
  const paUsedOnDividends = Math.min(dividendIncome, unusedPA)

  // Step 4: Taxable dividends (gross then minus dividend allowance)
  const grossTaxableDividends = Math.max(0, dividendIncome - paUsedOnDividends)
  const dividendAllowanceUsed = Math.min(DIVIDEND_ALLOWANCE, grossTaxableDividends)
  const netTaxableDividends = Math.max(0, grossTaxableDividends - dividendAllowanceUsed)

  // For band stacking: taxable salary is salary minus PA used on salary
  const taxableSalary = Math.max(0, salary - paUsedOnSalary)

  // Step 5: Stack — salary at bottom, dividend on top; apply band rates to dividend portions
  const basicBandSpace = Math.max(0, BASIC_RATE_LIMIT - taxableSalary)
  const dividendInBasic = Math.min(netTaxableDividends, basicBandSpace)
  const dividendInHigher = Math.min(
    Math.max(0, netTaxableDividends - dividendInBasic),
    HIGHER_BAND_SIZE
  )
  const dividendInAdditional = Math.max(
    0,
    netTaxableDividends - dividendInBasic - dividendInHigher
  )

  const taxBasic = (dividendInBasic * RATE_BASIC) / 100
  const taxHigher = (dividendInHigher * RATE_HIGHER) / 100
  const taxAdditional = (dividendInAdditional * RATE_ADDITIONAL) / 100
  const totalDividendTax = taxBasic + taxHigher + taxAdditional
  const afterTaxDividends = dividendIncome - totalDividendTax
  const effectiveRatePct =
    dividendIncome > 0 ? (totalDividendTax / dividendIncome) * 100 : 0

  return {
    totalIncome,
    effectivePersonalAllowance: effectivePA,
    paUsedOnSalary,
    paUsedOnDividends,
    taxableSalary,
    grossTaxableDividends,
    dividendAllowanceUsed,
    netTaxableDividends,
    dividendInBasic,
    dividendInHigher,
    dividendInAdditional,
    taxBasic,
    taxHigher,
    taxAdditional,
    totalDividendTax,
    afterTaxDividends,
    effectiveRatePct,
  }
}

function formatPounds(n: number) {
  return `£${n.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

/** Generate a short scenario explanation based on inputs and result */
function getScenarioExplanation(
  salary: number,
  dividendIncome: number,
  r: DividendTaxResult
): string {
  if (salary === 0 && dividendIncome === 0) {
    return "Enter your salary and dividend income to see how your dividend tax is calculated."
  }
  if (r.effectivePersonalAllowance === 0) {
    return `Because your total income (${formatPounds(r.totalIncome)}) is £125,140 or more, your Personal Allowance is reduced to zero. All of your dividends above the £500 allowance are taxed at Basic, Higher, or Additional rates depending on the band.`
  }
  if (r.paUsedOnSalary >= salary && salary > 0) {
    const unused = r.effectivePersonalAllowance - r.paUsedOnSalary
    if (unused <= 0) {
      return `Your salary (${formatPounds(salary)}) uses your full Personal Allowance (${formatPounds(r.effectivePersonalAllowance)}). Your dividends are taxed after the £500 Dividend Allowance.`
    }
    return `Your salary (${formatPounds(salary)}) uses part of your Personal Allowance. The remaining allowance (${formatPounds(unused)}) covers some of your dividends; the rest is taxable after the £500 Dividend Allowance.`
  }
  if (r.paUsedOnDividends > 0) {
    return `Because your salary (${formatPounds(salary)}) is lower than your Personal Allowance, the unused allowance (${formatPounds(r.paUsedOnDividends)}) covers part of your dividends. The remaining dividends are taxable after the £500 Dividend Allowance.`
  }
  return `Your salary (${formatPounds(salary)}) uses your full Personal Allowance. Your dividends are taxed after the £500 Dividend Allowance, with the taxable amount split across Basic (8.75%), Higher (33.75%), and Additional (39.35%) rates.`
}

export default function DividendTaxCalculatorPage() {
  const { data, update } = useToolsData()
  const { dividendIncome, otherIncome } = data.dividendTaxCalc
  const salary = otherIncome
  const result = calcDividendTax(dividendIncome, salary)
  const explanation = getScenarioExplanation(salary, dividendIncome, result)

  // Stack visual: total income height = 100%. Segments from bottom: salary (PA), dividends (PA), dividends (DA), dividends (taxable)
  const total = result.totalIncome
  const pct = (v: number) => (total > 0 ? (v / total) * 100 : 0)
  const salaryPaPct = pct(result.paUsedOnSalary)
  const divPaPct = pct(result.paUsedOnDividends)
  const divDaPct = pct(result.dividendAllowanceUsed)
  const divTaxablePct = pct(result.netTaxableDividends)
  const salaryTaxablePct = pct(result.taxableSalary)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link href="/tools">
          <Button variant="outline" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-lg md:text-2xl font-bold text-foreground">
            Dividend Tax Calculator
          </h1>
          <p className="text-sm text-muted-foreground">
            2024/25: PA £12,570, Dividend Allowance £500. Salary uses PA first; income over £100k tapers PA.
          </p>
        </div>
      </div>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Income</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">Other income / Salary (£)</Label>
            <Input
              type="number"
              min={0}
              step={100}
              value={salary || ""}
              onChange={(e) =>
                update("dividendTaxCalc", { otherIncome: Number(e.target.value) || 0 })
              }
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Dividend income (£)</Label>
            <Input
              type="number"
              min={0}
              step={100}
              value={dividendIncome || ""}
              onChange={(e) =>
                update("dividendTaxCalc", { dividendIncome: Number(e.target.value) || 0 })
              }
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
        </CardContent>
      </Card>

      {/* Income stack visual */}
      {result.totalIncome > 0 && (
        <Card className="card-panel rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Income stack</CardTitle>
            <p className="text-sm text-muted-foreground">
              Salary at bottom, dividends on top. PA applied to salary first, then unused PA and £500 allowance to dividends.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full rounded-lg overflow-hidden border border-border bg-muted/30">
              <div className="flex flex-col h-32">
                {/* Top: taxable dividends (taxed at 8.75 / 33.75 / 39.35) */}
                {result.netTaxableDividends > 0 && (
                  <div
                    className="bg-mp-amber/30 border-b border-white/10 flex items-center justify-center text-xs font-medium text-foreground"
                    style={{ height: `${divTaxablePct}%`, minHeight: divTaxablePct > 0 ? "20px" : 0 }}
                  >
                    {divTaxablePct > 8 && `Dividends (taxable) ${formatPounds(result.netTaxableDividends)}`}
                  </div>
                )}
                {/* Dividend allowance £500 */}
                {result.dividendAllowanceUsed > 0 && (
                  <div
                    className="bg-mp-green/30 border-b border-white/10 flex items-center justify-center text-xs font-medium text-foreground"
                    style={{ height: `${divDaPct}%`, minHeight: divDaPct > 0 ? "16px" : 0 }}
                  >
                    {divDaPct > 8 && `Dividend allowance ${formatPounds(result.dividendAllowanceUsed)}`}
                  </div>
                )}
                {/* Dividends covered by PA */}
                {result.paUsedOnDividends > 0 && (
                  <div
                    className="bg-mp-teal/20 border-b border-white/10 flex items-center justify-center text-xs font-medium text-foreground"
                    style={{ height: `${divPaPct}%`, minHeight: divPaPct > 0 ? "16px" : 0 }}
                  >
                    {divPaPct > 8 && `Dividends (PA) ${formatPounds(result.paUsedOnDividends)}`}
                  </div>
                )}
                {/* Taxable salary */}
                {result.taxableSalary > 0 && (
                  <div
                    className="bg-muted border-b border-white/10 flex items-center justify-center text-xs font-medium text-foreground"
                    style={{ height: `${salaryTaxablePct}%`, minHeight: salaryTaxablePct > 0 ? "16px" : 0 }}
                  >
                    {salaryTaxablePct > 8 && `Salary (taxable) ${formatPounds(result.taxableSalary)}`}
                  </div>
                )}
                {/* Salary covered by PA (bottom) */}
                {result.paUsedOnSalary > 0 && (
                  <div
                    className="bg-mp-teal/20 flex items-center justify-center text-xs font-medium text-foreground"
                    style={{ height: `${salaryPaPct}%`, minHeight: salaryPaPct > 0 ? "16px" : 0 }}
                  >
                    {salaryPaPct > 8 && `Salary (PA) ${formatPounds(result.paUsedOnSalary)}`}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded bg-mp-teal/30" /> PA (tax-free)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded bg-mp-green/30" /> Dividend allowance £500
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded bg-mp-amber/30" /> Dividends taxable
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Total income</span>
              <p className="font-semibold text-foreground text-lg mt-1">
                {formatPounds(result.totalIncome)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Personal allowance (effective)</span>
              <p className="font-semibold text-foreground text-lg mt-1">
                {formatPounds(result.effectivePersonalAllowance)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">PA used on salary</span>
              <p className="font-semibold text-mp-teal text-lg mt-1">
                {formatPounds(result.paUsedOnSalary)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">PA used on dividends</span>
              <p className="font-semibold text-mp-teal text-lg mt-1">
                {formatPounds(result.paUsedOnDividends)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Dividend allowance used</span>
              <p className="font-semibold text-mp-green text-lg mt-1">
                {formatPounds(result.dividendAllowanceUsed)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Taxable dividends</span>
              <p className="font-semibold text-foreground text-lg mt-1">
                {formatPounds(result.netTaxableDividends)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Dividend tax due</span>
              <p className="font-semibold text-mp-amber text-lg mt-1">
                {formatPounds(result.totalDividendTax)}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Effective tax rate (on dividends)</span>
              <p className="font-semibold text-foreground text-lg mt-1">
                {dividendIncome > 0 ? `${result.effectiveRatePct.toFixed(1)}%` : "—"}
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Dividends after tax</span>
              <p className="font-semibold text-mp-green text-lg mt-1">
                {formatPounds(result.afterTaxDividends)}
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-muted/50 border border-border p-4 text-sm">
            <p className="text-muted-foreground mb-2">
              Bands: Basic 8.75% (up to £50,270), Higher 33.75% (£50,271–£125,140), Additional 39.35% (over £125,140).
            </p>
            <p className="text-muted-foreground">
              Dividend in bands: Basic {formatPounds(result.dividendInBasic)} → {formatPounds(result.taxBasic)} tax · Higher {formatPounds(result.dividendInHigher)} → {formatPounds(result.taxHigher)} · Additional {formatPounds(result.dividendInAdditional)} → {formatPounds(result.taxAdditional)}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background/50 p-4">
            <p className="text-sm text-muted-foreground font-medium mb-1">How this is calculated</p>
            <p className="text-sm text-foreground">{explanation}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

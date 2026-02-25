"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToolsData } from "@/hooks/use-tools-data"

const SMALL_PROFITS_LIMIT = 50_000
const MAIN_RATE_LIMIT = 250_000
const SMALL_RATE = 19
const MAIN_RATE = 25

function calcCorpTax(profits: number): { taxDue: number; effectiveRate: number; netProfit: number } {
  if (profits <= 0) return { taxDue: 0, effectiveRate: 0, netProfit: profits }

  if (profits <= SMALL_PROFITS_LIMIT) {
    const taxDue = profits * (SMALL_RATE / 100)
    return {
      taxDue,
      effectiveRate: SMALL_RATE,
      netProfit: profits - taxDue,
    }
  }

  if (profits >= MAIN_RATE_LIMIT) {
    const taxDue = profits * (MAIN_RATE / 100)
    return {
      taxDue,
      effectiveRate: MAIN_RATE,
      netProfit: profits - taxDue,
    }
  }

  // Marginal relief: Tax = (Profits * 25%) - Relief, Relief = (Upper - Profits) * (3/200)
  const relief = (MAIN_RATE_LIMIT - profits) * (3 / 200)
  const taxAtMain = profits * (MAIN_RATE / 100)
  const taxDue = Math.max(0, taxAtMain - relief)
  const effectiveRate = taxDue / profits * 100

  return {
    taxDue,
    effectiveRate,
    netProfit: profits - taxDue,
  }
}

export default function CorporationTaxCalculatorPage() {
  const { data, update } = useToolsData()
  const { profits } = data.corpTaxCalc

  const { taxDue, effectiveRate, netProfit } = calcCorpTax(profits)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link href="/tools">
          <Button variant="outline" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-lg md:text-2xl font-bold text-foreground">Corporation Tax Calculator</h1>
          <p className="text-sm text-muted-foreground">
            2024/25: Small profits (19% up to £50k), Main rate (25% from £250k), Marginal relief between.
          </p>
        </div>
      </div>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Total taxable profits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-w-xs">
            <Label className="text-muted-foreground">Profits (£)</Label>
            <Input
              type="number"
              min={0}
              step={100}
              value={profits || ""}
              onChange={(e) => update("corpTaxCalc", { profits: Number(e.target.value) || 0 })}
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Result</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Tax due</span>
              <p className="font-semibold text-mp-amber text-lg mt-1">£{taxDue.toFixed(2)}</p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Effective rate</span>
              <p className="font-semibold text-mp-purple text-lg mt-1">{effectiveRate.toFixed(2)}%</p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Net profit (after tax)</span>
              <p className="font-semibold text-mp-green text-lg mt-1">£{netProfit.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

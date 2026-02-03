"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToolsData } from "@/hooks/use-tools-data"

const RATES = [20, 5, 0] as const

export default function VATCalculatorPage() {
  const { data, update } = useToolsData()
  const { amount, rate, mode, customRate } = data.vatCalc

  const effectiveRate = rate === 0 && customRate != null ? customRate : rate

  const net = mode === "add" ? amount : amount / (1 + effectiveRate / 100)
  const gross = mode === "add" ? amount * (1 + effectiveRate / 100) : amount
  const vatAmount = Math.abs(gross - net)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link href="/tools">
          <Button variant="outline" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-lg md:text-2xl font-bold text-foreground">VAT Calculator</h1>
          <p className="text-sm text-muted-foreground">
            Add VAT (Net → Gross) or Remove VAT (Gross → Net). 20%, 5%, 0% or custom.
          </p>
        </div>
      </div>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Mode & amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
            <Button
              variant={mode === "add" ? "default" : "outline"}
              className={mode === "add" ? "bg-primary text-primary-foreground" : "border-border"}
              onClick={() => update("vatCalc", { mode: "add" })}
            >
              Add VAT (Net → Gross)
            </Button>
            <Button
              variant={mode === "remove" ? "default" : "outline"}
              className={mode === "remove" ? "bg-primary text-primary-foreground" : "border-border"}
              onClick={() => update("vatCalc", { mode: "remove" })}
            >
              Remove VAT (Gross → Net)
            </Button>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">
              {mode === "add" ? "Net amount (£)" : "Gross amount (£)"}
            </Label>
            <Input
              type="number"
              min={0}
              step={0.01}
              value={amount || ""}
              onChange={(e) => update("vatCalc", { amount: Number(e.target.value) || 0 })}
              placeholder="0"
              className="max-w-xs bg-muted/50 border-border"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">VAT rate</Label>
            <div className="flex gap-2 flex-wrap items-center">
              {RATES.map((r) => (
                <Button
                  key={r}
                  variant={effectiveRate === r ? "default" : "outline"}
                  className={effectiveRate === r ? "bg-primary text-primary-foreground" : "border-border"}
                  onClick={() => update("vatCalc", { rate: r, customRate: undefined })}
                >
                  {r}%
                </Button>
              ))}
              <span className="text-muted-foreground text-sm">or</span>
              <Input
                type="number"
                min={0}
                max={100}
                step={0.01}
                placeholder="Custom %"
                value={rate === 0 && customRate != null ? customRate : ""}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  update("vatCalc", { rate: 0, customRate: isNaN(v) ? undefined : v })
                }}
                className="w-24 h-9 bg-muted/50 border-border"
              />
              <span className="text-muted-foreground text-sm">%</span>
            </div>
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
              <span className="text-muted-foreground">Net</span>
              <p className="font-semibold text-foreground text-lg mt-1">£{net.toFixed(2)}</p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">VAT amount</span>
              <p className="font-semibold text-mp-amber text-lg mt-1">£{vatAmount.toFixed(2)}</p>
            </div>
            <div className="rounded-lg bg-muted/50 border border-border p-4">
              <span className="text-muted-foreground">Gross</span>
              <p className="font-semibold text-foreground text-lg mt-1">£{gross.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

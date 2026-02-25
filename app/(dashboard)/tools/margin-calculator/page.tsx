"use client"

import { useCallback, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToolsData, type MarginStrategy } from "@/hooks/use-tools-data"

const MARGIN_ITEMS_KEY = "workshop_margin_items"

function round2(n: number) {
  return Math.round(n * 100) / 100
}

function inputValue(n: number): string | number {
  if (n === 0 || !Number.isFinite(n)) return ""
  return n
}

/** Margin % from Markup % (no cost/price needed): margin = 100 * markup / (100 + markup) */
function marginFromMarkup(markupPct: number): number {
  if (!Number.isFinite(markupPct) || markupPct < 0) return 0
  const m = 100 * markupPct / (100 + markupPct)
  return round2(m)
}

/** Markup % from Margin % (no cost/price needed): markup = 100 * margin / (100 - margin) */
function markupFromMargin(marginPct: number): number {
  if (!Number.isFinite(marginPct) || marginPct < 0 || marginPct >= 100) return 0
  const m = 100 * marginPct / (100 - marginPct)
  return round2(m)
}

export default function MarginCalculatorPage() {
  const { data, update } = useToolsData()
  const { cost, price, markup, margin, strategies } = data.marginCalc

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const raw = localStorage.getItem(MARGIN_ITEMS_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as unknown
      if (Array.isArray(parsed) && parsed.length > 0) {
        const items = (parsed as MarginStrategy[]).filter(
          (x) =>
            x != null &&
            typeof x === "object" &&
            typeof x.id === "string" &&
            typeof x.markup === "number" &&
            typeof x.margin === "number"
        ).map((x) => ({ id: x.id, category: typeof x.category === "string" ? x.category : "", markup: x.markup, margin: x.margin }))
        if (items.length > 0) update("marginCalc", { strategies: items })
      }
    } catch {
      // ignore
    }
  }, [update])

  useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem(MARGIN_ITEMS_KEY, JSON.stringify(strategies))
  }, [strategies])

  const setCost = useCallback(
    (v: number) => {
      update("marginCalc", { cost: v })
      recalc(v, price, markup, margin, "cost", update)
    },
    [price, markup, margin, update]
  )
  const setPrice = useCallback(
    (v: number) => {
      update("marginCalc", { price: v })
      recalc(cost, v, markup, margin, "price", update)
    },
    [cost, markup, margin, update]
  )
  const setMarkup = useCallback(
    (v: number) => {
      update("marginCalc", { markup: v })
      recalc(cost, price, v, margin, "markup", update)
    },
    [cost, price, margin, update]
  )
  const setMargin = useCallback(
    (v: number) => {
      update("marginCalc", { margin: v })
      recalc(cost, price, markup, v, "margin", update)
    },
    [cost, price, markup, update]
  )


  const c = typeof cost === "number" && Number.isFinite(cost) ? cost : 0
  const p = typeof price === "number" && Number.isFinite(price) ? price : 0
  const mup = typeof markup === "number" && Number.isFinite(markup) ? markup : 0
  const mar = typeof margin === "number" && Number.isFinite(margin) ? margin : 0
  const profit = Number.isFinite(p - c) ? p - c : 0

  const addItem = useCallback(() => {
    const mupVal = c > 0 && p >= 0 ? round2(((p - c) / c) * 100) : mup
    const marVal = p > 0 && c >= 0 ? round2(((p - c) / p) * 100) : mar
    const next = [
      ...strategies,
      {
        id: crypto.randomUUID(),
        category: "",
        markup: Number.isFinite(mupVal) ? mupVal : 0,
        margin: Number.isFinite(marVal) ? marVal : 0,
      },
    ]
    update("marginCalc", { strategies: next })
  }, [c, p, mup, mar, strategies, update])

  const removeStrategy = useCallback(
    (id: string) => {
      update("marginCalc", {
        strategies: strategies.filter((s) => s.id !== id),
      })
    },
    [strategies, update]
  )

  const updateStrategy = useCallback(
    (id: string, field: "category" | "markup" | "margin", value: string | number) => {
      if (field === "category") {
        update("marginCalc", {
          strategies: strategies.map((s) =>
            s.id === id ? { ...s, category: String(value) } : s
          ),
        })
        return
      }
      const num = Number(value) || 0
      if (field === "markup") {
        const derivedMargin = marginFromMarkup(num)
        update("marginCalc", {
          strategies: strategies.map((s) =>
            s.id === id ? { ...s, markup: num, margin: derivedMargin } : s
          ),
        })
      } else {
        const derivedMarkup = markupFromMargin(num)
        update("marginCalc", {
          strategies: strategies.map((s) =>
            s.id === id ? { ...s, margin: num, markup: derivedMarkup } : s
          ),
        })
      }
    },
    [strategies, update]
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link href="/tools">
          <Button variant="outline" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-lg md:text-2xl font-bold text-foreground">Margin & Markup Calculator</h1>
          <p className="text-sm text-muted-foreground">
            Bi-directional: enter any two of Cost, Price, Markup %, or Margin %.
          </p>
        </div>
      </div>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Sandbox</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter <strong>Cost</strong> and <strong>Selling Price</strong> to calculate Markup % and Margin % (and profit). You can also change any two of the four fields — the others update automatically.
          </p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground">Cost (£)</Label>
            <Input
              type="number"
              min={0}
              step={0.01}
              value={inputValue(cost)}
              onChange={(e) => {
                const val = e.target.value
                if (val === "" || val === undefined) setCost(0)
                else setCost(Number(val) || 0)
              }}
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Selling Price (£)</Label>
            <Input
              type="number"
              min={0}
              step={0.01}
              value={inputValue(price)}
              onChange={(e) => {
                const val = e.target.value
                if (val === "" || val === undefined) setPrice(0)
                else setPrice(Number(val) || 0)
              }}
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Markup %</Label>
            <Input
              type="number"
              min={0}
              step={0.01}
              value={inputValue(markup)}
              onChange={(e) => {
                const val = e.target.value
                if (val === "" || val === undefined) setMarkup(0)
                else setMarkup(Number(val) || 0)
              }}
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Margin %</Label>
            <Input
              type="number"
              min={0}
              step={0.01}
              value={inputValue(margin)}
              onChange={(e) => {
                const val = e.target.value
                if (val === "" || val === undefined) setMargin(0)
                else setMargin(Number(val) || 0)
              }}
              placeholder="0"
              className="bg-muted/50 border-border"
            />
          </div>
        </CardContent>
        <CardContent className="pt-0 space-y-3">
          <div className="rounded-lg bg-muted/50 border border-border p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Cost</span>
              <p className="font-semibold text-foreground">£{Number.isFinite(c) ? round2(c) : "0.00"}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Price</span>
              <p className="font-semibold text-foreground">£{Number.isFinite(p) ? round2(p) : "0.00"}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Markup %</span>
              <p className="font-semibold text-mp-teal">{Number.isFinite(mup) ? round2(mup) : "0"}%</p>
            </div>
            <div>
              <span className="text-muted-foreground">Margin %</span>
              <p className="font-semibold text-mp-purple">{Number.isFinite(mar) ? round2(mar) : "0"}%</p>
            </div>
          </div>
          <p className="text-sm font-medium text-green-600 dark:text-green-400">
            Profit: £{Number.isFinite(profit) && profit >= 0 ? round2(profit) : "0.00"}
          </p>
        </CardContent>
      </Card>

      <Card className="card-panel rounded-2xl">
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base">Saved strategies</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Edit Markup % or Margin % — the other is calculated automatically.
            </p>
          </div>
          <Button onClick={addItem} className="w-full sm:w-auto shrink-0">
            <Plus className="h-4 w-4 mr-2" />
            Add row
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-1">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Category</TableHead>
                <TableHead className="text-muted-foreground">Markup %</TableHead>
                <TableHead className="text-muted-foreground">Margin %</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {strategies.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell>
                    <Input
                      value={row.category}
                      onChange={(e) => updateStrategy(row.id, "category", e.target.value)}
                      placeholder="e.g. Parts"
                      className="h-8 bg-muted/50 border-border text-sm"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      step={0.01}
                      value={Number.isFinite(row.markup) ? row.markup : ""}
                      onChange={(e) => updateStrategy(row.id, "markup", e.target.value)}
                      className="h-8 bg-muted/50 border-border text-sm w-24"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      step={0.01}
                      value={Number.isFinite(row.margin) ? row.margin : ""}
                      onChange={(e) => updateStrategy(row.id, "margin", e.target.value)}
                      className="h-8 bg-muted/50 border-border text-sm w-24"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-mp-red hover:bg-mp-red/20 h-8 w-8"
                      onClick={() => removeStrategy(row.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

type RecalcSource = "cost" | "price" | "markup" | "margin"

function safeNum(n: unknown): number {
  return typeof n === "number" && Number.isFinite(n) ? n : 0
}

/**
 * Bi-directional recalc with strict anchor rules:
 * - Cost: keep Markup → recalc Price & Margin
 * - Price: keep Cost → recalc Markup & Margin
 * - Markup: keep Cost → recalc Price & Margin
 * - Margin: keep Price → recalc Cost & Markup
 */
function recalc(
  cost: number,
  price: number,
  markup: number,
  margin: number,
  source: RecalcSource,
  update: ReturnType<typeof useToolsData>["update"]
) {
  const c = safeNum(cost)
  const p = safeNum(price)
  const mup = safeNum(markup)
  const mar = safeNum(margin)

  if (source === "cost") {
    if (c >= 0 && p > 0) {
      const newMup = c > 0 ? round2(((p - c) / c) * 100) : 0
      const newMar = round2(((p - c) / p) * 100)
      update("marginCalc", { markup: newMup, margin: newMar })
    } else if (c > 0 && mup >= 0) {
      const newP = round2(c * (1 + mup / 100))
      const newMar = newP > 0 ? round2(((newP - c) / newP) * 100) : 0
      update("marginCalc", { price: newP, margin: newMar })
    }
    return
  }

  if (source === "price") {
    if (c >= 0 && p > 0) {
      const newMup = c > 0 ? round2(((p - c) / c) * 100) : 0
      const newMar = round2(((p - c) / p) * 100)
      update("marginCalc", { markup: newMup, margin: newMar })
    }
    return
  }

  if (source === "markup") {
    if (c > 0 && mup >= 0) {
      const newP = round2(c * (1 + mup / 100))
      const newMar = newP > 0 ? round2(((newP - c) / newP) * 100) : 0
      update("marginCalc", { price: newP, margin: newMar })
    }
    return
  }

  if (source === "margin") {
    if (p > 0 && mar >= 0 && mar < 100) {
      const newC = round2(p * (1 - mar / 100))
      const newMup = newC > 0 ? round2(((p - newC) / newC) * 100) : 0
      update("marginCalc", { cost: newC, markup: newMup })
    }
    return
  }
}

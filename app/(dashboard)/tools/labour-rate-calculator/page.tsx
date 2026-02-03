"use client"

import { useCallback } from "react"
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
import { useToolsData } from "@/hooks/use-tools-data"

export default function LabourRateCalculatorPage() {
  const { data, update } = useToolsData()
  const { rows } = data.labourRateCalc

  const weightedRate = rows.reduce((sum, r) => sum + r.rate * (r.pct / 100), 0)
  const totalPct = rows.reduce((sum, r) => sum + r.pct, 0)
  const isValid = Math.abs(totalPct - 100) < 0.01

  const addRow = useCallback(() => {
    const next = [
      ...rows,
      {
        id: crypto.randomUUID(),
        name: "",
        rate: 0,
        pct: 0,
      },
    ]
    update("labourRateCalc", { rows: next })
  }, [rows, update])

  const removeRow = useCallback(
    (id: string) => {
      if (rows.length <= 1) return
      update("labourRateCalc", { rows: rows.filter((r) => r.id !== id) })
    },
    [rows, update]
  )

  const updateRow = useCallback(
    (id: string, field: "name" | "rate" | "pct", value: string | number) => {
      update("labourRateCalc", {
        rows: rows.map((r) =>
          r.id === id
            ? {
                ...r,
                [field]: field === "name" ? value : Number(value) || 0,
              }
            : r
        ),
      })
    },
    [rows, update]
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
          <h1 className="text-lg md:text-2xl font-bold text-foreground">Weighted Avg Labour Rate</h1>
          <p className="text-sm text-muted-foreground">
            Mix of work types: Sum(Rate × % of work). Total % should be 100%.
          </p>
        </div>
      </div>

      <Card className="card-panel rounded-2xl">
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base">Weighted average rate</CardTitle>
          <Button onClick={addRow} variant="outline" className="w-full sm:w-auto border-border">
            <Plus className="h-4 w-4 mr-2" />
            Add row
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted/50 border border-border p-4 md:p-6 text-center">
            <Label className="text-muted-foreground text-sm">Weighted Average Rate</Label>
            <p className="text-3xl font-bold text-mp-green mt-1">
              £{weightedRate.toFixed(2)}<span className="text-lg font-normal text-muted-foreground">/hr</span>
            </p>
            {!isValid && (
              <p className="text-sm text-mp-amber mt-2">
                Total % of work is {totalPct.toFixed(1)}%. It should equal 100%.
              </p>
            )}
          </div>

          <div className="overflow-x-auto -mx-1">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Rate Name</TableHead>
                <TableHead className="text-muted-foreground">Hourly Rate (£)</TableHead>
                <TableHead className="text-muted-foreground">% of Work</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell>
                    <Input
                      value={row.name}
                      onChange={(e) => updateRow(row.id, "name", e.target.value)}
                      placeholder="e.g. Service, Diagnostic, MOT"
                      className="h-8 bg-muted/50 border-border text-sm"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min={0}
                      step={0.01}
                      value={row.rate || ""}
                      onChange={(e) => updateRow(row.id, "rate", e.target.value)}
                      className="h-8 bg-muted/50 border-border text-sm w-28"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      step={0.1}
                      value={row.pct || ""}
                      onChange={(e) => updateRow(row.id, "pct", e.target.value)}
                      className="h-8 bg-muted/50 border-border text-sm w-24"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-mp-red hover:bg-mp-red/20 h-8 w-8"
                      onClick={() => removeRow(row.id)}
                      disabled={rows.length <= 1}
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

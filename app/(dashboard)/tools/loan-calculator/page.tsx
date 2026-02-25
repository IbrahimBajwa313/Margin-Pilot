"use client"

import { useCallback, useState } from "react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToolsData } from "@/hooks/use-tools-data"

function monthlyPaymentStandard(amount: number, annualRate: number, termYears: number): number {
  if (amount <= 0 || termYears <= 0) return 0
  const r = annualRate / 1200
  const n = termYears * 12
  if (r === 0) return amount / n
  return (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function monthlyPaymentInterestOnly(amount: number, annualRate: number): number {
  if (amount <= 0) return 0
  return (amount * (annualRate / 100)) / 12
}

export default function LoanCalculatorPage() {
  const { data, update } = useToolsData()
  const { amount, rate, term, startDate, type, savedLoans } = data.loanCalc

  const monthly =
    type === "standard"
      ? monthlyPaymentStandard(amount, rate, term)
      : type === "interest-only"
        ? monthlyPaymentInterestOnly(amount, rate)
        : 0 // balloon: user would handle separately

  const saveLoan = useCallback(
    (bankName: string) => {
      const name = bankName.trim() || "Loan"
      const payment =
        type === "standard"
          ? monthlyPaymentStandard(amount, rate, term)
          : type === "interest-only"
            ? monthlyPaymentInterestOnly(amount, rate)
            : 0
      const next = [
        ...savedLoans,
        {
          id: crypto.randomUUID(),
          bankName: name,
          amount,
          rate,
          term,
          startDate,
          type,
          monthlyPayment: payment,
        },
      ]
      update("loanCalc", { savedLoans: next })
    },
    [amount, rate, term, startDate, type, savedLoans, update, monthly]
  )

  const removeLoan = useCallback(
    (id: string) => {
      update("loanCalc", { savedLoans: savedLoans.filter((l) => l.id !== id) })
    },
    [savedLoans, update]
  )

  const [bankName, setBankName] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Link href="/tools">
          <Button variant="outline" size="icon" className="shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-lg md:text-2xl font-bold text-foreground">Loan Calculator & Tracker</h1>
          <p className="text-sm text-muted-foreground">
            Standard (amortized), interest-only or balloon. Save loans to track.
          </p>
        </div>
      </div>

      <Card className="card-panel rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Loan inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Loan amount (£)</Label>
              <Input
                type="number"
                min={0}
                step={100}
                value={amount || ""}
                onChange={(e) => update("loanCalc", { amount: Number(e.target.value) || 0 })}
                className="bg-muted/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Interest rate (annual %)</Label>
              <Input
                type="number"
                min={0}
                step={0.1}
                value={rate || ""}
                onChange={(e) => update("loanCalc", { rate: Number(e.target.value) || 0 })}
                className="bg-muted/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Term (years)</Label>
              <Input
                type="number"
                min={1}
                max={50}
                value={term || ""}
                onChange={(e) => update("loanCalc", { term: Number(e.target.value) || 0 })}
                className="bg-muted/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Start date</Label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => update("loanCalc", { startDate: e.target.value })}
                className="bg-muted/50 border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Loan type</Label>
              <Select
                value={type}
                onValueChange={(v: "standard" | "interest-only" | "balloon") =>
                  update("loanCalc", { type: v })
                }
              >
                <SelectTrigger className="bg-muted/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (Amortized)</SelectItem>
                  <SelectItem value="interest-only">Interest Only</SelectItem>
                  <SelectItem value="balloon">Balloon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 border border-border p-4">
            <span className="text-muted-foreground text-sm">Monthly payment (estimated)</span>
            <p className="text-2xl font-bold text-mp-green mt-1">
              £{monthly.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
            <Input
              placeholder="Bank / lender name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full sm:w-48 h-9 bg-muted/50 border-border"
            />
            <Button
              onClick={() => {
                saveLoan(bankName)
                setBankName("")
              }}
              className="w-full sm:w-auto"
            >
              <Plus className="h-4 w-4 mr-2" />
              Save loan
            </Button>
          </div>
        </CardContent>
      </Card>

      {savedLoans.length > 0 && (
        <Card className="card-panel rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">My loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto -mx-1">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-muted-foreground">Bank / Lender</TableHead>
                  <TableHead className="text-muted-foreground">Monthly payment</TableHead>
                  <TableHead className="text-muted-foreground">Remaining balance</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {savedLoans.map((loan) => (
                  <TableRow key={loan.id} className="border-white/5">
                    <TableCell className="font-medium">{loan.bankName}</TableCell>
                    <TableCell className="text-mp-green">£{loan.monthlyPayment.toFixed(2)}</TableCell>
                    <TableCell className="text-muted-foreground">
                      £{loan.amount.toLocaleString()} (at start)
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-mp-red hover:bg-mp-red/20 h-8 w-8"
                        onClick={() => removeLoan(loan.id)}
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
      )}
    </div>
  )
}

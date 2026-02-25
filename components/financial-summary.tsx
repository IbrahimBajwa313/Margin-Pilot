"use client"

import { useAppContext } from "@/lib/app-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertCircle } from "lucide-react"
import { useCurrency } from "@/hooks/use-currency"

export function FinancialSummary() {
  const { data } = useAppContext()
  const { symbol } = useCurrency()

  const fixedExpensesTotal = data.fixedExpenses.reduce((sum, exp) => sum + exp.value, 0)
  const marketingTotal = data.marketing.reduce((sum, exp) => sum + exp.value, 0)
  const loansTotal = data.loans.reduce((sum, loan) => sum + loan.monthlyRepayment, 0)
  const staffTotal = data.staff.reduce((sum, staff) => {
    const monthlySalary = staff.annualSalary / 12
    const pension = (monthlySalary * staff.pensionPercentage) / 100
    const tax = (monthlySalary * staff.employerTaxPercentage) / 100
    return sum + monthlySalary + pension + tax
  }, 0)
  const techniciansTotal = data.technicians.reduce((sum, tech) => {
    return sum + tech.hourlyPayRate * tech.billableHoursPerWeek * 4.33
  }, 0)

  const categories = [
    { label: "Fixed Expenses", value: fixedExpensesTotal, hasData: fixedExpensesTotal > 0 },
    { label: "Marketing", value: marketingTotal, hasData: marketingTotal > 0 },
    { label: "Loans", value: loansTotal, hasData: loansTotal > 0 },
    { label: "Staff Wages", value: staffTotal, hasData: staffTotal > 0 },
    { label: "Technicians", value: techniciansTotal, hasData: techniciansTotal > 0 },
    {
      label: "Parts Profit",
      value: data.estimatedMonthlyPartsProfitEuro,
      hasData: data.estimatedMonthlyPartsProfitEuro > 0,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Financial Input Summary</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">Data setup status and key metrics</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs text-muted-foreground mb-2">{cat.label}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  {typeof cat.value === "number" ? `${symbol}${cat.value.toFixed(2)}` : cat.value}
                </p>
                {cat.hasData ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

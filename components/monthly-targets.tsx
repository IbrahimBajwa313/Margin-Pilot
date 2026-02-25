"use client"

import { useMemo } from "react"
import { useAppContext } from "@/lib/app-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCurrency } from "@/hooks/use-currency"

export function MonthlyTargets() {
  const { data, calculatedTargets } = useAppContext()
  const { symbol } = useCurrency()

  // Calculate Total Monthly Expenses dynamically from live business data
  const totalMonthlyExpenses = useMemo(() => {
    const fixedExpenses = data.fixedExpenses?.reduce((acc, item) => acc + Number(item.value || 0), 0) || 0
    const marketing = data.marketing?.reduce((acc, item) => acc + Number(item.value || 0), 0) || 0
    const loans = data.loans?.reduce((acc, item) => acc + Number(item.monthlyRepayment || 0), 0) || 0
    const staff = data.staff?.reduce((acc, item) => {
      const monthlySalary = Number(item.annualSalary || 0) / 12
      const pension = (monthlySalary * Number(item.pensionPercentage || 0)) / 100
      const tax = (monthlySalary * Number(item.employerTaxPercentage || 0)) / 100
      return acc + monthlySalary + pension + tax
    }, 0) || 0
    const technicians = data.technicians?.reduce((acc, item) => {
      return acc + (Number(item.hourlyPayRate || 0) * Number(item.billableHoursPerWeek || 0) * 4.33)
    }, 0) || 0
    
    const total = fixedExpenses + marketing + loans + staff + technicians
    console.log("MonthlyTargets | Total Monthly Expenses Calculation:", {
      fixedExpenses,
      marketing,
      loans,
      staff,
      technicians,
      total
    })
    
    return total
  }, [data])

  // Generate monthly data dynamically with live calculations - NEW Fixed Daily / Variable Monthly Model
  const monthlyData = useMemo(() => {
    const months = [
      { name: "January", workingDays: 22 },
      { name: "February", workingDays: 20 },
      { name: "March", workingDays: 22 },
      { name: "April", workingDays: 21 },
      { name: "May", workingDays: 22 },
      { name: "June", workingDays: 21 },
      { name: "July", workingDays: 23 },
      { name: "August", workingDays: 22 },
      { name: "September", workingDays: 21 },
      { name: "October", workingDays: 23 },
      { name: "November", workingDays: 21 },
      { name: "December", workingDays: 22 }
    ]

    const data = months.map(month => ({
      month: month.name,
      workingDays: month.workingDays,
      dailyTarget: calculatedTargets.standardDailyGpTarget, // Same for all months
      monthlyTarget: calculatedTargets.standardDailyGpTarget * month.workingDays // Variable monthly target
    }))

    console.log("MonthlyTargets | Generated Monthly Data (Fixed Daily / Variable Monthly):", data.slice(0, 3)) // Log first 3 months for debugging

    return data
  }, [calculatedTargets.standardDailyGpTarget])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Monthly Targets & Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-3 px-3 font-semibold text-foreground">Month</th>
                <th className="text-right py-3 px-3 font-semibold text-foreground">Working Days</th>
                <th className="text-right py-3 px-3 font-semibold text-foreground">Daily Target</th>
                <th className="text-right py-3 px-3 font-semibold text-foreground">Monthly Target</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border ${
                    row.month === data.currentMonth
                      ? "bg-primary/10 border-primary/30"
                      : idx % 2 === 0
                        ? "bg-muted/30"
                        : ""
                  }`}
                >
                  <td className={`py-3 px-3 ${row.month === data.currentMonth ? "font-semibold text-primary" : ""}`}>
                    {row.month}
                  </td>
                  <td className="text-right py-3 px-3">{row.workingDays}</td>
                  <td className="text-right py-3 px-3">{symbol}{row.dailyTarget.toFixed(2)}</td>
                  <td className="text-right py-3 px-3 font-semibold">{symbol}{row.monthlyTarget.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

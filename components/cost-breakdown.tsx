"use client"

import { useMemo } from "react"
import { useAppContext } from "@/lib/app-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"
import { useCurrency } from "@/hooks/use-currency"

export function CostBreakdown() {
  const { data } = useAppContext()
  const { symbol } = useCurrency()

  // Data aggregation function to calculate totals from businessData object
  const chartData = useMemo(() => {
    // Calculate totals from actual context structure
    const fixedExpensesTotal = data.fixedExpenses.reduce((acc, item) => acc + item.value, 0)
    const marketingTotal = data.marketing.reduce((acc, item) => acc + item.value, 0)
    const loansTotal = data.loans.reduce((acc, item) => acc + item.monthlyRepayment, 0)
    const staffTotal = data.staff.reduce((acc, item) => {
      const monthlySalary = item.annualSalary / 12
      const pension = (monthlySalary * item.pensionPercentage) / 100
      const tax = (monthlySalary * item.employerTaxPercentage) / 100
      return acc + monthlySalary + pension + tax
    }, 0)
    const techniciansTotal = data.technicians.reduce((acc, item) => {
      return acc + item.hourlyPayRate * item.billableHoursPerWeek * 4.33
    }, 0)

    return [
      { name: 'Fixed Expenses', value: fixedExpensesTotal, fill: '#0d9488' }, // Teal
      { name: 'Marketing', value: marketingTotal, fill: '#3b82f6' },      // Blue
      { name: 'Loans', value: loansTotal, fill: '#ef4444' },          // Red
      { name: 'Staff', value: staffTotal, fill: '#f59e0b' },          // Amber
      { name: 'Technicians', value: techniciansTotal, fill: '#10b981' }, // Green
    ].filter(item => item.value > 0) // Only show segments that have money
  }, [data])

  const COLORS = ["#0d9488", "#3b82f6", "#ef4444", "#f59e0b", "#10b981"]

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-base">Cost Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[300px] lg:min-h-0">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
              {chartData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${symbol}${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

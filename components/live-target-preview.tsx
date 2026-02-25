"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAppContext } from "@/lib/app-context"
import { useEfficiency } from "@/hooks/use-efficiency"
import { useCurrency } from "@/hooks/use-currency"
import { Badge } from "@/components/ui/badge"

export function LiveTargetPreview() {
  const { data, calculatedTargets } = useAppContext()
  const { symbol } = useCurrency()

  // FIXED: Calculate total monthly expenses for display purposes with defensive coding
  const fixedExpensesTotal = data.fixedExpenses?.reduce((sum, exp) => sum + (Number(exp.value) || 0), 0) || 0
  const marketingTotal = data.marketing?.reduce((sum, exp) => sum + (Number(exp.value) || 0), 0) || 0
  const loansTotal = data.loans?.reduce((sum, loan) => sum + (Number(loan.monthlyRepayment) || 0), 0) || 0
  const staffTotal = data.staff?.reduce((sum, staff) => {
    const monthlySalary = Number(staff.annualSalary || 0) / 12
    const taxes = (monthlySalary * Number(staff.pensionPercentage || 0)) / 100
    const employerTax = (monthlySalary * Number(staff.employerTaxPercentage || 0)) / 100
    return sum + monthlySalary + taxes + employerTax
  }, 0) || 0
  const techniciansTotal = data.technicians?.reduce((sum, tech) => {
    return sum + (Number(tech.hourlyPayRate || 0) * Number(tech.billableHoursPerWeek || 0) * 4.33)
  }, 0) || 0

  const totalMonthlyExpenses = fixedExpensesTotal + marketingTotal + loansTotal + staffTotal + techniciansTotal

  // FIXED: Implement Simulator Logic for Breakeven Efficiency
  // 1. Inputs (From Global Context)
  const totalExpenses = totalMonthlyExpenses || 0 // Must include Wages + Fixed + Loans
  const partsProfit = Number(data.estimatedMonthlyPartsProfitEuro) || 0
  const techCount = data.technicians?.length || 0
  const workingDays = calculatedTargets.averageMonthlyWorkingDays // Use dynamic average from monthlyWorkingDays array
  const laborRate = Number(data.avgLabourRate) || 0

  // 2. The Formula (Same as Simulator)
  // Step A: Calculate the Max Potential Revenue using ACTUAL working days
  const maxPotentialRevenue = (techCount * 8 * workingDays) * laborRate

  // Step B: Calculate the Burden (Expenses minus Parts Profit)
  const breakevenBurden = totalExpenses - partsProfit

  // Step C: Calculate Efficiency %
  const correctBreakevenEfficiency = maxPotentialRevenue > 0 
    ? (breakevenBurden / maxPotentialRevenue) * 100 
    : 0

  // Get color and label for the corrected efficiency
  const getEfficiencyColor = (efficiency: number): "destructive" | "secondary" | "default" => {
    if (efficiency > 100) return "destructive"
    if (efficiency > 85) return "secondary"
    return "default"
  }

  const getEfficiencyLabel = (efficiency: number): string => {
    if (efficiency > 100) return "Impossible"
    if (efficiency > 85) return "High Stress"
    return "Healthy"
  }

  const breakevenColor = getEfficiencyColor(correctBreakevenEfficiency)
  const breakevenLabel = getEfficiencyLabel(correctBreakevenEfficiency)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Live Target Preview</h3>

      <div className="grid gap-4">
        {/* Total Monthly Expenses */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{symbol}{(Number(totalMonthlyExpenses) || 0).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-2">Sum of all expense categories</p>
          </CardContent>
        </Card>

        {/* Monthly GP Target */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly GP Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{symbol}{(Number(calculatedTargets.averageMonthlyGpTarget) || 0).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-2">Equals total monthly expenses</p>
          </CardContent>
        </Card>

        {/* Daily GP Target */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily GP Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{symbol}{(Number(calculatedTargets.standardDailyGpTarget) || 0).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-2">Monthly ÷ Working Days</p>
          </CardContent>
        </Card>

        {/* Breakeven Efficiency */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Breakeven Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{(Number(correctBreakevenEfficiency) || 0).toFixed(1)}%</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={breakevenColor}>
                {breakevenLabel}
              </Badge>
              <p className="text-xs text-muted-foreground">Minimum to survive</p>
            </div>
            <div className="mt-2 p-2 bg-green-50/50 rounded border border-green-200">
              <p className="text-xs text-green-800">
                <strong>Formula:</strong> (Total Costs - Parts Profit) ÷ (Techs × Working Days × 8hrs × Rate)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

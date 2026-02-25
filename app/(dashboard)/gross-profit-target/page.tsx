"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAppContext } from "@/lib/app-context"
import { MonthlyTargetsCalendar } from "@/components/monthly-targets-calendar"
import { Target, TrendingUp, DollarSign, PieChart as PieChartIcon, Calculator } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
import { useCurrency } from "@/hooks/use-currency"

// Custom Tooltip Component for Detailed Information
const CustomTooltip = ({ active, payload, label, symbol }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-background border border-border rounded-lg shadow-lg p-4 min-w-[200px]">
        <div className="font-semibold text-foreground mb-3">{label}</div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Monthly Target:</span>
            <span className="font-medium text-foreground">{symbol}{data.target.toFixed(0)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Daily Target:</span>
            <span className="font-medium text-foreground">{symbol}{data.dailyTarget.toFixed(0)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Working Days:</span>
            <span className="font-medium text-foreground">{data.workingDays}</span>
          </div>
          
          <div className="pt-2 mt-2 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Daily × Days:</span>
              <span className="text-xs text-foreground">
                {symbol}{data.dailyTarget.toFixed(0)} × {data.workingDays} = {symbol}{data.target.toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default function GrossProfitTarget() {
  const { data, calculatedTargets } = useAppContext()
  const { symbol } = useCurrency()

  // 1. Calculate Total Monthly Expenses (The Baseline Target)
  const totalExpenses = useMemo(() => {
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
    
    return fixedExpenses + marketing + loans + staff + technicians
  }, [data])

  // 2. Generate 12-Month Data for Bar Chart (NEW: Variable Monthly Targets)
  const monthlyTargetData = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    return months.map((month, index) => {
      const workingDays = data.monthlyWorkingDays[index] || 22
      const monthlyTarget = calculatedTargets.standardDailyGpTarget * workingDays
      
      return {
        month,
        target: monthlyTarget, // Variable monthly target
        workingDays,
        dailyTarget: calculatedTargets.standardDailyGpTarget // Same for all months
      }
    })
  }, [data.monthlyWorkingDays, calculatedTargets.standardDailyGpTarget])

  // 3. Generate Category Data for Donut Chart
  const costBreakdownData = useMemo(() => {
    const breakdown = [
      { name: 'Fixed Expenses', value: data.fixedExpenses?.reduce((acc, item) => acc + Number(item.value || 0), 0) || 0, fill: '#14b8a6' },
      { name: 'Marketing', value: data.marketing?.reduce((acc, item) => acc + Number(item.value || 0), 0) || 0, fill: '#3b82f6' },
      { name: 'Loans', value: data.loans?.reduce((acc, item) => acc + Number(item.monthlyRepayment || 0), 0) || 0, fill: '#ef4444' },
      { name: 'Staff', value: data.staff?.reduce((acc, item) => {
        const monthlySalary = Number(item.annualSalary || 0) / 12
        const pension = (monthlySalary * Number(item.pensionPercentage || 0)) / 100
        const tax = (monthlySalary * Number(item.employerTaxPercentage || 0)) / 100
        return acc + monthlySalary + pension + tax
      }, 0) || 0, fill: '#f59e0b' },
      { name: 'Technicians', value: data.technicians?.reduce((acc, item) => {
        return acc + (Number(item.hourlyPayRate || 0) * Number(item.billableHoursPerWeek || 0) * 4.33)
      }, 0) || 0, fill: '#10b981' }
    ]
    
    // Filter out items with value 0
    return breakdown.filter(item => item.value > 0)
  }, [data])

  const COLORS = ['#14b8a6', '#3b82f6', '#ef4444', '#f59e0b', '#10b981']

  // Calculate metrics using new financial logic
  const metrics = useMemo(() => {
    const monthlyBreakdown = costBreakdownData.reduce((acc, item) => acc + item.value, 0)
    
    return {
      standardDailyTarget: calculatedTargets.standardDailyGpTarget,
      averageMonthlyTarget: calculatedTargets.averageMonthlyGpTarget,
      annualTarget: calculatedTargets.totalAnnualExpenses,
      monthlyBreakdown,
      totalCategories: costBreakdownData.length
    }
  }, [calculatedTargets, costBreakdownData])

  return (
    <div className="space-y-4 md:space-y-6 p-4 md:p-6 min-w-0">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Gross Profit Target</h1>
          <p className="text-sm md:text-base text-muted-foreground">Financial planning and target visualization</p>
        </div>
        <Badge variant="secondary" className="text-base md:text-lg px-3 py-1.5 md:px-4 md:py-2 w-fit shrink-0">
          <Target className="w-4 h-4 mr-2" />
          Planning Mode
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Monthly Target</CardTitle>
            <DollarSign className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{symbol}{totalExpenses.toFixed(0)}</div>
            <p className="text-sm text-muted-foreground">Total monthly expenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Daily Target</CardTitle>
            <Calculator className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{symbol}{metrics.standardDailyTarget.toFixed(0)}</div>
            <p className="text-sm text-muted-foreground">Standard daily target</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Annual Target</CardTitle>
            <TrendingUp className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{symbol}{metrics.annualTarget.toFixed(0)}</div>
            <p className="text-sm text-muted-foreground">Yearly projection</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
        {/* Monthly Target Bar Chart */}
        <Card className="min-w-0 overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              12-Month Target Projection
            </CardTitle>
          </CardHeader>
          <CardContent className="min-w-0">
            <ResponsiveContainer width="100%" height={300} className="min-h-[280px]">
              <BarChart data={monthlyTargetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip symbol={symbol} />} />
                <Bar dataKey="target" fill="#14b8a6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Working Days:</strong> {calculatedTargets.averageMonthlyWorkingDays.toFixed(1)} days/month
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Daily Target:</strong> {symbol}{metrics.standardDailyTarget.toFixed(0)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cost Breakdown Donut Chart */}
        <Card className="min-w-0 overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <PieChartIcon className="w-5 h-5 shrink-0" />
              <span className="truncate">Monthly Cost Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="min-w-0">
            <ResponsiveContainer width="100%" height={300} className="min-h-[280px]">
              <PieChart>
                <Pie
                  data={costBreakdownData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {costBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${symbol}${Number(value).toFixed(0)}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 overflow-x-auto w-full -mx-1 px-1">
              <Table className="min-w-[240px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>% of Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {costBreakdownData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: item.fill }}
                          />
                          {item.name}
                        </div>
                      </TableCell>
                      <TableCell>{symbol}{item.value.toFixed(0)}</TableCell>
                      <TableCell>
                        {((item.value / metrics.monthlyBreakdown) * 100).toFixed(1)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown Table */}
      <Card className="min-w-0 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Calculator className="w-5 h-5 shrink-0" />
            <span className="truncate">Detailed Expense Breakdown</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-hidden">
          <div className="space-y-4">
            {/* Fixed Expenses */}
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-teal-600">Fixed Expenses</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.fixedExpenses?.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-medium">{symbol}{item.value.toFixed(0)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t flex justify-between">
                <span className="font-semibold">Total Fixed:</span>
                <span className="font-bold text-teal-600">
                  {symbol}{data.fixedExpenses?.reduce((acc, item) => acc + item.value, 0).toFixed(0)}
                </span>
              </div>
            </div>

            {/* Staff Costs */}
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3 text-amber-600">Staff Costs</h4>
              <div className="space-y-2">
                {data.staff?.map((item, index) => {
                  const monthlySalary = Number(item.annualSalary || 0) / 12
                  const pension = (monthlySalary * Number(item.pensionPercentage || 0)) / 100
                  const tax = (monthlySalary * Number(item.employerTaxPercentage || 0)) / 100
                  const total = monthlySalary + pension + tax
                  
                  return (
                    <div key={index} className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="font-medium">{symbol}{total.toFixed(0)}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 text-xs text-muted-foreground">
                        <span>Salary: {symbol}{monthlySalary.toFixed(0)}</span>
                        <span>Pension: {symbol}{pension.toFixed(0)}</span>
                        <span>Tax: {symbol}{tax.toFixed(0)}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-2 pt-2 border-t flex justify-between">
                <span className="font-semibold">Total Staff:</span>
                <span className="font-bold text-amber-600">
                  {symbol}{data.staff?.reduce((acc, item) => {
                    const monthlySalary = Number(item.annualSalary || 0) / 12
                    const pension = (monthlySalary * Number(item.pensionPercentage || 0)) / 100
                    const tax = (monthlySalary * Number(item.employerTaxPercentage || 0)) / 100
                    return acc + monthlySalary + pension + tax
                  }, 0).toFixed(0)}
                </span>
              </div>
            </div>

            {/* Other Costs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Marketing */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-blue-600">Marketing</h4>
                <div className="space-y-2">
                  {data.marketing?.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{item.name}</span>
                      <span className="font-medium">{symbol}{item.value.toFixed(0)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t flex justify-between">
                  <span className="font-semibold">Total Marketing:</span>
                  <span className="font-bold text-blue-600">
                    {symbol}{data.marketing?.reduce((acc, item) => acc + item.value, 0).toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Loans */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-red-600">Loans</h4>
                <div className="space-y-2">
                  {data.loans?.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{item.name}</span>
                      <span className="font-medium">{symbol}{item.monthlyRepayment.toFixed(0)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t flex justify-between">
                  <span className="font-semibold">Total Loans:</span>
                  <span className="font-bold text-red-600">
                    {symbol}{data.loans?.reduce((acc, item) => acc + item.monthlyRepayment, 0).toFixed(0)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grand Total */}
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
              <span className="text-base md:text-lg font-bold">Grand Total Monthly Expenses:</span>
              <span className="text-xl md:text-2xl font-bold text-primary">{symbol}{totalExpenses.toFixed(0)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Targets & Calendar Section */}
      <Card className="min-w-0 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl font-semibold">Monthly Targets & Calendar</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground">
            Detailed breakdown of your revenue requirements based on available working days.
          </p>
        </CardHeader>
        <CardContent>
          <MonthlyTargetsCalendar />
        </CardContent>
      </Card>
    </div>
  )
}
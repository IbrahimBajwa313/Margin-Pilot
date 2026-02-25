"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAppContext } from "@/lib/app-context"
import { useEfficiency } from "@/hooks/use-efficiency"
import { useCurrency } from "@/hooks/use-currency"
import { Info, Calculator, Calendar, TrendingUp, AlertTriangle, X } from "lucide-react"

const defaultCalendar = {
  daysInYear: 260,
  bankHolidays: 8,
  annualLeave: 20,
  sickDays: 2,
  efficiencyWorkingDays: 19.25
}

export default function EfficiencyAnalysisPage() {
  const { data, updateData, calculatedTargets } = useAppContext()
  const { requiredEfficiency, color, label, maxPotentialLaborRevenue } = useEfficiency()
  const { symbol } = useCurrency()
  const [showHeroInfo, setShowHeroInfo] = useState(true)

  const calendarSettings = data.efficiencyCalendar ?? defaultCalendar

  const saveCalendarSettings = (newSettings: typeof defaultCalendar) => {
    updateData({ efficiencyCalendar: newSettings })
  }

  // Calculate monthly average working days from dynamic context
  const monthlyAverageDays = calculatedTargets.averageMonthlyWorkingDays

  // Calculate technician resources
  const technicianResources = useMemo(() => {
    const techCount = data.technicians.length
    const hoursPerDay = 8
    const totalMonthlyHours = techCount * hoursPerDay * monthlyAverageDays
    
    return {
      techCount,
      hoursPerDay,
      totalMonthlyHours
    }
  }, [data.technicians, calculatedTargets.averageMonthlyWorkingDays])

  // Calculate financial targets
  const financialTargets = useMemo(() => {
    const grossProfitTarget = calculatedTargets?.averageMonthlyGpTarget || 0
    const partsProfit = data.estimatedMonthlyPartsProfitEuro || 0
    const netLaborTarget = grossProfitTarget - partsProfit
    
    return {
      grossProfitTarget,
      partsProfit,
      netLaborTarget
    }
  }, [calculatedTargets, data.estimatedMonthlyPartsProfitEuro])

  // Calculate efficiency result
  const efficiencyResult = useMemo(() => {
    const avgLaborRate = data.avgLabourRate || 75
    const hoursRequired = technicianResources.totalMonthlyHours > 0 ? financialTargets.netLaborTarget / avgLaborRate : 0
    
    return {
      maxPotentialRevenue: maxPotentialLaborRevenue,
      hoursRequired
    }
  }, [maxPotentialLaborRevenue, financialTargets.netLaborTarget, technicianResources.totalMonthlyHours, data.avgLabourRate])

  // Generate sensitivity matrix data
  const sensitivityMatrix = useMemo(() => {
    const avgLaborRate = data.avgLabourRate || 75
    const matrix = []
    
    for (let efficiency = 25; efficiency <= 100; efficiency += 5) {
      const laborSales = (technicianResources.totalMonthlyHours * avgLaborRate * efficiency) / 100
      const estimatedMonthlyGP = laborSales + financialTargets.partsProfit
      // Net Profit calculation removed as requested
      
      matrix.push({
        efficiency,
        laborSales,
        estimatedMonthlyGP
      })
    }
    
    return matrix
  }, [technicianResources.totalMonthlyHours, data.avgLabourRate, financialTargets.partsProfit])

  return (
    <div className="space-y-6 p-6">
      {/* Section A: Educational Hero */}
      {showHeroInfo && (
        <Alert className="bg-teal-50 border-teal-200 dark:bg-teal-950 dark:border-teal-800">
          <Info className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <AlertDescription className="text-teal-800 dark:text-teal-200">
            <div className="flex justify-between items-start">
              <div>
                <strong>Understanding Your Efficiency Foundation</strong>
                <p className="mt-1">We recommend a 60% efficiency baseline to ensure sustainable profitability and cash flow buffers.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHeroInfo(false)}
                className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Section B: Visual KPI Speedometer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Required Efficiency Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-48 h-48">
              {/* Speedometer visualization */}
              <div className="absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
              <div 
                className="absolute inset-0 rounded-full border-8 border-transparent"
                style={{
                  borderRightColor: color === 'destructive' ? '#ef4444' : color === 'secondary' ? '#f59e0b' : '#10b981',
                  transform: `rotate(${Math.min(requiredEfficiency, 100) * 1.8 - 90}deg)`
                }}
              ></div>
              <div className="absolute inset-4 rounded-full bg-background flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">{requiredEfficiency}%</div>
                <Badge variant={color} className="mt-1">{label}</Badge>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>&lt;70% Healthy</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span>70-85% On Par</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                <span>85-100% High Stress</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>&gt;100% Impossible</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section C: Calculation Logic Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Technician Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Calculator className="h-4 w-4" />
              Technician Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Tech Count:</span>
              <span className="font-medium">{technicianResources.techCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Hours/Day:</span>
              <span className="font-medium">{technicianResources.hoursPerDay}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Monthly Hours:</span>
              <span className="font-medium">{technicianResources.totalMonthlyHours.toFixed(1)}</span>
            </div>
            <div className="pt-2 border-t">
              <Label htmlFor="efficiency-days" className="text-sm">Efficiency Working Days:</Label>
              <Input
                id="efficiency-days"
                type="number"
                step="0.25"
                value={calendarSettings.efficiencyWorkingDays}
                onChange={(e) => saveCalendarSettings({...calendarSettings, efficiencyWorkingDays: parseFloat(e.target.value) || 19.25})}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Financial Targets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="h-4 w-4" />
              Financial Targets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Gross Profit Target:</span>
              <span className="font-medium">{symbol}{financialTargets.grossProfitTarget.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Parts Profit:</span>
              <span className="font-medium">{symbol}{financialTargets.partsProfit.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Net Labor Target:</span>
              <span className="font-medium text-teal-600">{symbol}{financialTargets.netLaborTarget.toFixed(0)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Efficiency Result */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4" />
              Efficiency Result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Max Potential Revenue:</span>
              <span className="font-medium">{symbol}{efficiencyResult.maxPotentialRevenue.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Hours Required:</span>
              <span className="font-medium">{efficiencyResult.hoursRequired.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Current Efficiency:</span>
              <Badge variant={color} className="text-xs">{requiredEfficiency}%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section D: Sensitivity Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Sensitivity Matrix
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Efficiency %</TableHead>
                  <TableHead>Labor Sales ({symbol})</TableHead>
                  <TableHead>Est. Monthly GP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sensitivityMatrix.map((row) => (
                  <TableRow 
                    key={row.efficiency}
                    className={row.efficiency === Math.round(requiredEfficiency) ? 'bg-teal-50 dark:bg-teal-950' : ''}
                  >
                    <TableCell className="font-medium">{row.efficiency}%</TableCell>
                    <TableCell>{symbol}{row.laborSales.toFixed(0)}</TableCell>
                    <TableCell>{symbol}{row.estimatedMonthlyGP.toFixed(0)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Section E: Workshop Calendar Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Workshop Calendar Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="days-in-year">Days in Year</Label>
              <Input
                id="days-in-year"
                type="number"
                value={calendarSettings.daysInYear}
                onChange={(e) => saveCalendarSettings({...calendarSettings, daysInYear: parseInt(e.target.value) || 260})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bank-holidays">Bank Holidays</Label>
              <Input
                id="bank-holidays"
                type="number"
                value={calendarSettings.bankHolidays}
                onChange={(e) => saveCalendarSettings({...calendarSettings, bankHolidays: parseInt(e.target.value) || 8})}
              />
              <div className="text-xs text-muted-foreground mt-1">
                Calculated: ({calendarSettings.daysInYear} - {calendarSettings.bankHolidays} - {calendarSettings.annualLeave} - {calendarSettings.sickDays}) ÷ 12
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Dynamic Average:</strong> {monthlyAverageDays.toFixed(2)} days/month
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="annual-leave">Annual Leave</Label>
              <Input
                id="annual-leave"
                type="number"
                value={calendarSettings.annualLeave}
                onChange={(e) => saveCalendarSettings({...calendarSettings, annualLeave: parseInt(e.target.value) || 20})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sick-days">Sick Days</Label>
              <Input
                id="sick-days"
                type="number"
                value={calendarSettings.sickDays}
                onChange={(e) => saveCalendarSettings({...calendarSettings, sickDays: parseInt(e.target.value) || 2})}
              />
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground">
              <strong>Dynamic Average:</strong> {monthlyAverageDays.toFixed(2)} days/month
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
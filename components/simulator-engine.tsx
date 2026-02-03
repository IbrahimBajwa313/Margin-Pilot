"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { useAppContext } from "@/lib/app-context"
import { useEfficiency } from "@/hooks/use-efficiency"
import { useCurrency } from "@/hooks/use-currency"
import { EfficiencyGauge } from "@/components/efficiency-gauge"
import { ProfitImpactChart } from "@/components/profit-impact-chart"
import { ScenarioMatrix } from "@/components/scenario-matrix"
import { Save, TrendingUp, AlertTriangle, Target } from "lucide-react"

export function SimulatorEngine() {
  const { data, calculatedTargets } = useAppContext()
  const { requiredEfficiency, color, label, maxPotentialLaborRevenue } = useEfficiency()
  const { symbol } = useCurrency()
  
  // Get business data with fallbacks to mock data
  const businessData = useMemo(() => {
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
    
    const totalExpenses = fixedExpensesTotal + marketingTotal + loansTotal + staffTotal + techniciansTotal
    
    // Debug: Log actual parts profit from context
    const actualPartsProfit = data.estimatedMonthlyPartsProfitEuro || 0
    console.log("Simulator reading Parts Profit from context:", actualPartsProfit)
    
    return {
      expenses: totalExpenses || 4500, // FIXED: This already includes ALL costs
      wages: techniciansTotal || 3000, // Keep for reference but don't double-count
      techCount: data.technicians.length || 2,
      laborRate: data.avgLabourRate || 75,
      workingDays: calculatedTargets.averageMonthlyWorkingDays, // ✅ Dynamic average from monthlyWorkingDays array
      partsProfit: actualPartsProfit // FIXED: Read actual value from context
    }
  }, [data, calculatedTargets])

  // Simulator state
  const [laborRateAdjustment, setLaborRateAdjustment] = useState(0) // -20 to +20
  const [simulatedEfficiency, setSimulatedEfficiency] = useState(70) // 30 to 120
  const [addExtraTech, setAddExtraTech] = useState(false)

  // Calculate current reality metrics using standardized formulas
  const realityMetrics = useMemo(() => {
    const { expenses, techCount, laborRate, workingDays, partsProfit } = businessData
    
    // FIXED: Calculate using raw user inputs, not hardcoded averages
    const actualWorkingDays = workingDays || 21.1
    const actualLaborRate = laborRate || 75
    const actualTechCount = techCount || 2
    const totalExpenses = expenses || 0
    const actualPartsProfit = partsProfit || 0
    
    // FIXED: Calculate maxPotentialRevenue using actual user workingDays
    const actualMaxPotentialRevenue = (actualTechCount * 8 * actualWorkingDays) * actualLaborRate
    
    // FIXED: Calculate breakeven efficiency using actual user inputs
    const breakevenBurden = totalExpenses - actualPartsProfit
    const actualBreakevenEfficiency = actualMaxPotentialRevenue > 0 
      ? (breakevenBurden / actualMaxPotentialRevenue) * 100 
      : 0
    
    return {
      maxPotentialRevenue: actualMaxPotentialRevenue, // FIXED: Use actual calculation
      breakevenEfficiency: actualBreakevenEfficiency, // FIXED: Use actual calculation
      requiredEfficiency: requiredEfficiency, // Keep for reference
      totalCosts: totalExpenses // FIXED: expenses already includes all costs
    }
  }, [businessData, requiredEfficiency])

  // Calculate simulated metrics
  const simulatedMetrics = useMemo(() => {
    const { expenses, techCount, laborRate, workingDays, partsProfit } = businessData
    const actualTechCount = addExtraTech ? techCount + 1 : techCount
    const simulatedRate = laborRate * (1 + laborRateAdjustment / 100)
    
    const maxPotentialRevenue = (actualTechCount * 8 * workingDays) * simulatedRate
    const totalCosts = expenses // FIXED: expenses already includes all costs (wages, fixed, marketing, loans)
    const breakevenEfficiency = maxPotentialRevenue > 0 ? (totalCosts / maxPotentialRevenue) * 100 : 0
    
    // Calculate profit at different efficiency levels
    const profitAtEfficiency = (efficiency: number) => {
      const actualRevenue = maxPotentialRevenue * (efficiency / 100)
      return actualRevenue + partsProfit - totalCosts
    }
    
    return {
      simulatedRate,
      actualTechCount,
      maxPotentialRevenue,
      breakevenEfficiency,
      profitAtEfficiency
    }
  }, [businessData, laborRateAdjustment, simulatedEfficiency, addExtraTech])

  const handleSaveScenario = () => {
    const projectedProfit = simulatedMetrics.profitAtEfficiency(simulatedEfficiency)
    console.log("Scenario Saved | Rate:", simulatedMetrics.simulatedRate.toFixed(2), "Target Eff:", simulatedEfficiency, "Est. Profit:", projectedProfit.toFixed(2))
  }

  return (
    <div className="space-y-6">
      {/* Save Scenario Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveScenario} className="gap-2">
          <Save className="w-4 h-4" />
          Save This Plan
        </Button>
      </div>

      {/* Section 1: Efficiency Reality Check */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6" />
          Efficiency Reality Check
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Max Potential Revenue */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Max Potential Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {symbol}{realityMetrics.maxPotentialRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <p className="text-xs text-muted-foreground">
                {businessData.techCount} techs × {businessData.workingDays} days × 8hrs × {symbol}{businessData.laborRate}
              </p>
            </CardContent>
          </Card>

          {/* Breakeven Efficiency */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Breakeven Efficiency</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {realityMetrics.breakevenEfficiency.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum to cover costs
              </p>
            </CardContent>
          </Card>

          {/* Required Efficiency */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Required Efficiency</CardTitle>
              <div className="relative">
                <Target className="h-4 w-4 text-muted-foreground" />
                <div className="absolute -top-1 -right-1 group relative">
                  <div className="w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-help" title="This target ensures business covers all costs and retains a 20% pure profit margin">
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {realityMetrics.requiredEfficiency}%
              </div>
              
            </CardContent>
          </Card>
        </div>

        {/* Efficiency Gauge */}
        <div className="flex justify-center">
          <EfficiencyGauge 
            value={requiredEfficiency}
            maxValue={100}
          />
        </div>
      </section>

      {/* Section 2: Labor Rate Simulator */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Labor Rate Simulator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Labor Rate Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Adjust Labor Rate</label>
                    <Badge variant={color}>
                      {label}
                    </Badge>
                  </div>
                  <Slider
                    value={[laborRateAdjustment]}
                    onValueChange={(value) => setLaborRateAdjustment(value[0])}
                    min={-20}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-center">
                    <span className="text-lg font-semibold text-teal-600">
                      {symbol}{simulatedMetrics.simulatedRate.toFixed(2)}/hr
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({laborRateAdjustment >= 0 ? "+" : ""}{symbol}{(simulatedMetrics.simulatedRate - businessData.laborRate).toFixed(2)})
                    </span>
                  </div>
                </div>

                {/* Efficiency Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Simulated Efficiency</label>
                    <Badge variant="outline">{simulatedEfficiency}%</Badge>
                  </div>
                  <Slider
                    value={[simulatedEfficiency]}
                    onValueChange={(value) => setSimulatedEfficiency(value[0])}
                    min={30}
                    max={120}
                    step={5}
                    className="w-full"
                  />
                </div>

                {/* Extra Technician Toggle */}
                {/* <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Add Extra Technician?</label>
                  <Switch
                    checked={addExtraTech}
                    onCheckedChange={setAddExtraTech}
                  />
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Charts */}
          <div className="space-y-6">
            <ProfitImpactChart 
              businessData={businessData}
              simulatedMetrics={simulatedMetrics}
              simulatedEfficiency={simulatedEfficiency}
            />
          </div>
        </div>

        {/* Scenario Matrix Table */}
        <div className="mt-6">
          <ScenarioMatrix 
            businessData={businessData}
            simulatedMetrics={simulatedMetrics}
            currentEfficiency={simulatedEfficiency}
          />
        </div>
      </section>
    </div>
  )
}

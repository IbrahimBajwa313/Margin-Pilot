"use client"

import { useMemo } from "react"
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCurrency } from "@/hooks/use-currency"

interface ProfitImpactChartProps {
  businessData: {
    expenses: number
    wages: number
    techCount: number
    laborRate: number
    workingDays: number
    partsProfit: number
  }
  simulatedMetrics: {
    simulatedRate: number
    actualTechCount: number
    maxPotentialRevenue: number
    breakevenEfficiency: number
    profitAtEfficiency: (efficiency: number) => number
  }
  simulatedEfficiency: number
}

export function ProfitImpactChart({ businessData, simulatedMetrics, simulatedEfficiency }: ProfitImpactChartProps) {
  const { symbol } = useCurrency()
  // Calculate standardized breakeven efficiency (matching efficiency-utils.ts)
  const standardizedBreakevenEfficiency = useMemo(() => {
    const maxPotentialRevenue = (businessData.techCount * 8 * businessData.workingDays) * businessData.laborRate
    const totalCosts = businessData.expenses // FIXED: expenses already includes all costs (wages, fixed, marketing, loans)
    const breakevenBurden = totalCosts - businessData.partsProfit
    return maxPotentialRevenue > 0 ? (breakevenBurden / maxPotentialRevenue) * 100 : 0
  }, [businessData])

  // Generate data for efficiency levels 30% to 120%
  const chartData = [
    30, 40, 50, 60, 70, 80, 90, 100, 110, 120
  ].map(efficiency => {
    // 1. Max Potential Labor Revenue (The Ceiling)
    const maxPotentialRevenue = (businessData.techCount * 8 * businessData.workingDays) * businessData.laborRate
    
    // 2. Total Costs (The Bill to Pay)
    const totalExpenses = businessData.expenses // FIXED: expenses already includes all costs (wages, fixed, marketing, loans)
    
    // 3. Parts Offset (The Helper)
    const estimatedPartsProfit = businessData.partsProfit || 0
    
    // 4. Actual Labor Revenue at Current Efficiency
    const actualLaborRevenue = maxPotentialRevenue * (efficiency / 100)
    
    // 5. Net Profit = Labor Revenue + Parts Profit - Total Expenses
    const netProfit = actualLaborRevenue + estimatedPartsProfit - totalExpenses
    
    return {
      efficiency,
      currentRate: simulatedMetrics.profitAtEfficiency(efficiency),
      simulatedRate: (() => {
        const actualTechCount = simulatedMetrics.actualTechCount
        const simulatedMaxRevenue = (actualTechCount * 8 * businessData.workingDays) * simulatedMetrics.simulatedRate
        const simulatedActualRevenue = simulatedMaxRevenue * (efficiency / 100)
        return simulatedActualRevenue + estimatedPartsProfit - totalExpenses // FIXED: Use totalExpenses (no double-counting)
      })(),
      netProfit // For debugging/verification
    }
  })

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">Efficiency: {data.efficiency}%</p>
          <p className="text-sm text-blue-600">
            Current Rate: {symbol}{data.currentRate.toFixed(0)}
          </p>
          <p className="text-sm text-teal-600">
            Simulated Rate: {symbol}{data.simulatedRate.toFixed(0)}
          </p>
          <p className="text-xs text-muted-foreground">
            Net Profit: {symbol}{data.netProfit.toFixed(0)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profit Impact Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="efficiency" 
              domain={[30, 120]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              tickFormatter={(value) => `${symbol}${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Breakeven Line (Profit = 0) */}
            <ReferenceLine 
              y={0} 
              stroke="#ef4444" 
              strokeDasharray="5 5" 
              strokeWidth={2}
              label="Breakeven"
            />
            
            {/* Standardized Breakeven Efficiency Line */}
            <ReferenceLine 
              x={standardizedBreakevenEfficiency} 
              stroke="#f59e0b" 
              strokeDasharray="3 3" 
              strokeWidth={2}
              label={{ value: `Breakeven: ${standardizedBreakevenEfficiency.toFixed(1)}%`, position: "top" }}
            />
            
            {/* Current Rate - Grey Bars */}
            <Bar 
              dataKey="currentRate" 
              fill="#9ca3af" 
              opacity={0.7}
              name="Current Labor Rate"
            />
            
            {/* Simulated Rate - Teal Line */}
            <Line 
              type="monotone" 
              dataKey="simulatedRate" 
              stroke="#14b8a6" 
              strokeWidth={3}
              dot={{ fill: "#14b8a6", r: 4 }}
              name="Simulated Labor Rate"
            />
          </ComposedChart>
        </ResponsiveContainer>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
            <span className="text-sm">Current Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-600 rounded"></div>
            <span className="text-sm">Simulated Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0 border-t-2 border-dashed border-red-500"></div>
            <span className="text-sm">Profit = {symbol}0</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0 border-t-2 border-dashed border-amber-500"></div>
            <span className="text-sm">Breakeven Efficiency</span>
          </div>
        </div>
        
        {/* Debug Information */}
        <div className="mt-4 p-3 bg-blue-50/50 rounded-lg border border-blue-200">
          <div className="text-xs text-blue-800 space-y-1">
            <p><strong>Standardized Breakeven Efficiency:</strong> {standardizedBreakevenEfficiency.toFixed(1)}%</p>
            <p><strong>Max Potential Revenue:</strong> {symbol}{((businessData.techCount * 8 * businessData.workingDays) * businessData.laborRate).toFixed(0)}</p>
            <p><strong>Total Costs (FIXED):</strong> {symbol}{businessData.expenses.toFixed(0)}</p>
            <p><strong>Parts Profit (ACTUAL):</strong> {symbol}{businessData.partsProfit.toFixed(0)}</p>
            {/* <p><strong>Breakeven Burden:</strong> {symbol}{(businessData.expenses - businessData.partsProfit).toFixed(0)}</p> */}
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

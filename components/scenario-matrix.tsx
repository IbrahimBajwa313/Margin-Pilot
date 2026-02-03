"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useCurrency } from "@/hooks/use-currency"

interface ScenarioMatrixProps {
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
  currentEfficiency: number
}

export function ScenarioMatrix({ businessData, simulatedMetrics, currentEfficiency }: ScenarioMatrixProps) {
  const { symbol } = useCurrency()
  const efficiencyLevels = [40, 50, 60, 70, 80, 90, 100]
  
  const calculateRowData = (efficiency: number) => {
    const { expenses, techCount, workingDays, partsProfit } = businessData // FIXED: expenses already includes all costs
    const actualTechCount = simulatedMetrics.actualTechCount
    const maxRevenue = (actualTechCount * 8 * workingDays) * simulatedMetrics.simulatedRate
    const laborRevenue = maxRevenue * (efficiency / 100)
    const netProfit = laborRevenue + partsProfit - expenses // FIXED: expenses already includes wages, don't subtract again
    
    return {
      efficiency,
      laborRevenue,
      partsProfit,
      netProfit
    }
  }

  const getRowStyling = (netProfit: number, efficiency: number) => {
    const isCurrentRow = Math.abs(efficiency - currentEfficiency) < 5
    const baseClasses = "transition-colors"
    
    if (isCurrentRow) {
      return `${baseClasses} border-2 border-teal-500 bg-teal-50 dark:bg-teal-950 font-bold`
    }
    
    if (netProfit > 0) {
      return `${baseClasses} text-green-700 bg-green-50 dark:bg-green-950 dark:text-green-300`
    }
    
    return `${baseClasses} text-red-700 bg-red-50 dark:bg-red-950 dark:text-red-300`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profitability Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Efficiency %</TableHead>
              <TableHead className="text-right">Labor Revenue</TableHead>
              <TableHead className="text-right">Parts Profit</TableHead>
              <TableHead className="text-right font-bold">Net Profit/Loss</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {efficiencyLevels.map((efficiency) => {
              const { laborRevenue, partsProfit, netProfit } = calculateRowData(efficiency)
              const rowStyling = getRowStyling(netProfit, efficiency)
              const isCurrentRow = Math.abs(efficiency - currentEfficiency) < 5
              
              return (
                <TableRow key={efficiency} className={rowStyling}>
                  <TableCell className="font-medium">{efficiency}%</TableCell>
                  <TableCell className="text-right">
                    {symbol}{laborRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </TableCell>
                  <TableCell className="text-right">
                    {symbol}{partsProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </TableCell>
                  <TableCell className={`text-right font-bold ${netProfit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {symbol}{netProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </TableCell>
                  <TableCell className="text-center">
                    {isCurrentRow ? (
                      <Badge variant="default" className="bg-teal-600 hover:bg-teal-700">
                        Current
                      </Badge>
                    ) : netProfit > 0 ? (
                      <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                        Profitable
                      </Badge>
                    ) : (
                      <Badge variant="destructive">
                        Loss
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        
        {/* Legend */}
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-teal-500 bg-teal-50 dark:bg-teal-950 rounded"></div>
            <span>Current Scenario</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-50 dark:bg-green-950 rounded"></div>
            <span>Profitable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-50 dark:bg-red-950 rounded"></div>
            <span>Loss</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

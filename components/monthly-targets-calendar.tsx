"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useAppContext } from "@/lib/app-context"
import { useCurrency } from "@/hooks/use-currency"
import { CalendarDays, Edit, Save } from "lucide-react"

interface MonthData {
  month: string
  workingDays: number
  dailyTarget: number
  monthlyTarget: number
}

export function MonthlyTargetsCalendar() {
  const { data, calculatedTargets, updateMonthDays } = useAppContext()
  const { symbol } = useCurrency()
  const [editingMonth, setEditingMonth] = useState<number | null>(null)
  const [tempDays, setTempDays] = useState<string>("")

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  const currentMonthIndex = new Date().getMonth()
  const currentMonthName = months[currentMonthIndex]

  // Generate month data with dynamic working days
  const monthlyData: MonthData[] = months.map((month, index) => {
    const workingDays = data.monthlyWorkingDays[index] || 22
    const monthlyTarget = calculatedTargets.standardDailyGpTarget * workingDays

    return {
      month,
      workingDays,
      dailyTarget: calculatedTargets.standardDailyGpTarget,
      monthlyTarget
    }
  })

  const handleDaysChange = (monthIndex: number, value: string) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 0 && numValue <= 31) {
      setTempDays(prev => ({ ...prev, [monthIndex]: value }))
    }
  }

  const handleSaveDays = () => {
    const newDays = { ...tempDays }
    let hasChanges = false

    Object.keys(newDays).forEach(monthIndex => {
      const numValue = parseInt(newDays[monthIndex]) || 22
      if (numValue >= 0 && numValue <= 31) {
        const currentDays = data.monthlyWorkingDays[parseInt(monthIndex)] || 22
        if (numValue !== currentDays) {
          hasChanges = true
        }
      }
    })

    if (hasChanges) {
      updateMonthDays(parseInt(Object.keys(newDays)[0]), numValue)
      setEditingMonth(null)
      setTempDays("")
    }
  }

  const handleEditMonth = (monthIndex: number) => {
    setEditingMonth(monthIndex)
    setTempDays(prev => ({ ...prev, [monthIndex]: String(data.monthlyWorkingDays[monthIndex] || 22) }))
  }

  const handleCancelEdit = () => {
    setEditingMonth(null)
    setTempDays("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          Monthly Targets & Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">Month</TableHead>
                <TableHead className="text-center font-medium">Working Days</TableHead>
                <TableHead className="text-right font-medium">Daily Target</TableHead>
                <TableHead className="text-right font-medium">Monthly Target</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthlyData.map((monthData, index) => {
                const isCurrentMonth = index === currentMonthIndex
                
                return (
                  <TableRow key={monthData.month} className={isCurrentMonth ? "bg-teal-50/50" : ""}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {monthData.month}
                        {isCurrentMonth && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">
                      {editingMonth === index ? (
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={tempDays[index] || String(monthData.workingDays)}
                            onChange={(e) => {
                              const newVal = parseInt(e.target.value) || 0
                              if (newVal >= 0 && newVal <= 31) {
                                setTempDays(prev => ({ ...prev, [index]: e.target.value }))
                                updateMonthDays(index, newVal)
                              }
                            }}
                            className="w-16 h-8 text-center border rounded"
                            min={0}
                            max={31}
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleSaveDays}
                            className="ml-1 h-8 w-8 p-0"
                          >
                            <Save className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleCancelEdit}
                            className="ml-1 h-8 w-8 p-0"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <span 
                          className="cursor-pointer hover:text-teal-600 transition-colors"
                          onClick={() => handleEditMonth(index)}
                        >
                          {monthData.workingDays}
                        </span>
                      )}
                    </TableCell>
                    
                    <TableCell className="text-right">
                      {symbol}{monthData.dailyTarget.toFixed(2)}
                    </TableCell>
                    
                    <TableCell className="text-right font-semibold text-foreground">
                      {symbol}{monthData.monthlyTarget.toFixed(2)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            
            <TableFooter>
              <TableRow className="border-t-2 border-border bg-muted/50">
                <TableCell className="font-bold">Yearly Total</TableCell>
                <TableCell className="text-center font-bold">
                  {monthlyData.reduce((sum, month) => sum + month.workingDays, 0)}
                </TableCell>
                <TableCell className="text-right font-bold text-foreground">
                  {symbol}{monthlyData.reduce((sum, month) => sum + month.monthlyTarget, 0).toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

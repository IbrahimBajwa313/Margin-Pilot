"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAppContext } from "@/lib/app-context"
import { RotateCcw, Info } from "lucide-react"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const standardWorkingDays = [22, 20, 22, 21, 22, 20, 23, 22, 22, 20, 21]

export function MonthlyWorkingDaysInput() {
  const { data, updateData } = useAppContext()
  const [tempValues, setTempValues] = useState<{ [key: string]: string }>({})

  // Calculate totals and averages
  const totalDays = data.monthlyWorkingDays.reduce((sum, days) => sum + days, 0)
  const averageDays = totalDays > 0 ? (totalDays / 12).toFixed(1) : "0"

  // Handle individual month changes
  const handleMonthChange = (monthIndex: number, value: string) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 0 && numValue <= 31) {
      setTempValues(prev => ({ ...prev, [months[monthIndex]]: value }))
      
      // Update the monthlyWorkingDays array
      const updatedMonthlyWorkingDays = [...data.monthlyWorkingDays]
      updatedMonthlyWorkingDays[monthIndex] = numValue
      
      updateData({
        monthlyWorkingDays: updatedMonthlyWorkingDays
      })
    }
  }

  // Reset to standard 2026 working days
  const handleReset = () => {
    updateData({
      monthlyWorkingDays: [...standardWorkingDays]
    })
    setTempValues({})
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Monthly Working Days</CardTitle>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleReset}
            className="gap-2"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset to 2026 Working Days
          </Button>
          <span className="text-sm text-muted-foreground">
            Total: <span className="font-bold text-foreground">{totalDays}</span> days | 
            Average: <span className="font-bold text-foreground">{averageDays}</span> days/month
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Adjusting these working days directly affects your monthly GP targets. Months with more days will have higher targets.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {months.map((month, index) => (
            <div key={month} className="space-y-2">
              <Label htmlFor={`month-${index}`} className="text-sm font-medium text-foreground">
                {month}
              </Label>
              <Input
                id={`month-${index}`}
                type="number"
                min={0}
                max={31}
                value={tempValues[month] || String(data.monthlyWorkingDays[index] || standardWorkingDays[index])}
                onChange={(e) => handleMonthChange(index, e.target.value)}
                className="w-full"
                placeholder={String(standardWorkingDays[index])}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { calculateEfficiency, type EfficiencyCalculation, type WorkshopData, type ExpenseItem, type LoanItem, type StaffMember, type Technician } from "@workshop/shared"

interface AppContextType {
  data: WorkshopData
  updateData: (updates: Partial<WorkshopData>) => void
  updateMonthDays: (monthIndex: number, newDays: number) => void
  toggleTheme: () => void
  isDark: boolean
  calculatedTargets: {
    totalMonthlyExpenses: number
    totalAnnualExpenses: number
    totalAnnualWorkingDays: number
    averageMonthlyWorkingDays: number
    standardDailyGpTarget: number
    averageMonthlyGpTarget: number
  }
  efficiency: EfficiencyCalculation
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Export utility function for use in other components
export const calculateDailyStatus = (actual: number, target: number): "green" | "amber" | "red" => {
  if (target === 0) return "red"

  const threshold90Percent = target * 0.9
  const threshold99Percent = target * 0.99

  if (actual >= target) {
    return "green"
  } else if (actual >= threshold90Percent && actual < threshold99Percent) {
    return "amber"
  } else {
    return "red"
  }
}

const THEME_KEY = "workshop_theme"

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === "dark") return true
  if (stored === "light") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const dark = getInitialTheme()
    setIsDark(dark)
    document.documentElement.classList.toggle("dark", dark)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark, mounted])

  // Initialize monthly working days with standard values
  const initializeMonthlyWorkingDays = (): number[] => {
    return [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22]
  }

  // Load data from localStorage on mount
  const loadStoredData = (): WorkshopData => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('workshop-data')
      if (stored) {
        try {
          const parsedData = JSON.parse(stored)
          // Ensure monthlyWorkingDays exists in stored data, otherwise initialize
          return {
            ...parsedData,
            monthlyWorkingDays: parsedData.monthlyWorkingDays || initializeMonthlyWorkingDays()
          }
        } catch (error) {
          console.error('Failed to parse stored data:', error)
          localStorage.removeItem('workshop-data')
          return loadStoredData() // Return default data
        }
      }
    }
    // Return default data with initialized monthly working days
    return {
      efficiencyRequired: 60,
      avgLabourRate: 75,
      currentMonth: "January",
      workingDaysInMonth: 22,
      currentBranch: "Main Branch",
      currentScenario: "Main Scenario",

      fixedExpensesTotal: 2500,
      marketingTotal: 500,
      loansTotal: 1500,
      staffTotal: 4500,
      techniciansTotal: 8000,
      estimatedMonthlyPartsProfitEuro: 1200,
      workingDaysPerMonth: 21.1,

      monthlyWorkingDays: initializeMonthlyWorkingDays(),
      ownerProfitGoal: 2000,

      fixedExpenses: [
        { id: "1", name: "Rent", value: 2000, notes: "Monthly workshop rent" },
        { id: "2", name: "Electricity", value: 300, notes: "" },
        { id: "3", name: "Insurance", value: 200, notes: "" },
      ],
      marketing: [
        { id: "1", name: "Digital Marketing", value: 300, notes: "" },
        { id: "2", name: "Social Media", value: 200, notes: "" },
      ],
      loans: [
        { id: "1", name: "Equipment Loan", monthlyRepayment: 500 },
        { id: "2", name: "Expansion Loan", monthlyRepayment: 1000 },
      ],
      staff: [
        {
          id: "1",
          name: "Manager",
          annualSalary: 30000,
          pensionPercentage: 8,
          employerTaxPercentage: 10,
        },
        {
          id: "2",
          name: "Receptionist",
          annualSalary: 20000,
          pensionPercentage: 8,
          employerTaxPercentage: 10,
        },
      ],
      technicians: [
        {
          id: "1",
          name: "Tech 1",
          hourlyPayRate: 22,
          billableHoursPerWeek: 40,
          targetEfficiency: 85,
        },
        {
          id: "2",
          name: "Tech 2",
          hourlyPayRate: 20,
          billableHoursPerWeek: 40,
          targetEfficiency: 80,
        },
      ],

      workshopSize: 5000,
      ramps: 4,
      techs: 5,

      monthlyData: generateMonthlyData(),

      todayActual: 0,
      dailyActualStatus: null,
    }
  }

  const [data, setData] = useState<WorkshopData>(loadStoredData)

  // Calculate targets based on current data - NEW Fixed Daily / Variable Monthly Model
  const calculateTargets = (currentData: WorkshopData) => {
    // Step A: Calculate Total Monthly Expenses
    const fixedExpensesTotal = currentData.fixedExpenses.reduce((sum, exp) => sum + exp.value, 0)
    const marketingTotal = currentData.marketing.reduce((sum, exp) => sum + exp.value, 0)
    const loansTotal = currentData.loans.reduce((sum, loan) => sum + loan.monthlyRepayment, 0)
    const staffTotal = currentData.staff.reduce((sum, staff) => {
      const monthlySalary = staff.annualSalary / 12
      const pension = (monthlySalary * staff.pensionPercentage) / 100
      const tax = (monthlySalary * staff.employerTaxPercentage) / 100
      return sum + monthlySalary + pension + tax
    }, 0)
    const techniciansTotal = currentData.technicians.reduce((sum, tech) => {
      return sum + tech.hourlyPayRate * tech.billableHoursPerWeek * 4.33
    }, 0)

    const totalMonthlyExpenses = fixedExpensesTotal + marketingTotal + loansTotal + staffTotal + techniciansTotal

    // Step B: Working Days Logic - Use Dynamic Monthly Working Days
    const totalAnnualWorkingDays = currentData.monthlyWorkingDays.reduce((sum, days) => sum + days, 0)
    const averageMonthlyWorkingDays = totalAnnualWorkingDays / 12

    // Step C: The Golden Number (Standard Daily Target)
    const totalAnnualExpenses = totalMonthlyExpenses * 12
    const standardDailyGpTarget = totalAnnualWorkingDays > 0 ? totalAnnualExpenses / totalAnnualWorkingDays : 0

    // Step D: Dashboard Metrics (Average Monthly)
    const averageMonthlyGpTarget = standardDailyGpTarget * averageMonthlyWorkingDays

    console.log("Financial Logic | Fixed Daily / Variable Monthly Model:", {
      totalMonthlyExpenses,
      totalAnnualExpenses,
      totalAnnualWorkingDays,
      averageMonthlyWorkingDays,
      standardDailyGpTarget,
      averageMonthlyGpTarget
    })

    return {
      totalMonthlyExpenses,
      totalAnnualExpenses,
      totalAnnualWorkingDays,
      averageMonthlyWorkingDays,
      standardDailyGpTarget,
      averageMonthlyGpTarget
    }
  }

  const calculatedTargets = calculateTargets(data)
  const efficiency = calculateEfficiency(data)

  // Recalculate dailyActualStatus whenever todayActual or target changes
  useEffect(() => {
    if (data.todayActual > 0 && calculatedTargets.standardDailyGpTarget > 0) {
      const dailyTarget = calculatedTargets.standardDailyGpTarget
      const actualGP = data.todayActual

      const newStatus = calculateDailyStatus(actualGP, dailyTarget)

      // Only update if status has changed to avoid infinite loops
      if (data.dailyActualStatus !== newStatus) {
        setData(prev => ({
          ...prev,
          dailyActualStatus: newStatus
        }))
        console.log("Status Updated | Target:", dailyTarget, "Actual:", actualGP, "Status:", newStatus)
      }
    }
  }, [data.todayActual, calculatedTargets.standardDailyGpTarget])

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('workshop-data', JSON.stringify(data))
      console.log("State Updated | Data persisted to localStorage:", data)
    }
  }, [data])

  function updateData(updates: Partial<WorkshopData>) {
    setData((prev) => {
      const updated = { ...prev, ...updates }
      console.log("Data Sync | Uploading to Cloud:", updated)
      return updated
    })
  }

  function updateMonthDays(monthIndex: number, newDays: number) {
    setData((prev) => {
      const updatedMonthlyWorkingDays = [...prev.monthlyWorkingDays]
      updatedMonthlyWorkingDays[monthIndex] = newDays

      const totalAnnualWorkingDays = updatedMonthlyWorkingDays.reduce((sum, days) => sum + days, 0)

      console.log("Month Days Updated | Month", monthIndex, "New Days:", newDays, "Total Annual Days:", totalAnnualWorkingDays)

      return {
        ...prev,
        monthlyWorkingDays: updatedMonthlyWorkingDays
      }
    })
  }

  function toggleTheme() {
    setIsDark((prev) => !prev)
  }

  return <AppContext.Provider value={{ data, updateData, updateMonthDays, toggleTheme, isDark, calculatedTargets, efficiency }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}

function generateMonthlyData() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const workingDays = [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22]

  return months.map((month, index) => ({
    month,
    workingDays: workingDays[index],
    dailyTarget: 850,
    monthlyTarget: 850 * workingDays[index],
  }))
}

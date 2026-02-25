"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useRef, useMemo, useCallback } from "react"
import { calculateEfficiency, type EfficiencyCalculation, type WorkshopData } from "@/components/shared"
import { useAuth } from "@/lib/auth-context"

const WORKSHOP_API = "/api/workshop"

function getEmptyWorkshopData(): WorkshopData {
  const monthlyWorkingDays = [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return {
    efficiencyRequired: 60,
    avgLabourRate: 75,
    currentMonth: "January",
    workingDaysInMonth: 22,
    currentBranch: "Main Branch",
    currentScenario: "Main Scenario",
    fixedExpensesTotal: 0,
    marketingTotal: 0,
    loansTotal: 0,
    staffTotal: 0,
    techniciansTotal: 0,
    estimatedMonthlyPartsProfitEuro: 0,
    workingDaysPerMonth: 21.1,
    monthlyWorkingDays,
    ownerProfitGoal: 0,
    fixedExpenses: [],
    marketing: [],
    loans: [],
    staff: [],
    technicians: [],
    workshopSize: 0,
    ramps: 0,
    techs: 0,
    monthlyData: months.map((month, i) => ({ month, workingDays: monthlyWorkingDays[i], dailyTarget: 0, monthlyTarget: 0 })),
    todayActual: 0,
    dailyActualStatus: null,
    userPreferences: { currency: "EUR", darkMode: false },
    efficiencyCalendar: { daysInYear: 260, bankHolidays: 8, annualLeave: 20, sickDays: 2, efficiencyWorkingDays: 19.25 },
  }
}

interface AppContextType {
  data: WorkshopData
  updateData: (updates: Partial<WorkshopData>) => void
  updateMonthDays: (monthIndex: number, newDays: number) => void
  toggleTheme: () => void
  isDark: boolean
  dataLoading: boolean
  dataError: string | null
  /** Refetch workshop from server (e.g. after setup wizard saves profile so dashboard shows updated facilities) */
  refreshWorkshopData: () => Promise<void>
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

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const [mounted, setMounted] = useState(false)

  /* MarginPilot: dark mode only. Force dark class and persist. */
  useEffect(() => {
    document.documentElement.classList.add("dark")
    if (typeof window !== "undefined") localStorage.setItem(THEME_KEY, "dark")
    setMounted(true)
  }, [])

  const [data, setData] = useState<WorkshopData>(getEmptyWorkshopData)
  const [dataLoading, setDataLoading] = useState(true)
  const [dataError, setDataError] = useState<string | null>(null)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function fetchWorkshopData(): Promise<boolean> {
    const res = await fetch(WORKSHOP_API, { credentials: "include" })
    if (res.status === 401) return false
    if (res.status === 404) {
      const seedRes = await fetch(`${WORKSHOP_API}/seed`, { method: "POST", credentials: "include" })
      if (!seedRes.ok) {
        const err = await seedRes.json().catch(() => ({}))
        setDataError(err?.error || "Failed to seed workshop")
        return false
      }
      const refetch = await fetch(WORKSHOP_API, { credentials: "include" })
      if (!refetch.ok) {
        setDataError("Failed to load workshop after seed")
        return false
      }
      const json = await refetch.json()
      setData(normalizeWorkshopResponse(json))
      return true
    }
    if (!res.ok) {
      setDataError("Failed to load workshop data")
      return false
    }
    const json = await res.json()
    setData(normalizeWorkshopResponse(json))
    return true
  }

  const refreshWorkshopData = useCallback(async () => {
    if (!isAuthenticated) return
    setDataLoading(true)
    setDataError(null)
    try {
      await fetchWorkshopData()
    } catch (e) {
      setDataError(e instanceof Error ? e.message : "Failed to load data")
    } finally {
      setDataLoading(false)
    }
  }, [isAuthenticated])

  // Load workshop data only when authenticated; avoids 401 loop and refetches after login
  useEffect(() => {
    if (!isAuthenticated) {
      setDataLoading(false)
      setDataError(null)
      return
    }
    let cancelled = false
    setDataLoading(true)
    setDataError(null)
    fetchWorkshopData()
      .then(() => { if (!cancelled) setDataLoading(false) })
      .catch(() => { if (!cancelled) setDataLoading(false) })
    return () => { cancelled = true }
  }, [isAuthenticated])

  // Persist to API when data changes (debounced); only when authenticated. Send only workshop fields (no Mongo internals).
  useEffect(() => {
    if (!isAuthenticated || dataLoading) return
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      saveTimeoutRef.current = null
      const payload = buildWorkshopPayload(data)
      fetch(WORKSHOP_API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), credentials: "include" }).catch(() => {})
    }, 600)
    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current) }
  }, [isAuthenticated, data, dataLoading])

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

    return {
      totalMonthlyExpenses,
      totalAnnualExpenses,
      totalAnnualWorkingDays,
      averageMonthlyWorkingDays,
      standardDailyGpTarget,
      averageMonthlyGpTarget
    }
  }

  const calculatedTargets = useMemo(() => calculateTargets(data), [data])
  const efficiency = useMemo(() => calculateEfficiency(data), [data])

  // Recalculate dailyActualStatus whenever todayActual or target changes
  useEffect(() => {
    if (data.todayActual > 0 && calculatedTargets.standardDailyGpTarget > 0) {
      const dailyTarget = calculatedTargets.standardDailyGpTarget
      const actualGP = data.todayActual
      const newStatus = calculateDailyStatus(actualGP, dailyTarget)
      if (data.dailyActualStatus !== newStatus) {
        setData(prev => ({ ...prev, dailyActualStatus: newStatus }))
      }
    }
  }, [data.todayActual, calculatedTargets.standardDailyGpTarget])

  function updateData(updates: Partial<WorkshopData>) {
    setData((prev) => ({ ...prev, ...updates }))
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
    /* No-op: MarginPilot is dark mode only */
  }

  return (
    <AppContext.Provider value={{ data, updateData, updateMonthDays, toggleTheme, isDark: true, dataLoading, dataError, refreshWorkshopData, calculatedTargets, efficiency }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}

/** Build payload for POST /api/workshop: only workshop fields, no Mongo internals. efficiencyRequired is computed on backend from inputs. */
function buildWorkshopPayload(data: WorkshopData): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    avgLabourRate: data.avgLabourRate,
    currentMonth: data.currentMonth,
    workingDaysInMonth: data.workingDaysInMonth,
    currentBranch: data.currentBranch,
    currentScenario: data.currentScenario,
    fixedExpensesTotal: data.fixedExpensesTotal,
    marketingTotal: data.marketingTotal,
    loansTotal: data.loansTotal,
    staffTotal: data.staffTotal,
    techniciansTotal: data.techniciansTotal,
    estimatedMonthlyPartsProfitEuro: data.estimatedMonthlyPartsProfitEuro,
    workingDaysPerMonth: data.workingDaysPerMonth,
    monthlyWorkingDays: data.monthlyWorkingDays,
    ownerProfitGoal: data.ownerProfitGoal,
    fixedExpenses: data.fixedExpenses,
    marketing: data.marketing,
    loans: data.loans,
    staff: data.staff,
    technicians: data.technicians,
    workshopSize: data.workshopSize,
    ramps: data.ramps,
    techs: data.techs,
    monthlyData: data.monthlyData,
    todayActual: data.todayActual,
    dailyActualStatus: data.dailyActualStatus,
    userPreferences: data.userPreferences,
    efficiencyCalendar: data.efficiencyCalendar,
    isStarterTemplate: data.isStarterTemplate,
  }
  return payload
}

function normalizeWorkshopResponse(json: Record<string, unknown>): WorkshopData {
  const empty = getEmptyWorkshopData()
  const monthlyWorkingDays = Array.isArray(json.monthlyWorkingDays) && json.monthlyWorkingDays.length === 12
    ? (json.monthlyWorkingDays as number[])
    : empty.monthlyWorkingDays
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthlyData = Array.isArray(json.monthlyData) && json.monthlyData.length === 12
    ? (json.monthlyData as WorkshopData["monthlyData"])
    : months.map((month, i) => ({ month, workingDays: monthlyWorkingDays[i], dailyTarget: 0, monthlyTarget: 0 }))
  return {
    ...empty,
    ...json,
    monthlyWorkingDays,
    monthlyData,
    fixedExpenses: Array.isArray(json.fixedExpenses) ? (json.fixedExpenses as WorkshopData["fixedExpenses"]) : empty.fixedExpenses,
    marketing: Array.isArray(json.marketing) ? (json.marketing as WorkshopData["marketing"]) : empty.marketing,
    loans: Array.isArray(json.loans) ? (json.loans as WorkshopData["loans"]) : empty.loans,
    staff: Array.isArray(json.staff) ? (json.staff as WorkshopData["staff"]) : empty.staff,
    technicians: Array.isArray(json.technicians) ? (json.technicians as WorkshopData["technicians"]) : empty.technicians,
    userPreferences: (json.userPreferences && typeof json.userPreferences === "object") ? (json.userPreferences as WorkshopData["userPreferences"]) : empty.userPreferences,
    efficiencyCalendar: (json.efficiencyCalendar && typeof json.efficiencyCalendar === "object") ? (json.efficiencyCalendar as WorkshopData["efficiencyCalendar"]) : empty.efficiencyCalendar,
  } as WorkshopData
}

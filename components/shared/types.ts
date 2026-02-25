export interface ExpenseItem {
  id: string
  name: string
  value: number
  notes?: string
}

export interface LoanItem {
  id: string
  name: string
  monthlyRepayment: number
}

export interface StaffMember {
  id: string
  name: string
  annualSalary: number
  pensionPercentage: number
  employerTaxPercentage: number
}

export interface Technician {
  id: string
  name: string
  hourlyPayRate: number
  billableHoursPerWeek: number
  targetEfficiency: number
}

export interface UserPreferences {
  currency: string
  darkMode: boolean
}

export interface EfficiencyCalendar {
  daysInYear: number
  bankHolidays: number
  annualLeave: number
  sickDays: number
  efficiencyWorkingDays: number
}

export interface WorkshopData {
  efficiencyRequired: number
  avgLabourRate: number
  currentMonth: string
  workingDaysInMonth: number
  currentBranch: string
  currentScenario: string

  fixedExpensesTotal: number
  marketingTotal: number
  loansTotal: number
  staffTotal: number
  techniciansTotal: number
  estimatedMonthlyPartsProfitEuro: number
  workingDaysPerMonth: number
  monthlyWorkingDays: number[]
  ownerProfitGoal: number

  fixedExpenses: ExpenseItem[]
  marketing: ExpenseItem[]
  loans: LoanItem[]
  staff: StaffMember[]
  technicians: Technician[]

  workshopSize: number
  ramps: number
  techs: number

  monthlyData: Array<{
    month: string
    workingDays: number
    dailyTarget: number
    monthlyTarget: number
  }>

  todayActual: number
  dailyActualStatus: "green" | "amber" | "red" | null

  userPreferences?: UserPreferences
  efficiencyCalendar?: EfficiencyCalendar
  isStarterTemplate?: boolean
}

export interface EfficiencyCalculation {
  requiredEfficiency: number
  breakevenEfficiency: number
  maxPotentialLaborRevenue: number
  totalTechHours: number
  laborBurden: number
  breakevenBurden: number
}

import { WorkshopData, EfficiencyCalculation } from "./types"

export function calculateStandardMonthlyDays(): number {
  const daysInYear = 52 * 5
  const bankHolidays = 8
  const annualLeave = 25
  const sickDays = 4.4
  const availableWorkingDays = daysInYear - bankHolidays - annualLeave - sickDays
  const standardMonthlyDays = availableWorkingDays / 12
  return standardMonthlyDays
}

export function calculateEfficiency(data: WorkshopData): EfficiencyCalculation {
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

  const totalOperationalExpenses =
    fixedExpensesTotal + marketingTotal + loansTotal + staffTotal + techniciansTotal
  const totalRevenueGoal = totalOperationalExpenses + data.ownerProfitGoal

  const totalAnnualDays = data.monthlyWorkingDays.reduce((sum, days) => sum + days, 0)
  const averageWorkingDays = totalAnnualDays / 12

  const techCount = data.technicians.length || 0
  const maxRevenue = techCount * 8 * averageWorkingDays * (data.avgLabourRate || 75)

  const partsProfit = data.estimatedMonthlyPartsProfitEuro || 0
  const operationalBurden = totalOperationalExpenses - partsProfit
  const totalBurden = totalRevenueGoal - partsProfit

  const breakevenEfficiency =
    maxRevenue > 0 ? Math.round((operationalBurden / maxRevenue) * 100) : 0
  const requiredEfficiency =
    maxRevenue > 0 ? Math.round((totalBurden / maxRevenue) * 100) : 0

  return {
    requiredEfficiency,
    breakevenEfficiency,
    maxPotentialLaborRevenue: maxRevenue,
    totalTechHours: techCount * 8 * averageWorkingDays,
    laborBurden: totalBurden,
    breakevenBurden: operationalBurden,
  }
}

export function getEfficiencyColor(
  efficiency: number
): "destructive" | "secondary" | "default" {
  if (efficiency > 100) return "destructive"
  if (efficiency > 85) return "secondary"
  return "default"
}

export function getEfficiencyLabel(efficiency: number): string {
  if (efficiency > 100) return "Impossible"
  if (efficiency > 85) return "High Stress"
  if (efficiency > 70) return "On Par"
  return "Healthy"
}

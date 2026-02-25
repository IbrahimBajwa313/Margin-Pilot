/**
 * Server-side efficiency calculation. Must match the frontend logic in
 * components/shared/efficiency-utils.ts calculateEfficiency() exactly
 * so backend and frontend stay aligned.
 */

export interface EfficiencyInput {
  fixedExpenses: Array<{ value: number }>;
  marketing: Array<{ value: number }>;
  loans: Array<{ monthlyRepayment: number }>;
  staff: Array<{
    annualSalary: number;
    pensionPercentage: number;
    employerTaxPercentage: number;
  }>;
  technicians: Array<{
    hourlyPayRate: number;
    billableHoursPerWeek: number;
  }>;
  monthlyWorkingDays: number[];
  ownerProfitGoal: number;
  estimatedMonthlyPartsProfitEuro?: number;
  avgLabourRate?: number;
}

export interface EfficiencyResult {
  requiredEfficiency: number;
  breakevenEfficiency: number;
  maxPotentialLaborRevenue: number;
  totalTechHours: number;
  laborBurden: number;
  breakevenBurden: number;
}

export function calculateEfficiencyServer(data: EfficiencyInput): EfficiencyResult {
  const fixedExpensesTotal = (data.fixedExpenses || []).reduce((sum, exp) => sum + exp.value, 0);
  const marketingTotal = (data.marketing || []).reduce((sum, exp) => sum + exp.value, 0);
  const loansTotal = (data.loans || []).reduce((sum, loan) => sum + loan.monthlyRepayment, 0);
  const staffTotal = (data.staff || []).reduce((sum, staff) => {
    const monthlySalary = staff.annualSalary / 12;
    const pension = (monthlySalary * staff.pensionPercentage) / 100;
    const tax = (monthlySalary * staff.employerTaxPercentage) / 100;
    return sum + monthlySalary + pension + tax;
  }, 0);
  const techniciansTotal = (data.technicians || []).reduce((sum, tech) => {
    return sum + tech.hourlyPayRate * tech.billableHoursPerWeek * 4.33;
  }, 0);

  const totalOperationalExpenses =
    fixedExpensesTotal + marketingTotal + loansTotal + staffTotal + techniciansTotal;
  const totalRevenueGoal = totalOperationalExpenses + (data.ownerProfitGoal || 0);

  const totalAnnualDays = (data.monthlyWorkingDays || []).reduce((sum, days) => sum + days, 0);
  const averageWorkingDays = totalAnnualDays / 12 || 0;

  const techCount = (data.technicians || []).length || 0;
  const avgRate = data.avgLabourRate ?? 75;
  const maxRevenue = techCount * 8 * averageWorkingDays * avgRate;

  const partsProfit = data.estimatedMonthlyPartsProfitEuro ?? 0;
  const operationalBurden = totalOperationalExpenses - partsProfit;
  const totalBurden = totalRevenueGoal - partsProfit;

  const breakevenEfficiency = maxRevenue > 0 ? Math.round((operationalBurden / maxRevenue) * 100) : 0;
  const requiredEfficiency = maxRevenue > 0 ? Math.round((totalBurden / maxRevenue) * 100) : 0;

  return {
    requiredEfficiency,
    breakevenEfficiency,
    maxPotentialLaborRevenue: Math.round(maxRevenue),
    totalTechHours: Math.round(techCount * 8 * averageWorkingDays * 100) / 100,
    laborBurden: Math.round(totalBurden * 100) / 100,
    breakevenBurden: Math.round(operationalBurden * 100) / 100,
  };
}

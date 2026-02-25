"use client"

import type { WorkshopData } from "@/components/shared/types"
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"

export interface ExportTargets {
  totalMonthlyExpenses: number
  totalAnnualExpenses: number
  standardDailyGpTarget: number
  averageMonthlyGpTarget: number
  averageMonthlyWorkingDays: number
}

export interface ExportEfficiency {
  requiredEfficiency: number
  breakevenEfficiency: number
  laborBurden: number
  maxPotentialLaborRevenue: number
}

/** Build CSV content from workshop data for Excel/backup. */
export function buildBusinessDataCsv(
  data: WorkshopData,
  targets: ExportTargets,
  symbol: string
): string {
  const rows: string[][] = []
  const escape = (v: string | number) =>
    typeof v === "number" ? String(v) : `"${String(v).replace(/"/g, '""')}"`

  rows.push(["MarginPilot Business Data Export", ""])
  rows.push(["Exported", new Date().toISOString().slice(0, 10)])
  rows.push(["Branch", data.currentBranch || ""])
  rows.push([])

  rows.push(["Gross profit targets", ""])
  rows.push(["Standard daily GP target", symbol, targets.standardDailyGpTarget.toFixed(2)])
  rows.push(["Average monthly GP target", symbol, targets.averageMonthlyGpTarget.toFixed(2)])
  rows.push(["Total monthly expenses", symbol, targets.totalMonthlyExpenses.toFixed(2)])
  rows.push(["Total annual expenses", symbol, targets.totalAnnualExpenses.toFixed(2)])
  rows.push([])

  rows.push(["Fixed expenses", "Name", "Value", "Notes"])
  data.fixedExpenses.forEach((e) =>
    rows.push(["", e.name, String(e.value), e.notes || ""])
  )
  rows.push([])

  rows.push(["Marketing", "Name", "Value", "Notes"])
  data.marketing.forEach((e) =>
    rows.push(["", e.name, String(e.value), e.notes || ""])
  )
  rows.push([])

  rows.push(["Loans", "Name", "Monthly repayment"])
  data.loans.forEach((l) =>
    rows.push(["", l.name, String(l.monthlyRepayment)])
  )
  rows.push([])

  rows.push(["Staff", "Name", "Annual salary", "Pension %", "Employer tax %"])
  data.staff.forEach((s) =>
    rows.push([
      "",
      s.name,
      String(s.annualSalary),
      String(s.pensionPercentage),
      String(s.employerTaxPercentage),
    ])
  )
  rows.push([])

  rows.push(["Technicians", "Name", "Hourly rate", "Billable hrs/week", "Target efficiency %"])
  data.technicians.forEach((t) =>
    rows.push([
      "",
      t.name,
      String(t.hourlyPayRate),
      String(t.billableHoursPerWeek),
      String(t.targetEfficiency),
    ])
  )
  rows.push([])

  rows.push(["Monthly targets", "Month", "Working days", "Daily target", "Monthly target"])
  data.monthlyData?.forEach((m) =>
    rows.push([
      "",
      m.month,
      String(m.workingDays),
      (m.dailyTarget ?? 0).toFixed(2),
      (m.monthlyTarget ?? 0).toFixed(2),
    ])
  )

  return rows.map((r) => r.map(escape).join(",")).join("\n")
}

/** Generate PDF business summary. */
export function generatePdfReport(
  data: WorkshopData,
  targets: ExportTargets,
  efficiency: ExportEfficiency,
  symbol: string
): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
  let y = 18

  doc.setFontSize(18)
  doc.setFont("helvetica", "bold")
  doc.text("MarginPilot Business Summary", 14, y)
  y += 10

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(`Branch: ${data.currentBranch || "—"} | Generated: ${new Date().toLocaleDateString()}`, 14, y)
  y += 12

  doc.setFontSize(12)
  doc.setFont("helvetica", "bold")
  doc.text("Gross profit targets", 14, y)
  y += 7
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text(`Standard daily GP target: ${symbol}${targets.standardDailyGpTarget.toFixed(0)}`, 14, y)
  y += 6
  doc.text(`Average monthly GP target: ${symbol}${targets.averageMonthlyGpTarget.toFixed(0)}`, 14, y)
  y += 6
  doc.text(`Required efficiency: ${efficiency.requiredEfficiency}%`, 14, y)
  y += 6
  doc.text(`Average labour rate: ${symbol}${data.avgLabourRate}/hour`, 14, y)
  y += 14

  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("Structured expenses (monthly)", 14, y)
  y += 7

  const expenseHeaders = ["Category", "Item", "Amount"]
  const expenseRows: string[][] = []
  data.fixedExpenses.forEach((e) => expenseRows.push(["Fixed", e.name, `${symbol}${e.value.toFixed(2)}`])
  )
  data.marketing.forEach((e) => expenseRows.push(["Marketing", e.name, `${symbol}${e.value.toFixed(2)}`])
  )
  data.loans.forEach((l) => expenseRows.push(["Loans", l.name, `${symbol}${l.monthlyRepayment.toFixed(2)}`])
  )
  data.staff.forEach((s) => {
    const monthly = s.annualSalary / 12
    const pension = (monthly * s.pensionPercentage) / 100
    const tax = (monthly * s.employerTaxPercentage) / 100
    expenseRows.push(["Staff", s.name, `${symbol}${(monthly + pension + tax).toFixed(2)}`])
  })
  data.technicians.forEach((t) => {
    const monthly = t.hourlyPayRate * t.billableHoursPerWeek * 4.33
    expenseRows.push(["Technicians", t.name, `${symbol}${monthly.toFixed(2)}`])
  })

  autoTable(doc, {
    startY: y,
    head: [expenseHeaders],
    body: expenseRows,
    theme: "striped",
    margin: { left: 14 },
    styles: { fontSize: 9 },
  })
  const lastTable = (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
  y = lastTable?.finalY != null ? lastTable.finalY + 12 : y + 40

  if (y > 250) {
    doc.addPage()
    y = 18
  }

  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("Financial summary", 14, y)
  y += 7
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text(`Total monthly expenses: ${symbol}${targets.totalMonthlyExpenses.toFixed(2)}`, 14, y)
  y += 6
  doc.text(`Total annual expenses: ${symbol}${targets.totalAnnualExpenses.toFixed(2)}`, 14, y)
  y += 6
  doc.text(`Labour burden (annual): ${symbol}${efficiency.laborBurden.toFixed(0)}`, 14, y)
  y += 6
  doc.text(`Max potential labour revenue (annual): ${symbol}${efficiency.maxPotentialLaborRevenue.toFixed(0)}`, 14, y)
  y += 10

  doc.setFontSize(9)
  doc.setTextColor(120, 120, 120)
  doc.text("Generated by MarginPilot — marginpilot.app", 14, doc.getPageHeight() - 10)

  doc.save(`MarginPilot-Business-Summary-${new Date().toISOString().slice(0, 10)}.pdf`)
}

/** Build JSON for external systems (e.g. Garage Hive–style import). */
export function buildExternalExportJson(
  data: WorkshopData,
  targets: ExportTargets,
  efficiency: ExportEfficiency
): string {
  const payload = {
    exportedAt: new Date().toISOString(),
    source: "MarginPilot",
    branch: data.currentBranch || null,
    scenario: data.currentScenario || null,
    targets: {
      standardDailyGpTarget: Math.round(targets.standardDailyGpTarget),
      averageMonthlyGpTarget: Math.round(targets.averageMonthlyGpTarget),
      totalMonthlyExpenses: Math.round(targets.totalMonthlyExpenses),
      totalAnnualExpenses: Math.round(targets.totalAnnualExpenses),
    },
    efficiency: {
      requiredEfficiency: efficiency.requiredEfficiency,
      breakevenEfficiency: efficiency.breakevenEfficiency,
      laborBurden: Math.round(efficiency.laborBurden),
      maxPotentialLaborRevenue: Math.round(efficiency.maxPotentialLaborRevenue),
    },
    workshop: {
      avgLabourRate: data.avgLabourRate,
      workingDaysInMonth: data.workingDaysInMonth,
      techniciansCount: data.technicians.length,
      staffCount: data.staff.length,
      monthlyData: data.monthlyData?.map((m) => ({
        month: m.month,
        workingDays: m.workingDays,
        dailyTarget: m.dailyTarget ?? 0,
        monthlyTarget: m.monthlyTarget ?? 0,
      })),
    },
  }
  return JSON.stringify(payload, null, 2)
}

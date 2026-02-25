"use client"

import { useState } from "react"
import { Plus, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DynamicRow } from "@/components/dynamic-row"
import { MonthlyWorkingDaysInput } from "@/components/monthly-working-days-input"
import { useAppContext, type ExpenseItem, type LoanItem, type StaffMember, type Technician } from "@/lib/app-context"
import { useCurrency } from "@/hooks/use-currency"

export function DataInputForm() {
  const { data, updateData } = useAppContext()
  const { symbol } = useCurrency()
  const [expandedSections, setExpandedSections] = useState<string[]>(["expenses"])

  // Helper to generate unique IDs
  const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  // ===== Fixed Expenses & Marketing =====
  const handleAddExpense = () => {
    const newExpense: ExpenseItem = {
      id: generateId(),
      name: "",
      value: 0,
      notes: "",
    }
    updateData({
      fixedExpenses: [...data.fixedExpenses, newExpense],
    })
  }

  const handleUpdateExpense = (id: string, field: keyof ExpenseItem, value: string | number) => {
    const parsedValue = field === 'value' ? Number.parseFloat(String(value)) || 0 : String(value)
    updateData({
      fixedExpenses: data.fixedExpenses.map((exp) => (exp.id === id ? { ...exp, [field]: parsedValue } : exp)),
    })
  }

  const handleDeleteExpense = (id: string) => {
    updateData({
      fixedExpenses: data.fixedExpenses.filter((exp) => exp.id !== id),
    })
  }

  const handleAddMarketing = () => {
    const newMarketing: ExpenseItem = {
      id: generateId(),
      name: "",
      value: 0,
      notes: "",
    }
    updateData({
      marketing: [...data.marketing, newMarketing],
    })
  }

  const handleUpdateMarketing = (id: string, field: keyof ExpenseItem, value: string | number) => {
    const parsedValue = field === 'value' ? Number.parseFloat(String(value)) || 0 : String(value)
    updateData({
      marketing: data.marketing.map((exp) => (exp.id === id ? { ...exp, [field]: parsedValue } : exp)),
    })
  }

  const handleDeleteMarketing = (id: string) => {
    updateData({
      marketing: data.marketing.filter((exp) => exp.id !== id),
    })
  }

  // ===== Loans =====
  const handleAddLoan = () => {
    const newLoan: LoanItem = {
      id: generateId(),
      name: "",
      monthlyRepayment: 0,
    }
    updateData({
      loans: [...data.loans, newLoan],
    })
  }

  const handleUpdateLoan = (id: string, field: keyof LoanItem, value: string | number) => {
    const parsedValue = field === 'monthlyRepayment' ? Number.parseFloat(String(value)) || 0 : String(value)
    updateData({
      loans: data.loans.map((loan) => (loan.id === id ? { ...loan, [field]: parsedValue } : loan)),
    })
  }

  const handleDeleteLoan = (id: string) => {
    updateData({
      loans: data.loans.filter((loan) => loan.id !== id),
    })
  }

  // ===== Staff =====
  const handleAddStaff = () => {
    const newStaff: StaffMember = {
      id: generateId(),
      name: "",
      annualSalary: 0,
      pensionPercentage: 8,
      employerTaxPercentage: 10,
    }
    updateData({
      staff: [...data.staff, newStaff],
    })
  }

  const handleUpdateStaff = (id: string, field: keyof StaffMember, value: string | number) => {
    const parsedValue = ['annualSalary', 'pensionPercentage', 'employerTaxPercentage'].includes(field) 
      ? Number.parseFloat(String(value)) || 0 
      : String(value)
    updateData({
      staff: data.staff.map((s) => (s.id === id ? { ...s, [field]: parsedValue } : s)),
    })
  }

  const handleDeleteStaff = (id: string) => {
    updateData({
      staff: data.staff.filter((s) => s.id !== id),
    })
  }

  // ===== Technicians =====
  const handleAddTechnician = () => {
    const newTech: Technician = {
      id: generateId(),
      name: "",
      hourlyPayRate: 0,
      billableHoursPerWeek: 40,
      targetEfficiency: 85,
    }
    updateData({
      technicians: [...data.technicians, newTech],
    })
  }

  const handleUpdateTechnician = (id: string, field: keyof Technician, value: string | number) => {
    const parsedValue = ['hourlyPayRate', 'billableHoursPerWeek', 'targetEfficiency'].includes(field) 
      ? Number.parseFloat(String(value)) || 0 
      : String(value)
    updateData({
      technicians: data.technicians.map((t) => (t.id === id ? { ...t, [field]: parsedValue } : t)),
    })
  }

  const handleDeleteTechnician = (id: string) => {
    updateData({
      technicians: data.technicians.filter((t) => t.id !== id),
    })
  }

  // Calculate section totals
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

  return (
    <Card className="border-border w-full min-w-0 overflow-hidden">
      <CardHeader className="px-4 md:px-6">
        <CardTitle className="text-lg md:text-xl">Data Input Engine</CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6 overflow-x-hidden">
        <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections} className="space-y-4">
          {/* Fixed Expenses */}
          <AccordionItem value="expenses" className="border-border">
            <AccordionTrigger className="">
              <div className="flex items-center gap-2">
                <span>📋 Fixed Expenses & Facilities</span>
                {fixedExpensesTotal > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {data.fixedExpenses.map((expense) => (
                <DynamicRow
                  key={expense.id}
                  id={expense.id}
                  fields={[
                    {
                      label: "Name",
                      value: String(expense.name),
                      onChange: (val) => handleUpdateExpense(expense.id, "name", val),
                      placeholder: "e.g., Rent",
                    },
                    {
                      label: `Monthly Cost (${symbol})`,
                      value: String(expense.value),
                      onChange: (val) => handleUpdateExpense(expense.id, "value", val),
                      type: "number",
                      placeholder: "0.00",
                    },
                    {
                      label: "Notes",
                      value: String(expense.notes || ""),
                      onChange: (val) => handleUpdateExpense(expense.id, "notes", val),
                      placeholder: "Optional",
                    },
                  ]}
                  onDelete={() => handleDeleteExpense(expense.id)}
                />
              ))}
              <Button onClick={handleAddExpense} variant="outline" className="w-full gap-2 bg-transparent">
                <Plus className="w-4 h-4" /> Add Expense Line
              </Button>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Section Total: <span className="font-bold text-foreground">{symbol}{fixedExpensesTotal.toFixed(2)}</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Marketing */}
          <AccordionItem value="marketing" className="border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <span>📢 Marketing</span>
                {marketingTotal > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {data.marketing.map((expense) => (
                <DynamicRow
                  key={expense.id}
                  id={expense.id}
                  fields={[
                    {
                      label: "Name",
                      value: String(expense.name),
                      onChange: (val) => handleUpdateMarketing(expense.id, "name", val),
                      placeholder: "e.g., Social Media",
                    },
                    {
                      label: `Monthly Cost (${symbol})`,
                      value: String(expense.value),
                      onChange: (val) => handleUpdateMarketing(expense.id, "value", val),
                      type: "number",
                      placeholder: "0.00",
                    },
                    {
                      label: "Notes",
                      value: String(expense.notes || ""),
                      onChange: (val) => handleUpdateMarketing(expense.id, "notes", val),
                      placeholder: "Optional",
                    },
                  ]}
                  onDelete={() => handleDeleteMarketing(expense.id)}
                />
              ))}
              <Button onClick={handleAddMarketing} variant="outline" className="w-full gap-2 bg-transparent">
                <Plus className="w-4 h-4" /> Add Marketing Line
              </Button>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Section Total: <span className="font-bold text-foreground">{symbol}{marketingTotal.toFixed(2)}</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Loans */}
          <AccordionItem value="loans" className="border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <span>💳 Loans & Finance</span>
                {loansTotal > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {data.loans.map((loan) => (
                <DynamicRow
                  key={loan.id}
                  id={loan.id}
                  fields={[
                    {
                      label: "Loan Name",
                      value: String(loan.name),
                      onChange: (val) => handleUpdateLoan(loan.id, "name", val),
                      placeholder: "e.g., Equipment Loan",
                    },
                    {
                      label: `Monthly Repayment (${symbol})`,
                      value: String(loan.monthlyRepayment),
                      onChange: (val) => handleUpdateLoan(loan.id, "monthlyRepayment", val),
                      type: "number",
                      placeholder: "0.00",
                    },
                  ]}
                  onDelete={() => handleDeleteLoan(loan.id)}
                />
              ))}
              <Button onClick={handleAddLoan} variant="outline" className="w-full gap-2 bg-transparent">
                <Plus className="w-4 h-4" /> Add Loan
              </Button>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Section Total: <span className="font-bold text-foreground">{symbol}{loansTotal.toFixed(2)}</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Staff */}
          <AccordionItem value="staff" className="border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <span>👥 Staff & Wages (Non-Technicians)</span>
                {staffTotal > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {/* Header Row */}
              <div className="hidden sm:flex items-center gap-4 px-4 pb-2">
                <div className="w-8 flex-shrink-0"></div> {/* Spacer for delete button */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Name/Role</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Annual Gross Salary</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Pension %</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Employer Tax/NI %</p>
                </div>
              </div>
              
              {data.staff.map((staff) => {
                const monthlySalary = staff.annualSalary / 12
                const pension = (monthlySalary * staff.pensionPercentage) / 100
                const tax = (monthlySalary * staff.employerTaxPercentage) / 100
                const trueMonthlyCost = monthlySalary + pension + tax

                return (
                  <div key={staff.id}>
                    <DynamicRow
                      id={staff.id}
                      fields={[
                        {
                          label: "Role Name",
                          value: String(staff.name),
                          onChange: (val) => handleUpdateStaff(staff.id, "name", val),
                          placeholder: "e.g., Manager",
                        },
                        {
                          label: `Annual Salary (${symbol})`,
                          value: String(staff.annualSalary),
                          onChange: (val) => handleUpdateStaff(staff.id, "annualSalary", val),
                          type: "number",
                          placeholder: "0.00",
                        },
                        {
                          label: "Pension %",
                          value: String(staff.pensionPercentage),
                          onChange: (val) =>
                            handleUpdateStaff(staff.id, "pensionPercentage", val),
                          type: "number",
                          placeholder: "8",
                        },
                        {
                          label: "Employer Tax %",
                          value: String(staff.employerTaxPercentage),
                          onChange: (val) =>
                            handleUpdateStaff(staff.id, "employerTaxPercentage", val),
                          type: "number",
                          placeholder: "10",
                        },
                      ]}
                      onDelete={() => handleDeleteStaff(staff.id)}
                    />
                    <p className="text-xs text-muted-foreground mt-2 ml-12">
                      True Monthly Cost: {symbol}{trueMonthlyCost.toFixed(2)}
                    </p>
                  </div>
                )
              })}
              <Button onClick={handleAddStaff} variant="outline" className="w-full gap-2 bg-transparent">
                <Plus className="w-4 h-4" /> Add Staff Member
              </Button>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Section Total: <span className="font-bold text-foreground">{symbol}{staffTotal.toFixed(2)}</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Technicians */}
          <AccordionItem value="technicians" className="border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <span>🔧 Workshop Technicians</span>
                {techniciansTotal > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {/* Header Row */}
              <div className="hidden sm:flex items-center gap-4 px-4 pb-2">
                <div className="w-8 flex-shrink-0"></div> {/* Spacer for delete button */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Name</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Hourly Pay Rate</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Weekly Hours</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-500">Efficiency Target</p>
                </div>
              </div>
              
              {data.technicians.map((tech) => {
                const monthlyTotal = tech.hourlyPayRate * tech.billableHoursPerWeek * 4.33

                return (
                  <div key={tech.id}>
                    <DynamicRow
                      id={tech.id}
                      fields={[
                        {
                          label: "Tech Name",
                          value: String(tech.name),
                          onChange: (val) => handleUpdateTechnician(tech.id, "name", val),
                          placeholder: "e.g., Tech 1",
                        },
                        {
                          label: `Hourly Pay Rate (${symbol})`,
                          value: String(tech.hourlyPayRate),
                          onChange: (val) =>
                            handleUpdateTechnician(tech.id, "hourlyPayRate", val),
                          type: "number",
                          placeholder: "0.00",
                        },
                        {
                          label: "Billable Hours/Week",
                          value: String(tech.billableHoursPerWeek),
                          onChange: (val) =>
                            handleUpdateTechnician(tech.id, "billableHoursPerWeek", val),
                          type: "number",
                          placeholder: "40",
                        },
                        {
                          label: "Target Efficiency %",
                          value: String(tech.targetEfficiency),
                          onChange: (val) =>
                            handleUpdateTechnician(tech.id, "targetEfficiency", val),
                          type: "number",
                          placeholder: "85",
                        },
                      ]}
                      onDelete={() => handleDeleteTechnician(tech.id)}
                    />
                    <p className="text-xs text-muted-foreground mt-2 ml-12">
                      Monthly Total: {symbol}{monthlyTotal.toFixed(2)}
                    </p>
                  </div>
                )
              })}
              <Button onClick={handleAddTechnician} variant="outline" className="w-full gap-2 bg-transparent">
                <Plus className="w-4 h-4" /> Add Technician
              </Button>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Section Total: <span className="font-bold text-foreground">{symbol}{techniciansTotal.toFixed(2)}</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Parts & Other Profit */}
          <AccordionItem value="parts" className="border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <span>📦 Parts & Other Profit</span>
                {data.estimatedMonthlyPartsProfitEuro > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="parts-profit">Estimated Monthly Parts Profit ({symbol})</Label>
                <Input
                  id="parts-profit"
                  type="number"
                  placeholder="1200"
                  value={data.estimatedMonthlyPartsProfitEuro}
                  onChange={(e) =>
                    updateData({ estimatedMonthlyPartsProfitEuro: Number.parseFloat(e.target.value) || 0 })
                  }
                />
              </div>
              <p className="text-xs text-muted-foreground">
                This amount will be subtracted from total expenses to calculate the target GP.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Owner Profit & Dividends */}
          <AccordionItem value="owner-profit" className="border-border">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <span>📈 Owner Profit & Dividends</span>
                {data.ownerProfitGoal > 0 && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="owner-profit">Monthly Owner Draw/Dividend ({symbol})</Label>
                <Input
                  id="owner-profit"
                  type="number"
                  placeholder="2000"
                  value={data.ownerProfitGoal}
                  onChange={(e) =>
                    updateData({ ownerProfitGoal: Number.parseFloat(e.target.value) || 0 })
                  }
                />
              </div>
              <p className="text-xs text-muted-foreground">
                This amount represents your desired monthly profit/owner draw and will be added to operational costs for Required Efficiency calculations.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Monthly Working Days */}
          <MonthlyWorkingDaysInput />
        </Accordion>
      </CardContent>
    </Card>
  )
}


import mongoose, { Schema } from "mongoose";
import { type WorkshopData } from "@workshop/shared";

const ExpenseSchema = new Schema({
    id: String,
    name: String,
    value: Number,
    notes: String
}, { _id: false });

const LoanSchema = new Schema({
    id: String,
    name: String,
    monthlyRepayment: Number
}, { _id: false });

const StaffSchema = new Schema({
    id: String,
    name: String,
    annualSalary: Number,
    pensionPercentage: Number,
    employerTaxPercentage: Number
}, { _id: false });

const TechnicianSchema = new Schema({
    id: String,
    name: String,
    hourlyPayRate: Number,
    billableHoursPerWeek: Number,
    targetEfficiency: Number
}, { _id: false });

const MonthlyDataSchema = new Schema({
    month: String,
    workingDays: Number,
    dailyTarget: Number,
    monthlyTarget: Number
}, { _id: false });

// Using 'any' for the generic to avoid strict typing issues with mongoose models for now
// Ideally we would pass <WorkshopData & Document>
const WorkshopSchema = new Schema({
    efficiencyRequired: Number,
    avgLabourRate: Number,
    currentMonth: String,
    workingDaysInMonth: Number,
    currentBranch: String,
    currentScenario: String,

    fixedExpensesTotal: Number,
    marketingTotal: Number,
    loansTotal: Number,
    staffTotal: Number,
    techniciansTotal: Number,
    estimatedMonthlyPartsProfitEuro: Number,
    workingDaysPerMonth: Number,
    monthlyWorkingDays: [Number],
    ownerProfitGoal: Number,

    fixedExpenses: [ExpenseSchema],
    marketing: [ExpenseSchema],
    loans: [LoanSchema],
    staff: [StaffSchema],
    technicians: [TechnicianSchema],

    workshopSize: Number,
    ramps: Number,
    techs: Number,

    monthlyData: [MonthlyDataSchema],

    todayActual: Number,
    dailyActualStatus: { type: String, enum: ["green", "amber", "red", null] }
}, { timestamps: true });

// Check if model exists before compiling to prevent OverwriteModelError
export default mongoose.models.Workshop || mongoose.model("Workshop", WorkshopSchema);


import mongoose, { Schema } from "mongoose";
import { type WorkshopData } from "@/components/shared";

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

const UserPreferencesSchema = new Schema({
    currency: { type: String, default: "EUR" },
    darkMode: { type: Boolean, default: false }
}, { _id: false });

const EfficiencyCalendarSchema = new Schema({
    daysInYear: { type: Number, default: 260 },
    bankHolidays: { type: Number, default: 8 },
    annualLeave: { type: Number, default: 20 },
    sickDays: { type: Number, default: 2 },
    efficiencyWorkingDays: { type: Number, default: 19.25 }
}, { _id: false });

// ownerEmail: which user (by email) this workshop belongs to. Required for multi-tenant SaaS.
const WorkshopSchema = new Schema({
    ownerEmail: { type: String, required: true, index: true },
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
    dailyActualStatus: { type: String, enum: ["green", "amber", "red", null] },

    userPreferences: UserPreferencesSchema,
    efficiencyCalendar: EfficiencyCalendarSchema,
    isStarterTemplate: { type: Boolean, default: true }
}, { timestamps: true });

// Check if model exists before compiling to prevent OverwriteModelError
export default mongoose.models.Workshop || mongoose.model("Workshop", WorkshopSchema);

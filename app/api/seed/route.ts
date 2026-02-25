import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Workshop from "@/lib/models/Workshop";
import UserProfile from "@/lib/models/UserProfile";

function generateMonthlyData() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const workingDays = [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22];
    return months.map((month, i) => ({ month, workingDays: workingDays[i], dailyTarget: 850, monthlyTarget: 850 * workingDays[i] }));
}

/**
 * Combined seed: workshop + profile. POST /api/seed
 */
export async function POST() {
    try {
        await dbConnect();
        let workshopOk = false;
        let profileOk = false;
        try {
            await Workshop.deleteMany({});
            await Workshop.create({
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
                monthlyWorkingDays: [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22],
                ownerProfitGoal: 2000,
                fixedExpenses: [{ id: "1", name: "Rent", value: 2000, notes: "Monthly workshop rent" }, { id: "2", name: "Electricity", value: 300, notes: "" }, { id: "3", name: "Insurance", value: 200, notes: "" }],
                marketing: [{ id: "1", name: "Digital Marketing", value: 300, notes: "" }, { id: "2", name: "Social Media", value: 200, notes: "" }],
                loans: [{ id: "1", name: "Equipment Loan", monthlyRepayment: 500 }, { id: "2", name: "Expansion Loan", monthlyRepayment: 1000 }],
                staff: [{ id: "1", name: "Manager", annualSalary: 30000, pensionPercentage: 8, employerTaxPercentage: 10 }, { id: "2", name: "Receptionist", annualSalary: 20000, pensionPercentage: 8, employerTaxPercentage: 10 }],
                technicians: [{ id: "1", name: "Tech 1", hourlyPayRate: 22, billableHoursPerWeek: 40, targetEfficiency: 85 }, { id: "2", name: "Tech 2", hourlyPayRate: 20, billableHoursPerWeek: 40, targetEfficiency: 80 }],
                workshopSize: 5000,
                ramps: 4,
                techs: 5,
                monthlyData: generateMonthlyData(),
                todayActual: 0,
                dailyActualStatus: null,
                userPreferences: { currency: "EUR", darkMode: false },
                efficiencyCalendar: { daysInYear: 260, bankHolidays: 8, annualLeave: 20, sickDays: 2, efficiencyWorkingDays: 19.25 },
            });
            workshopOk = true;
        } catch (e) {
            console.error("Workshop seed error:", e);
        }
        try {
            const existing = await UserProfile.findOne();
            if (!existing) {
                await UserProfile.create({
                    id: `user_${Date.now()}_seed`,
                    firstName: "Demo",
                    lastName: "User",
                    email: "demo@marginpilot.com",
                    password: "demo1234",
                    company: { id: "company_seed", name: "Demo Workshop", ownerName: "Demo User", email: "demo@marginpilot.com", multiLocation: false, branches: [{ id: "branch_seed", name: "Main Branch", code: "MAIN", currency: "EUR", facilities: { size: 5000, parking: 10, ramps: 4 }, calculations: [{ id: "calc_seed", name: "Main", dateCreated: new Date().toISOString(), staffCount: 0, gpTarget: 0, isActive: true }] }], users: [] },
                    preferences: { darkMode: false, beginnerMode: true },
                    hasCompletedSetup: false,
                    createdAt: new Date().toISOString(),
                });
            }
            profileOk = true;
        } catch (e) {
            console.error("Profile seed error:", e);
        }
        return NextResponse.json({ success: workshopOk && profileOk, workshop: workshopOk ? "seeded" : "failed", profile: profileOk ? "seeded" : "failed or skipped" });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}

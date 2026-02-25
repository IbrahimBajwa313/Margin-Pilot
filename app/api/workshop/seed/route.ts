
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Workshop from "@/lib/models/Workshop";

// Helper to generate monthly data matching the frontend logic
function generateMonthlyData() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    const workingDays = [22, 20, 22, 21, 22, 21, 23, 22, 21, 23, 21, 22];

    return months.map((month, index) => ({
        month,
        workingDays: workingDays[index],
        dailyTarget: 850,
        monthlyTarget: 850 * workingDays[index],
    }));
}

export async function POST() {
    try {
        await dbConnect();

        const initialData = {
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

            userPreferences: { currency: "EUR", darkMode: false },
            efficiencyCalendar: {
                daysInYear: 260,
                bankHolidays: 8,
                annualLeave: 20,
                sickDays: 2,
                efficiencyWorkingDays: 19.25,
            },
        };

        // Upsert or Create
        await Workshop.deleteMany({});
        const created = await Workshop.create(initialData);

        return NextResponse.json({ success: true, message: "Database seeded successfully", data: created });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

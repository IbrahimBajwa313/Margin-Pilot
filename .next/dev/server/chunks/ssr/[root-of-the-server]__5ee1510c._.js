module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "calculateDailyStatus",
    ()=>calculateDailyStatus,
    "useAppContext",
    ()=>useAppContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/@workshop/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/@workshop/shared/src/efficiency-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const calculateDailyStatus = (actual, target)=>{
    if (target === 0) return "red";
    const threshold90Percent = target * 0.9;
    const threshold99Percent = target * 0.99;
    if (actual >= target) {
        return "green";
    } else if (actual >= threshold90Percent && actual < threshold99Percent) {
        return "amber";
    } else {
        return "red";
    }
};
function AppProvider({ children }) {
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize monthly working days with standard values
    const initializeMonthlyWorkingDays = ()=>{
        return [
            22,
            20,
            22,
            21,
            22,
            21,
            23,
            22,
            21,
            23,
            21,
            22
        ];
    };
    // Load data from localStorage on mount
    const loadStoredData = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Return default data with initialized monthly working days
        return {
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
            monthlyWorkingDays: initializeMonthlyWorkingDays(),
            ownerProfitGoal: 2000,
            fixedExpenses: [
                {
                    id: "1",
                    name: "Rent",
                    value: 2000,
                    notes: "Monthly workshop rent"
                },
                {
                    id: "2",
                    name: "Electricity",
                    value: 300,
                    notes: ""
                },
                {
                    id: "3",
                    name: "Insurance",
                    value: 200,
                    notes: ""
                }
            ],
            marketing: [
                {
                    id: "1",
                    name: "Digital Marketing",
                    value: 300,
                    notes: ""
                },
                {
                    id: "2",
                    name: "Social Media",
                    value: 200,
                    notes: ""
                }
            ],
            loans: [
                {
                    id: "1",
                    name: "Equipment Loan",
                    monthlyRepayment: 500
                },
                {
                    id: "2",
                    name: "Expansion Loan",
                    monthlyRepayment: 1000
                }
            ],
            staff: [
                {
                    id: "1",
                    name: "Manager",
                    annualSalary: 30000,
                    pensionPercentage: 8,
                    employerTaxPercentage: 10
                },
                {
                    id: "2",
                    name: "Receptionist",
                    annualSalary: 20000,
                    pensionPercentage: 8,
                    employerTaxPercentage: 10
                }
            ],
            technicians: [
                {
                    id: "1",
                    name: "Tech 1",
                    hourlyPayRate: 22,
                    billableHoursPerWeek: 40,
                    targetEfficiency: 85
                },
                {
                    id: "2",
                    name: "Tech 2",
                    hourlyPayRate: 20,
                    billableHoursPerWeek: 40,
                    targetEfficiency: 80
                }
            ],
            workshopSize: 5000,
            ramps: 4,
            techs: 5,
            monthlyData: generateMonthlyData(),
            todayActual: 0,
            dailyActualStatus: null
        };
    };
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(loadStoredData);
    // Calculate targets based on current data - NEW Fixed Daily / Variable Monthly Model
    const calculateTargets = (currentData)=>{
        // Step A: Calculate Total Monthly Expenses
        const fixedExpensesTotal = currentData.fixedExpenses.reduce((sum, exp)=>sum + exp.value, 0);
        const marketingTotal = currentData.marketing.reduce((sum, exp)=>sum + exp.value, 0);
        const loansTotal = currentData.loans.reduce((sum, loan)=>sum + loan.monthlyRepayment, 0);
        const staffTotal = currentData.staff.reduce((sum, staff)=>{
            const monthlySalary = staff.annualSalary / 12;
            const pension = monthlySalary * staff.pensionPercentage / 100;
            const tax = monthlySalary * staff.employerTaxPercentage / 100;
            return sum + monthlySalary + pension + tax;
        }, 0);
        const techniciansTotal = currentData.technicians.reduce((sum, tech)=>{
            return sum + tech.hourlyPayRate * tech.billableHoursPerWeek * 4.33;
        }, 0);
        const totalMonthlyExpenses = fixedExpensesTotal + marketingTotal + loansTotal + staffTotal + techniciansTotal;
        // Step B: Working Days Logic - Use Dynamic Monthly Working Days
        const totalAnnualWorkingDays = currentData.monthlyWorkingDays.reduce((sum, days)=>sum + days, 0);
        const averageMonthlyWorkingDays = totalAnnualWorkingDays / 12;
        // Step C: The Golden Number (Standard Daily Target)
        const totalAnnualExpenses = totalMonthlyExpenses * 12;
        const standardDailyGpTarget = totalAnnualWorkingDays > 0 ? totalAnnualExpenses / totalAnnualWorkingDays : 0;
        // Step D: Dashboard Metrics (Average Monthly)
        const averageMonthlyGpTarget = standardDailyGpTarget * averageMonthlyWorkingDays;
        console.log("Financial Logic | Fixed Daily / Variable Monthly Model:", {
            totalMonthlyExpenses,
            totalAnnualExpenses,
            totalAnnualWorkingDays,
            averageMonthlyWorkingDays,
            standardDailyGpTarget,
            averageMonthlyGpTarget
        });
        return {
            totalMonthlyExpenses,
            totalAnnualExpenses,
            totalAnnualWorkingDays,
            averageMonthlyWorkingDays,
            standardDailyGpTarget,
            averageMonthlyGpTarget
        };
    };
    const calculatedTargets = calculateTargets(data);
    const efficiency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateEfficiency"])(data);
    // Recalculate dailyActualStatus whenever todayActual or target changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data.todayActual > 0 && calculatedTargets.standardDailyGpTarget > 0) {
            const dailyTarget = calculatedTargets.standardDailyGpTarget;
            const actualGP = data.todayActual;
            const newStatus = calculateDailyStatus(actualGP, dailyTarget);
            // Only update if status has changed to avoid infinite loops
            if (data.dailyActualStatus !== newStatus) {
                setData((prev)=>({
                        ...prev,
                        dailyActualStatus: newStatus
                    }));
                console.log("Status Updated | Target:", dailyTarget, "Actual:", actualGP, "Status:", newStatus);
            }
        }
    }, [
        data.todayActual,
        calculatedTargets.standardDailyGpTarget
    ]);
    // Save to localStorage whenever data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        data
    ]);
    function updateData(updates) {
        setData((prev)=>{
            const updated = {
                ...prev,
                ...updates
            };
            console.log("Data Sync | Uploading to Cloud:", updated);
            return updated;
        });
    }
    function updateMonthDays(monthIndex, newDays) {
        setData((prev)=>{
            const updatedMonthlyWorkingDays = [
                ...prev.monthlyWorkingDays
            ];
            updatedMonthlyWorkingDays[monthIndex] = newDays;
            const totalAnnualWorkingDays = updatedMonthlyWorkingDays.reduce((sum, days)=>sum + days, 0);
            console.log("Month Days Updated | Month", monthIndex, "New Days:", newDays, "Total Annual Days:", totalAnnualWorkingDays);
            return {
                ...prev,
                monthlyWorkingDays: updatedMonthlyWorkingDays
            };
        });
    }
    function toggleTheme() {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            data,
            updateData,
            updateMonthDays,
            toggleTheme,
            isDark,
            calculatedTargets,
            efficiency
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx",
        lineNumber: 259,
        columnNumber: 10
    }, this);
}
function useAppContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
}
function generateMonthlyData() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const workingDays = [
        22,
        20,
        22,
        21,
        22,
        21,
        23,
        22,
        21,
        23,
        21,
        22
    ];
    return months.map((month, index)=>({
            month,
            workingDays: workingDays[index],
            dailyTarget: 850,
            monthlyTarget: 850 * workingDays[index]
        }));
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Storage Keys
const STORAGE_KEY = 'workshop_user_profile' // The DB - NEVER DELETE THIS
;
const SESSION_KEY = 'workshop_session_active' // The Flag
;
function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check authentication status on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setIsLoading(false);
    }, []);
    function login(profile) {
        console.log("AuthContext (Login) | Received user data:", profile);
        console.log("AuthContext (Login) | Current Profile Storage:", localStorage.getItem(STORAGE_KEY));
        console.log("AuthContext (Login) | Current Session State:", localStorage.getItem(SESSION_KEY));
        // Update State
        setUserProfile(profile);
        setIsAuthenticated(true);
        // Set session active flag (DO NOT write user profile here)
        localStorage.setItem(SESSION_KEY, 'true');
        console.log("Auth | Session activated, state updated:", profile);
    }
    function logout() {
        console.log("AuthContext (Logout) | Logging out user");
        // Update State
        setUserProfile(null);
        setIsAuthenticated(false);
        // ONLY remove session flag - DO NOT delete user profile
        localStorage.removeItem(SESSION_KEY);
        console.log("Auth | Session deactivated, user profile preserved");
    }
    function updateProfile(updates) {
        if (!userProfile) {
            console.error("AuthContext (UpdateProfile) | No user profile found");
            return;
        }
        const updatedProfile = {
            ...userProfile,
            ...updates
        };
        setUserProfile(updatedProfile);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
        console.log("AuthContext (UpdateProfile) | Profile updated:", updatedProfile);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            isAuthenticated,
            userProfile,
            login,
            logout,
            updateProfile,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/lib/auth-context.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "getCurrencySymbol",
    ()=>getCurrencySymbol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const getCurrencySymbol = (code)=>{
    const symbols = {
        'GBP': '£',
        'EUR': '€',
        'USD': '$',
        'ISK': 'kr',
        'ZAR': 'R',
        'CAD': 'C$',
        'AUD': 'A$',
        'JPY': '¥',
        'CHF': 'CHF',
        'CNY': '¥',
        'INR': '₹',
        'NOK': 'kr',
        'SEK': 'kr',
        'DKK': 'kr',
        'PLN': 'zł',
        'CZK': 'Kč',
        'HUF': 'Ft'
    };
    return symbols[code] || '€'; // Default fallback to Euro
};
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkshopLoader",
    ()=>WorkshopLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const sizeMap = {
    small: {
        logo: 60,
        text: "text-sm",
        spacing: "space-y-2"
    },
    medium: {
        logo: 100,
        text: "text-base",
        spacing: "space-y-3"
    },
    large: {
        logo: 140,
        text: "text-lg",
        spacing: "space-y-4"
    }
};
function WorkshopLoader({ size = "medium", loadingText = "Loading...", showPercentage = false, percentage, className, exiting = false }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayPercentage, setDisplayPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const dimensions = sizeMap[size];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showPercentage && percentage !== undefined) {
            const interval = setInterval(()=>{
                setDisplayPercentage((prev)=>{
                    if (prev >= percentage) {
                        clearInterval(interval);
                        return percentage;
                    }
                    return Math.min(prev + 2, percentage);
                });
            }, 30);
            return ()=>clearInterval(interval);
        }
    }, [
        showPercentage,
        percentage
    ]);
    if (!mounted) {
        return null;
    }
    const logoSize = dimensions.logo;
    const progressRadius = logoSize / 2 + 10;
    const progressCircumference = 2 * Math.PI * progressRadius;
    const containerSize = logoSize + 30;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center", dimensions.spacing, exiting && "animate-out fade-out zoom-out-95 duration-300", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    width: containerSize,
                    height: containerSize
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 -rotate-90 animate-spin",
                        width: containerSize,
                        height: containerSize,
                        style: {
                            animationDuration: "2s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: containerSize / 2,
                                cy: containerSize / 2,
                                r: progressRadius,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "3",
                                className: "text-primary/20"
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: containerSize / 2,
                                cy: containerSize / 2,
                                r: progressRadius,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "3",
                                strokeLinecap: "round",
                                strokeDasharray: `${progressCircumference * 0.25} ${progressCircumference * 0.75}`,
                                className: "text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        style: {
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo for light screen.png",
                                    alt: "MarginPilot Logo",
                                    fill: true,
                                    className: "object-contain animate-pulse dark:hidden",
                                    style: {
                                        animationDuration: "2s"
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo for dark screen.png",
                                    alt: "MarginPilot Logo",
                                    fill: true,
                                    className: "object-contain animate-pulse hidden dark:block",
                                    style: {
                                        animationDuration: "2s"
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            loadingText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-foreground text-center animate-pulse", dimensions.text),
                style: {
                    animationDuration: "2s"
                },
                children: loadingText
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-bold text-primary text-center tracking-wide", dimensions.text),
                children: "MarginPilot"
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            showPercentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono text-muted-foreground text-center tabular-nums", size === "small" ? "text-xs" : "text-sm"),
                children: [
                    displayPercentage,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input border-border h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignUp",
    ()=>SignUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function SignUp({ onSwitchToLogin }) {
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [termsAccepted, setTermsAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Show loader on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsLoading(false), 600);
        return ()=>clearTimeout(timer);
    }, []);
    // Storage Keys
    const STORAGE_KEY = 'workshop_user_profile' // The DB - NEVER DELETE THIS
    ;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        workspaceName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [passwordValidation, setPasswordValidation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    });
    // Password validation regex
    const validatePassword = (password)=>{
        return {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*]/.test(password)
        };
    };
    // Update password validation as user types
    const handlePasswordChange = (value)=>{
        setFormData((prev)=>({
                ...prev,
                password: value
            }));
        setPasswordValidation(validatePassword(value));
        // Clear password error if it exists
        if (errors.password) {
            setErrors((prev)=>({
                    ...prev,
                    password: undefined
                }));
        }
    };
    // Validate form
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!formData.workspaceName.trim()) {
            newErrors.workspaceName = "Workspace name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        const passwordValid = validatePassword(formData.password);
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (!Object.values(passwordValid).every(Boolean)) {
            newErrors.password = "Password does not meet all requirements";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!termsAccepted) {
            newErrors.terms = "You must accept the terms and conditions";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            // 1. Read First (Duplicate Check)
            const existingData = localStorage.getItem(STORAGE_KEY);
            if (existingData) {
                const parsedExisting = JSON.parse(existingData);
                if (parsedExisting.email === formData.email.trim()) {
                    setErrors({
                        email: "An account with this email already exists."
                    });
                    return;
                }
            }
            // 2. Create User Object with new structure
            const newUser = {
                id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.trim(),
                password: formData.password,
                jobTitle: undefined,
                linkedinUrl: undefined,
                photo: undefined,
                company: {
                    id: `company_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                    name: formData.workspaceName.trim(),
                    logo: undefined,
                    ownerName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
                    address: undefined,
                    email: formData.email.trim(),
                    phone: undefined,
                    website: undefined,
                    multiLocation: false,
                    branches: [],
                    users: []
                },
                preferences: {
                    darkMode: false,
                    beginnerMode: true
                },
                hasCompletedSetup: false,
                createdAt: new Date().toISOString()
            };
            // 3. Save to "Database" (LocalStorage) - BEFORE calling login
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
            console.log("Sign Up | User saved to localStorage:", newUser);
            // 4. Update Session (Context)
            login(newUser);
            console.log("Sign Up | Account created successfully:", newUser);
        } catch (error) {
            console.error("Sign Up | Error creating account:", error);
            setErrors({
                email: "An error occurred. Please try again."
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const isPasswordValid = Object.values(passwordValidation).every(Boolean);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkshopLoader"], {
                size: "large",
                loadingText: "Loading Sign Up..."
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
            lineNumber: 208,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-xl bg-card/95 backdrop-blur-xl shadow-2xl border-border/50 rounded-2xl p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "space-y-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-48 h-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo for light screen.png",
                                        alt: "MarginPilot Logo",
                                        className: "absolute inset-0 w-full h-full object-contain dark:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo for dark screen.png",
                                        alt: "MarginPilot Logo",
                                        className: "absolute inset-0 w-full h-full object-contain hidden dark:block"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-2xl font-bold text-foreground",
                                    children: "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    className: "text-muted-foreground text-sm",
                                    children: "Join MarginPilot and get started"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "firstName",
                                                    className: "text-slate-700 dark:text-slate-300",
                                                    children: "First Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "firstName",
                                                    type: "text",
                                                    placeholder: "John",
                                                    value: formData.firstName,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                firstName: e.target.value
                                                            }));
                                                        if (errors.firstName) setErrors((prev)=>({
                                                                ...prev,
                                                                firstName: ""
                                                            }));
                                                    },
                                                    className: `h-12 rounded-lg border-border bg-input focus:ring-2 focus:ring-primary/20 focus:border-primary/50 ${errors.firstName ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this),
                                                errors.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errors.firstName
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "lastName",
                                                    className: "text-slate-700 dark:text-slate-300",
                                                    children: "Last Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "lastName",
                                                    type: "text",
                                                    placeholder: "Doe",
                                                    value: formData.lastName,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                lastName: e.target.value
                                                            }));
                                                        if (errors.lastName) setErrors((prev)=>({
                                                                ...prev,
                                                                lastName: ""
                                                            }));
                                                    },
                                                    className: `h-12 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.lastName ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                errors.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errors.lastName
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "workspaceName",
                                            className: "text-slate-700 dark:text-slate-300",
                                            children: "Workspace Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "workspaceName",
                                            type: "text",
                                            placeholder: "JD Motors Workshop",
                                            value: formData.workspaceName,
                                            onChange: (e)=>{
                                                setFormData((prev)=>({
                                                        ...prev,
                                                        workspaceName: e.target.value
                                                    }));
                                                if (errors.workspaceName) setErrors((prev)=>({
                                                        ...prev,
                                                        workspaceName: ""
                                                    }));
                                            },
                                            className: `h-12 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.workspaceName ? 'border-destructive' : ''}`,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this),
                                        errors.workspaceName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-destructive",
                                            children: errors.workspaceName
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 297,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "email",
                                            className: "text-slate-700 dark:text-slate-300",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "email",
                                                    type: "email",
                                                    placeholder: "john@example.com",
                                                    value: formData.email,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                email: e.target.value
                                                            }));
                                                        if (errors.email) setErrors((prev)=>({
                                                                ...prev,
                                                                email: ""
                                                            }));
                                                    },
                                                    className: `h-12 pl-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.email ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-destructive",
                                            children: errors.email
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 318,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "password",
                                            className: "text-slate-700 dark:text-slate-300",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "password",
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "Create a strong password",
                                                    value: formData.password,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                password: e.target.value
                                                            }));
                                                        handlePasswordChange(e.target.value);
                                                        if (errors.password) setErrors((prev)=>({
                                                                ...prev,
                                                                password: ""
                                                            }));
                                                    },
                                                    className: `h-12 pl-10 pr-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.password ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-1 top-1 h-9 w-9 p-0",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 68
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-destructive",
                                            children: errors.password
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 349,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        passwordValidation.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3 w-3 text-success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3 w-3 text-destructive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: passwordValidation.length ? "text-success" : "text-muted-foreground",
                                                            children: "At least 8 characters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        passwordValidation.uppercase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3 w-3 text-success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3 w-3 text-destructive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: passwordValidation.uppercase ? "text-success" : "text-slate-500",
                                                            children: "One uppercase letter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        passwordValidation.lowercase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3 w-3 text-success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3 w-3 text-destructive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: passwordValidation.lowercase ? "text-success" : "text-slate-500",
                                                            children: "One lowercase letter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        passwordValidation.number ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3 w-3 text-success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3 w-3 text-destructive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: passwordValidation.number ? "text-success" : "text-slate-500",
                                                            children: "One number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        passwordValidation.special ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3 w-3 text-success"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-3 w-3 text-destructive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: passwordValidation.special ? "text-success" : "text-slate-500",
                                                            children: "One special character (!@#$%^&*)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "confirmPassword",
                                            className: "text-slate-700 dark:text-slate-300",
                                            children: "Confirm Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "confirmPassword",
                                                    type: showConfirmPassword ? "text" : "password",
                                                    placeholder: "Confirm your password",
                                                    value: formData.confirmPassword,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                confirmPassword: e.target.value
                                                            }));
                                                        if (errors.confirmPassword) setErrors((prev)=>({
                                                                ...prev,
                                                                confirmPassword: ""
                                                            }));
                                                    },
                                                    className: `h-12 pl-10 pr-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${errors.confirmPassword ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setShowConfirmPassword(!showConfirmPassword),
                                                    className: "absolute right-1 top-1 h-9 w-9 p-0",
                                                    children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 42
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 75
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-destructive",
                                            children: errors.confirmPassword
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 433,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            id: "terms",
                                            checked: termsAccepted,
                                            onCheckedChange: (checked)=>{
                                                setTermsAccepted(checked === true);
                                                if (errors.terms) setErrors((prev)=>({
                                                        ...prev,
                                                        terms: ""
                                                    }));
                                            },
                                            className: "mt-0.5 h-5 w-5 text-primary focus:ring-primary rounded border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 ml-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "terms",
                                                    className: "text-sm text-foreground leading-relaxed",
                                                    children: [
                                                        "I agree to the",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "link",
                                                            className: "p-0 h-auto text-primary underline",
                                                            children: "Terms of Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        "and",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "link",
                                                            className: "p-0 h-auto text-primary underline",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                errors.terms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errors.terms
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                            className: "flex flex-col space-y-4 pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30",
                                    disabled: isSubmitting || !isPasswordValid || !termsAccepted,
                                    children: isSubmitting ? "Creating Account..." : "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-sm text-muted-foreground",
                                    children: [
                                        "I already have an account",
                                        " ",
                                        onSwitchToLogin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            className: "p-0 h-auto text-primary hover:text-primary/80 underline",
                                            onClick: onSwitchToLogin,
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this) : "Sign in"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
            lineNumber: 216,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/alert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current', {
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive: 'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignInScreen",
    ()=>SignInScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function SignInScreen({ onSwitchToSignup }) {
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Storage Keys
    const STORAGE_KEY = 'workshop_user_profile' // The DB - NEVER DELETE THIS
    ;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: ""
    });
    // Show loader on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsLoading(false), 600);
        return ()=>clearTimeout(timer);
    }, []);
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setIsSubmitting(true);
        try {
            // 1. Read "Database"
            const json = localStorage.getItem(STORAGE_KEY);
            // 2. Validation
            if (!json) {
                setError("No account found. Please sign up.");
                return;
            }
            const user = JSON.parse(json);
            if (user.email !== formData.email.trim() || user.password !== formData.password) {
                setError("Invalid email or password.");
                return;
            }
            // 3. Success
            console.log("Sign In | User data from localStorage:", user);
            login(user);
            console.log("Sign In | User logged in successfully:", user);
        } catch (error) {
            console.error("Sign In | Error during login:", error);
            setError("An error occurred. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkshopLoader"], {
                size: "large",
                loadingText: "Loading Sign In..."
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-xl bg-card/95 backdrop-blur-xl shadow-2xl border-border/50 rounded-2xl p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "space-y-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-48 h-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo for light screen.png",
                                        alt: "MarginPilot Logo",
                                        className: "absolute inset-0 w-full h-full object-contain dark:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo for dark screen.png",
                                        alt: "MarginPilot Logo",
                                        className: "absolute inset-0 w-full h-full object-contain hidden dark:block"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-2xl font-bold text-slate-900 dark:text-white",
                                    children: "Welcome Back"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    className: "text-slate-500 dark:text-slate-400 text-sm",
                                    children: "Sign in to your workspace"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "email",
                                            className: "text-foreground",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-3 top-3 h-4 w-4 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "email",
                                                    type: "email",
                                                    placeholder: "john@example.com",
                                                    value: formData.email,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                email: e.target.value
                                                            }));
                                                        if (error) setError("");
                                                    },
                                                    className: `h-12 pl-10 rounded-lg border-slate-200 focus:ring-2 focus:ring-teal-500 ${error ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "password",
                                            className: "text-slate-700 dark:text-slate-300",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-3 top-3 h-4 w-4 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "password",
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "Enter your password",
                                                    value: formData.password,
                                                    onChange: (e)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                password: e.target.value
                                                            }));
                                                        if (error) setError("");
                                                    },
                                                    className: `h-12 pl-10 pr-10 rounded-lg border-border bg-input focus:ring-2 focus:ring-primary/20 focus:border-primary/50 ${error ? 'border-destructive' : ''}`,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-1 top-1 h-9 w-9 p-0",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 68
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                                    variant: "destructive",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        className: "p-0 h-auto text-sm text-primary hover:text-primary/80",
                                        children: "Forgot your password?"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                            className: "flex flex-col space-y-4 pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30",
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Signing In..." : "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-sm text-muted-foreground",
                                    children: [
                                        "Don't have an account?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            className: "p-0 h-auto text-primary hover:text-primary/80 underline",
                                            onClick: onSwitchToSignup,
                                            children: "Create one"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$sign$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/sign-up.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$sign$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/sign-in.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/workshop-loader.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AuthGuard({ children }) {
    const { isAuthenticated, userProfile, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [authView, setAuthView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('signup');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Redirect to setup wizard if user hasn't completed setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated && userProfile && !userProfile.hasCompletedSetup && pathname !== '/setup-wizard') {
            router.push('/setup-wizard');
        }
    }, [
        isAuthenticated,
        userProfile,
        pathname,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkshopLoader"], {
                size: "large",
                loadingText: "Initializing..."
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated) {
        if (authView === 'signup') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$sign$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignUp"], {
                onSwitchToLogin: ()=>setAuthView('login')
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$sign$2d$in$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignInScreen"], {
                onSwitchToSignup: ()=>setAuthView('signup')
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this);
        }
    }
    // If user is authenticated but hasn't completed setup, show setup wizard
    if (userProfile && !userProfile.hasCompletedSetup && pathname !== '/setup-wizard') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$workshop$2d$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkshopLoader"], {
                size: "medium",
                loadingText: "Redirecting to setup..."
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/auth-guard.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5ee1510c._.js.map
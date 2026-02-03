(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Workshop-Profit-Pilot/apps/web/hooks/use-tools-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToolsData",
    ()=>useToolsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "workshop_tools_data";
const defaultData = {
    marginCalc: {
        cost: 0,
        price: 0,
        markup: 0,
        margin: 0,
        strategies: []
    },
    vatCalc: {
        amount: 0,
        rate: 20,
        mode: "add",
        customRate: undefined
    },
    labourRateCalc: {
        rows: [
            {
                id: "1",
                name: "Service",
                rate: 0,
                pct: 0
            }
        ]
    },
    loanCalc: {
        amount: 0,
        rate: 0,
        term: 0,
        startDate: new Date().toISOString().slice(0, 10),
        type: "standard",
        savedLoans: []
    },
    corpTaxCalc: {
        profits: 0
    },
    dividendTaxCalc: {
        dividendIncome: 0,
        otherIncome: 0
    }
};
function loadStored() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultData;
        const parsed = JSON.parse(raw);
        return {
            marginCalc: {
                ...defaultData.marginCalc,
                ...parsed.marginCalc
            },
            vatCalc: {
                ...defaultData.vatCalc,
                ...parsed.vatCalc
            },
            labourRateCalc: {
                ...defaultData.labourRateCalc,
                ...parsed.labourRateCalc
            },
            loanCalc: {
                ...defaultData.loanCalc,
                ...parsed.loanCalc
            },
            corpTaxCalc: {
                ...defaultData.corpTaxCalc,
                ...parsed.corpTaxCalc
            },
            dividendTaxCalc: {
                ...defaultData.dividendTaxCalc,
                ...parsed.dividendTaxCalc
            }
        };
    } catch  {
        return defaultData;
    }
}
function useToolsData() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useToolsData.useEffect": ()=>{
            setData(loadStored());
        }
    }["useToolsData.useEffect"], []);
    const persist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToolsData.useCallback[persist]": (next)=>{
            setData(next);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            }
        }
    }["useToolsData.useCallback[persist]"], []);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToolsData.useCallback[update]": (key, value)=>{
            setData({
                "useToolsData.useCallback[update]": (prev)=>{
                    const next = {
                        ...prev
                    };
                    const nextValue = typeof value === "function" ? value(prev[key]) : {
                        ...prev[key],
                        ...value
                    };
                    next[key] = nextValue;
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                    }
                    return next;
                }
            }["useToolsData.useCallback[update]"]);
        }
    }["useToolsData.useCallback[update]"], []);
    return {
        data,
        update,
        persist
    };
}
_s(useToolsData, "/iJE944MXjyGW46g5eqXWytr+Ms=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DividendTaxCalculatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$tools$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-tools-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const PERSONAL_ALLOWANCE = 12_570;
const DIVIDEND_ALLOWANCE = 500;
const BASIC_LIMIT = 50_270;
const HIGHER_LIMIT = 125_140;
const RATE_BASIC = 8.75;
const RATE_HIGHER = 33.75;
const RATE_ADDITIONAL = 39.35;
function calcDividendTax(dividendIncome, otherIncome) {
    const totalIncome = dividendIncome + otherIncome;
    let personalAllowance = PERSONAL_ALLOWANCE;
    const personalAllowanceUsedBySalary = Math.min(otherIncome, personalAllowance);
    personalAllowance -= personalAllowanceUsedBySalary;
    const personalAllowanceUsedByDividends = Math.min(dividendIncome, personalAllowance);
    personalAllowance -= personalAllowanceUsedByDividends;
    const dividendAllowanceUsed = Math.min(DIVIDEND_ALLOWANCE, dividendIncome - personalAllowanceUsedByDividends);
    const dividendsAfterPA = dividendIncome - personalAllowanceUsedByDividends;
    const dividendsAfterAllowance = Math.max(0, dividendsAfterPA - dividendAllowanceUsed);
    let taxableInBand = 0;
    let taxBasic = 0;
    let taxHigher = 0;
    let taxAdditional = 0;
    const salaryAfterPA = otherIncome - personalAllowanceUsedBySalary;
    let bandUsed = Math.max(0, salaryAfterPA);
    const HIGHER_BAND_SIZE = HIGHER_LIMIT - BASIC_LIMIT // 72870
    ;
    const basicLimitRemaining = Math.max(0, BASIC_LIMIT - bandUsed);
    const firstChunk = Math.min(dividendsAfterAllowance, basicLimitRemaining);
    taxBasic = firstChunk * (RATE_BASIC / 100);
    bandUsed += firstChunk;
    const secondChunk = Math.min(dividendsAfterAllowance - firstChunk, HIGHER_BAND_SIZE);
    taxHigher = secondChunk * (RATE_HIGHER / 100);
    bandUsed += secondChunk;
    const additionalTaxable = Math.max(0, dividendsAfterAllowance - firstChunk - secondChunk);
    taxAdditional = additionalTaxable * (RATE_ADDITIONAL / 100);
    const totalDividendTax = taxBasic + taxHigher + taxAdditional;
    const afterTaxDividends = dividendIncome - totalDividendTax;
    return {
        totalIncome,
        personalAllowanceUsed: personalAllowanceUsedBySalary + personalAllowanceUsedByDividends,
        dividendAllowanceUsed: Math.min(DIVIDEND_ALLOWANCE, dividendsAfterPA),
        taxableDividends: dividendsAfterAllowance,
        taxBasic,
        taxHigher,
        taxAdditional,
        totalDividendTax,
        afterTaxDividends
    };
}
function DividendTaxCalculatorPage() {
    _s();
    const { data, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$tools$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolsData"])();
    const { dividendIncome, otherIncome } = data.dividendTaxCalc;
    const result = calcDividendTax(dividendIncome, otherIncome);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tools",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "icon",
                            className: "shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg md:text-2xl font-bold text-foreground",
                                children: "Dividend Tax Calculator"
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "2024/25: Personal allowance £12,570, Dividend allowance £500. Salary uses allowance first."
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "card-panel rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base",
                            children: "Income"
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-muted-foreground",
                                        children: "Dividend income (£)"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        step: 100,
                                        value: dividendIncome || "",
                                        onChange: (e)=>update("dividendTaxCalc", {
                                                dividendIncome: Number(e.target.value) || 0
                                            }),
                                        placeholder: "0",
                                        className: "bg-muted/50 border-border"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-muted-foreground",
                                        children: "Other income / Salary (£)"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "number",
                                        min: 0,
                                        step: 100,
                                        value: otherIncome || "",
                                        onChange: (e)=>update("dividendTaxCalc", {
                                                otherIncome: Number(e.target.value) || 0
                                            }),
                                        placeholder: "0",
                                        className: "bg-muted/50 border-border"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "card-panel rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base",
                            children: "Result"
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/50 border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Total income"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg mt-1",
                                                children: [
                                                    "£",
                                                    result.totalIncome.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/50 border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Personal allowance used"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg mt-1",
                                                children: [
                                                    "£",
                                                    result.personalAllowanceUsed.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/50 border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Dividend allowance used"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg mt-1",
                                                children: [
                                                    "£",
                                                    result.dividendAllowanceUsed.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/50 border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Taxable dividends"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg mt-1",
                                                children: [
                                                    "£",
                                                    result.taxableDividends.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/50 border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Dividend tax due"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-mp-amber text-lg mt-1",
                                                children: [
                                                    "£",
                                                    result.totalDividendTax.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/50 border border-border p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Dividends after tax"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-mp-green text-lg mt-1",
                                                children: [
                                                    "£",
                                                    result.afterTaxDividends.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-muted/50 border border-border p-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-2",
                                        children: "Bands: Basic 8.75% (up to £50,270), Higher 33.75% (£50,271–£125,140), Additional 39.35% (over £125,140)."
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: [
                                            "Basic: £",
                                            result.taxBasic.toFixed(2),
                                            " · Higher: £",
                                            result.taxHigher.toFixed(2),
                                            " · Additional: £",
                                            result.taxAdditional.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/tools/dividend-tax-calculator/page.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(DividendTaxCalculatorPage, "pj1PZnfnmzYQTmje8O4FG/S6+Pw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$tools$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToolsData"]
    ];
});
_c = DividendTaxCalculatorPage;
var _c;
__turbopack_context__.k.register(_c, "DividendTaxCalculatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1767eb36._.js.map
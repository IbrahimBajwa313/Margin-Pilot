(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Workshop-Profit-Pilot/apps/web/hooks/use-efficiency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEfficiency",
    ()=>useEfficiency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$shared$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/shared/efficiency-utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useEfficiency() {
    _s();
    const { efficiency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    return {
        ...efficiency,
        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$shared$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyColor"])(efficiency.requiredEfficiency),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$shared$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyLabel"])(efficiency.requiredEfficiency),
        breakevenColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$shared$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyColor"])(efficiency.breakevenEfficiency),
        breakevenLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$shared$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyLabel"])(efficiency.breakevenEfficiency)
    };
}
_s(useEfficiency, "EST2Vq4UZ5fOTr6WNoWQt68JTEI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KPICard",
    ()=>KPICard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
;
;
function KPICard({ title, value, subtitle, badge, trend, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `${className} hover:shadow-lg hover:border-primary/20 transition-all duration-300 border-border/50 group`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl lg:text-3xl font-bold text-foreground bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text group-hover:from-primary group-hover:to-accent transition-all duration-300",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
                        lineNumber: 21,
                        columnNumber: 22
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
                        lineNumber: 22,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = KPICard;
var _c;
__turbopack_context__.k.register(_c, "KPICard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TodaysActualCard",
    ()=>TodaysActualCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-currency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TodaysActualCard() {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { symbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const getStatusStyles = ()=>{
        switch(data.dailyActualStatus){
            case "green":
                return {
                    borderColor: "border-green-500",
                    textColor: "text-green-600",
                    badgeBg: "bg-green-50 dark:bg-green-950",
                    badgeText: "text-green-700 dark:text-green-300",
                    label: "On Target ✓"
                };
            case "amber":
                return {
                    borderColor: "border-amber-500",
                    textColor: "text-amber-600",
                    badgeBg: "bg-amber-50 dark:bg-amber-950",
                    badgeText: "text-amber-700 dark:text-amber-300",
                    label: "Close to Target ⚠"
                };
            case "red":
                return {
                    borderColor: "border-red-500",
                    textColor: "text-red-600",
                    badgeBg: "bg-red-50 dark:bg-red-950",
                    badgeText: "text-red-700 dark:text-red-300",
                    label: "Below Target"
                };
            default:
                return {
                    borderColor: "border-border",
                    textColor: "text-muted-foreground",
                    badgeBg: "bg-muted",
                    badgeText: "text-muted-foreground",
                    label: "No entry yet"
                };
        }
    };
    const styles = getStatusStyles();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `${styles.borderColor} border-2 transition-all hover:shadow-lg hover:scale-[1.02]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium text-muted-foreground",
                    children: "Today's Actual"
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-3xl font-bold ${styles.textColor}`,
                        children: data.todayActual > 0 ? `${symbol}${data.todayActual.toFixed(2)}` : "—"
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    data.dailyActualStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `inline-block px-3 py-1 rounded-full text-xs font-medium ${styles.badgeBg} ${styles.badgeText}`,
                        children: styles.label
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(TodaysActualCard, "NT4q0/MrT8Mp+iy1gXj5GSlnBw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = TodaysActualCard;
var _c;
__turbopack_context__.k.register(_c, "TodaysActualCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroKPIs",
    ()=>HeroKPIs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$efficiency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-efficiency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/kpi-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$todays$2d$actual$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/todays-actual-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-currency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HeroKPIs() {
    _s();
    const { calculatedTargets, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { requiredEfficiency, color, label } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$efficiency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfficiency"])();
    const { symbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const dailyTargetStatus = calculatedTargets.standardDailyGpTarget >= 473 ? "default" : "destructive";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                title: "Monthly GP Target",
                value: `${symbol}${calculatedTargets.averageMonthlyGpTarget.toLocaleString(undefined, {
                    maximumFractionDigits: 0
                })}`,
                subtitle: "Average monthly requirement",
                badge: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 bg-primary/20 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-primary",
                        style: {
                            width: "65%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                title: "Daily GP Target",
                value: `${symbol}${calculatedTargets.standardDailyGpTarget.toFixed(0)}`,
                subtitle: "Standard daily target",
                badge: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: dailyTargetStatus,
                    children: dailyTargetStatus === "destructive" ? "Action Needed" : "On Track"
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$todays$2d$actual$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TodaysActualCard"], {}, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                title: "Efficiency Required",
                value: `${requiredEfficiency}%`,
                badge: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: color,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$kpi$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KPICard"], {
                title: "Avg Labour Rate",
                value: `${symbol}${data.avgLabourRate}/hr`,
                subtitle: "Market competitive"
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HeroKPIs, "/e4ERwBBclEz0s7HdHJKRCreUMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$efficiency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfficiency"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = HeroKPIs;
var _c;
__turbopack_context__.k.register(_c, "HeroKPIs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinancialSummary",
    ()=>FinancialSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-currency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FinancialSummary() {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { symbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const fixedExpensesTotal = data.fixedExpenses.reduce((sum, exp)=>sum + exp.value, 0);
    const marketingTotal = data.marketing.reduce((sum, exp)=>sum + exp.value, 0);
    const loansTotal = data.loans.reduce((sum, loan)=>sum + loan.monthlyRepayment, 0);
    const staffTotal = data.staff.reduce((sum, staff)=>{
        const monthlySalary = staff.annualSalary / 12;
        const pension = monthlySalary * staff.pensionPercentage / 100;
        const tax = monthlySalary * staff.employerTaxPercentage / 100;
        return sum + monthlySalary + pension + tax;
    }, 0);
    const techniciansTotal = data.technicians.reduce((sum, tech)=>{
        return sum + tech.hourlyPayRate * tech.billableHoursPerWeek * 4.33;
    }, 0);
    const categories = [
        {
            label: "Fixed Expenses",
            value: fixedExpensesTotal,
            hasData: fixedExpensesTotal > 0
        },
        {
            label: "Marketing",
            value: marketingTotal,
            hasData: marketingTotal > 0
        },
        {
            label: "Loans",
            value: loansTotal,
            hasData: loansTotal > 0
        },
        {
            label: "Staff Wages",
            value: staffTotal,
            hasData: staffTotal > 0
        },
        {
            label: "Technicians",
            value: techniciansTotal,
            hasData: techniciansTotal > 0
        },
        {
            label: "Parts Profit",
            value: data.estimatedMonthlyPartsProfitEuro,
            hasData: data.estimatedMonthlyPartsProfitEuro > 0
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-base",
                        children: "Financial Input Summary"
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Data setup status and key metrics"
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                    children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-muted/50 border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mb-2",
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: typeof cat.value === "number" ? `${symbol}${cat.value.toFixed(2)}` : cat.value
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        cat.hasData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4 text-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-4 h-4 text-amber-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(FinancialSummary, "NT4q0/MrT8Mp+iy1gXj5GSlnBw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = FinancialSummary;
var _c;
__turbopack_context__.k.register(_c, "FinancialSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-border transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthlyTargetsCalendar",
    ()=>MonthlyTargetsCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
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
;
;
function MonthlyTargetsCalendar() {
    _s();
    const { data, calculatedTargets, updateMonthDays } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { symbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const [editingMonth, setEditingMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempDays, setTempDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const currentMonthIndex = new Date().getMonth();
    const currentMonthName = months[currentMonthIndex];
    // Generate month data with dynamic working days
    const monthlyData = months.map((month, index)=>{
        const workingDays = data.monthlyWorkingDays[index] || 22;
        const monthlyTarget = calculatedTargets.standardDailyGpTarget * workingDays;
        return {
            month,
            workingDays,
            dailyTarget: calculatedTargets.standardDailyGpTarget,
            monthlyTarget
        };
    });
    const handleDaysChange = (monthIndex, value)=>{
        const numValue1 = parseInt(value) || 0;
        if (numValue1 >= 0 && numValue1 <= 31) {
            setTempDays((prev)=>({
                    ...prev,
                    [monthIndex]: value
                }));
        }
    };
    const handleSaveDays = ()=>{
        const newDays = {
            ...tempDays
        };
        let hasChanges = false;
        Object.keys(newDays).forEach((monthIndex)=>{
            const numValue1 = parseInt(newDays[monthIndex]) || 22;
            if (numValue1 >= 0 && numValue1 <= 31) {
                const currentDays = data.monthlyWorkingDays[parseInt(monthIndex)] || 22;
                if (numValue1 !== currentDays) {
                    hasChanges = true;
                }
            }
        });
        if (hasChanges) {
            updateMonthDays(parseInt(Object.keys(newDays)[0]), numValue);
            setEditingMonth(null);
            setTempDays("");
        }
    };
    const handleEditMonth = (monthIndex)=>{
        setEditingMonth(monthIndex);
        setTempDays((prev)=>({
                ...prev,
                [monthIndex]: String(data.monthlyWorkingDays[monthIndex] || 22)
            }));
    };
    const handleCancelEdit = ()=>{
        setEditingMonth(null);
        setTempDays("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        "Monthly Targets & Calendar"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "font-medium",
                                            children: "Month"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-center font-medium",
                                            children: "Working Days"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-right font-medium",
                                            children: "Daily Target"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-right font-medium",
                                            children: "Monthly Target"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: monthlyData.map((monthData, index)=>{
                                    const isCurrentMonth = index === currentMonthIndex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        className: isCurrentMonth ? "bg-teal-50/50" : "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "font-medium",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        monthData.month,
                                                        isCurrentMonth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "ml-2 text-xs",
                                                            children: "Current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-center",
                                                children: editingMonth === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "number",
                                                            value: tempDays[index] || String(monthData.workingDays),
                                                            onChange: (e)=>{
                                                                const newVal = parseInt(e.target.value) || 0;
                                                                if (newVal >= 0 && newVal <= 31) {
                                                                    setTempDays((prev)=>({
                                                                            ...prev,
                                                                            [index]: e.target.value
                                                                        }));
                                                                    updateMonthDays(index, newVal);
                                                                }
                                                            },
                                                            className: "w-16 h-8 text-center border rounded",
                                                            min: 0,
                                                            max: 31
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            variant: "ghost",
                                                            onClick: handleSaveDays,
                                                            className: "ml-1 h-8 w-8 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            variant: "ghost",
                                                            onClick: handleCancelEdit,
                                                            className: "ml-1 h-8 w-8 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cursor-pointer hover:text-teal-600 transition-colors",
                                                    onClick: ()=>handleEditMonth(index),
                                                    children: monthData.workingDays
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-right",
                                                children: [
                                                    symbol,
                                                    monthData.dailyTarget.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-right font-semibold dark:text-white text-slate-900",
                                                children: [
                                                    symbol,
                                                    monthData.monthlyTarget.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, monthData.month, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableFooter"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "border-t-2 border-border bg-muted/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-bold",
                                            children: "Yearly Total"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-center font-bold",
                                            children: monthlyData.reduce((sum, month)=>sum + month.workingDays, 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-right dark:text-white font-bold text-slate-900",
                                            children: [
                                                symbol,
                                                monthlyData.reduce((sum, month)=>sum + month.monthlyTarget, 0).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(MonthlyTargetsCalendar, "3MnAs2Mujem8vhnIcRqmGtsBOV0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = MonthlyTargetsCalendar;
var _c;
__turbopack_context__.k.register(_c, "MonthlyTargetsCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CostBreakdown",
    ()=>CostBreakdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-currency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CostBreakdown() {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { symbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    // Data aggregation function to calculate totals from businessData object
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CostBreakdown.useMemo[chartData]": ()=>{
            // Calculate totals from actual context structure
            const fixedExpensesTotal = data.fixedExpenses.reduce({
                "CostBreakdown.useMemo[chartData].fixedExpensesTotal": (acc, item)=>acc + item.value
            }["CostBreakdown.useMemo[chartData].fixedExpensesTotal"], 0);
            const marketingTotal = data.marketing.reduce({
                "CostBreakdown.useMemo[chartData].marketingTotal": (acc, item)=>acc + item.value
            }["CostBreakdown.useMemo[chartData].marketingTotal"], 0);
            const loansTotal = data.loans.reduce({
                "CostBreakdown.useMemo[chartData].loansTotal": (acc, item)=>acc + item.monthlyRepayment
            }["CostBreakdown.useMemo[chartData].loansTotal"], 0);
            const staffTotal = data.staff.reduce({
                "CostBreakdown.useMemo[chartData].staffTotal": (acc, item)=>{
                    const monthlySalary = item.annualSalary / 12;
                    const pension = monthlySalary * item.pensionPercentage / 100;
                    const tax = monthlySalary * item.employerTaxPercentage / 100;
                    return acc + monthlySalary + pension + tax;
                }
            }["CostBreakdown.useMemo[chartData].staffTotal"], 0);
            const techniciansTotal = data.technicians.reduce({
                "CostBreakdown.useMemo[chartData].techniciansTotal": (acc, item)=>{
                    return acc + item.hourlyPayRate * item.billableHoursPerWeek * 4.33;
                }
            }["CostBreakdown.useMemo[chartData].techniciansTotal"], 0);
            return [
                {
                    name: 'Fixed Expenses',
                    value: fixedExpensesTotal,
                    fill: '#0d9488'
                },
                {
                    name: 'Marketing',
                    value: marketingTotal,
                    fill: '#3b82f6'
                },
                {
                    name: 'Loans',
                    value: loansTotal,
                    fill: '#ef4444'
                },
                {
                    name: 'Staff',
                    value: staffTotal,
                    fill: '#f59e0b'
                },
                {
                    name: 'Technicians',
                    value: techniciansTotal,
                    fill: '#10b981'
                }
            ].filter({
                "CostBreakdown.useMemo[chartData]": (item)=>item.value > 0
            }["CostBreakdown.useMemo[chartData]"]) // Only show segments that have money
            ;
        }
    }["CostBreakdown.useMemo[chartData]"], [
        data
    ]);
    const COLORS = [
        "#0d9488",
        "#3b82f6",
        "#ef4444",
        "#f59e0b",
        "#10b981"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "lg:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-base",
                    children: "Cost Breakdown"
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "min-h-[300px] lg:min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: 300,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: chartData,
                                cx: "50%",
                                cy: "50%",
                                innerRadius: 60,
                                outerRadius: 100,
                                paddingAngle: 2,
                                dataKey: "value",
                                children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: entry.fill || COLORS[index % COLORS.length]
                                    }, `cell-${index}`, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                formatter: (value)=>`${symbol}${value}`
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(CostBreakdown, "n/RiYP/iDUBgTdgjuBIWmJ+F8j8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = CostBreakdown;
var _c;
__turbopack_context__.k.register(_c, "CostBreakdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BranchFacilities",
    ()=>BranchFacilities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BranchFacilities() {
    _s();
    const { data: businessData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { userProfile, updateProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // State for editable values (these should come from User Profile/Branch Settings)
    const [workshopSize, setWorkshopSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ramps, setRamps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Get active branch data from User Profile
    const getActiveBranchData = ()=>{
        if (!userProfile?.company?.branches?.length) {
            return {
                size: 0,
                ramps: 0
            };
        }
        // For now, use the first branch. In a real app, this would be based on activeBranchIndex
        const activeBranch = userProfile.company.branches[0];
        return {
            size: activeBranch.facilities?.size || 0,
            ramps: activeBranch.facilities?.ramps || 0
        };
    };
    // Initialize with branch data from User Profile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BranchFacilities.useEffect": ()=>{
            const branchData = getActiveBranchData();
            setWorkshopSize(branchData.size);
            setRamps(branchData.ramps);
        }
    }["BranchFacilities.useEffect"], [
        userProfile
    ]);
    // Handle updates and save to User Profile
    const handleUpdate = (field, value)=>{
        const newVal = Number(value) || 0;
        if (!userProfile?.company?.branches?.length) {
            console.error("No user profile or branches found");
            return;
        }
        // Update local state immediately for responsive UI
        if (field === 'size') {
            setWorkshopSize(newVal);
        } else if (field === 'ramps') {
            setRamps(newVal);
        }
        // Update the active branch in user profile
        const updatedBranches = [
            ...userProfile.company.branches
        ];
        updatedBranches[0] = {
            ...updatedBranches[0],
            facilities: {
                ...updatedBranches[0].facilities,
                [field]: newVal
            }
        };
        // Save through auth context
        updateProfile({
            company: {
                ...userProfile.company,
                branches: updatedBranches
            }
        });
        console.log(`Updated ${field} in branch:`, newVal);
    };
    // Get tech count from Business Data context (technicians array)
    const techCount = businessData.technicians?.length || 0;
    // Calculate ramps per tech (handle division by zero)
    const rampsPerTech = techCount > 0 ? (ramps / techCount).toFixed(1) : "0.0";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "lg:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-base",
                    children: "Branch Facilities"
                }, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-muted/50 border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "workshop-size",
                                    className: "text-xs text-muted-foreground mb-1 block",
                                    children: "Workshop Size (sqft)"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "workshop-size",
                                    type: "number",
                                    value: workshopSize,
                                    onChange: (e)=>handleUpdate('size', e.target.value),
                                    className: "text-lg font-semibold text-foreground h-8",
                                    placeholder: "0"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-muted/50 border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "ramps",
                                    className: "text-xs text-muted-foreground mb-1 block",
                                    children: "Ramps"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "ramps",
                                    type: "number",
                                    value: ramps,
                                    onChange: (e)=>handleUpdate('ramps', e.target.value),
                                    className: "text-lg font-semibold text-foreground h-8",
                                    placeholder: "0"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-muted/50 border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mb-1",
                                    children: "Technicians"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-foreground",
                                    children: techCount
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "From Business Data"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-primary/10 border border-primary/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mb-1",
                                    children: "Ramps per Tech"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-primary",
                                    children: rampsPerTech
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Calculated"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(BranchFacilities, "2l+UAATWpib05HV/eBnEPCIyENk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = BranchFacilities;
var _c;
__turbopack_context__.k.register(_c, "BranchFacilities");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$hero$2d$kpis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/hero-kpis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$financial$2d$summary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/financial-summary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$monthly$2d$targets$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/monthly-targets-calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$cost$2d$breakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/cost-breakdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$branch$2d$facilities$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/branch-facilities.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 lg:space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$hero$2d$kpis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroKPIs"], {}, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$financial$2d$summary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FinancialSummary"], {}, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$monthly$2d$targets$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthlyTargetsCalendar"], {}, void 0, false, {
                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$cost$2d$breakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CostBreakdown"], {}, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$branch$2d$facilities$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BranchFacilities"], {}, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Workshop-Profit-Pilot_apps_web_37c2ab44._.js.map
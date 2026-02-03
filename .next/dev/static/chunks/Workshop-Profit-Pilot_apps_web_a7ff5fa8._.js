(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Workshop-Profit-Pilot/apps/web/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
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
"[project]/Workshop-Profit-Pilot/apps/web/hooks/use-efficiency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEfficiency",
    ()=>useEfficiency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/@workshop/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/@workshop/shared/src/efficiency-utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useEfficiency() {
    _s();
    const { efficiency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    return {
        ...efficiency,
        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyColor"])(efficiency.requiredEfficiency),
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyLabel"])(efficiency.requiredEfficiency),
        breakevenColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyColor"])(efficiency.breakevenEfficiency),
        breakevenLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f40$workshop$2f$shared$2f$src$2f$efficiency$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEfficiencyLabel"])(efficiency.breakevenEfficiency)
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
"[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EfficiencyAnalysisPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/node_modules/.ignored/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/lib/app-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$efficiency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-efficiency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Workshop-Profit-Pilot/apps/web/hooks/use-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
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
;
;
;
function EfficiencyAnalysisPage() {
    _s();
    const { data, updateData, calculatedTargets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const { requiredEfficiency, color, label, maxPotentialLaborRevenue, laborBurden } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$efficiency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfficiency"])();
    const { symbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const [showHeroInfo, setShowHeroInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Calendar settings state
    const [calendarSettings, setCalendarSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        daysInYear: 260,
        bankHolidays: 8,
        annualLeave: 20,
        sickDays: 2,
        efficiencyWorkingDays: 19.25
    });
    // Load calendar settings from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EfficiencyAnalysisPage.useEffect": ()=>{
            const stored = localStorage.getItem('efficiency_calendar');
            if (stored) {
                setCalendarSettings(JSON.parse(stored));
            }
        }
    }["EfficiencyAnalysisPage.useEffect"], []);
    // Save calendar settings to localStorage
    const saveCalendarSettings = (newSettings)=>{
        setCalendarSettings(newSettings);
        localStorage.setItem('efficiency_calendar', JSON.stringify(newSettings));
        console.log("Efficiency Calendar Updated:", newSettings);
    };
    // Calculate monthly average working days from dynamic context
    const monthlyAverageDays = calculatedTargets.averageMonthlyWorkingDays;
    // Calculate technician resources
    const technicianResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EfficiencyAnalysisPage.useMemo[technicianResources]": ()=>{
            const techCount = data.technicians.length;
            const hoursPerDay = 8;
            const totalMonthlyHours = techCount * hoursPerDay * monthlyAverageDays;
            return {
                techCount,
                hoursPerDay,
                totalMonthlyHours
            };
        }
    }["EfficiencyAnalysisPage.useMemo[technicianResources]"], [
        data.technicians,
        calculatedTargets.averageMonthlyWorkingDays
    ]);
    // Calculate financial targets
    const financialTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EfficiencyAnalysisPage.useMemo[financialTargets]": ()=>{
            const grossProfitTarget = calculatedTargets?.averageMonthlyGpTarget || 0;
            const partsProfit = data.estimatedMonthlyPartsProfitEuro || 0;
            const netLaborTarget = grossProfitTarget - partsProfit;
            return {
                grossProfitTarget,
                partsProfit,
                netLaborTarget
            };
        }
    }["EfficiencyAnalysisPage.useMemo[financialTargets]"], [
        calculatedTargets,
        data.estimatedMonthlyPartsProfitEuro
    ]);
    // Calculate efficiency result
    const efficiencyResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EfficiencyAnalysisPage.useMemo[efficiencyResult]": ()=>{
            const avgLaborRate = data.avgLabourRate || 75;
            const hoursRequired = technicianResources.totalMonthlyHours > 0 ? financialTargets.netLaborTarget / avgLaborRate : 0;
            return {
                maxPotentialRevenue: maxPotentialLaborRevenue,
                hoursRequired
            };
        }
    }["EfficiencyAnalysisPage.useMemo[efficiencyResult]"], [
        maxPotentialLaborRevenue,
        financialTargets.netLaborTarget,
        technicianResources.totalMonthlyHours,
        data.avgLabourRate
    ]);
    // Generate sensitivity matrix data
    const sensitivityMatrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EfficiencyAnalysisPage.useMemo[sensitivityMatrix]": ()=>{
            const avgLaborRate = data.avgLabourRate || 75;
            const matrix = [];
            for(let efficiency = 25; efficiency <= 100; efficiency += 5){
                const laborSales = technicianResources.totalMonthlyHours * avgLaborRate * efficiency / 100;
                const estimatedMonthlyGP = laborSales + financialTargets.partsProfit;
                // Net Profit calculation removed as requested
                matrix.push({
                    efficiency,
                    laborSales,
                    estimatedMonthlyGP
                });
            }
            return matrix;
        }
    }["EfficiencyAnalysisPage.useMemo[sensitivityMatrix]"], [
        technicianResources.totalMonthlyHours,
        data.avgLabourRate,
        financialTargets.partsProfit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 p-6",
        children: [
            showHeroInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                className: "bg-teal-50 border-teal-200 dark:bg-teal-950 dark:border-teal-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-4 w-4 text-teal-600 dark:text-teal-400"
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "text-teal-800 dark:text-teal-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Understanding Your Efficiency Foundation"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1",
                                            children: "We recommend a 60% efficiency baseline to ensure sustainable profitability and cash flow buffers."
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowHeroInfo(false),
                                    className: "text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                "Required Efficiency Score"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-48 h-48",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-full border-8 border-transparent",
                                            style: {
                                                borderRightColor: color === 'destructive' ? '#ef4444' : color === 'secondary' ? '#f59e0b' : '#10b981',
                                                transform: `rotate(${Math.min(requiredEfficiency, 100) * 1.8 - 90}deg)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-4 rounded-full bg-background flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold",
                                                    children: [
                                                        requiredEfficiency,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: color,
                                                    className: "mt-1",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 rounded-full bg-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "<60% Healthy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 rounded-full bg-amber-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "60-85% Caution"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 rounded-full bg-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: ">85% Critical"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2 text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        "Technician Resources"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Tech Count:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: technicianResources.techCount
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Hours/Day:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: technicianResources.hoursPerDay
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Total Monthly Hours:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: technicianResources.totalMonthlyHours.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 border-t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "efficiency-days",
                                                className: "text-sm",
                                                children: "Efficiency Working Days:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "efficiency-days",
                                                type: "number",
                                                step: "0.25",
                                                value: calendarSettings.efficiencyWorkingDays,
                                                onChange: (e)=>saveCalendarSettings({
                                                        ...calendarSettings,
                                                        efficiencyWorkingDays: parseFloat(e.target.value) || 19.25
                                                    }),
                                                className: "mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2 text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        "Financial Targets"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Gross Profit Target:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    symbol,
                                                    financialTargets.grossProfitTarget.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Parts Profit:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    symbol,
                                                    financialTargets.partsProfit.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Net Labor Target:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-teal-600",
                                                children: [
                                                    symbol,
                                                    financialTargets.netLaborTarget.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2 text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        "Efficiency Result"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Max Potential Revenue:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    symbol,
                                                    efficiencyResult.maxPotentialRevenue.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Hours Required:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: efficiencyResult.hoursRequired.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Current Efficiency:"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: color,
                                                className: "text-xs",
                                                children: [
                                                    requiredEfficiency,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                "Sensitivity Matrix"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Efficiency %"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: [
                                                        "Labor Sales (",
                                                        symbol,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Est. Monthly GP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                        children: sensitivityMatrix.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                className: row.efficiency === Math.round(requiredEfficiency) ? 'bg-teal-50 dark:bg-teal-950' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "font-medium",
                                                        children: [
                                                            row.efficiency,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: [
                                                            symbol,
                                                            row.laborSales.toFixed(0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: [
                                                            symbol,
                                                            row.estimatedMonthlyGP.toFixed(0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, row.efficiency, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                "Workshop Calendar Settings"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "days-in-year",
                                                children: "Days in Year"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "days-in-year",
                                                type: "number",
                                                value: calendarSettings.daysInYear,
                                                onChange: (e)=>saveCalendarSettings({
                                                        ...calendarSettings,
                                                        daysInYear: parseInt(e.target.value) || 260
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "bank-holidays",
                                                children: "Bank Holidays"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "bank-holidays",
                                                type: "number",
                                                value: calendarSettings.bankHolidays,
                                                onChange: (e)=>saveCalendarSettings({
                                                        ...calendarSettings,
                                                        bankHolidays: parseInt(e.target.value) || 8
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: [
                                                    "Calculated: (",
                                                    calendarSettings.daysInYear,
                                                    " - ",
                                                    calendarSettings.bankHolidays,
                                                    " - ",
                                                    calendarSettings.annualLeave,
                                                    " - ",
                                                    calendarSettings.sickDays,
                                                    ") ÷ 12"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Dynamic Average:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    monthlyAverageDays.toFixed(2),
                                                    " days/month"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "annual-leave",
                                                children: "Annual Leave"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "annual-leave",
                                                type: "number",
                                                value: calendarSettings.annualLeave,
                                                onChange: (e)=>saveCalendarSettings({
                                                        ...calendarSettings,
                                                        annualLeave: parseInt(e.target.value) || 20
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "sick-days",
                                                children: "Sick Days"
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "sick-days",
                                                type: "number",
                                                value: calendarSettings.sickDays,
                                                onChange: (e)=>saveCalendarSettings({
                                                        ...calendarSettings,
                                                        sickDays: parseInt(e.target.value) || 2
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 bg-muted rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$node_modules$2f2e$ignored$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Dynamic Average:"
                                        }, void 0, false, {
                                            fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        monthlyAverageDays.toFixed(2),
                                        " days/month"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Workshop-Profit-Pilot/apps/web/app/(dashboard)/efficiency-analysis/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(EfficiencyAnalysisPage, "3HqXaChy4GeVAsBihUUYu9onPPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$lib$2f$app$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$efficiency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfficiency"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Workshop$2d$Profit$2d$Pilot$2f$apps$2f$web$2f$hooks$2f$use$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = EfficiencyAnalysisPage;
var _c;
__turbopack_context__.k.register(_c, "EfficiencyAnalysisPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Workshop-Profit-Pilot_apps_web_a7ff5fa8._.js.map
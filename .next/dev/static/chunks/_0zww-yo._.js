(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
var _s = __turbopack_context__.k.signature();
;
;
function Navigation({ activeTab, onTabChange, xp, badgesCount, user, onOpenSanctum }) {
    _s();
    const progressPercent = Math.min(100, Math.max(10, xp / 1500 * 100));
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navigation.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 w-full h-16 z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/20 shadow-sm",
        id: "app-navigation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row justify-between items-center px-4 md:px-8 h-full max-w-[1440px] mx-auto w-full gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: ()=>onTabChange("home"),
                        className: "font-sans text-base md:text-lg font-black flex items-center gap-2 cursor-pointer hover:opacity-90 active:scale-95 transition-all select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-lg shadow-sm shadow-primary/10 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4 text-[#001c39] animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent tracking-tight font-extrabold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "xs:hidden md:hidden",
                                        children: "TS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden xs:inline md:hidden",
                                        children: "TS Adventure"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline",
                                        children: "TypeScript Adventure"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-0.5 md:gap-1 bg-surface-container/40 p-1 rounded-xl border border-outline-variant/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTabChange("home"),
                        className: `flex items-center gap-1.5 px-2 md:px-3 py-1.5 text-[11px] md:text-xs font-bold rounded-lg transition-all cursor-pointer border ${activeTab === "home" ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_12px_rgba(164,201,255,0.06)]" : "text-on-surface-variant hover:text-on-surface border-transparent hover:bg-surface-container-high/40"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative shrink-0",
                    ref: dropdownRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "flex items-center gap-1.5 md:gap-2.5 bg-surface-container/60 hover:bg-surface-container-high px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-outline-variant/30 transition-all cursor-pointer text-[11px] md:text-xs font-bold text-on-surface shadow-sm hover:border-primary/20 active:scale-95",
                            id: "nav-profile-pill",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(164,201,255,0.5)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "max-w-[70px] md:max-w-[120px] truncate",
                                    children: user ? user.displayName || "My Soul" : "My Sanctum"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-outline text-[9px] md:text-[10px] select-none opacity-65",
                                    children: "▼"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 mt-2.5 w-72 bg-surface-container-high border border-outline-variant/60 rounded-xl shadow-2xl p-4 flex flex-col gap-3.5 z-50 animate-slide-down",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-outline-variant/30 pb-2.5 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase font-mono tracking-wider text-outline mb-0.5",
                                            children: "Sorcerer Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-on-surface truncate",
                                            children: user ? user.displayName || "Apprentice Mage" : "Guest Scholar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-[10px] font-mono",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface-variant",
                                                    children: "XP Progress"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-bold",
                                                    children: [
                                                        xp,
                                                        " XP"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-2 bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(164,201,255,0.4)] transition-all duration-500",
                                                style: {
                                                    width: `${progressPercent}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navigation.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                    className: "w-4 h-4 text-tertiary animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-on-surface-variant font-medium",
                                                    children: "Earned Badges"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-on-surface font-mono bg-surface-container px-2 py-0.5 rounded border border-outline-variant/10",
                                            children: badgesCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsOpen(false);
                                        onOpenSanctum();
                                    },
                                    className: "w-full py-2.5 bg-primary/10 hover:bg-primary/15 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-colors text-xs font-bold cursor-pointer flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔮"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: user ? "Open Soul Sanctum" : "Sync Soul & Save"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Navigation, "uhOyve9TWk+bvhPJTPlaMsUEQAY=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/curriculum.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEVELS",
    ()=>LEVELS,
    "REFERENCE_LIBRARY",
    ()=>REFERENCE_LIBRARY,
    "STAGES",
    ()=>STAGES
]);
const STAGES = [
    {
        id: "stage-0-onboarding",
        title: "Stage 0 — The Onboarding Ritual",
        description: "Initialize your workspace, set up strict compiler rules, configure automated watchers, and master the language of the TypeScript Compiler.",
        order: 0,
        levelIds: [
            "level-0-1-bootstrap",
            "level-0-2-tsconfig",
            "level-0-3-watch-mode",
            "level-0-4-reading-errors"
        ]
    },
    {
        id: "stage-1-primitives",
        title: "Stage 1 — The Primitive Runes",
        description: "Harness standard primitives (number, string, boolean), declare robust array list conduits, and design exact callback type contracts.",
        order: 1,
        levelIds: [
            "level-1-1-primitives",
            "level-1-2-inference",
            "level-1-3-arrays",
            "level-1-4-objects",
            "level-1-5-functions",
            "level-1-6-function-types",
            "level-1-7-unknown-any-never"
        ]
    },
    {
        id: "stage-2-structural",
        title: "Stage 2 — The Structural Guild",
        description: "Map complex objects using named reusable interfaces, add optionals/readonly safety modifiers, and specialize shapes with interface extension.",
        order: 2,
        levelIds: [
            "level-2-1-interfaces",
            "level-2-2-type-aliases",
            "level-2-3-optional-readonly",
            "level-2-4-extension",
            "level-2-5-checkpoint-domain",
            "level-2-6-index-signatures"
        ]
    },
    {
        id: "stage-3-shapeshifter",
        title: "Stage 3 — The Shapeshifter's Path",
        description: "Enforce multi-possibility union types, narrow objects dynamically at runtime, and write exhaustively checked discriminated unions.",
        order: 3,
        levelIds: [
            "level-3-1-unions",
            "level-3-2-literal-types",
            "level-3-3-narrowing",
            "level-3-4-discriminated-unions",
            "level-3-5-assertions",
            "level-3-6-type-predicates"
        ]
    },
    {
        id: "stage-4-generic",
        title: "Stage 4 — The Generic Alchemists",
        description: "Forge dynamic, reusable type parameters, enforce generic structural constraints, and utilize utility type transformers.",
        order: 4,
        levelIds: [
            "level-4-1-generics",
            "level-4-2-generic-constraints",
            "level-4-3-pick-omit-partial",
            "level-4-4-required-readonly-record",
            "level-4-5-enums-vs-unions",
            "level-4-6-keyof-operator"
        ]
    },
    {
        id: "stage-5-frontend",
        title: "Stage 5 — The Frontend Convergence",
        description: "Connect high-fidelity React components with generic props, design safe API responses, and build airtight interactive full-stack features.",
        order: 5,
        levelIds: [
            "level-5-1-generic-react-component",
            "level-5-2-typed-api-responses",
            "level-5-3-typed-forms",
            "level-5-4-nextjs-api-route",
            "level-5-5-launch-day",
            "level-5-6-state-managers",
            "level-5-7-satisfies-operator"
        ]
    },
    {
        id: "stage-6-gymnastics",
        title: "Stage 6 — Advanced Type Gymnastics",
        description: "Master conditional types, template literal strings, mapped transformers, and the infer keyword for absolute compile-time certainty.",
        order: 6,
        levelIds: [
            "level-6-1-conditional-types",
            "level-6-2-template-literals",
            "level-6-3-mapped-and-infer",
            "level-6-4-utility-extraction"
        ]
    },
    {
        id: "stage-7-production",
        title: "Stage 7 — Production Tooling & Compilation",
        description: "Architect production systems using TS project reference monorepos, design ambient global types, and orchestrate decorators.",
        order: 7,
        levelIds: [
            "level-7-1-ambient-declarations",
            "level-7-2-decorators",
            "level-7-3-monorepos"
        ]
    },
    {
        id: "stage-8-backend",
        title: "Stage 8 — Backend Foundations",
        description: "Wire up a real Express service backed by the native MongoDB driver and Better Auth's JWT flow, typing routes, documents, request augmentation, and async error handling end to end.",
        order: 8,
        levelIds: [
            "level-8-1-express-routes",
            "level-8-2-mongo-document-contract",
            "level-8-3-request-augmentation",
            "level-8-4-better-auth-jwt",
            "level-8-5-async-handler",
            "level-8-6-checkpoint-booking-route",
            "level-8-7-runtime-validation"
        ]
    },
    {
        id: "stage-9-type-mastery",
        title: "Stage 9 — Type Safety Mastery",
        description: "Close the last real gaps in the type system: prevent same-shaped ids from being swapped, lock entire object trees from mutation, and model state machines where illegal transitions can't even compile.",
        order: 9,
        levelIds: [
            "level-9-1-branded-types",
            "level-9-2-deep-readonly",
            "level-9-3-algebraic-state-machines"
        ]
    }
];
const LEVELS = [
    {
        id: "level-0-1-bootstrap",
        title: "Bootstrapping the Kingdom Repo",
        moduleName: "The Onboarding Ritual",
        difficulty: "onboarding",
        xpAwarded: 50,
        story: {
            title: "Your First Day on the Team",
            narrative: [
                {
                    type: "narration",
                    text: "Minhaj, the Senior Engineer, waves you over to a bare terminal."
                },
                {
                    type: "dialogue",
                    text: '"Welcome aboard! We\'re building the Event Management Kingdom in TypeScript. Every project starts by declaring TypeScript inside your `package.json` under `devDependencies`."'
                },
                {
                    type: "narration",
                    text: "Minhaj opens `package.json` and points out the structure."
                },
                {
                    type: "dialogue",
                    text: '"To add TypeScript, add a `"devDependencies"` object with `"typescript": "^5.4.0"` like this:\n\n```json\n{\n  "devDependencies": {\n    "typescript": "^5.4.0"\n  }\n}\n```\n\nThis tells npm that TypeScript is needed during build time. Let\'s add `devDependencies` to your `package.json` now!"'
                }
            ],
            realWorldContext: "Every real TypeScript project starts with a working Node/npm toolchain and a package.json declaring TypeScript as a dependency.",
            taskDescription: "Add a `devDependencies` object containing `\"typescript\": \"^5.4.0\"` to `package.json`.",
            previousOutcome: "It's your first day. There is no previous outcome yet — just an empty repository waiting for its first commit."
        },
        playground: {
            starterCode: '{\n  "name": "event-kingdom",\n  "version": "0.0.0"\n}',
            solutionCode: '{\n  "name": "event-kingdom",\n  "version": "0.0.0",\n  "devDependencies": {\n    "typescript": "^5.4.0"\n  }\n}',
            objectives: [
                "Add a devDependencies field",
                "List typescript as a dev dependency"
            ],
            hints: [
                "package.json needs a devDependencies object",
                "TypeScript belongs in devDependencies, not dependencies"
            ],
            filesToEdit: [
                "package.json"
            ]
        },
        validation: {
            requiredKeywords: [
                "devDependencies",
                "typescript"
            ]
        }
    },
    {
        id: "level-0-2-tsconfig",
        title: "Configuring the Compiler's Rulebook",
        moduleName: "The Onboarding Ritual",
        difficulty: "onboarding",
        xpAwarded: 50,
        story: {
            title: "The Rulebook Every Spell Must Obey",
            narrative: [
                {
                    type: "narration",
                    text: "With TypeScript installed, Tasnim the Tech Lead drops a bare tsconfig.json on your desk."
                },
                {
                    type: "dialogue",
                    text: '"This is the file that decides how strict our compiler is," she explains. "In TypeScript, strict type checking is enabled by setting `"strict": true` inside `"compilerOptions"`:\n\n```json\n{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "strict": true\n  }\n}\n```"'
                },
                {
                    type: "narration",
                    text: "Tasnim points to the compilerOptions block in tsconfig.json."
                },
                {
                    type: "dialogue",
                    text: '"Enabling `"strict": true` activates `noImplicitAny`, `strictNullChecks`, and full type safety. Add `"strict": true` inside `compilerOptions` now!"'
                }
            ],
            realWorldContext: "A shared, strict tsconfig.json ensures every teammate's compiler catches the same bugs, instead of relying on individual discipline.",
            taskDescription: "Add `\"strict\": true` inside `compilerOptions` in `tsconfig.json`.",
            previousOutcome: "You initialized the project and added TypeScript as a dependency. Now the team needs the compiler's rules actually configured."
        },
        playground: {
            starterCode: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext"\n  }\n}',
            solutionCode: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "strict": true\n  }\n}',
            objectives: [
                "Add the strict compiler option",
                "Set strict to true"
            ],
            hints: [
                "strict lives inside compilerOptions",
                "It's a boolean flag"
            ],
            filesToEdit: [
                "tsconfig.json"
            ]
        },
        validation: {
            requiredKeywords: [
                '"strict": true'
            ]
        }
    },
    {
        id: "level-0-3-watch-mode",
        title: "The Watch Mode Habit",
        moduleName: "The Onboarding Ritual",
        difficulty: "onboarding",
        xpAwarded: 50,
        story: {
            title: "Stop Re-Running the Compiler by Hand",
            narrative: [
                {
                    type: "narration",
                    text: "Minhaj notices you re-running `npx tsc` by hand after every edit."
                },
                {
                    type: "dialogue",
                    text: '"There\'s a watch flag that recompiles automatically whenever you save," Minhaj says. "In `package.json`, we add executable tasks under `"scripts"`:\n\n```json\n{\n  "scripts": {\n    "dev": "tsc --watch"\n  }\n}\n```"'
                },
                {
                    type: "narration",
                    text: "Minhaj shows you how the script object works."
                },
                {
                    type: "dialogue",
                    text: '"Running `tsc --watch` keeps the compiler listening in the background. Add a `"dev"` script with `"tsc --watch"` inside `"scripts"` now!"'
                }
            ],
            realWorldContext: "A shared npm script for watch mode standardizes the dev workflow across the whole team, not just your own muscle memory.",
            taskDescription: "Add a `\"dev\": \"tsc --watch\"` script inside `\"scripts\"` in `package.json`.",
            previousOutcome: "Strict mode is on. Now the team needs a fast, repeatable way to actually run the compiler while working."
        },
        playground: {
            starterCode: '{\n  "name": "event-kingdom",\n  "scripts": {}\n}',
            solutionCode: '{\n  "name": "event-kingdom",\n  "scripts": {\n    "dev": "tsc --watch"\n  }\n}',
            objectives: [
                "Add a dev script",
                "Use the --watch flag with tsc"
            ],
            hints: [
                "Scripts go inside the scripts object",
                "tsc accepts a --watch flag"
            ],
            filesToEdit: [
                "package.json"
            ]
        },
        validation: {
            requiredKeywords: [
                '"dev"',
                "tsc --watch"
            ]
        }
    },
    {
        id: "level-0-4-reading-errors",
        title: "Translating the Red Squiggles",
        moduleName: "The Onboarding Ritual",
        difficulty: "onboarding",
        xpAwarded: 50,
        story: {
            title: "The Compiler Isn't Yelling At You, It's Warning You",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan, QA, forwards you your first real compiler error: Type 'string' is not assignable to type 'number'. You stare at it for ten minutes before Minhaj walks by."
                },
                {
                    type: "dialogue",
                    text: '"Read it out loud," they say. "It\'s telling you exactly what it expected and exactly what it got."'
                },
                {
                    type: "narration",
                    text: "Minhaj has you fix a tiny broken file with one deliberate type mismatch, just to prove the error message is a map, not a wall. Once this clicks, every future error in this course gets easier to read."
                }
            ],
            realWorldContext: "Reading a TypeScript error's exact wording, rather than reacting to red text, is the single most useful debugging habit in the whole course.",
            taskDescription: "Fix the type mismatch so attendeeCount is declared as a number.",
            previousOutcome: "Watch mode is running. Now your first real compiler error shows up, and you need to actually read and fix it."
        },
        playground: {
            starterCode: 'let attendeeCount: number = "120";',
            solutionCode: "let attendeeCount: number = 120;",
            objectives: [
                "Read the exact error message",
                "Fix the mismatch by using a numeric literal"
            ],
            hints: [
                "The error names the expected type and the received type",
                "Replace the string literal with a number literal"
            ],
            filesToEdit: [
                "attendees.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "attendeeCount: number",
                "= 120"
            ],
            forbiddenKeywords: [
                '"120"'
            ]
        }
    },
    {
        id: "level-1-1-primitives",
        title: "Lock Down the Ledger",
        moduleName: "The Primitive Runes",
        difficulty: "easy",
        xpAwarded: 100,
        story: {
            title: "Welcome to the Royal Accounting Guild",
            narrative: [
                {
                    type: "narration",
                    text: "Minhaj hands you a ledger file with a live bug: ticket prices are recorded as text strings like `'50'`, causing `'50' + '50'` to equal `'5050'` instead of `100`!"
                },
                {
                    type: "dialogue",
                    text: '"In TypeScript, primitive types like numbers, strings, and booleans are guarded using explicit type annotations with colon syntax `:` like this:\n\n```typescript\nlet ticketPrice: number = 50;\nlet eventTitle: string = "TypeScript Conf";\nlet isPublished: boolean = true;\n```"'
                },
                {
                    type: "narration",
                    text: "Minhaj points to the broken ledger variable."
                },
                {
                    type: "dialogue",
                    text: '"By writing `let ticketPrice: number = 50;`, the compiler enforces that `ticketPrice` can only hold true numeric values, preventing text string bugs forever. Fix `ticketPrice` now!"'
                }
            ],
            realWorldContext: "TypeScript prevents accidental mixing of text and numbers, which is exactly the bug class silently corrupting the billing totals.",
            taskDescription: "Annotate `ticketPrice` with `: number` and assign it the numeric literal `50`.",
            previousOutcome: "You fixed your first compiler error in the onboarding sandbox. Now you're handed a real production bug in the billing ledger."
        },
        playground: {
            starterCode: 'let ticketPrice = "50";',
            solutionCode: "let ticketPrice: number = 50;",
            objectives: [
                "Annotate the variable",
                "Use a numeric literal"
            ],
            hints: [
                "Add ': number'",
                "Replace the string with a number"
            ],
            filesToEdit: [
                "ledger.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                ": number",
                "= 50"
            ]
        }
    },
    {
        id: "level-1-2-inference",
        title: "Let the Compiler Guess",
        moduleName: "The Primitive Runes",
        difficulty: "easy",
        xpAwarded: 100,
        story: {
            title: "Tasnim's Code Review Comment",
            narrative: [
                {
                    type: "narration",
                    text: "Tasnim leaves a comment on your pull request: you don't need to annotate every single variable, the compiler already knows this one is a number. She points out three lines where you wrote out ': number' and ': string' on values that are obviously typed from their initializer. Tasnim isn't asking you to remove all types, just the redundant ones, so the real annotations stand out where they actually matter. Clean up the ledger helper so only the necessary annotations remain."
                }
            ],
            realWorldContext: "Over-annotating obvious values adds noise; letting inference work keeps the codebase readable and highlights annotations that genuinely add information.",
            taskDescription: "Remove the redundant explicit annotation and let inference determine the type.",
            previousOutcome: "The ledger's ticketPrice bug is fixed. Now Tasnim wants the file cleaned up before it merges."
        },
        playground: {
            starterCode: "let serviceFee: number = 5;",
            solutionCode: "let serviceFee = 5;",
            objectives: [
                "Remove the redundant type annotation",
                "Confirm the inferred type is still number"
            ],
            hints: [
                "The initializer already tells TypeScript everything it needs",
                "Delete the ': number' portion only"
            ],
            filesToEdit: [
                "ledger.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "let serviceFee = 5"
            ],
            forbiddenKeywords: [
                "serviceFee: number"
            ]
        }
    },
    {
        id: "level-1-3-arrays",
        title: "Rosters and Rundowns",
        moduleName: "The Primitive Runes",
        difficulty: "easy",
        xpAwarded: 100,
        story: {
            title: "Apurba Needs an Attendee Roster",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba, the Product Manager, wants a simple attendee roster feature by Friday: a list of attendee names for check-in. A teammate's earlier attempt let a stray number sneak into the array, and check-in crashed at the venue. Apurba doesn't want a repeat. Minhaj asks you to type the roster array so it can only ever hold strings, and to write a helper that safely adds a new name to it without breaking that guarantee. Get this typed correctly and the roster feature ships clean; get it wrong and check-in breaks again at the next event."
                }
            ],
            realWorldContext: "Typed arrays prevent an accidental wrong-shaped value from ever entering a collection that every downstream feature assumes is uniform.",
            taskDescription: "Type attendeeRoster as an array of strings and fix the function that adds a new attendee.",
            previousOutcome: "The ledger file is clean and merged. Now Apurba needs a working attendee roster before Friday's event."
        },
        playground: {
            starterCode: "let attendeeRoster = [];\nfunction addAttendee(roster, name) {\n  roster.push(name);\n}",
            solutionCode: "let attendeeRoster: string[] = [];\nfunction addAttendee(roster: string[], name: string): void {\n  roster.push(name);\n}",
            objectives: [
                "Type attendeeRoster as string[]",
                "Type the addAttendee function's parameters"
            ],
            hints: [
                "Array types can be written as Type[]",
                "Function parameters need types too, not just the array"
            ],
            filesToEdit: [
                "roster.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "string[]",
                "name: string"
            ]
        }
    },
    {
        id: "level-1-4-objects",
        title: "Assembling the Event Record",
        moduleName: "The Primitive Runes",
        difficulty: "easy",
        xpAwarded: 100,
        story: {
            title: "Salman's First Event Card Mockup",
            narrative: [
                {
                    type: "narration",
                    text: "Salman, the Designer, sends over a mockup of the first Event card: a title, a date, and a capacity number, all shown together. Minhaj wants the underlying data typed to match exactly what Salman designed, before any component gets built. This is the very first time in the codebase we describe a whole Event as one typed shape instead of loose separate variables, Minhaj explains. Get this object type right, since Salman's whole card design depends on these exact three fields existing."
                }
            ],
            realWorldContext: "An object type describing an Event's shape is the foundation every later component and API response will build on.",
            taskDescription: "Declare an inline object type for event with title (string), date (string), and capacity (number).",
            previousOutcome: "The attendee roster works and is deployed. Now Salman needs a typed Event record to build the first card component against."
        },
        playground: {
            starterCode: 'let event = {\n  title: "Founders Summit",\n  date: "2026-09-01",\n  capacity: 200\n};',
            solutionCode: 'let event: { title: string; date: string; capacity: number } = {\n  title: "Founders Summit",\n  date: "2026-09-01",\n  capacity: 200\n};',
            objectives: [
                "Add an inline object type annotation",
                "Match all three fields with their correct primitive types"
            ],
            hints: [
                "Inline object types use { field: Type; field: Type }",
                "capacity should be a number, not a string"
            ],
            filesToEdit: [
                "event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "title: string",
                "date: string",
                "capacity: number"
            ]
        }
    },
    {
        id: "level-1-5-functions",
        title: "Writing Contracts for Functions",
        moduleName: "The Primitive Runes",
        difficulty: "easy",
        xpAwarded: 100,
        story: {
            title: "Evans's Pricing Bug",
            narrative: [
                {
                    type: "narration",
                    text: "Evans, the Backend Engineer, pings you: someone called calculateTotal with a discount as a string and it silently returned garbage. Evans is tired of guessing what every function expects just by reading its body. They want every parameter and return type on this function explicitly typed, so the function itself documents its own contract and the compiler enforces it at every call site, not just this one. Evans doesn't want to guess anymore what a function expects just by reading its body line by line every single time."
                }
            ],
            realWorldContext: "Explicitly typed function signatures turn a function into a self-documenting, compiler-enforced contract instead of a guessing game for every caller.",
            taskDescription: "Type calculateTotal's parameters and return type.",
            previousOutcome: "The Event object type shipped and Salman's card renders correctly. Now Evans needs a pricing function made safe to call from anywhere."
        },
        playground: {
            starterCode: "function calculateTotal(price, discount) {\n  return price - discount;\n}",
            solutionCode: "function calculateTotal(price: number, discount: number): number {\n  return price - discount;\n}",
            objectives: [
                "Type both parameters as number",
                "Type the return value as number"
            ],
            hints: [
                "Each parameter gets its own type annotation",
                "The return type goes after the parameter list"
            ],
            filesToEdit: [
                "pricing.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "price: number",
                "discount: number",
                "): number"
            ]
        }
    },
    {
        id: "level-1-6-function-types",
        title: "The Callback Contract",
        moduleName: "The Primitive Runes",
        difficulty: "medium",
        xpAwarded: 100,
        story: {
            title: "Jordan Finds a Silent Sorting Bug",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan reports that the event list sometimes sorts backwards, only when a specific teammate touches the sort logic. Digging in, Minhaj finds the sortEvents function accepts a comparator callback with no type at all, so nothing stops someone from passing one with swapped arguments. Minhaj wants a proper function type for the comparator parameter, so the compiler catches a wrong-shaped callback before it ever ships, instead of QA catching it after the fact. Once the comparator itself is properly typed, this exact class of silent sorting bug becomes structurally impossible to reintroduce later."
                }
            ],
            realWorldContext: "Typing a callback parameter's exact signature is what lets the compiler catch a wrong-shaped function argument at the call site.",
            taskDescription: "Add a function type to the comparator parameter of sortEvents.",
            previousOutcome: "Evans's pricing function is now safely typed. Now Jordan's sorting bug needs the same treatment applied to a callback parameter."
        },
        playground: {
            starterCode: "function sortEvents(events, comparator) {\n  return events.sort(comparator);\n}",
            solutionCode: "function sortEvents(events: string[], comparator: (a: string, b: string) => number): string[] {\n  return events.sort(comparator);\n}",
            objectives: [
                "Type comparator as a function taking two strings and returning a number",
                "Type the events parameter and return type"
            ],
            hints: [
                "A function type looks like (param: Type, param: Type) => ReturnType",
                "The comparator should return a number, matching Array.sort's expectations"
            ],
            filesToEdit: [
                "sorting.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "comparator: (a: string, b: string) => number"
            ]
        }
    },
    {
        id: "level-1-7-unknown-any-never",
        title: "Refusing to Reach for Any",
        moduleName: "The Primitive Runes",
        difficulty: "medium",
        xpAwarded: 125,
        story: {
            title: "Minhaj Catches You Mid-Review",
            narrative: [
                {
                    type: "narration",
                    text: "Evans just wired up an external webhook. It pings the Kingdom whenever a third-party ticketing partner sells a seat. But nobody controls what shape that payload actually arrives in."
                },
                {
                    type: "narration",
                    text: "Your first pass types it as any, just to make the red squiggle disappear. Minhaj flags it within minutes of the pull request going up."
                },
                {
                    type: "dialogue",
                    text: '"Any turns off checking completely," Minhaj says, "right at the exact moment we can trust this data the least."'
                },
                {
                    type: "narration",
                    text: "Minhaj wants the payload typed as unknown instead. That forces a real narrowing check before anything touches it. He also wants a proper exhaustive guard on the nearby status switch, so a forgotten case fails to compile — instead of silently falling through in production."
                }
            ],
            realWorldContext: "unknown forces a narrowing check before any property access is allowed, while never statically proves every real case in a switch has already been handled.",
            taskDescription: "Type the webhook payload as unknown with a narrowing check, and add an assertNever guard to the status switch's default case.",
            previousOutcome: "The sorting callback bug is fixed and merged. Now Evans's new webhook integration hands you data whose shape you can't fully trust yet."
        },
        playground: {
            starterCode: 'function parseWebhookPayload(payload: any) {\n  return payload.name;\n}\n\nfunction describeStatus(status: EventStatus) {\n  switch (status) {\n    case "draft":\n      return "Not yet public";\n    case "published":\n      return "Live now";\n    case "cancelled":\n      return "No longer happening";\n  }\n}',
            solutionCode: 'function parseWebhookPayload(payload: unknown) {\n  if (typeof payload === "object" && payload !== null && "name" in payload) {\n    return (payload as { name: string }).name;\n  }\n  throw new Error("Invalid payload shape");\n}\n\nfunction assertNever(value: never): never {\n  throw new Error(`Unhandled case: ${value}`);\n}\n\nfunction describeStatus(status: EventStatus) {\n  switch (status) {\n    case "draft":\n      return "Not yet public";\n    case "published":\n      return "Live now";\n    case "cancelled":\n      return "No longer happening";\n    default:\n      return assertNever(status);\n  }\n}',
            objectives: [
                "Type payload as unknown instead of any",
                "Narrow payload before accessing any property on it",
                "Add an assertNever helper typed to accept only never",
                "Wire assertNever into describeStatus's default case"
            ],
            hints: [
                "unknown requires a real narrowing check before any property access is allowed, unlike any",
                "A function parameter typed as never can only ever actually be called once every real case has already been handled"
            ],
            filesToEdit: [
                "type-triad.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "payload: unknown",
                "function assertNever(value: never)"
            ],
            forbiddenKeywords: [
                "payload: any"
            ]
        }
    },
    {
        id: "level-2-1-interfaces",
        title: "Blueprint the Event Model",
        moduleName: "The Structural Guild",
        difficulty: "medium",
        xpAwarded: 125,
        story: {
            title: "Tasnim Calls a Halt to Copy-Pasting",
            narrative: [
                {
                    type: "narration",
                    text: "Tasnim pulls you into a quick sync."
                },
                {
                    type: "dialogue",
                    text: '"Five different files each redeclare the same inline Event shape," she says. "And one of them is already missing a field."'
                },
                {
                    type: "dialogue",
                    text: '"This ends today. We need one named interface that every file imports. Then a single edit updates every consumer at once."'
                },
                {
                    type: "narration",
                    text: "Tasnim wants an Event interface with title, date, and capacity — ready to replace every duplicated inline shape across the codebase."
                },
                {
                    type: "dialogue",
                    text: '"Get this right," she says, "and nobody on the team ever has to hunt down a fifth duplicated copy of this shape again."'
                }
            ],
            realWorldContext: "A shared, named interface replaces scattered duplicated inline types so a single edit propagates everywhere the type is used.",
            taskDescription: "Declare an Event interface with title, date, and capacity, then use it to type the event variable.",
            previousOutcome: "The sorting callback bug is fixed. Now Tasnim wants the repeated inline Event shape finally consolidated into one real interface."
        },
        playground: {
            starterCode: 'let event: { title: string; date: string; capacity: number } = {\n  title: "Founders Summit",\n  date: "2026-09-01",\n  capacity: 200\n};',
            solutionCode: 'interface Event {\n  title: string;\n  date: string;\n  capacity: number;\n}\n\nlet event: Event = {\n  title: "Founders Summit",\n  date: "2026-09-01",\n  capacity: 200\n};',
            objectives: [
                "Declare an Event interface",
                "Use the interface to type the event variable"
            ],
            hints: [
                "interface Name { field: Type } declares a reusable named shape",
                "Replace the inline object type with the interface name"
            ],
            filesToEdit: [
                "event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "interface Event",
                "event: Event"
            ]
        }
    },
    {
        id: "level-2-2-type-aliases",
        title: "Naming the Shape of a Status",
        moduleName: "The Structural Guild",
        difficulty: "medium",
        xpAwarded: 125,
        story: {
            title: "Apurba's New Filter Feature",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba wants a status filter dropdown on the events dashboard. But the underlying status value doesn't have a clean shape to reference anywhere yet."
                },
                {
                    type: "narration",
                    text: "Tasnim suggests a type alias instead of an interface here. A status is really a value, she explains, not an object with fields."
                },
                {
                    type: "narration",
                    text: "This is your first time reaching for type instead of interface. Tasnim wants you to understand why: an alias can name any type, not just an object shape."
                },
                {
                    type: "narration",
                    text: "It's a small distinction today. But she wants you comfortable with it before Stage 3 introduces unions — something only type aliases can express."
                }
            ],
            realWorldContext: "Type aliases can name a value's shape, not just object shapes, making them the right tool once you need to describe a union later.",
            taskDescription: "Create a type alias EventStatus for a string, and use it to type the status field.",
            previousOutcome: "The Event interface replaced every duplicated inline shape. Now Apurba's filter feature needs a named status type to build against."
        },
        playground: {
            starterCode: 'let status: string = "draft";',
            solutionCode: 'type EventStatus = string;\n\nlet status: EventStatus = "draft";',
            objectives: [
                "Declare a type alias named EventStatus",
                "Use the alias to type the status variable"
            ],
            hints: [
                "type Name = Type declares an alias",
                "Replace the inline string type with the new alias"
            ],
            filesToEdit: [
                "status.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "type EventStatus",
                "status: EventStatus"
            ]
        }
    },
    {
        id: "level-2-3-optional-readonly",
        title: "Handling the Maybe Fields",
        moduleName: "The Structural Guild",
        difficulty: "medium",
        xpAwarded: 125,
        story: {
            title: "Salman's Discount Banner Crash",
            narrative: [
                {
                    type: "narration",
                    text: "Salman's new discount banner crashes for every Event that doesn't have a discount code. Not every Event has one."
                },
                {
                    type: "narration",
                    text: "Separately, Jordan found a bug where an Event's id got accidentally overwritten mid-session, breaking a reference elsewhere."
                },
                {
                    type: "narration",
                    text: "Tasnim wants two fixes in the same interface. discountCode should be optional, since it isn't always present. And id should be readonly, since it should never change after creation."
                },
                {
                    type: "dialogue",
                    text: '"Two small modifiers," Tasnim says. "Two real production bugs. Both fixes belong in the same interface update this time."'
                }
            ],
            realWorldContext: "Optional properties model fields that are genuinely sometimes absent; readonly properties protect identity fields like an id from accidental reassignment.",
            taskDescription: "Add an optional discountCode field and a readonly id field to the Event interface.",
            previousOutcome: "The EventStatus type alias is in place. Now two separate bugs — a missing discount code and an overwritten id — need the Event interface updated."
        },
        playground: {
            starterCode: "interface Event {\n  id: string;\n  title: string;\n  discountCode: string;\n}",
            solutionCode: "interface Event {\n  readonly id: string;\n  title: string;\n  discountCode?: string;\n}",
            objectives: [
                "Mark id as readonly",
                "Mark discountCode as optional"
            ],
            hints: [
                "readonly goes directly before the field name",
                "? marks a field as optional, right after the field name"
            ],
            filesToEdit: [
                "event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "readonly id",
                "discountCode?:"
            ]
        }
    },
    {
        id: "level-2-4-extension",
        title: "Specializing the Workshop Event",
        moduleName: "The Structural Guild",
        difficulty: "medium",
        xpAwarded: 150,
        story: {
            title: "Apurba Adds a New Event Category",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba wants to launch Workshop events: everything a regular Event has, plus an instructor name and a max seat count."
                },
                {
                    type: "narration",
                    text: "Your first instinct is to copy the whole Event interface into a new one. Tasnim stops you."
                },
                {
                    type: "narration",
                    text: '"That\'s exactly the duplication problem we fixed two levels ago," she says.'
                },
                {
                    type: "narration",
                    text: "She wants WorkshopEvent to extend Event. That way, it automatically gets every base field for free, plus the two new ones."
                },
                {
                    type: "narration",
                    text: "Get the inheritance right here, and every future specialized Event category gets the same free reuse of the base shape."
                }
            ],
            realWorldContext: "Interface extension lets a specialized entity reuse a base shape's fields instead of duplicating them, avoiding drift when the base shape changes.",
            taskDescription: "Declare WorkshopEvent extending Event with instructor and maxSeats fields.",
            previousOutcome: "The optional and readonly fields fixed both bugs. Now Apurba needs a specialized Workshop variant of the Event interface."
        },
        playground: {
            starterCode: "interface WorkshopEvent {\n  title: string;\n  instructor: string;\n  maxSeats: number;\n}",
            solutionCode: "interface WorkshopEvent extends Event {\n  instructor: string;\n  maxSeats: number;\n}",
            objectives: [
                "Extend WorkshopEvent from Event",
                "Remove the duplicated title field"
            ],
            hints: [
                "interface Name extends Base inherits Base's fields",
                "Once extending Event, title no longer needs to be redeclared"
            ],
            filesToEdit: [
                "workshop-event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "extends Event"
            ],
            forbiddenKeywords: [
                "title: string;\n  instructor"
            ]
        }
    },
    {
        id: "level-2-5-checkpoint-domain",
        title: "Wiring the Domain Together",
        moduleName: "The Structural Guild",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Tasnim's Pre-Launch Review",
            narrative: [
                {
                    type: "narration",
                    text: "Before the team builds any real UI on top of this, Tasnim wants a full review: one Ticket interface referencing an Event by id, with a readonly id of its own and an optional seatNumber field for general-admission tickets that don't get one assigned."
                },
                {
                    type: "dialogue",
                    text: '"This level doesn\'t teach anything new," Tasnim says. "It just proves the last four lessons actually fit together into something the rest of the team can safely build on."'
                },
                {
                    type: "dialogue",
                    text: '"No new syntax this time," she reminds you. "Just proof that everything from Levels 6 through 9 actually fits together cleanly."'
                }
            ],
            realWorldContext: "A checkpoint level with no new syntax, forcing interfaces, extension, optional, and readonly to be combined in one realistic domain model.",
            taskDescription: "Declare a Ticket interface with a readonly id, an eventId referencing an Event, and an optional seatNumber.",
            previousOutcome: "WorkshopEvent now correctly extends Event. Before Stage 3 begins, Tasnim wants everything so far combined into one cohesive Ticket model."
        },
        playground: {
            starterCode: "interface Ticket {\n  id: string;\n  eventId: string;\n  seatNumber: number;\n}",
            solutionCode: "interface Ticket {\n  readonly id: string;\n  eventId: string;\n  seatNumber?: number;\n}",
            objectives: [
                "Mark id as readonly",
                "Mark seatNumber as optional",
                "Keep eventId as a required string reference"
            ],
            hints: [
                "This combines two modifiers you've already learned, not a new one",
                "Only seatNumber should be optional; eventId stays required"
            ],
            filesToEdit: [
                "ticket.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "readonly id",
                "eventId: string",
                "seatNumber?:"
            ]
        }
    },
    {
        id: "level-2-6-index-signatures",
        title: "Dashboards for Events You Haven't Created Yet",
        moduleName: "The Structural Guild",
        difficulty: "medium",
        xpAwarded: 150,
        story: {
            title: "Apurba's Dashboard Breaks the Moment a Third Event Launches",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba wants a live status dashboard showing state for every currently active event."
                },
                {
                    type: "narration",
                    text: "Your first pass hardcodes two literal event ids as placeholder keys, since those were the only two events that existed when you wrote it. The moment a third event launches the same day, the dashboard doesn't even know the key exists. It quietly shows nothing for it."
                },
                {
                    type: "narration",
                    text: "Tasnim explains the real problem: event ids are created dynamically, all day long. So the type needs to accept any string key up front — not a fixed, guessed-at list decided when the file was written."
                }
            ],
            realWorldContext: "An index signature models an open-ended dictionary whose exact keys aren't known in advance, which is exactly the shape a live, ever-growing dashboard needs.",
            taskDescription: "Replace the hardcoded literal keys in EventStateMap with a dynamic index signature.",
            previousOutcome: "The Ticket model passed Tasnim's review. Now Apurba's live dashboard needs to handle however many events happen to be active at once."
        },
        playground: {
            starterCode: 'interface EventStateMap {\n  "evt-001": EventState;\n  "evt-002": EventState;\n}',
            solutionCode: "interface EventStateMap {\n  [eventId: string]: EventState;\n}",
            objectives: [
                "Replace the hardcoded literal keys with a dynamic index signature",
                "Keep the value type as EventState for every possible key"
            ],
            hints: [
                "[keyName: string]: ValueType declares an index signature accepting any string key",
                "This single line replaces every individual literal key at once, no matter how many events exist"
            ],
            filesToEdit: [
                "event-state-map.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "[eventId: string]: EventState"
            ]
        }
    },
    {
        id: "level-3-1-unions",
        title: "One Endpoint, Three Shapes",
        moduleName: "The Shapeshifter's Path",
        difficulty: "medium",
        xpAwarded: 150,
        story: {
            title: "Evans's API Now Returns Three Kinds of Events",
            narrative: [
                {
                    type: "narration",
                    text: "Evans's API expansion is live. The events endpoint now returns Concerts, Workshops, and Meetups. These are three genuinely different shapes bundled under one response."
                },
                {
                    type: "narration",
                    text: "Your render function currently assumes every event looks the same. It has already crashed twice in staging when a Workshop-only field was missing on a Meetup."
                },
                {
                    type: "narration",
                    text: "Evans wants a single KingdomEvent type representing exactly these three possibilities. That way, nothing outside this union can sneak through with the wrong shape ever again — in staging or production."
                }
            ],
            realWorldContext: "A union type models a value that can genuinely be one of several distinct shapes, exactly like Evans's newly expanded API response.",
            taskDescription: "Declare a KingdomEvent type as a union of ConcertEvent, WorkshopEvent, and MeetupEvent.",
            previousOutcome: "The Ticket model passed Tasnim's review. Now Evans's API expansion means a single Event shape is no longer enough."
        },
        playground: {
            starterCode: "type KingdomEvent = ConcertEvent;",
            solutionCode: "type KingdomEvent = ConcertEvent | WorkshopEvent | MeetupEvent;",
            objectives: [
                "Union all three event shapes together",
                "Use the | operator between each member"
            ],
            hints: [
                "The | symbol separates each possible shape in a union",
                "All three shapes need to be listed, not just one"
            ],
            filesToEdit: [
                "kingdom-event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "ConcertEvent | WorkshopEvent | MeetupEvent"
            ]
        }
    },
    {
        id: "level-3-2-literal-types",
        title: "Locking the Status Field",
        moduleName: "The Shapeshifter's Path",
        difficulty: "medium",
        xpAwarded: 150,
        story: {
            title: "Jordan's Typo Took Down the Dashboard",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan found it. Someone typed the status as 'Cancled' instead of 'cancelled'. Because status was just a plain string, TypeScript never complained. The dashboard silently showed the wrong count for weeks."
                },
                {
                    type: "narration",
                    text: "Tasnim wants this made structurally impossible."
                },
                {
                    type: "narration",
                    text: "She wants EventStatus rewritten as a closed set of exact allowed values. That way, a typo like this becomes a compile error the moment it is typed, not a bug QA has to hunt down later."
                },
                {
                    type: "narration",
                    text: "Get this locked down, and a typo like Jordan's simply can't compile anymore — no matter who writes it next."
                }
            ],
            realWorldContext: "A literal union of exact allowed values turns a typo into an instant compile-time error instead of a silent, hard-to-trace data bug.",
            taskDescription: "Rewrite EventStatus as a literal union of 'draft', 'published', and 'cancelled'.",
            previousOutcome: "The KingdomEvent union now models all three event kinds. Now Jordan's typo bug means the status field itself needs tightening."
        },
        playground: {
            starterCode: "type EventStatus = string;",
            solutionCode: 'type EventStatus = "draft" | "published" | "cancelled";',
            objectives: [
                "Replace the string alias with a literal union",
                "Include exactly draft, published, and cancelled"
            ],
            hints: [
                "Literal types are exact quoted values, joined with |",
                "Only these three values should be allowed, nothing else"
            ],
            filesToEdit: [
                "status.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                '"draft" | "published" | "cancelled"'
            ]
        }
    },
    {
        id: "level-3-3-narrowing",
        title: "Guarding Each Branch",
        moduleName: "The Shapeshifter's Path",
        difficulty: "medium",
        xpAwarded: 150,
        story: {
            title: "Minhaj Reviews Your Render Function",
            narrative: [
                {
                    type: "narration",
                    text: "Your first attempt at renderEventSummary reaches straight for a workshop-only field like instructor before checking what kind of event it actually is. TypeScript rightly refuses to compile it."
                },
                {
                    type: "narration",
                    text: "Minhaj explains the problem."
                },
                {
                    type: "dialogue",
                    text: '"You have to narrow the union first," he says. "Use a runtime check the compiler can follow. Only then will it let you access a field that doesn\'t exist on every branch."'
                },
                {
                    type: "narration",
                    text: "He wants you to add the missing check so each event kind is only accessed inside its own safe branch. Get the check right here, and this exact category of crash becomes impossible for any teammate to reintroduce by accident."
                }
            ],
            realWorldContext: "Type narrowing lets TypeScript follow a runtime check into a conditional branch, safely exposing only the fields that actually exist there.",
            taskDescription: "Add a kind check that narrows event before accessing a variant-specific field.",
            previousOutcome: "EventStatus is now a tight literal union. Now the render function needs to safely handle each of the three KingdomEvent shapes."
        },
        playground: {
            starterCode: "function renderEventSummary(event: KingdomEvent) {\n  return event.instructor;\n}",
            solutionCode: 'function renderEventSummary(event: KingdomEvent) {\n  if (event.kind === "workshop") {\n    return event.instructor;\n  }\n  return event.title;\n}',
            objectives: [
                "Add an if check on event.kind before accessing instructor",
                "Provide a fallback for the other event kinds"
            ],
            hints: [
                "A property check like event.kind === 'workshop' lets TypeScript narrow the type inside that block",
                "Every branch needs to return something safely typed"
            ],
            filesToEdit: [
                "render-event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "event.kind ===",
                "event.instructor"
            ]
        }
    },
    {
        id: "level-3-4-discriminated-unions",
        title: "The Kind Field Fix",
        moduleName: "The Shapeshifter's Path",
        difficulty: "medium",
        xpAwarded: 150,
        story: {
            title: "Tasnim Formalizes the Pattern",
            narrative: [
                {
                    type: "narration",
                    text: "Tasnim likes the kind check you added, but she points out a problem."
                },
                {
                    type: "dialogue",
                    text: '"The three event interfaces don\'t actually share a common literal field yet," she says. "Because of that, the narrowing only works by accident in some cases."'
                },
                {
                    type: "narration",
                    text: "She wants each interface to declare kind as its own exact literal: concert, workshop, or meetup. That way, TypeScript can exhaustively verify that every branch of a switch statement is handled, catching a forgotten case before it ships."
                },
                {
                    type: "narration",
                    text: "Once every variant shares this literal field, a forgotten case in any future switch statement will get caught by the compiler itself."
                }
            ],
            realWorldContext: "A discriminated union adds a shared literal-typed field so TypeScript can safely and exhaustively narrow between every possible variant.",
            taskDescription: "Add a literal kind field to each of the three event interfaces.",
            previousOutcome: "The render function now narrows safely in the common case. Tasnim wants the underlying interfaces formalized as a true discriminated union."
        },
        playground: {
            starterCode: "interface WorkshopEvent extends Event {\n  instructor: string;\n  maxSeats: number;\n}",
            solutionCode: 'interface WorkshopEvent extends Event {\n  kind: "workshop";\n  instructor: string;\n  maxSeats: number;\n}',
            objectives: [
                "Add a kind field typed as the exact literal 'workshop'",
                "Ensure ConcertEvent and MeetupEvent each get their own matching literal"
            ],
            hints: [
                "kind should be typed as the literal string itself, not just string",
                "Each of the three interfaces needs its own unique literal value"
            ],
            filesToEdit: [
                "workshop-event.ts",
                "concert-event.ts",
                "meetup-event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                'kind: "workshop"'
            ]
        }
    },
    {
        id: "level-3-5-assertions",
        title: "When You Know Better Than the Compiler",
        moduleName: "The Shapeshifter's Path",
        difficulty: "hard",
        xpAwarded: 175,
        story: {
            title: "Evans's Trusted Legacy Payload",
            narrative: [
                {
                    type: "narration",
                    text: "Evans hands you a payload from a legacy admin tool. It is always shaped like an Event, but it arrives typed as unknown because the old system predates any of this typing work."
                },
                {
                    type: "narration",
                    text: "Minhaj is cautious here."
                },
                {
                    type: "dialogue",
                    text: '"An assertion tells the compiler to trust you," he explains. "It doesn\'t actually check anything at runtime. Use it only when you have real evidence, like a schema Evans already validated upstream. Do not use it as a shortcut to silence an error you don\'t understand."'
                },
                {
                    type: "narration",
                    text: "Minhaj is clear that this is the exception, not the rule. He wants you to feel exactly why before Stage 4 begins."
                }
            ],
            realWorldContext: "A type assertion overrides the compiler's own inference and performs zero runtime checking, so it should be reserved for cases backed by real, external evidence.",
            taskDescription: "Use a type assertion to treat legacyPayload as an Event, after Evans's upstream validation.",
            previousOutcome: "The discriminated union is fully formalized. Now Evans's legacy admin tool needs one carefully justified type assertion."
        },
        playground: {
            starterCode: "function readLegacyEvent(legacyPayload: unknown) {\n  return legacyPayload.title;\n}",
            solutionCode: "function readLegacyEvent(legacyPayload: unknown) {\n  const event = legacyPayload as Event;\n  return event.title;\n}",
            objectives: [
                "Assert legacyPayload as Event",
                "Access title only after the assertion"
            ],
            hints: [
                "The as keyword performs a type assertion",
                "Assert once into a new variable, then use that variable safely"
            ],
            filesToEdit: [
                "legacy-event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "as Event"
            ]
        }
    },
    {
        id: "level-3-6-type-predicates",
        title: "Proving It, Instead of Promising It",
        moduleName: "The Shapeshifter's Path",
        difficulty: "hard",
        xpAwarded: 175,
        story: {
            title: "Jordan Finds the Assertion's Blind Spot",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan discovers that Evans's legacy-payload assertion from last sprint doesn't actually protect anything. A malformed speaker object with a missing talkTitle field sailed straight through."
                },
                {
                    type: "dialogue",
                    text: '"That is because \'as Speaker\' only tells the compiler to trust you," Minhaj explains. "It never actually checks anything at runtime."'
                },
                {
                    type: "narration",
                    text: "Minhaj wants a different tool for this exact situation, one where you can genuinely verify the shape before trusting it."
                },
                {
                    type: "narration",
                    text: "He wants a real, reusable isSpeaker function. It should check every field Speaker actually requires and return a proper type predicate. That way, getSpeakerName can safely narrow the type instead of blindly asserting it."
                }
            ],
            realWorldContext: "A custom type predicate performs a real runtime check and narrows accordingly, unlike a type assertion, which changes nothing about what actually happens when the code runs.",
            taskDescription: "Write a custom type predicate isSpeaker and use it to safely narrow payload before accessing name.",
            previousOutcome: "The legacy payload assertion shipped and was reviewed. Now Jordan has found a real gap it left behind, and Minhaj wants it closed properly."
        },
        playground: {
            starterCode: "function getSpeakerName(payload: unknown) {\n  const speaker = payload as Speaker;\n  return speaker.name;\n}",
            solutionCode: 'function isSpeaker(payload: unknown): payload is Speaker {\n  return (\n    typeof payload === "object" &&\n    payload !== null &&\n    "name" in payload &&\n    "talkTitle" in payload\n  );\n}\n\nfunction getSpeakerName(payload: unknown) {\n  if (isSpeaker(payload)) {\n    return payload.name;\n  }\n  throw new Error("Invalid speaker payload");\n}',
            objectives: [
                "Write a custom type predicate isSpeaker using the 'payload is Speaker' syntax",
                "Check every field Speaker actually requires inside isSpeaker",
                "Replace the risky assertion in getSpeakerName with a call to isSpeaker"
            ],
            hints: [
                "A type predicate's return type looks like 'param is Type', not just boolean",
                "The function body must actually verify each required field before returning true, or the predicate is just as unsafe as the assertion it replaces"
            ],
            filesToEdit: [
                "speaker.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "payload is Speaker",
                "isSpeaker(payload)"
            ],
            forbiddenKeywords: [
                "as Speaker"
            ]
        }
    },
    {
        id: "level-4-1-generics",
        title: "One Spell, Every Entity",
        moduleName: "The Generic Alchemists",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Minhaj Counts Four Copy-Pasted Functions",
            narrative: [
                {
                    type: "narration",
                    text: "Minhaj pulls up findEventById, findUserById, and findTicketById side by side. They are structurally identical except for a single type."
                },
                {
                    type: "dialogue",
                    text: '"Someone is about to write a fifth one for Organizer," Minhaj says. "That is our sign."'
                },
                {
                    type: "narration",
                    text: "He wants one generic findById function that works for any entity with an id. That way, the next new entity type won't need its own copy-pasted lookup function at all."
                },
                {
                    type: "dialogue",
                    text: '"With one single generic function," Minhaj says, "the next brand-new entity type never needs its own hand-written lookup function again."'
                }
            ],
            realWorldContext: "A generic function eliminates duplicated logic that's identical across types, replacing four near-copies with one reusable, type-safe function.",
            taskDescription: "Write a generic findById function usable for Events, Users, or Tickets.",
            previousOutcome: "The legacy payload assertion is in place and reviewed. Now Minhaj wants the four duplicated findXById functions unified into one."
        },
        playground: {
            starterCode: "function findEventById(items: Event[], id: string): Event | undefined {\n  return items.find(item => item.id === id);\n}",
            solutionCode: "function findById<T extends { id: string }>(items: T[], id: string): T | undefined {\n  return items.find(item => item.id === id);\n}",
            objectives: [
                "Add a generic type parameter T",
                "Constrain T to require an id field"
            ],
            hints: [
                "<T> declares a generic type parameter right after the function name",
                "T extends { id: string } guarantees every item has an id"
            ],
            filesToEdit: [
                "find-by-id.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "<T extends { id: string }>"
            ]
        }
    },
    {
        id: "level-4-2-generic-constraints",
        title: "Guarding the Gate",
        moduleName: "The Generic Alchemists",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Jordan Breaks findById on Purpose",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan, always testing edge cases, calls findById on a plain array of strings just to see what happens. Without a constraint, it compiles fine. But it will crash the moment the function tries to read .id off a plain string."
                },
                {
                    type: "narration",
                    text: "Minhaj wants you to confirm that the constraint you added in the last level is doing its job."
                },
                {
                    type: "dialogue",
                    text: '"This exact misuse should fail to compile," Minhaj says. "It shouldn\'t fail at runtime in front of a user."'
                },
                {
                    type: "narration",
                    text: "He wants you to confirm that the guard holds here too, before this pattern gets used across the rest of the utility library."
                }
            ],
            realWorldContext: "A generic constraint turns an unsafe runtime crash into a caught-at-compile-time error, exactly the difference Jordan's test is meant to surface.",
            taskDescription: "Add the missing constraint to a second generic utility, groupById, so it also requires an id field.",
            previousOutcome: "The generic findById function replaced all four duplicates. Now Jordan wants a second generic utility, groupById, made just as safe."
        },
        playground: {
            starterCode: "function groupById<T>(items: T[]): Record<string, T> {\n  const map: Record<string, T> = {};\n  for (const item of items) {\n    map[item.id] = item;\n  }\n  return map;\n}",
            solutionCode: "function groupById<T extends { id: string }>(items: T[]): Record<string, T> {\n  const map: Record<string, T> = {};\n  for (const item of items) {\n    map[item.id] = item;\n  }\n  return map;\n}",
            objectives: [
                "Add the { id: string } constraint to T"
            ],
            hints: [
                "The syntax is identical to the constraint you already wrote on findById",
                "Without the constraint, item.id is not guaranteed to exist"
            ],
            filesToEdit: [
                "group-by-id.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "<T extends { id: string }>"
            ]
        }
    },
    {
        id: "level-4-3-pick-omit-partial",
        title: "Deriving the Summary View",
        moduleName: "The Generic Alchemists",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Salman Needs a Lightweight List View",
            narrative: [
                {
                    type: "narration",
                    text: "Salman's new event list view only shows the title and date. But your first attempt hand-wrote a brand new interface with just those two fields. It already drifted out of sync when capacity was renamed last week."
                },
                {
                    type: "narration",
                    text: "Tasnim wants EventSummary derived directly from Event using Pick. That way, it automatically updates whenever the real Event interface changes, instead of living as its own disconnected copy."
                },
                {
                    type: "narration",
                    text: "Get this derived correctly, and Salman's list view will update automatically forever — with zero risk of drifting out of sync again."
                }
            ],
            realWorldContext: "Deriving a smaller type with Pick keeps it automatically in sync with its source interface, instead of duplicating fields by hand.",
            taskDescription: "Derive EventSummary from Event using Pick, keeping only title and date.",
            previousOutcome: "groupById is now safely constrained. Now Salman's lightweight list view needs a derived, always-in-sync EventSummary type."
        },
        playground: {
            starterCode: "interface EventSummary {\n  title: string;\n  date: string;\n}",
            solutionCode: 'type EventSummary = Pick<Event, "title" | "date">;',
            objectives: [
                "Replace the hand-written interface with a Pick-derived type",
                "Keep only title and date from Event"
            ],
            hints: [
                "Pick<Source, 'field' | 'field'> selects a subset of fields",
                "This should be a type alias, not a separate interface"
            ],
            filesToEdit: [
                "event-summary.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                'Pick<Event, "title" | "date">'
            ]
        }
    },
    {
        id: "level-4-4-required-readonly-record",
        title: "Sealing the Final Submission",
        moduleName: "The Generic Alchemists",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Apurba's Launch-Day Checklist",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba is nervous about launch day. The event creation form currently lets someone submit with fields still missing, since the in-progress editing state is naturally Partial."
                },
                {
                    type: "narration",
                    text: "Tasnim wants a hard gate right before saving."
                },
                {
                    type: "narration",
                    text: "She wants the submit handler to only accept a fully Required version of the form input. That way, an incomplete Event can never reach the database, no matter what the UI allows mid-edit."
                },
                {
                    type: "dialogue",
                    text: '"Get this gate right," Tasnim says, "and an incomplete Event simply cannot reach the database, no matter what happens in the UI."'
                }
            ],
            realWorldContext: "Required<T> turns an in-progress, partially-filled editing state into a hard, compiler-enforced gate at the exact moment of submission.",
            taskDescription: "Type the submitEvent function's parameter as Required<EventFormInput>.",
            previousOutcome: "EventSummary now derives cleanly from Event. With launch day approaching, Apurba needs the final submission gate made airtight."
        },
        playground: {
            starterCode: "function submitEvent(input: EventFormInput) {\n  saveToDatabase(input);\n}",
            solutionCode: "function submitEvent(input: Required<EventFormInput>) {\n  saveToDatabase(input);\n}",
            objectives: [
                "Wrap EventFormInput in Required",
                "Ensure incomplete input can no longer be passed to submitEvent"
            ],
            hints: [
                "Required<T> makes every field on T mandatory",
                "Only the parameter type needs to change, not the function body"
            ],
            filesToEdit: [
                "submit-event.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "Required<EventFormInput>"
            ]
        }
    },
    {
        id: "level-4-5-enums-vs-unions",
        title: "Naming the Roles",
        moduleName: "The Generic Alchemists",
        difficulty: "medium",
        xpAwarded: 200,
        story: {
            title: "Tasnim Weighs Enum vs Union for User Roles",
            narrative: [
                {
                    type: "narration",
                    text: "The team needs a UserRole field: admin, organizer, or attendee. Someone on the team defaults to an enum out of habit, but Tasnim wants you to compare it against a plain literal union first."
                },
                {
                    type: "dialogue",
                    text: '"An enum leaves behind a real object in the compiled JavaScript," she explains, "while a literal union disappears completely at compile time."'
                },
                {
                    type: "narration",
                    text: "For a role check used constantly across the frontend bundle, she wants the leaner option."
                },
                {
                    type: "narration",
                    text: "It's a small change, Tasnim admits. But at this scale, the bundle-size savings add up across every role check in the app."
                }
            ],
            realWorldContext: "Comparing an enum against a literal union for the same field surfaces a genuine runtime cost trade-off, not just a stylistic preference.",
            taskDescription: "Replace the UserRole enum with an equivalent literal union.",
            previousOutcome: "The submission gate now requires a fully Required form input. Before Stage 5 begins, Tasnim wants the UserRole type reconsidered."
        },
        playground: {
            starterCode: "enum UserRole {\n  Admin,\n  Organizer,\n  Attendee\n}",
            solutionCode: 'type UserRole = "admin" | "organizer" | "attendee";',
            objectives: [
                "Replace the enum with a literal union",
                "Keep all three roles represented as lowercase string literals"
            ],
            hints: [
                "A literal union lists each allowed exact value joined by |",
                "This removes the enum keyword entirely"
            ],
            filesToEdit: [
                "user-role.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                '"admin" | "organizer" | "attendee"'
            ],
            forbiddenKeywords: [
                "enum UserRole"
            ]
        }
    },
    {
        id: "level-4-6-keyof-operator",
        title: "No More Typo'd Column Names",
        moduleName: "The Generic Alchemists",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Salman's Configurable Table Fails Silently",
            narrative: [
                {
                    type: "narration",
                    text: "Salman's new admin table lets an operator pick which Event field to display in each column. But the getField helper behind it accepts any string as a field name. A single typo like 'titel' just quietly renders undefined instead of failing anywhere obvious."
                },
                {
                    type: "narration",
                    text: "Nobody notices until a real event's title column is blank in front of a customer."
                },
                {
                    type: "narration",
                    text: "Tasnim wants getField's key parameter constrained to the actual keys of the object it's reading from. That way, a typo'd field name becomes a compile error the moment it's written, not a silent blank cell in production."
                }
            ],
            realWorldContext: "Constraining a generic key parameter with keyof T guarantees the key genuinely exists on T, turning a silent runtime typo into an immediate compile-time error.",
            taskDescription: "Make getField generic over T and K, constraining K to keyof T, and return T[K].",
            previousOutcome: "UserRole is now a lean literal union. Now Salman's configurable admin table needs its field-lookup helper made typo-proof."
        },
        playground: {
            starterCode: "function getField(item, field) {\n  return item[field];\n}",
            solutionCode: "function getField<T, K extends keyof T>(item: T, field: K): T[K] {\n  return item[field];\n}",
            objectives: [
                "Add generic type parameters T and K to getField",
                "Constrain K to keyof T",
                "Type the return value as T[K]"
            ],
            hints: [
                "K extends keyof T restricts field to an actual key that exists on T",
                "T[K] is an indexed access type representing exactly the value type stored at that key"
            ],
            filesToEdit: [
                "get-field.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "K extends keyof T",
                "T[K]"
            ]
        }
    },
    {
        id: "level-5-1-generic-react-component",
        title: "One Card Component to Rule Them All",
        moduleName: "The Frontend Convergence",
        difficulty: "hard",
        xpAwarded: 225,
        story: {
            title: "Salman Is Tired of Three Nearly Identical Cards",
            narrative: [
                {
                    type: "narration",
                    text: "Salman's design system has EventCard, TicketCard, and UserCard. These are visually identical frames built around different data."
                },
                {
                    type: "narration",
                    text: "Minhaj wants one generic DataCard<T> component instead. That way, the layout logic lives in exactly one place, and any future entity type can use the same card for free."
                },
                {
                    type: "dialogue",
                    text: '"This is the first time all your type-level work is applied directly to a real React component," Minhaj says. "So keep it strictly typed, with no \'any\' anywhere."'
                },
                {
                    type: "narration",
                    text: "Get this component right, and every future entity type gets the exact same reusable, type-safe card for free."
                }
            ],
            realWorldContext: "A generic React component eliminates duplicated card layouts across entity types while keeping every prop fully type-checked.",
            taskDescription: "Type DataCard's props with a generic parameter T for the item and a renderContent function.",
            previousOutcome: "UserRole is now a lean literal union. Now Salman needs the three duplicated card components unified into one generic component."
        },
        playground: {
            starterCode: "function DataCard({ item, renderContent }) {\n  return renderContent(item);\n}",
            solutionCode: "function DataCard<T>({ item, renderContent }: { item: T; renderContent: (item: T) => React.ReactNode }) {\n  return renderContent(item);\n}",
            objectives: [
                "Add a generic type parameter T to DataCard",
                "Type renderContent as a function taking T and returning React.ReactNode"
            ],
            hints: [
                "<T> goes directly after the function name, before the props parameter",
                "renderContent's signature is (item: T) => React.ReactNode"
            ],
            filesToEdit: [
                "DataCard.tsx"
            ]
        },
        validation: {
            requiredKeywords: [
                "DataCard<T>",
                "renderContent: (item: T) => React.ReactNode"
            ]
        }
    },
    {
        id: "level-5-2-typed-api-responses",
        title: "Trusting the Fetch Result",
        moduleName: "The Frontend Convergence",
        difficulty: "hard",
        xpAwarded: 225,
        story: {
            title: "Evans's API Can Now Fail Gracefully",
            narrative: [
                {
                    type: "narration",
                    text: "Evans upgraded the events API to return a proper error shape instead of just throwing. However, the EventList component still assumes every fetch succeeds. It crashed the moment Evans tested the new error path."
                },
                {
                    type: "narration",
                    text: "Evans wants a generic ApiResponse<T> type representing both outcomes. That way, every component using this API is forced to handle failure instead of assuming everything always works."
                },
                {
                    type: "dialogue",
                    text: '"Get this shape right," Evans says, "and every component that fetches from this endpoint is forced to handle both outcomes honestly."'
                }
            ],
            realWorldContext: "A generic success/error response wrapper forces every consumer of an API call to handle failure, not just assume the happy path.",
            taskDescription: "Declare a generic ApiResponse<T> type with success and error variants.",
            previousOutcome: "The generic DataCard component now renders every entity type. Now Evans's upgraded API needs a properly typed response shape."
        },
        playground: {
            starterCode: "type ApiResponse<T> = {\n  data: T;\n};",
            solutionCode: "type ApiResponse<T> =\n  | { success: true; data: T }\n  | { success: false; error: string };",
            objectives: [
                "Model ApiResponse as a discriminated union of success and error",
                "Include a success: true branch with data and a success: false branch with error"
            ],
            hints: [
                "This combines generics with the discriminated union pattern from Stage 3",
                "Both branches need a shared literal field, success, to narrow on"
            ],
            filesToEdit: [
                "api-response.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "success: true; data: T",
                "success: false; error: string"
            ]
        }
    },
    {
        id: "level-5-3-typed-forms",
        title: "Wiring the Booking Form",
        moduleName: "The Frontend Convergence",
        difficulty: "hard",
        xpAwarded: 225,
        story: {
            title: "Jordan Finds One Last Hole Before Launch",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan tests the booking form by submitting it half-filled on purpose. To everyone's surprise, it goes through anyway."
                },
                {
                    type: "narration",
                    text: "The in-progress editing state is correctly typed as Partial<BookingInput> while the user is still filling things in. However, nothing currently stops that same incomplete Partial state from reaching the submit handler directly."
                },
                {
                    type: "narration",
                    text: "Minhaj wants the submit function's parameter type narrowed all the way to Required<BookingInput>. That way, an incomplete booking becomes an immediate compile error for the developer, instead of a confusing support ticket after launch."
                }
            ],
            realWorldContext: "Gating a form's submit handler behind Required<T>, while editing state stays Partial<T>, blocks incomplete submissions at compile time rather than at runtime.",
            taskDescription: "Type the submitBooking function's parameter as Required<BookingInput>.",
            previousOutcome: "The ApiResponse union now models both success and failure. Jordan's last bug before launch is in the booking form's submit gate."
        },
        playground: {
            starterCode: "function submitBooking(input: Partial<BookingInput>) {\n  sendBookingRequest(input);\n}",
            solutionCode: "function submitBooking(input: Required<BookingInput>) {\n  sendBookingRequest(input);\n}",
            objectives: [
                "Change submitBooking's parameter type from Partial to Required"
            ],
            hints: [
                "Required<T> is the opposite of Partial<T>: every field becomes mandatory",
                "Only the type wrapper needs to change here"
            ],
            filesToEdit: [
                "booking-form.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "Required<BookingInput>"
            ],
            forbiddenKeywords: [
                "Partial<BookingInput>"
            ]
        }
    },
    {
        id: "level-5-4-nextjs-api-route",
        title: "Shipping the Events Endpoint",
        moduleName: "The Frontend Convergence",
        difficulty: "hard",
        xpAwarded: 225,
        story: {
            title: "Evans Hands Off the Real Route",
            narrative: [
                {
                    type: "narration",
                    text: "Evans is ready to wire the actual Next.js API route into the app. He wants it to return exactly the ApiResponse<Event[]> shape that the frontend already expects — nothing looser."
                },
                {
                    type: "narration",
                    text: '"This is the moment where the backend and frontend typing finally meet in one place," Evans says.'
                },
                {
                    type: "narration",
                    text: "He wants you to make the route handler's return type explicit. That way, the client-side ApiResponse narrowing you already wrote will work against the real endpoint, not just a mock."
                },
                {
                    type: "dialogue",
                    text: '"Get the route\'s return type right here," Evans says, "and the client and server will finally agree on exactly one shared shape."'
                }
            ],
            realWorldContext: "Explicitly typing a Next.js route handler's return value as ApiResponse<Event[]> is what makes the client's typed narrowing logic actually trustworthy in production.",
            taskDescription: "Type the GET route handler to return an ApiResponse<Event[]>.",
            previousOutcome: "The booking form's submit gate is airtight. Now Evans needs the real Next.js events route wired to match the frontend's expected shape."
        },
        playground: {
            starterCode: "export async function GET() {\n  const events = await fetchEventsFromDb();\n  return Response.json({ data: events });\n}",
            solutionCode: "export async function GET(): Promise<Response> {\n  const events: Event[] = await fetchEventsFromDb();\n  const body: ApiResponse<Event[]> = { success: true, data: events };\n  return Response.json(body);\n}",
            objectives: [
                "Type events as Event[]",
                "Build the response body as an ApiResponse<Event[]>"
            ],
            hints: [
                "The response body should match the ApiResponse union's success branch exactly",
                "success: true must be included alongside data"
            ],
            filesToEdit: [
                "app/api/events/route.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "ApiResponse<Event[]>",
                "success: true"
            ]
        }
    },
    {
        id: "level-5-5-launch-day",
        title: "Launch Day",
        moduleName: "The Frontend Convergence",
        difficulty: "hard",
        xpAwarded: 300,
        story: {
            title: "The Whole Team Watches the Deploy",
            narrative: [
                {
                    type: "narration",
                    text: "Minhaj, Tasnim, Jordan, Apurba, Salman, and Evans are all watching the same terminal."
                },
                {
                    type: "narration",
                    text: "Every piece is in place: the domain model, the generic DataCard, the typed API response, and the gated booking form."
                },
                {
                    type: "narration",
                    text: "Tasnim has one last request before you ship. She wants you to wire the EventList page to fetch through ApiResponse<Event[]>, narrow the result, and render successful data through DataCard. There must be zero 'any' anywhere in the final file."
                },
                {
                    type: "dialogue",
                    text: '"This is the whole course, together, one last time," Tasnim says, watching the build finish. "Every teammate who taught you something along the way is represented somewhere in this final file."'
                }
            ],
            realWorldContext: "This final integration proves that a domain model, a generic component, and a typed API response can compose into one real, production-style feature.",
            taskDescription: "Narrow the ApiResponse in EventListPage and render successful data through DataCard.",
            previousOutcome: "The Next.js route now returns the correctly typed ApiResponse. This is the final piece: wiring it all together for launch."
        },
        playground: {
            starterCode: "function EventListPage({ response }: { response: ApiResponse<Event[]> }) {\n  return <DataCard item={response.data} renderContent={(e) => e.title} />;\n}",
            solutionCode: "function EventListPage({ response }: { response: ApiResponse<Event[]> }) {\n  if (!response.success) {\n    return <p>{response.error}</p>;\n  }\n  return (\n    <>\n      {response.data.map(event => (\n        <DataCard key={event.id} item={event} renderContent={(e) => e.title} />\n      ))}\n    </>\n  );\n}",
            objectives: [
                "Check response.success before accessing data",
                "Render each event through DataCard using its id as the key"
            ],
            hints: [
                "Narrow with an if (!response.success) check before touching response.data",
                "Map over response.data only inside the success branch"
            ],
            filesToEdit: [
                "EventListPage.tsx"
            ]
        },
        validation: {
            requiredKeywords: [
                "response.success",
                "response.data.map",
                "DataCard"
            ]
        }
    },
    {
        id: "level-5-6-state-managers",
        title: "Scaling the Kingdom's State",
        moduleName: "The Frontend Convergence",
        difficulty: "hard",
        xpAwarded: 250,
        story: {
            title: "The Admin Dashboard Outgrows useState",
            narrative: [
                {
                    type: "narration",
                    text: "The Kingdom is live and the admin dashboard is growing fast. Filters, sorting, and a selected event all need to update together. A handful of scattered useState calls have turned into a tangle that Minhaj doesn't trust anymore."
                },
                {
                    type: "narration",
                    text: "Someone dispatches an action typed as a loose string, mistypes SELCT_EVENT, and the dashboard silently does nothing."
                },
                {
                    type: "narration",
                    text: "Minhaj wants the dashboard's actions modeled as a real discriminated union. This is the exact same pattern from Stage 3, now wired directly into a useReducer hook. That way, a mistyped action fails to compile — instead of failing silently in front of an admin."
                }
            ],
            realWorldContext: "Typing a useReducer's actions as a discriminated union brings the same compile-time safety from Stage 3's KingdomEvent modeling directly into React's state management.",
            taskDescription: "Model DashboardAction as a discriminated union and fully type dashboardReducer's parameters and return value.",
            previousOutcome: "Launch Day shipped successfully and the whole team watched the deploy. Now that the Kingdom is live, the admin dashboard's state management needs to scale with it."
        },
        playground: {
            starterCode: 'function dashboardReducer(state, action) {\n  switch (action.type) {\n    case "SELECT_EVENT":\n      return { ...state, selectedEventId: action.id };\n    default:\n      return state;\n  }\n}',
            solutionCode: 'type DashboardAction =\n  | { type: "SELECT_EVENT"; id: string }\n  | { type: "CLEAR_SELECTION" };\n\nfunction dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {\n  switch (action.type) {\n    case "SELECT_EVENT":\n      return { ...state, selectedEventId: action.id };\n    case "CLEAR_SELECTION":\n      return { ...state, selectedEventId: undefined };\n    default:\n      return state;\n  }\n}',
            objectives: [
                "Model DashboardAction as a discriminated union of at least two action shapes",
                "Type dashboardReducer's state and action parameters and its return value",
                "Handle both action variants explicitly in the switch"
            ],
            hints: [
                "This combines the discriminated union pattern from Stage 3 directly with useReducer's action parameter",
                "Each action variant needs its own unique literal type value to narrow on"
            ],
            filesToEdit: [
                "dashboard-reducer.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "type DashboardAction",
                "action: DashboardAction"
            ]
        }
    },
    {
        id: "level-5-7-satisfies-operator",
        title: "The satisfies Operator: Constrained Routing",
        moduleName: "The Frontend Convergence",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Minhaj's Autocomplete is Too Broad",
            narrative: [
                {
                    type: "dialogue",
                    text: '"I want to make sure our Router configuration object conforms to a general RouteConfig structure," Salman explains. "But the moment I annotate it as Record<string, RouteConfig>, TypeScript forgets the specific literal string keys! I lose autocomplete and narrow types when referencing specific routes downstream."'
                },
                {
                    type: "narration",
                    text: "Minhaj points you to the satisfies operator, which was introduced in TypeScript 4.9."
                },
                {
                    type: "narration",
                    text: "Satisfies lets you check that a value matches a broad type contract without changing or widening the value's actual narrow literal type."
                }
            ],
            realWorldContext: "The satisfies operator lets you validate that an object literal matches a generic interface or record type while preserving the most specific possible literal types of its properties for downstream autocomplete.",
            taskDescription: "Use the satisfies operator to validate the routerConfig object against Record<string, RouteConfig> while retaining narrow keys.",
            previousOutcome: "The admin dashboard reducer has brought strict order to state management. Now we are using satisfies to preserve exact literal routing keys."
        },
        playground: {
            starterCode: 'interface RouteConfig {\n  path: string;\n  requiresAuth: boolean;\n}\n\n// TODO: Validate routerConfig matches Record<string, RouteConfig>\n// while preserving narrow literal types (home and dashboard) using satisfies\nconst routerConfig = {\n  home: { path: "/", requiresAuth: false },\n  dashboard: { path: "/dashboard", requiresAuth: true }\n};',
            solutionCode: 'interface RouteConfig {\n  path: string;\n  requiresAuth: boolean;\n}\n\nconst routerConfig = {\n  home: { path: "/", requiresAuth: false },\n  dashboard: { path: "/dashboard", requiresAuth: true }\n} satisfies Record<string, RouteConfig>;',
            objectives: [
                "Validate routerConfig matches RouteConfig dictionary using the satisfies operator",
                "Do NOT use explicit type annotations on routerConfig directly, so we don't widen the keys"
            ],
            hints: [
                "Append 'satisfies Record<string, RouteConfig>' directly to the end of the object literal definition",
                "Do not add ': Record<string, RouteConfig>' on the variable declaration, as that would discard the specific 'home' and 'dashboard' literal keys"
            ],
            filesToEdit: [
                "router-config.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "satisfies Record<string, RouteConfig>",
                "routerConfig = {"
            ]
        }
    },
    {
        id: "level-6-1-conditional-types",
        title: "Conditional Types: Compile-time Routing",
        moduleName: "Advanced Type Gymnastics",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Evans's Loose API Payloads",
            narrative: [
                {
                    type: "narration",
                    text: "The Kingdom has integrated an external webhook system. Depending on the action triggering the webhook, we receive either a full KingdomEvent payload or a simple string containing the deleted event's ID."
                },
                {
                    type: "narration",
                    text: "Evans's initial pass returned 'any'. This caused unhandled runtime crashes when processing DELETED events."
                },
                {
                    type: "narration",
                    text: "Minhaj wants you to construct a conditional type, ResolvePayload, that inspects the WebhookAction and returns either KingdomEvent or string. This will guarantee complete type safety at the compile-time gateway."
                }
            ],
            realWorldContext: "Conditional types act like if/else statements for types, resolving to different types dynamically based on generic constraints.",
            taskDescription: "Declare a conditional type ResolvePayload<T extends WebhookAction> that resolves to KingdomEvent for CREATED/UPDATED, and string for DELETED.",
            previousOutcome: "The useReducer dashboard is fully type-safe. Now you are moving into advanced compilation type gymnastics to handle unpredictable external webhooks."
        },
        playground: {
            starterCode: 'type WebhookAction = "CREATED" | "UPDATED" | "DELETED";\n\ninterface KingdomEvent {\n  id: string;\n  title: string;\n}\n\n// TODO: Complete the conditional type resolver\ntype ResolvePayload<T extends WebhookAction> = any;\n\nfunction processPayload<A extends WebhookAction>(action: A, data: any): ResolvePayload<A> {\n  return data as ResolvePayload<A>;\n}',
            solutionCode: 'type WebhookAction = "CREATED" | "UPDATED" | "DELETED";\n\ninterface KingdomEvent {\n  id: string;\n  title: string;\n}\n\ntype ResolvePayload<T extends WebhookAction> = T extends "CREATED" | "UPDATED"\n  ? KingdomEvent\n  : T extends "DELETED"\n    ? string\n    : never;\n\nfunction processPayload<A extends WebhookAction>(action: A, data: any): ResolvePayload<A> {\n  return data as ResolvePayload<A>;\n}',
            objectives: [
                "Declare ResolvePayload generic over WebhookAction",
                "Route CREATED and UPDATED actions to KingdomEvent using extends checks",
                "Route DELETED action to string, and any other case to never"
            ],
            hints: [
                "Use T extends 'CREATED' | 'UPDATED' ? KingdomEvent : ... syntax to nest conditional types."
            ],
            filesToEdit: [
                "webhook-resolver.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "ResolvePayload<T extends WebhookAction>",
                "CREATED",
                "UPDATED",
                "DELETED"
            ]
        }
    },
    {
        id: "level-6-2-template-literals",
        title: "Template Literal Types: Safe Custom Events",
        moduleName: "Advanced Type Gymnastics",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Salman's Dynamic Event Handlers",
            narrative: [
                {
                    type: "narration",
                    text: "Salman is building a highly flexible UI event bridge for the Kingdom portal."
                },
                {
                    type: "narration",
                    text: "Event names are dynamically generated by prefixing standard actions with 'on_'. For example, click becomes onclick, and hover becomes onhover."
                },
                {
                    type: "narration",
                    text: "Because the keys are built at runtime, Salman typed the handlers as loose strings. As a result, typos like 'on_clck' are passing through silently."
                },
                {
                    type: "narration",
                    text: "Tasnim demands you use template literal types to enforce exact event patterns."
                }
            ],
            realWorldContext: "Template literal types let you construct exact string schemas by combining literal values with generic variables, similar to ES6 template strings.",
            taskDescription: "Construct the CustomEvent type using template literal string formatting based on BaseEvent.",
            previousOutcome: "The webhook payload is fully typed. Now Salman needs help securing dynamic runtime event strings."
        },
        playground: {
            starterCode: 'type BaseEvent = "click" | "hover" | "submit";\n\n// TODO: Make CustomEvent type match any of the base events prefixed with "on_"\ntype CustomEvent = string;\n\nfunction triggerEvent(event: CustomEvent) {\n  console.log(`Triggered: ${event}`);\n}',
            solutionCode: 'type BaseEvent = "click" | "hover" | "submit";\n\ntype CustomEvent = `on_${BaseEvent}`;\n\nfunction triggerEvent(event: CustomEvent) {\n  console.log(`Triggered: ${event}`);\n}',
            objectives: [
                "Define CustomEvent using template literal string syntax",
                "Prefix all BaseEvent options with 'on_'"
            ],
            hints: [
                "Use backticks `` around on_${BaseEvent} to dynamically generate all permutations."
            ],
            filesToEdit: [
                "event-literals.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "type CustomEvent =",
                "on_${BaseEvent}"
            ]
        }
    },
    {
        id: "level-6-3-mapped-and-infer",
        title: "Mapped Types & infer: Schema Transformers",
        moduleName: "Advanced Type Gymnastics",
        difficulty: "hard",
        xpAwarded: 225,
        story: {
            title: "Apurba's Nested Database Unpacking",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba wants to fetch database rows wrapped inside a generic DbResponse envelope. Right now, our database helpers have to manually declare what the nested data type looks like."
                },
                {
                    type: "narration",
                    text: "Minhaj suggests using the 'infer' keyword inside a conditional type to automatically extract the inner type."
                },
                {
                    type: "narration",
                    text: "Additionally, Tasnim asks for a mapped type that guarantees every field on the returned response is strictly readonly."
                }
            ],
            realWorldContext: "Mapped types iterate over keys of an existing type to construct a modified type, and infer allows unpacking generic parameters inside conditionals.",
            taskDescription: "Declare UnpackResponse using infer, and design a custom Mapped Type to make properties readonly.",
            previousOutcome: "Custom event prefixes are safely restricted. Now Apurba is ready to unlock advanced database transformers."
        },
        playground: {
            starterCode: "interface DbResponse<T> {\n  data: T;\n  status: number;\n}\n\n// TODO: Use 'infer' to extract T from DbResponse<T>\ntype UnpackResponse<R> = any;\n\n// TODO: Create a mapped type that makes all keys in T readonly\ntype ReadonlyResponse<T> = any;",
            solutionCode: "interface DbResponse<T> {\n  data: T;\n  status: number;\n}\n\ntype UnpackResponse<R> = R extends DbResponse<infer T> ? T : never;\n\ntype ReadonlyResponse<T> = {\n  readonly [P in keyof T]: T[P];\n};",
            objectives: [
                "Construct UnpackResponse using conditional extends and 'infer T'",
                "Design ReadonlyResponse using mapped type keys syntax '[P in keyof T]'",
                "Enforce readonly modifier for each property in the mapped type"
            ],
            hints: [
                "For UnpackResponse, use R extends DbResponse<infer T> ? T : never.",
                "For ReadonlyResponse, use readonly [P in keyof T]: T[P]."
            ],
            filesToEdit: [
                "schema-transformer.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "infer T",
                "readonly [",
                "in keyof T"
            ]
        }
    },
    {
        id: "level-6-4-utility-extraction",
        title: "Extracting Types from Third-Party Functions",
        moduleName: "Advanced Type Gymnastics",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Evans's Missing Library Types",
            narrative: [
                {
                    type: "dialogue",
                    text: '"We are wrapping a legacy SDK reservation function," Evans complains. "But the SDK authors forgot to export the types for its parameters and return value. We don\'t want to redefine these manually and risk falling out of sync with future SDK updates."'
                },
                {
                    type: "narration",
                    text: "Tasnim smiles."
                },
                {
                    type: "dialogue",
                    text: '"TypeScript provides built-in utilities specifically for this," she says. "Use Parameters<typeof fn> to dynamically extract parameters as a tuple, and ReturnType<typeof fn> to unpack its return type. Let\'s write an interception middleware that extracts and proxies these types."'
                }
            ],
            realWorldContext: "Using ReturnType<T> and Parameters<T> allows developers to dynamically capture function signatures from libraries, keeping downstream custom wrappers automatically in sync with third-party code.",
            taskDescription: "Use Parameters and ReturnType to extract the legacy function's parameters and return type.",
            previousOutcome: "Database schema transformers are fully operation-safe. Now we are dynamically extracting function signatures from typeless SDK black boxes."
        },
        playground: {
            starterCode: "// A legacy service function that we don't control and doesn't export its types\nfunction legacyBookEvent(eventId: string, seats: number, promo?: string) {\n  return { success: true, bookingId: `bk_${eventId}_99` };\n}\n\n// TODO: Extract the argument types as a tuple type\ntype LegacyParams = any;\n\n// TODO: Extract the return type of legacyBookEvent\ntype LegacyResult = any;\n\nfunction wrapLegacyBooking(...args: LegacyParams): LegacyResult {\n  console.log(\"Pre-booking checks...\");\n  return legacyBookEvent(...args);\n}",
            solutionCode: 'function legacyBookEvent(eventId: string, seats: number, promo?: string) {\n  return { success: true, bookingId: `bk_${eventId}_99` };\n}\n\ntype LegacyParams = Parameters<typeof legacyBookEvent>;\n\ntype LegacyResult = ReturnType<typeof legacyBookEvent>;\n\nfunction wrapLegacyBooking(...args: LegacyParams): LegacyResult {\n  console.log("Pre-booking checks...");\n  return legacyBookEvent(...args);\n}',
            objectives: [
                "Extract parameter types of legacyBookEvent using Parameters<typeof legacyBookEvent>",
                "Extract return type of legacyBookEvent using ReturnType<typeof legacyBookEvent>",
                "Type wrapLegacyBooking's arguments and return value using these dynamic types"
            ],
            hints: [
                "Parameters<typeof legacyBookEvent> captures the exact list of function arguments as a tuple type",
                "ReturnType<typeof legacyBookEvent> resolves to the function's returned object shape"
            ],
            filesToEdit: [
                "sdk-wrapper.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "Parameters<typeof legacyBookEvent>",
                "ReturnType<typeof legacyBookEvent>"
            ]
        }
    },
    {
        id: "level-7-1-ambient-declarations",
        title: "Ambient Declarations: Navigating Typeless Borders",
        moduleName: "Production Tooling & Compilation",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Tasnim's Third-Party Analytics CDN",
            narrative: [
                {
                    type: "narration",
                    text: "Tasnim loaded a third-party analytics script using a global CDN."
                },
                {
                    type: "narration",
                    text: "Because the script runs globally outside of npm modules, TypeScript does not know that the global window.KingdomAnalytics object exists. It flags window.KingdomAnalytics with a compiler error."
                },
                {
                    type: "narration",
                    text: "Minhaj asks you to write an ambient global declaration extending the Window interface. This will let you invoke trackRegistration cleanly without any compiler red squiggles."
                }
            ],
            realWorldContext: "Ambient declaration files (.d.ts) tell the compiler about types that exist at runtime in the global scope but lack standard module headers.",
            taskDescription: "Write an ambient global declaration extending the Window interface to type-safe the KingdomAnalytics script.",
            previousOutcome: "The database schema transformers are successfully operational. Now you must manage ambient global integrations."
        },
        playground: {
            starterCode: '// TODO: Declare global Window interface extension\n// so window.KingdomAnalytics.track(event, data) compiles cleanly\n\nfunction trackRegistration(eventId: string) {\n  window.KingdomAnalytics.track("registration", { id: eventId });\n}',
            solutionCode: 'declare global {\n  interface Window {\n    KingdomAnalytics: {\n      track(event: string, data: Record<string, any>): void;\n    };\n  }\n}\n\nfunction trackRegistration(eventId: string) {\n  window.KingdomAnalytics.track("registration", { id: eventId });\n}',
            objectives: [
                "Declare a global block using 'declare global'",
                "Extend the Window interface inside the global scope",
                "Correctly type window.KingdomAnalytics with a track method"
            ],
            hints: [
                "Place interface Window inside declare global { ... } to merge the definitions globally."
            ],
            filesToEdit: [
                "ambient-analytics.d.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "declare global",
                "interface Window",
                "KingdomAnalytics",
                "track("
            ]
        }
    },
    {
        id: "level-7-2-decorators",
        title: "Decorators: Transforming Modern Classes",
        moduleName: "Production Tooling & Compilation",
        difficulty: "hard",
        xpAwarded: 225,
        story: {
            title: "Apurba's Performance Audits",
            narrative: [
                {
                    type: "narration",
                    text: "Apurba wants to trace and audit performance across the ticket reservation classes."
                },
                {
                    type: "narration",
                    text: "Instead of adding logging lines to dozens of class methods by hand, Evans suggests writing a reusable Method Decorator named logMethod."
                },
                {
                    type: "dialogue",
                    text: '"Decorators are perfect for this," Evans says. "They let us intercept method calls, run telemetry, and print status cleanly before we invoke the original method."'
                }
            ],
            realWorldContext: "Decorators are functions that can annotate and modify classes, methods, accessor properties, or parameters at runtime.",
            taskDescription: "Complete the logMethod method decorator to log the method name before executing its original logic.",
            previousOutcome: "The global analytics script compilation is fixed. Now you are mastering ECMAScript method decorators."
        },
        playground: {
            starterCode: "// TODO: Complete the logMethod decorator definition\nfunction logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {\n  const original = descriptor.value;\n  // Override descriptor.value with a custom logging wrapper\n  return descriptor;\n}",
            solutionCode: "function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {\n  const original = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`Calling ${propertyKey}`);\n    return original.apply(this, args);\n  };\n  return descriptor;\n}",
            objectives: [
                "Intercept descriptor.value with a custom function wrapper",
                "Print a console log tracing the propertyKey name",
                "Invoke the original method using .apply or .call and return its result"
            ],
            hints: [
                "Inside descriptor.value = function(...) { ... }, call original.apply(this, args)."
            ],
            filesToEdit: [
                "auditor.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "logMethod",
                "original.apply",
                "descriptor.value ="
            ]
        }
    },
    {
        id: "level-7-3-monorepos",
        title: "TypeScript Monorepos: Project References",
        moduleName: "Production Tooling & Compilation",
        difficulty: "hard",
        xpAwarded: 250,
        story: {
            title: "Minhaj Refactors the Kingdom Workspace",
            narrative: [
                {
                    type: "narration",
                    text: "The Kingdom repository is scaling rapidly."
                },
                {
                    type: "narration",
                    text: "To prevent long build wait times, Minhaj decided to refactor our codebase into a Monorepo. It will contain a shared utilities folder and a client application folder."
                },
                {
                    type: "narration",
                    text: "To make the compiler compile each package independently and incrementally, Minhaj asks you to wire up TypeScript Project References. You will do this by linking the client's configuration directly to '../shared'."
                }
            ],
            realWorldContext: "Project References allow TypeScript projects to depend on other TypeScript projects, enabling faster incremental compiles and clean boundaries.",
            taskDescription: "Wire up TS Project References inside tsconfig.json to reference '../shared'.",
            previousOutcome: "The logMethod decorator is perfectly configured. Now you are tackling the final, highest-order engineering challenge: building monorepos."
        },
        playground: {
            starterCode: '{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "NodeNext"\n  },\n  // TODO: Reference the \'../shared\' directory using project references\n  "references": []\n}',
            solutionCode: '{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "NodeNext"\n  },\n  "references": [\n    { "path": "../shared" }\n  ]\n}',
            objectives: [
                "Declare a 'references' array inside the tsconfig",
                "Provide an object with 'path' pointing to '../shared'"
            ],
            hints: [
                'Use "references": [ { "path": "../shared" } ] syntax inside your configuration JSON.'
            ],
            filesToEdit: [
                "tsconfig.json"
            ]
        },
        validation: {
            requiredKeywords: [
                "references",
                "path",
                "../shared"
            ]
        }
    },
    {
        id: "level-8-1-express-routes",
        title: "Typing the Express Gateway",
        moduleName: "The Backend Foundry",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Evans Splits Off a Real Backend Service",
            narrative: [
                {
                    type: "narration",
                    text: "With the monorepo wired up, Evans is splitting the Kingdom's API off the old Next.js route handlers. He is moving it into a dedicated Express service, just like a real production backend."
                },
                {
                    type: "narration",
                    text: "The very first route, which fetches a single event by id, is still plain JavaScript underneath. Currently, req.params.id has no type at all."
                },
                {
                    type: "narration",
                    text: "Minhaj wants this fixed before a single other route gets written."
                },
                {
                    type: "dialogue",
                    text: '"Type req as Express\'s own Request generic," Minhaj says. "That way, route parameters are checked at compile time, not just guessed at."'
                }
            ],
            realWorldContext: "Express's Request type accepts a generic describing the shape of route params, so a typo'd or missing param becomes a compile error instead of a runtime undefined.",
            taskDescription: "Type the route handler's req as Request<{ id: string }> and res as Response.",
            previousOutcome: "The monorepo's project references are wired up. Now Evans is standing up a dedicated Express service, and its very first route needs proper typing."
        },
        playground: {
            starterCode: 'app.get("/events/:id", (req, res) => {\n  const id = req.params.id;\n  res.json(findEventById(events, id));\n});',
            solutionCode: 'import { Request, Response } from "express";\n\napp.get("/events/:id", (req: Request<{ id: string }>, res: Response) => {\n  const id = req.params.id;\n  res.json(findEventById(events, id));\n});',
            objectives: [
                "Type req as Request<{ id: string }> so route params are checked",
                "Type res as Response"
            ],
            hints: [
                "Express's Request type takes a generic parameter describing the route params object",
                "Once typed, req.params.id is guaranteed to exist and be a string"
            ],
            filesToEdit: [
                "routes/events.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "Request<{ id: string }>",
                "res: Response"
            ]
        }
    },
    {
        id: "level-8-2-mongo-document-contract",
        title: "The MongoDB Document Contract",
        moduleName: "The Backend Foundry",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Jordan's Query Returns Nothing",
            narrative: [
                {
                    type: "narration",
                    text: "The Kingdom's events now live in a real MongoDB collection instead of an in-memory array. They are queried using the native driver, with no Mongoose in sight."
                },
                {
                    type: "narration",
                    text: "Jordan reports that fetching an event by the id from the URL always returns null — even for ids that definitely exist."
                },
                {
                    type: "narration",
                    text: "Tasnim spots the issue immediately."
                },
                {
                    type: "dialogue",
                    text: '"MongoDB stores _id as a real ObjectId, not a plain string," she says. "Because of that, we must convert a string id before it can match anything in the database."'
                },
                {
                    type: "narration",
                    text: "She wants EventDocument properly typed with an ObjectId _id, and eventsCollection typed as a real Collection<EventDocument>."
                }
            ],
            realWorldContext: "The native MongoDB driver types a collection as Collection<T>, and _id is a real ObjectId at rest, not a string, so incoming string ids must be explicitly converted before querying.",
            taskDescription: "Declare EventDocument with an ObjectId _id, type eventsCollection as Collection<EventDocument>, and convert the incoming string id before querying.",
            previousOutcome: "The first Express route is properly typed. Now Jordan's broken lookup means the MongoDB layer underneath it needs the same treatment."
        },
        playground: {
            starterCode: 'const eventsCollection = db.collection("events");\n\nasync function getEvent(id) {\n  return eventsCollection.findOne({ _id: id });\n}',
            solutionCode: 'import { Collection, ObjectId } from "mongodb";\n\ninterface EventDocument {\n  _id: ObjectId;\n  title: string;\n  date: string;\n  capacity: number;\n}\n\nconst eventsCollection: Collection<EventDocument> = db.collection("events");\n\nasync function getEvent(id: string) {\n  return eventsCollection.findOne({ _id: new ObjectId(id) });\n}',
            objectives: [
                "Declare an EventDocument interface with _id typed as ObjectId",
                "Type eventsCollection as Collection<EventDocument>",
                "Convert the incoming string id into an ObjectId before querying"
            ],
            hints: [
                "The native driver's Collection<T> generic is what lets findOne, insertOne, and friends stay fully typed",
                "new ObjectId(id) converts a plain string into the real _id type MongoDB expects"
            ],
            filesToEdit: [
                "db/events.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "Collection<EventDocument>",
                "new ObjectId(id)"
            ]
        }
    },
    {
        id: "level-8-3-request-augmentation",
        title: "Teaching Express About req.user",
        moduleName: "The Backend Foundry",
        difficulty: "medium",
        xpAwarded: 175,
        story: {
            title: "Minhaj Recognizes the Pattern Immediately",
            narrative: [
                {
                    type: "narration",
                    text: "Every protected route now expects requireAuth to have already attached the logged-in user to req.user. However, Express's own Request type has never heard of a user field. Because of this, every single handler that reads it fails to compile."
                },
                {
                    type: "narration",
                    text: "Minhaj smiles when he sees the error."
                },
                {
                    type: "dialogue",
                    text: '"This is the exact same ambient declaration trick we used for the analytics CDN back in Stage 7," he says. "But this time, we are targeting Express\'s own namespace instead of window."'
                },
                {
                    type: "narration",
                    text: "He wants you to merge a user field into Express's Request type once. If you do this in one shared file, every route in the service gets it for free."
                }
            ],
            realWorldContext: "Declaration merging lets you add fields to a library's own types, exactly like Stage 7's global Window augmentation, applied here to Express's Request interface.",
            taskDescription: "Declare an AuthUser interface and merge an optional user field onto Express's Request interface.",
            previousOutcome: "The MongoDB document layer is properly typed. Now every protected route needs TypeScript to actually know about req.user."
        },
        playground: {
            starterCode: 'function requireAuth(req, res, next) {\n  req.user = decodeToken(req.headers.authorization);\n  next();\n}\n\napp.get("/me", (req, res) => {\n  res.json(req.user);\n});',
            solutionCode: 'import { Request, Response, NextFunction } from "express";\n\ninterface AuthUser {\n  id: string;\n  role: "admin" | "organizer" | "attendee";\n}\n\ndeclare global {\n  namespace Express {\n    interface Request {\n      user?: AuthUser;\n    }\n  }\n}\n\nfunction requireAuth(req: Request, res: Response, next: NextFunction) {\n  req.user = decodeToken(req.headers.authorization);\n  next();\n}\n\napp.get("/me", (req: Request, res: Response) => {\n  res.json(req.user);\n});',
            objectives: [
                "Declare an AuthUser interface with id and role",
                "Merge an optional user field onto Express's own Request interface using declare global",
                "Type requireAuth's three parameters"
            ],
            hints: [
                "Express's own Request type lives inside a namespace Express block, so merging happens with declare global { namespace Express { interface Request { ... } } }",
                "This is the same declare global technique from Stage 7's ambient Window declaration, just targeting a different interface"
            ],
            filesToEdit: [
                "types/express.d.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "namespace Express",
                "interface Request",
                "user?:"
            ]
        }
    },
    {
        id: "level-8-4-better-auth-jwt",
        title: "Trusting Better Auth's Token, Carefully",
        moduleName: "The Backend Foundry",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Jordan Finds an Expired Token Sneaking Through",
            narrative: [
                {
                    type: "narration",
                    text: "Evans wired Better Auth's JWT verification into the login flow. However, the first pass just returns whatever verifyJWT hands back typed as 'any'. Jordan even manages to get an expired token treated as a perfectly valid session!"
                },
                {
                    type: "narration",
                    text: "Tasnim wants this modeled the exact same way we modeled a fetch response in Stage 5: a clean success-or-failure union."
                },
                {
                    type: "dialogue",
                    text: '"We need a clean union," she says. "That way, nothing downstream can accidentally read a session that was never actually valid."'
                },
                {
                    type: "narration",
                    text: "She wants you to wrap Better Auth's verification so a thrown error becomes a typed failure result instead of an uncaught crash."
                }
            ],
            realWorldContext: "Wrapping an untyped third-party verification call in a discriminated success/failure union is the exact same pattern as Stage 5's ApiResponse<T>, now applied to authentication instead of a fetch call.",
            taskDescription: "Declare a SessionPayload interface and a VerifyResult discriminated union, then type verifySession to return it.",
            previousOutcome: "req.user is now safely typed across every route. Now Jordan's expired-token bug means the JWT verification step itself needs the same discriminated-union treatment as Stage 5's API responses."
        },
        playground: {
            starterCode: "function verifySession(token) {\n  const payload = betterAuth.verifyJWT(token);\n  return payload;\n}",
            solutionCode: 'interface SessionPayload {\n  userId: string;\n  role: "admin" | "organizer" | "attendee";\n  expiresAt: number;\n}\n\ntype VerifyResult =\n  | { valid: true; session: SessionPayload }\n  | { valid: false; reason: string };\n\nfunction verifySession(token: string): VerifyResult {\n  try {\n    const payload = betterAuth.verifyJWT(token) as SessionPayload;\n    return { valid: true, session: payload };\n  } catch (err) {\n    return { valid: false, reason: "Invalid or expired token" };\n  }\n}',
            objectives: [
                "Declare a SessionPayload interface describing the decoded token",
                "Model VerifyResult as a discriminated union of valid and invalid outcomes",
                "Type verifySession's parameter and return value, catching a thrown error into the invalid branch"
            ],
            hints: [
                "This is Stage 5's ApiResponse<T> success/error pattern, applied to a decoded JWT instead of a fetch call",
                "A try/catch around the untyped verifyJWT call is what turns a thrown error into a typed 'invalid' result instead of crashing the request"
            ],
            filesToEdit: [
                "auth/session.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "interface SessionPayload",
                "valid: true; session: SessionPayload",
                "valid: false; reason: string"
            ]
        }
    },
    {
        id: "level-8-5-async-handler",
        title: "The Wrapper That Catches Everything",
        moduleName: "The Backend Foundry",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "A Booking Route Silently Hangs in Production",
            narrative: [
                {
                    type: "narration",
                    text: "Minhaj traces down a support ticket where a booking request hangs forever with no response and no error in the logs."
                },
                {
                    type: "narration",
                    text: "The cause: Express does not automatically catch a rejected promise inside an async route handler. When a promise is rejected, it silently swallows the whole request."
                },
                {
                    type: "narration",
                    text: "Minhaj wants a reusable asyncHandler wrapper that every route will use from now on."
                },
                {
                    type: "dialogue",
                    text: '"It needs to be generic enough to work with any route\'s specific request shape," Minhaj says. "But it must guarantee that any thrown or rejected error always reaches Express\'s own error handling."'
                }
            ],
            realWorldContext: "A generic asyncHandler wrapper, typed against Express's own RequestHandler type, guarantees any async route's rejected promise reaches error handling instead of hanging silently.",
            taskDescription: "Make asyncHandler generic over the request type it wraps, and type it to return Express's RequestHandler.",
            previousOutcome: "Session verification now safely returns a typed valid/invalid result. Now Minhaj wants every route protected from this exact class of silent async failure."
        },
        playground: {
            starterCode: "function asyncHandler(fn) {\n  return (req, res, next) => {\n    fn(req, res, next).catch(next);\n  };\n}",
            solutionCode: 'import { Request, Response, NextFunction, RequestHandler } from "express";\n\nfunction asyncHandler<Req extends Request = Request>(\n  fn: (req: Req, res: Response, next: NextFunction) => Promise<void>\n): RequestHandler {\n  return (req, res, next) => {\n    fn(req as Req, res, next).catch(next);\n  };\n}',
            objectives: [
                "Make asyncHandler generic over the specific Request type it wraps, defaulting to the base Request",
                "Type fn's parameters and its Promise<void> return value",
                "Type asyncHandler's own return value as Express's RequestHandler"
            ],
            hints: [
                "A generic default like <Req extends Request = Request> lets most callers skip the generic entirely, while still allowing a more specific request shape when needed",
                "RequestHandler is Express's own built-in type for a route handler function"
            ],
            filesToEdit: [
                "middleware/async-handler.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "asyncHandler<Req extends Request",
                "RequestHandler"
            ]
        }
    },
    {
        id: "level-8-6-checkpoint-booking-route",
        title: "The Full Typed Booking Route",
        moduleName: "The Backend Foundry",
        difficulty: "hard",
        xpAwarded: 275,
        story: {
            title: "Tasnim's Pre-Launch Backend Review",
            narrative: [
                {
                    type: "narration",
                    text: "Before the real booking feature ships, Tasnim wants one route reviewed end to end."
                },
                {
                    type: "narration",
                    text: "She wants to see a typed request body, a MongoDB lookup converted to a real ObjectId, a check that req.user actually exists, and a consistent success-or-error response shape."
                },
                {
                    type: "dialogue",
                    text: '"No new syntax this time," Tasnim says. "Just proof that Express routing, MongoDB documents, request augmentation, JWT sessions, and the async wrapper all genuinely fit together in one real feature."'
                },
                {
                    type: "narration",
                    text: "She wants you to get this route airtight. That way, the rest of the booking flow can be built with real confidence instead of crossed fingers."
                }
            ],
            realWorldContext: "A checkpoint level with no new syntax, forcing typed Express routes, MongoDB documents, request augmentation, and async error handling to combine in one realistic production route.",
            taskDescription: "Type the booking route's request body, convert the event id to an ObjectId, guard against a missing event or missing req.user, and return a consistent success/error shape.",
            previousOutcome: "The asyncHandler wrapper now protects every route from silent async failures. Before this feature ships, Tasnim wants the whole backend stack proven out on one real route."
        },
        playground: {
            starterCode: 'app.post("/bookings", asyncHandler(async (req, res) => {\n  const event = await eventsCollection.findOne({ _id: req.body.eventId });\n  const booking = { eventId: req.body.eventId, userId: req.user.id };\n  res.json(booking);\n}));',
            solutionCode: 'interface BookingRequestBody {\n  eventId: string;\n}\n\napp.post(\n  "/bookings",\n  asyncHandler<Request<{}, unknown, BookingRequestBody>>(async (req, res) => {\n    const event = await eventsCollection.findOne({ _id: new ObjectId(req.body.eventId) });\n    if (!event) {\n      res.status(404).json({ success: false, error: "Event not found" });\n      return;\n    }\n    if (!req.user) {\n      res.status(401).json({ success: false, error: "Not authenticated" });\n      return;\n    }\n    const booking = { eventId: req.body.eventId, userId: req.user.id };\n    res.json({ success: true, data: booking });\n  })\n);',
            objectives: [
                "Type the request body as BookingRequestBody",
                "Convert the incoming eventId string into an ObjectId before querying MongoDB",
                "Guard against a missing event and a missing req.user before building the booking",
                "Return a consistent success/error response shape"
            ],
            hints: [
                "This checkpoint combines Levels 8-1 through 8-5, plus Stage 5's success/error response pattern — no new syntax here",
                "req.user is only safely accessible here because of the declaration merging from Level 8-3"
            ],
            filesToEdit: [
                "routes/bookings.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "BookingRequestBody",
                "new ObjectId(req.body.eventId)",
                "success: true",
                "success: false"
            ]
        }
    },
    {
        id: "level-8-7-runtime-validation",
        title: "Runtime Schema Guard: Zod",
        moduleName: "The Backend Foundry",
        difficulty: "hard",
        xpAwarded: 250,
        story: {
            title: "Evans's Untrusted Route Payloads",
            narrative: [
                {
                    type: "dialogue",
                    text: '"Typing req.body as a static interface is convenient," Tasnim says. "But at runtime, anyone can POST anything they want. A static cast like \'as BookingRequestBody\' is just a polite request. The compiler cannot actually check incoming JSON payloads at runtime."'
                },
                {
                    type: "narration",
                    text: "Minhaj wants you to replace unsafe casting with Zod runtime assertions."
                },
                {
                    type: "narration",
                    text: "He wants you to write a Zod schema, validate the payload using safeParse, and use z.infer to derive the TypeScript static type automatically. That way, we get both absolute runtime verification and full type inference without writing the schema twice."
                }
            ],
            realWorldContext: "Using a validation library like Zod with safeParse allows you to validate untrusted dynamic data at the API boundary, generating perfect static TypeScript types directly from runtime schemas.",
            taskDescription: "Define a Zod validation schema using 'z.object', validate the body using '.safeParse()', and derive the static type using 'z.infer'.",
            previousOutcome: "The full booking route is beautifully integrated, but Tasnim points out that static casts on incoming payloads are unsafe. Now we are hardening our boundaries with runtime validation."
        },
        playground: {
            starterCode: 'import { z } from "zod";\n\n// TODO: Create a Zod schema validating a booking request body\n// eventId should be a string, and slots should be a positive number\nconst BookingSchema = z.object({\n  eventId: z.string(),\n  slots: z.number().positive(),\n});\n\n// TODO: Derive the TypeScript static type directly from the BookingSchema\ntype BookingInput = any;\n\nfunction processRequest(rawBody: unknown) {\n  // TODO: Perform runtime validation on rawBody using BookingSchema\n  const result = null;\n  return result;\n}',
            solutionCode: 'import { z } from "zod";\n\nconst BookingSchema = z.object({\n  eventId: z.string(),\n  slots: z.number().positive(),\n});\n\ntype BookingInput = z.infer<typeof BookingSchema>;\n\nfunction processRequest(rawBody: unknown) {\n  const result = BookingSchema.safeParse(rawBody);\n  return result;\n}',
            objectives: [
                "Define BookingSchema as a Zod schema with eventId string and slots positive number",
                "Derive BookingInput static type from BookingSchema using z.infer",
                "Validate rawBody inside processRequest using BookingSchema.safeParse"
            ],
            hints: [
                "Use z.object({ eventId: z.string(), slots: z.number().positive() }) to specify the schema",
                "z.infer<typeof BookingSchema> is how you query the schema for its inferred TypeScript type",
                "BookingSchema.safeParse(rawBody) yields a success-or-failure result object without throwing"
            ],
            filesToEdit: [
                "routes/validation.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "z.object",
                "z.infer",
                "safeParse"
            ]
        }
    },
    {
        id: "level-9-1-branded-types",
        title: "No More Mixed-Up Ids",
        moduleName: "Type Safety Mastery",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Jordan Passes the Wrong Id, and It Compiles Anyway",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan hands Minhaj a genuinely strange bug. Somewhere in the code, a UserId got passed into getEventById. TypeScript never complained because both ids are just plain strings underneath."
                },
                {
                    type: "narration",
                    text: "Structurally, a UserId and an EventId look identical. The compiler sees no difference at all."
                },
                {
                    type: "narration",
                    text: "Tasnim wants a fix that goes further than a comment or a naming convention."
                },
                {
                    type: "narration",
                    text: "She wants you to brand each id type with a marker that only exists at the type level. That way, a UserId can never be passed where an EventId is expected again — no matter how careful or careless anyone is."
                }
            ],
            realWorldContext: "TypeScript is structurally typed, so two different string-based ids are considered identical unless you brand them with a unique marker field that only the type system ever sees.",
            taskDescription: "Declare EventId and UserId as branded types, and update getEventById and getUserById to require their specific branded id.",
            previousOutcome: "The full booking route passed Tasnim's review. Now Jordan has found a bug the type system should have caught, and Tasnim wants it closed for good."
        },
        playground: {
            starterCode: 'function getEventById(id: string) {\n  // ...\n}\n\nfunction getUserById(id: string) {\n  // ...\n}\n\nconst someUserId = "user_123";\ngetEventById(someUserId);',
            solutionCode: 'type EventId = string & { readonly __brand: "EventId" };\ntype UserId = string & { readonly __brand: "UserId" };\n\nfunction toEventId(id: string): EventId {\n  return id as EventId;\n}\n\nfunction toUserId(id: string): UserId {\n  return id as UserId;\n}\n\nfunction getEventById(id: EventId) {\n  // ...\n}\n\nfunction getUserById(id: UserId) {\n  // ...\n}\n\nconst someUserId = toUserId("user_123");\ngetEventById(someUserId);',
            objectives: [
                "Declare EventId and UserId as branded types using an intersection with a unique __brand field",
                "Write toEventId and toUserId helper functions to safely create each branded type from a plain string",
                "Update getEventById and getUserById to require their own specific branded id type"
            ],
            hints: [
                "A branded type is just `string & { readonly __brand: 'SomeName' }` — the brand field never actually exists at runtime, only in the type system",
                "Since a plain string isn't automatically a branded type, a small helper function is needed to convert into one on purpose"
            ],
            filesToEdit: [
                "branded-ids.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                '__brand: "EventId"',
                '__brand: "UserId"'
            ]
        }
    },
    {
        id: "level-9-2-deep-readonly",
        title: "Locking the Whole Tree",
        moduleName: "Type Safety Mastery",
        difficulty: "hard",
        xpAwarded: 200,
        story: {
            title: "Salman's Published Page Shows a Stale Address",
            narrative: [
                {
                    type: "narration",
                    text: "Salman's published event page is showing the wrong venue address. This is happening even though the event object was typed as Readonly<Event> before being handed to the rendering code."
                },
                {
                    type: "narration",
                    text: "Tasnim finds the actual hole."
                },
                {
                    type: "dialogue",
                    text: '"Readonly<T> only locks the top level of an object," she explains. "Because of that, nothing stopped someone from reaching into event.venue.address and mutating it directly."'
                },
                {
                    type: "narration",
                    text: "She wants a real DeepReadonly<T> this time. It should recurse into every nested object, not just the fields sitting directly on top."
                },
                {
                    type: "dialogue",
                    text: '"Get this right," she says, "and no amount of nested mutation can ever touch a published event again."'
                }
            ],
            realWorldContext: "The built-in Readonly<T> only locks an object's top-level fields; a recursive DeepReadonly<T> mapped type is required to actually protect nested objects like venue from mutation.",
            taskDescription: "Declare a recursive DeepReadonly<T> mapped type and use it to type publishedEvent.",
            previousOutcome: "Branded ids now prevent UserId and EventId from ever being mixed up. Now Salman's stale venue bug reveals that Readonly<T> alone was never enough."
        },
        playground: {
            starterCode: 'const publishedEvent: Readonly<Event> = getEvent();\npublishedEvent.venue.address = "Somewhere else";',
            solutionCode: 'type DeepReadonly<T> = {\n  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];\n};\n\nconst publishedEvent: DeepReadonly<Event> = getEvent();\npublishedEvent.venue.address = "Somewhere else";',
            objectives: [
                "Declare a recursive DeepReadonly<T> mapped type",
                "Recurse into nested object properties using a conditional check for T[P] extends object",
                "Type publishedEvent as DeepReadonly<Event> instead of the built-in Readonly<Event>"
            ],
            hints: [
                "A mapped type is allowed to reference itself recursively inside its own value position",
                "T[P] extends object ? DeepReadonly<T[P]> : T[P] only recurses when the property is itself an object, and stops safely at primitives"
            ],
            filesToEdit: [
                "deep-readonly.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                "DeepReadonly<T>",
                "extends object ? DeepReadonly<T[P]>"
            ]
        }
    },
    {
        id: "level-9-3-algebraic-state-machines",
        title: "No Illegal Transitions",
        moduleName: "Type Safety Mastery",
        difficulty: "hard",
        xpAwarded: 250,
        story: {
            title: "Jordan Confirms an Already-Cancelled Booking",
            narrative: [
                {
                    type: "narration",
                    text: "Jordan's last bug of the review cycle is the strangest yet. An already-cancelled booking got confirmed again, payment id and all!"
                },
                {
                    type: "narration",
                    text: "This happened because Booking modeled status as a loose string sitting next to a pile of always-optional fields. Those fields made no promises about which fields belonged to which state."
                },
                {
                    type: "narration",
                    text: "Minhaj wants Booking modeled as a true state machine."
                },
                {
                    type: "narration",
                    text: "He wants one union variant per real status, each carrying only the fields that status should ever legitimately have. Finally, confirmBooking should be constrained so it can only ever be called on a booking that is actually still pending."
                }
            ],
            realWorldContext: "Modeling each state as its own discriminated union variant, then constraining a transition function to only accept one specific variant, makes illegal state transitions fail to compile instead of silently corrupting data.",
            taskDescription: "Model Booking as a discriminated union with one variant per status, and constrain confirmBooking to only accept a pending booking.",
            previousOutcome: "DeepReadonly now protects the entire published event tree from mutation. Now Jordan's final bug means the booking flow itself needs to become a real, illegal-transition-proof state machine."
        },
        playground: {
            starterCode: 'interface Booking {\n  status: "pending" | "confirmed" | "cancelled";\n  paymentId?: string;\n  cancelledReason?: string;\n}\n\nfunction confirmBooking(booking: Booking): Booking {\n  booking.status = "confirmed";\n  return booking;\n}',
            solutionCode: 'type Booking =\n  | { status: "pending" }\n  | { status: "confirmed"; paymentId: string }\n  | { status: "cancelled"; cancelledReason: string };\n\nfunction confirmBooking(booking: Extract<Booking, { status: "pending" }>, paymentId: string): Booking {\n  return { status: "confirmed", paymentId };\n}',
            objectives: [
                "Model Booking as a discriminated union with one variant per real status",
                "Give each variant only the fields that status should actually carry",
                "Constrain confirmBooking to only accept a booking whose status is currently 'pending'"
            ],
            hints: [
                "This is the same discriminated union pattern from Stage 3, now applied to a state machine instead of an event category",
                "Extract<Booking, { status: 'pending' }> pulls out just the one union member matching that status, so confirmBooking literally cannot be called on an already-confirmed or cancelled booking"
            ],
            filesToEdit: [
                "booking-state.ts"
            ]
        },
        validation: {
            requiredKeywords: [
                'status: "pending"',
                'status: "confirmed"; paymentId: string',
                'status: "cancelled"; cancelledReason: string',
                "Extract<Booking"
            ]
        }
    }
];
const REFERENCE_LIBRARY = [
    {
        id: "ref-primitives",
        term: "Primitives (string, number, boolean)",
        category: "Basics",
        shortExplanation: "The base building blocks of TypeScript: string (text), number (floating point values), and boolean (true/false).",
        syntax: "let ticketPrice: number = 50;\nlet attendeeName: string = 'Minhaj';\nlet isFree: boolean = false;",
        commonPitfalls: [
            "Mixing string representations with actual math numbers (e.g. adding '50' + '50' returns '5050').",
            "Confusing lowercase primitive types (string, number, boolean) with their uppercase Object wrapper types (String, Number, Boolean) which is almost always incorrect."
        ],
        relatedTerms: [
            "ref-inference"
        ],
        seeAlsoLevels: [
            "level-1-1-primitives"
        ]
    },
    {
        id: "ref-inference",
        term: "Type Inference",
        category: "Basics",
        shortExplanation: "TypeScript automatically figures out the type of a variable based on its initial value, so you do not have to write redundant annotations.",
        syntax: "let ticketPrice = 50; // Inferred as 'number'\nlet serviceFee = 5; // Inferred as 'number'",
        commonPitfalls: [
            "Annotating extremely simple, obvious variables (e.g. writing let count: number = 5; instead of just let count = 5;), which adds visual clutter.",
            "Thinking inference protects variables from changing types (it does, but without explicit types they are determined by assignment)."
        ],
        relatedTerms: [
            "ref-primitives"
        ],
        seeAlsoLevels: [
            "level-1-2-inference"
        ]
    },
    {
        id: "ref-arrays",
        term: "Typed Arrays",
        category: "Basics",
        shortExplanation: "Arrays containing elements of a single uniform type, preventing malformed lists from breaking runtime iterations.",
        syntax: "let attendeeRoster: string[] = [];\nlet listPrices: number[] = [10, 20, 30];",
        commonPitfalls: [
            "Accidentally inserting elements of different types (e.g., numbers into a string array), which might crash check-in loops.",
            "Declaring let elements = []; without any types, which results in elements being typed as any[] (unsafe!)."
        ],
        relatedTerms: [
            "ref-primitives"
        ],
        seeAlsoLevels: [
            "level-1-3-arrays"
        ]
    },
    {
        id: "ref-interfaces",
        term: "Interfaces",
        category: "Structural Types",
        shortExplanation: "Interfaces define named object shapes, creating reusable blueprints that guarantee objects contain required fields.",
        syntax: "interface Event {\n  title: string;\n  date: string;\n  capacity: number;\n}",
        commonPitfalls: [
            "Duplicating inline object shapes in multiple files instead of declaring a single named interface scroll.",
            "Forgetting to supply all required interface fields in initializers."
        ],
        relatedTerms: [
            "ref-type-aliases"
        ],
        seeAlsoLevels: [
            "level-2-1-interfaces"
        ]
    },
    {
        id: "ref-type-aliases",
        term: "Type Aliases",
        category: "Structural Types",
        shortExplanation: "Type aliases create a new, custom name for any type, including primitives, object shapes, and unions.",
        syntax: "type EventStatus = string;\ntype Coordinate = { x: number; y: number };",
        commonPitfalls: [
            "Using interfaces when type aliases are needed (e.g., naming unions or primitive wrappers which interfaces cannot do).",
            "Overusing aliases for basic types, which can make debugging hover tooltips harder to read."
        ],
        relatedTerms: [
            "ref-interfaces"
        ],
        seeAlsoLevels: [
            "level-2-2-type-aliases"
        ]
    },
    {
        id: "ref-unions",
        term: "Union Types",
        category: "Advanced Types",
        shortExplanation: "Unions allow a value to be one of several distinct types, separated by the pipe (|) operator.",
        syntax: "type KingdomEvent = ConcertEvent | WorkshopEvent | MeetupEvent;",
        commonPitfalls: [
            "Accessing a field unique to only one of the union members before narrowing the type, causing compilation errors.",
            "Creating extremely broad unions that make reasoning about code branches difficult."
        ],
        relatedTerms: [
            "ref-narrowing"
        ],
        seeAlsoLevels: [
            "level-3-1-unions"
        ]
    },
    {
        id: "ref-narrowing",
        term: "Type Narrowing",
        category: "Advanced Types",
        shortExplanation: "Performing runtime checks (using typeof, properties, or if blocks) so TypeScript can safely reveal variant-specific fields.",
        syntax: "if (event.kind === 'workshop') {\n  console.log(event.instructor);\n}",
        commonPitfalls: [
            "Assuming TypeScript knows which branch you're in without writing explicit runtime check code.",
            "Writing logic that bypasses typeguards entirely using type assertions."
        ],
        relatedTerms: [
            "ref-unions"
        ],
        seeAlsoLevels: [
            "level-3-3-narrowing"
        ]
    },
    {
        id: "ref-generics",
        term: "Generics",
        category: "Advanced Types",
        shortExplanation: "Generics act as templates, letting functions or components accept type parameters so they can process multiple types with high safety.",
        syntax: "function findById<T>(items: T[], id: string): T | undefined {\n  return items.find(item => item.id === id);\n}",
        commonPitfalls: [
            "Creating unconstrained generics (e.g., accessing item.id inside findById<T> without constraining T extends { id: string }), causing compile crashes.",
            "Using generics for simple single-type functions where static types are cleaner."
        ],
        relatedTerms: [
            "ref-utility-types"
        ],
        seeAlsoLevels: [
            "level-4-1-generics"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/curriculum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Home({ xp, unlockedLevelIds, onTabChange, onSelectLevel, wizardTitle }) {
    _s();
    const [completedLevelIds, setCompletedLevelIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedStageId, setExpandedStageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("stage-0-onboarding");
    const [showSubModal, setShowSubModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load completed levels
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedCompleted = localStorage.getItem("completed_levels");
            if (savedCompleted) {
                setCompletedLevelIds(JSON.parse(savedCompleted));
            }
        }
    }["Home.useEffect"], []);
    // Dynamically expand the active stage containing the current level on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const lastClicked = sessionStorage.getItem("last_clicked_level_id");
            let targetLevelId = lastClicked;
            if (!targetLevelId && unlockedLevelIds.length > 0) {
                // Find the first unlocked level that is not completed yet (active level)
                const activeLevel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"].find({
                    "Home.useEffect.activeLevel": (lvl)=>unlockedLevelIds.includes(lvl.id) && !completedLevelIds.includes(lvl.id)
                }["Home.useEffect.activeLevel"]);
                // Fallback to the highest unlocked level if all unlocked levels are completed
                targetLevelId = activeLevel ? activeLevel.id : unlockedLevelIds[unlockedLevelIds.length - 1] || "level-0-1-bootstrap";
            }
            if (targetLevelId) {
                // Find the stage that contains this target level
                const targetStage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGES"].find({
                    "Home.useEffect.targetStage": (stage)=>stage.levelIds.includes(targetLevelId)
                }["Home.useEffect.targetStage"]);
                if (targetStage) {
                    setExpandedStageId(targetStage.id);
                }
            }
        }
    }["Home.useEffect"], [
        unlockedLevelIds,
        completedLevelIds
    ]);
    // Scroll to the last clicked level immediately if returning to Home
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const lastClicked = sessionStorage.getItem("last_clicked_level_id");
            if (lastClicked && expandedStageId) {
                const scrollTarget = {
                    "Home.useEffect.scrollTarget": ()=>{
                        const element = document.getElementById(`level-card-${lastClicked}`);
                        if (element) {
                            element.scrollIntoView({
                                behavior: "auto",
                                block: "center"
                            });
                        }
                    }
                }["Home.useEffect.scrollTarget"];
                // Execute immediately and on requestAnimationFrame to prevent scroll jump from top
                scrollTarget();
                const raf = requestAnimationFrame(scrollTarget);
                return ({
                    "Home.useEffect": ()=>cancelAnimationFrame(raf)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        expandedStageId
    ]);
    // Determine user level from XP
    const calculatedLevel = Math.max(1, Math.floor(xp / 100) + 1);
    // Status title based on XP
    const getStatusTitle = (currentXp)=>{
        if (currentXp < 150) return "Beginner 🌱";
        if (currentXp < 350) return "Apprentice Weaver 🕸️";
        if (currentXp < 650) return "Blueprint Architect 📐";
        if (currentXp < 1000) return "Shapeshifter Mage 🔮";
        if (currentXp < 1400) return "Generic Alchemist 🧪";
        return "Grandmaster Alchemist 👑";
    };
    const handleLevelClick = (lvlId)=>{
        sessionStorage.setItem("last_clicked_level_id", lvlId);
        onSelectLevel(lvlId);
    };
    const handleStartLearning = ()=>{
        const lastVisited = localStorage.getItem("last_active_level_id");
        let targetLevelId = lastVisited;
        if (!targetLevelId || !unlockedLevelIds.includes(targetLevelId)) {
            const incompleteUnlocked = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"].find((l)=>unlockedLevelIds.includes(l.id) && !completedLevelIds.includes(l.id));
            if (incompleteUnlocked) {
                targetLevelId = incompleteUnlocked.id;
            } else {
                targetLevelId = unlockedLevelIds[unlockedLevelIds.length - 1] || "level-0-1-bootstrap";
            }
        }
        if (targetLevelId) {
            sessionStorage.setItem("last_clicked_level_id", targetLevelId);
            onSelectLevel(targetLevelId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 bg-surface flex flex-col min-h-screen text-on-surface pb-12 pt-8 px-4",
        id: "home-view",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-center mb-16 relative max-w-[1280px] mx-auto px-6 md:px-12",
                id: "hero-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 inline-flex p-4 rounded-full bg-surface-container-high border border-outline-variant shadow-lg active-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-icons-out text-primary text-4xl",
                            style: {
                                fontVariationSettings: "'FILL' 1"
                            },
                            children: "psychology"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-sans text-4xl md:text-6xl font-extrabold mb-6 tracking-tight",
                        children: [
                            "Master TypeScript through",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "vibrant-gradient",
                                children: "Play"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl mx-auto text-on-surface-variant text-base md:text-lg mb-10 leading-relaxed",
                        children: "Learn TypeScript types and concepts through an interactive game. Progress through levels, solve challenges, and become a TypeScript expert."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStartLearning,
                            className: "flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-secondary to-tertiary text-neutral-950 px-8 py-4 rounded-xl font-extrabold shadow-lg transition-all active:scale-95 cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(164,201,255,0.25)] duration-150",
                            children: [
                                "Start Learning",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-icons-out",
                                    children: "arrow_forward"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex justify-center gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSubModal({
                                        title: "Difficulty Calibration",
                                        desc: "The levels automatically scale from essential onboarding steps (Stage 0) up to professional Next.js full-stack type definitions (Stage 5)."
                                    }),
                                className: "px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-icons-out text-sm",
                                        children: "settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Difficulty"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSubModal({
                                        title: "Kingdom Academy Shop",
                                        desc: "Accumulate XP by compiling safe solution files! You can redeem points in upcoming releases for custom avatar designs and spellbook colors."
                                    }),
                                className: "px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-sm text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-icons-out text-sm",
                                        children: "shopping_cart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Shop"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSubModal({
                                        title: "Mini Games Arena",
                                        desc: "Test your quick reflexes in typing-errors and speed-declaring trials inside our advanced Playground!"
                                    }),
                                className: "px-4 py-2 glass-card rounded-lg flex items-center gap-2 text-sm text-on-surface-variant hover:text-secondary transition-colors cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-icons-out text-sm",
                                        children: "sports_esports"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Mini Games"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-[1100px] w-full mx-auto px-6",
                id: "stats-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary",
                                children: "Points"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl md:text-4xl font-extrabold text-on-surface font-sans",
                                children: [
                                    xp,
                                    " XP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary",
                                children: "Completed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl md:text-4xl font-extrabold text-on-surface font-sans",
                                children: [
                                    completedLevelIds.length,
                                    " / ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"].length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary",
                                children: "Wizard Level"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl md:text-4xl font-extrabold text-on-surface font-sans",
                                children: [
                                    "Lvl ",
                                    calculatedLevel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 group-hover:text-primary",
                                children: "Rank Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base md:text-lg font-bold text-primary truncate px-1 mt-1 font-sans",
                                children: getStatusTitle(xp)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative max-w-[1000px] w-full mx-auto px-6 mb-20",
                id: "timeline-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-4xl font-sans font-extrabold text-center mb-16 flex items-center justify-center gap-3",
                        children: "Your Beginner Learning Path 🌱"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 timeline-line opacity-20 hidden md:block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-12",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGES"].map((stage, sIdx)=>{
                                    const stageLevels = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$curriculum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"].filter((lvl)=>stage.levelIds.includes(lvl.id));
                                    const isStageUnlocked = sIdx === 0 || stageLevels.some((l)=>unlockedLevelIds.includes(l.id));
                                    const completedInStage = stageLevels.filter((l)=>completedLevelIds.includes(l.id)).length;
                                    const totalInStage = stageLevels.length;
                                    const isFullyCompleted = completedInStage === totalInStage;
                                    const isExpanded = expandedStageId === stage.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 w-full",
                                        id: `stage-node-${stage.id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full border-2 bg-surface-container flex items-center justify-center shadow-lg hidden md:flex transition-all duration-300 ${isFullyCompleted ? "border-emerald-500 bg-emerald-950/40" : isStageUnlocked ? "border-primary active-glow bg-primary/10" : "border-outline-variant"}`,
                                                children: isFullyCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-icons-out text-sm text-emerald-400",
                                                    children: "check"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 23
                                                }, this) : isStageUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-icons-out text-sm text-primary",
                                                    children: "play_arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-icons-out text-xs text-outline",
                                                    children: "lock"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-full md:w-[85%] ${sIdx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} transition-all`,
                                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-primary glow-primary transition-all duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row justify-between items-start gap-4 mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-mono font-bold text-primary uppercase tracking-wider mb-1",
                                                                            children: [
                                                                                "Module 0",
                                                                                sIdx,
                                                                                " • Stage Chapter"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 333,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-xl md:text-2xl font-sans font-bold text-on-surface",
                                                                            children: stage.title.replace("Stage " + sIdx + " — ", "")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 336,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-on-surface-variant text-sm mt-2 leading-relaxed",
                                                                            children: stage.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "shrink-0 font-mono text-xs text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "w-3.5 h-3.5 fill-current"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        completedInStage,
                                                                        "/",
                                                                        totalInStage,
                                                                        " Completed"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-surface-container h-1.5 rounded-full mb-8 overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-primary h-full transition-all duration-500",
                                                                style: {
                                                                    width: `${completedInStage / totalInStage * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                                                            children: stageLevels.map((lvl, index)=>{
                                                                const isLvlUnlocked = unlockedLevelIds.includes(lvl.id);
                                                                const isLvlCompleted = completedLevelIds.includes(lvl.id);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    id: `level-card-${lvl.id}`,
                                                                    disabled: !isLvlUnlocked,
                                                                    onClick: ()=>handleLevelClick(lvl.id),
                                                                    className: `flex flex-col text-left p-4 rounded-xl border transition-all duration-200 ${isLvlCompleted ? "bg-emerald-950/15 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 cursor-pointer" : isLvlUnlocked ? "bg-surface-container-high border-primary/30 hover:border-primary text-on-surface hover:scale-[1.02] cursor-pointer" : "bg-surface-container-low border-outline-variant/40 text-on-surface-variant opacity-50 cursor-not-allowed"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-center w-full mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[10px] font-bold uppercase tracking-wider text-outline",
                                                                                    children: [
                                                                                        "Trial 0",
                                                                                        index + 1
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                                    lineNumber: 384,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                isLvlCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "material-icons-out text-sm text-emerald-400",
                                                                                    children: "check_circle"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                                    lineNumber: 388,
                                                                                    columnNumber: 37
                                                                                }, this) : isLvlUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "material-icons-out text-sm text-primary",
                                                                                    children: "play_circle"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                                    lineNumber: 392,
                                                                                    columnNumber: 37
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "material-icons-out text-xs text-outline",
                                                                                    children: "lock"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                                    lineNumber: 396,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-xs font-bold font-sans line-clamp-1",
                                                                            children: lvl.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-outline mt-1 font-mono",
                                                                            children: [
                                                                                "🪙 ",
                                                                                lvl.xpAwarded,
                                                                                " XP"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, lvl.id, true, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 370,
                                                                    columnNumber: 31
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-6 flex justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    // Find first level in this stage that is unlocked and not completed
                                                                    const firstActive = stageLevels.find((lvl)=>unlockedLevelIds.includes(lvl.id) && !completedLevelIds.includes(lvl.id));
                                                                    // Fallback to highest unlocked level in this stage
                                                                    const fallback = stageLevels.filter((lvl)=>unlockedLevelIds.includes(lvl.id)).pop();
                                                                    // Hard fallback to first level of stage
                                                                    const targetLvl = firstActive || fallback || stageLevels[0];
                                                                    if (targetLvl) {
                                                                        sessionStorage.setItem("last_clicked_level_id", targetLvl.id);
                                                                        onSelectLevel(targetLvl.id);
                                                                    }
                                                                    onTabChange("quest");
                                                                },
                                                                className: "flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer",
                                                                children: [
                                                                    "Enter Active Code Editor",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-icons-out text-sm",
                                                                        children: "arrow_forward_ios"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 23
                                                }, this) : /* Collapsed/compact render */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>isStageUnlocked && setExpandedStageId(stage.id),
                                                    className: `p-6 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${isStageUnlocked ? "bg-surface-container hover:bg-surface-container-high border-outline-variant hover:border-primary" : "bg-surface-container-low border-outline-variant/30 opacity-60 cursor-not-allowed"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-10 h-10 rounded-lg flex items-center justify-center ${isStageUnlocked ? "bg-primary/10 text-primary" : "bg-outline/10 text-outline"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-icons-out",
                                                                        children: sIdx === 0 ? "rocket_launch" : sIdx === 1 ? "commit" : sIdx === 2 ? "schema" : "extension"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-base font-bold text-on-surface font-sans",
                                                                            children: stage.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 481,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-on-surface-variant mt-1",
                                                                            children: isStageUnlocked ? `${completedInStage} of ${totalInStage} levels masterfully solved.` : "Awaiting prerequisites in previous chapters."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: !isStageUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-icons-out text-sm text-outline",
                                                                children: "lock"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-icons-out text-sm text-on-surface-variant group-hover:text-primary",
                                                                children: "unfold_more"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, stage.id, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            showSubModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md",
                id: "info-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-surface-container border border-outline-variant rounded-xl max-w-sm w-full flex flex-col gap-4 relative shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowSubModal(null),
                            className: "absolute top-4 right-4 text-on-surface-variant hover:text-on-surface cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-icons-out",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 524,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-icons-out text-primary text-2xl",
                                    children: "info"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 527,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-on-surface",
                                    children: showSubModal.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 530,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-on-surface-variant leading-relaxed",
                            children: showSubModal.desc
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowSubModal(null),
                            className: "w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 rounded font-bold text-xs uppercase tracking-widest cursor-pointer transition-all",
                            children: "Dismiss"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 519,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 515,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(Home, "1rFvaqm3M7m0LOxETZ3KD07ztLs=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/firebase-applet-config.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "projectId": "gen-lang-client-0181948990",
    "appId": "1:833944785184:web:4eff98ed7d4c1605d78745",
    "apiKey": "AIzaSyBHpmdBvVqu0V-mTpDjcoRuYWsbTFaUx_0",
    "authDomain": "gen-lang-client-0181948990.firebaseapp.com",
    "firestoreDatabaseId": "ai-studio-typescriptadvent-12582e8b-437e-4af4-85b2-527a344561d2",
    "storageBucket": "gen-lang-client-0181948990.firebasestorage.app",
    "messagingSenderId": "833944785184",
    "measurementId": "",
    "oAuthClientId": "833944785184-n3uh8lfivsackbranjgeurtjpgp9r15t.apps.googleusercontent.com"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "getWizardProgress",
    ()=>getWizardProgress,
    "saveLevelCodeCloud",
    ()=>saveLevelCodeCloud,
    "saveWizardProgress",
    ()=>saveWizardProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-d90d2ee5.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$456515ba$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b0__as__initializeFirestore$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-456515ba.esm.js [app-client] (ecmascript) <export b0 as initializeFirestore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$456515ba$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a9__as__doc$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-456515ba.esm.js [app-client] (ecmascript) <export a9 as doc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2d$applet$2d$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/firebase-applet-config.json.[json].cjs [app-client] (ecmascript)");
;
;
;
;
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2d$applet$2d$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$456515ba$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b0__as__initializeFirestore$3e$__["initializeFirestore"])(app, {}, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2d$applet$2d$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].firestoreDatabaseId || "(default)");
async function saveWizardProgress(userId, progress) {
    const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$456515ba$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a9__as__doc$3e$__["doc"])(db, "wizards", userId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])(userDocRef, progress, {
        merge: true
    });
}
async function getWizardProgress(userId) {
    const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$456515ba$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a9__as__doc$3e$__["doc"])(db, "wizards", userId);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(userDocRef);
    if (snap.exists()) {
        return snap.data();
    }
    return null;
}
async function saveLevelCodeCloud(userId, levelId, code) {
    const userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$456515ba$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a9__as__doc$3e$__["doc"])(db, "wizards", userId);
    const fieldPath = `levelCodes.${levelId}`;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])(userDocRef, {
        [fieldPath]: code
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WizardSanctum.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WizardSanctum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-d90d2ee5.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-d90d2ee5.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-d90d2ee5.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index-d90d2ee5.js [app-client] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const WIZARD_TITLES = [
    "Primitive Initiate",
    "Type Apprentice",
    "Blueprint Scribe",
    "Union Conduiteer",
    "Compiler Alchemist",
    "Generics Sorcerer",
    "Strict Mode Archmage",
    "Infinite Type Transmuter"
];
function WizardSanctum({ isOpen, onClose, xp, unlockedBadges, unlockedLevels, onAuthSuccess, onSignOut }) {
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("signin");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wizardTitle, setWizardTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(WIZARD_TITLES[0]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Monitor Auth State
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WizardSanctum.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "WizardSanctum.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                }
            }["WizardSanctum.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["WizardSanctum.useEffect"], []);
    const handleRegister = async (e)=>{
        e.preventDefault();
        if (!email || !password || !displayName) {
            setError("Please fill all runes in the registration seal.");
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            // 1. Create User
            const credential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
            // 2. Update Auth Profile
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(credential.user, {
                displayName: displayName
            });
            // 3. Save initial merged profile in Firestore
            const initialProgress = {
                xp,
                unlockedBadges,
                unlockedLevels,
                levelCodes: getLocalLevelCodes(),
                wizardTitle
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWizardProgress"])(credential.user.uid, initialProgress);
            setSuccess(`Your soul has been bound! Welcome, ${displayName} the ${wizardTitle}.`);
            onAuthSuccess(credential.user);
            setTimeout(()=>{
                onClose();
                setSuccess(null);
            }, 2000);
        } catch (err) {
            console.error(err);
            setError(translateAuthError(err.code || err.message));
        } finally{
            setLoading(false);
        }
    };
    const handleSignIn = async (e)=>{
        e.preventDefault();
        if (!email || !password) {
            setError("Email and Password fields cannot be empty.");
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const credential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
            setSuccess(`Welcome back, ${credential.user.displayName || "Wizard"}!`);
            onAuthSuccess(credential.user);
            setTimeout(()=>{
                onClose();
                setSuccess(null);
            }, 1500);
        } catch (err) {
            console.error(err);
            setError(translateAuthError(err.code || err.message));
        } finally{
            setLoading(false);
        }
    };
    const handleSignOut = async ()=>{
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$d90d2ee5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            onSignOut();
            setSuccess("Your soul has been unlinked safely from the cloud.");
            setTimeout(()=>{
                setSuccess(null);
            }, 2000);
        } catch (err) {
            setError("Could not unlink: " + err.message);
        } finally{
            setLoading(false);
        }
    };
    const getLocalLevelCodes = ()=>{
        const levelCodes = {};
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (key && key.startsWith("code_")) {
                const levelId = key.replace("code_", "");
                const codeVal = localStorage.getItem(key);
                if (codeVal) {
                    levelCodes[levelId] = codeVal;
                }
            }
        }
        return levelCodes;
    };
    const translateAuthError = (code)=>{
        switch(code){
            case "auth/email-already-in-use":
                return "This email is already bound to another wizard soul.";
            case "auth/invalid-email":
                return "The email layout is invalid. Check your characters.";
            case "auth/weak-password":
                return "Your password ward is too weak. Make it at least 6 characters.";
            case "auth/user-not-found":
            case "auth/wrong-password":
            case "auth/invalid-credential":
                return "The login scrolls do not match our archive records.";
            default:
                return code;
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md",
        id: "sanctum-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95,
                y: 15
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.95,
                y: 15
            },
            className: "w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]",
            id: "sanctum-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/WizardSanctum.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/WizardSanctum.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-slate-850 flex items-center justify-between relative z-10 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                        className: "w-5 h-5 animate-spin",
                                        style: {
                                            animationDuration: "12s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WizardSanctum.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-black uppercase text-slate-100 tracking-wider",
                                            children: "Wizard Soul Sanctum"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-0.5 text-sky-400",
                                            children: "Cloud Sync & Soul Binding"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WizardSanctum.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-lg bg-slate-950/50 hover:bg-slate-800 border border-slate-850 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 transition-all cursor-pointer",
                            id: "close-sanctum-btn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WizardSanctum.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/WizardSanctum.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WizardSanctum.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 relative z-10 space-y-6",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -5
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "p-4 bg-rose-950/20 border border-rose-900/40 text-rose-300 text-xs rounded-xl flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-4 h-4 text-rose-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "Leyline Fracture:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        error
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WizardSanctum.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -5
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "p-4 bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 text-xs rounded-xl flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "Incantation Sealed:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        success
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WizardSanctum.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        currentUser ? /* Logged In view */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            id: "sanctum-profile-view",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 bg-slate-950/60 border border-slate-850 rounded-xl flex flex-col items-center text-center gap-4 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 text-2xl font-black font-mono shadow-lg relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full border border-sky-400/10 animate-ping",
                                                    style: {
                                                        animationDuration: "3s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                currentUser.displayName?.substring(0, 2).toUpperCase() || "WZ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-black text-slate-100 font-sans uppercase",
                                                    children: currentUser.displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 block w-max mx-auto mt-1",
                                                    children: WIZARD_TITLES[Math.min(WIZARD_TITLES.length - 1, Math.floor(xp / 200))] || "Compiler Mage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-500 mt-2 font-mono",
                                                    children: currentUser.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-px bg-slate-850"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-mono text-slate-500 block uppercase",
                                                            children: "Spell Power"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sky-400 font-black text-sm",
                                                            children: [
                                                                xp,
                                                                " XP"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900/40 border border-slate-850 p-3 rounded-lg text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-mono text-slate-500 block uppercase",
                                                            children: "Unlocked Seals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-amber-400 font-black text-sm",
                                                            children: [
                                                                unlockedBadges.length,
                                                                " Badges"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "w-4 h-4 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                "Leyline Connection Active"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 leading-relaxed font-sans",
                                            children: "Your wizard soul is bound to the cloud database. Any levels unlocked, XP earned, or sandbox custom spells created will automatically synchronise across all browsers and dimensions instantly."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded",
                                                    children: "Firestore Database Synced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-mono font-bold text-sky-400 bg-sky-500/5 border border-sky-500/20 px-2 py-0.5 rounded",
                                                    children: "Firebase Auth Shield active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSignOut,
                                    disabled: loading,
                                    className: "w-full py-3 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/30 text-rose-300 rounded-lg text-xs uppercase tracking-wider font-black transition-all cursor-pointer flex items-center justify-center gap-2",
                                    id: "signout-btn",
                                    children: [
                                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-3.5 h-3.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 363,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 365,
                                            columnNumber: 19
                                        }, this),
                                        "Unlink Soul (Sign Out)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WizardSanctum.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this) : /* Auth Forms */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            id: "sanctum-auth-forms",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex bg-slate-950 p-1 rounded-lg border border-slate-850",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("signin"),
                                            className: `flex-1 py-2 text-xs uppercase tracking-wider font-black rounded cursor-pointer transition-all ${activeTab === "signin" ? "bg-sky-600 text-slate-950 font-bold shadow" : "text-slate-400 hover:text-slate-200"}`,
                                            id: "tab-auth-signin",
                                            children: "Recall Soul (Sign In)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("register"),
                                            className: `flex-1 py-2 text-xs uppercase tracking-wider font-black rounded cursor-pointer transition-all ${activeTab === "register" ? "bg-sky-600 text-slate-950 font-bold shadow" : "text-slate-400 hover:text-slate-200"}`,
                                            id: "tab-auth-register",
                                            children: "Bind Soul (Register)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                activeTab === "signin" ? /* SIGN IN FORM */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSignIn,
                                    className: "space-y-4",
                                    id: "signin-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-mono font-bold uppercase text-slate-500 pl-1",
                                                    children: "Wizard Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            required: true,
                                                            placeholder: "yourname@kingdom.com",
                                                            value: email,
                                                            onChange: (e)=>setEmail(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 406,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-mono font-bold uppercase text-slate-500 pl-1",
                                                    children: "Password Ward"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            required: true,
                                                            placeholder: "••••••••",
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-slate-950 font-black rounded-lg text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-900/10 active:scale-95",
                                            id: "submit-signin",
                                            children: [
                                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-3.5 h-3.5 animate-spin text-slate-950"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3.5 h-3.5 text-slate-950"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 23
                                                }, this),
                                                "Seals Correct! Recall Progress"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 401,
                                    columnNumber: 17
                                }, this) : /* REGISTER FORM */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleRegister,
                                    className: "space-y-4",
                                    id: "register-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-mono font-bold uppercase text-slate-500 pl-1",
                                                    children: "Wizard Coder Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            required: true,
                                                            placeholder: "e.g. Imran",
                                                            value: displayName,
                                                            onChange: (e)=>setDisplayName(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 461,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-mono font-bold uppercase text-slate-500 pl-1",
                                                            children: "Wizard Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    required: true,
                                                                    placeholder: "yourname@kingdom.com",
                                                                    value: email,
                                                                    onChange: (e)=>setEmail(e.target.value),
                                                                    className: "w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-mono font-bold uppercase text-slate-500 pl-1",
                                                            children: "Select Academy Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: wizardTitle,
                                                            onChange: (e)=>setWizardTitle(e.target.value),
                                                            className: "w-full px-3 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans",
                                                            children: WIZARD_TITLES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: t,
                                                                    className: "bg-slate-900 text-slate-300",
                                                                    children: t
                                                                }, t, false, {
                                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 478,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-mono font-bold uppercase text-slate-500 pl-1",
                                                    children: "Secure Password Seal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            required: true,
                                                            minLength: 6,
                                                            placeholder: "Min 6 characters",
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            className: "w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-850 rounded-lg text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all font-sans"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 bg-slate-950 border border-slate-850 rounded-xl space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] font-mono font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "w-3 h-3 text-amber-500 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                                            lineNumber: 538,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Cloud Merging Seal Active"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 leading-relaxed font-sans",
                                                    children: [
                                                        "Upon linking, your local progress (",
                                                        xp,
                                                        " XP,",
                                                        " ",
                                                        unlockedBadges.length,
                                                        " Badges) will automatically merge with this account cloud document, safe from browser cache cleanses."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 536,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-slate-950 font-black rounded-lg text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-900/10 active:scale-95",
                                            id: "submit-register",
                                            children: [
                                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-3.5 h-3.5 animate-spin text-slate-950"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "w-3.5 h-3.5 text-slate-950"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 23
                                                }, this),
                                                "Bind Soul & Save Progress"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WizardSanctum.tsx",
                                            lineNumber: 549,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WizardSanctum.tsx",
                                    lineNumber: 456,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WizardSanctum.tsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WizardSanctum.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WizardSanctum.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WizardSanctum.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_s(WizardSanctum, "nQV1EIB2mMH2dMz0Fbtb9EKDjEk=");
_c = WizardSanctum;
var _c;
__turbopack_context__.k.register(_c, "WizardSanctum");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/GameContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameProvider",
    ()=>GameProvider,
    "useGame",
    ()=>useGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const GameProvider = ({ children })=>{
    _s();
    const [xp, setXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [unlockedBadges, setUnlockedBadges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unlockedLevelIds, setUnlockedLevelIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "level-0-1-bootstrap"
    ]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wizardTitle, setWizardTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Primitive Initiate");
    const [isSanctumOpen, setIsSanctumOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCelebration, setShowCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameProvider.useEffect": ()=>{
            const savedXp = localStorage.getItem("wizard_xp");
            const savedBadges = localStorage.getItem("wizard_badges");
            const savedLevels = localStorage.getItem("unlocked_levels");
            if (savedXp) setXp(Number(savedXp));
            if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges));
            if (savedLevels) setUnlockedLevelIds(JSON.parse(savedLevels));
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "GameProvider.useEffect.unsubscribe": (currentUser)=>{
                    setUser(currentUser);
                    if (currentUser) {
                        handleUserLogin(currentUser.uid);
                    }
                }
            }["GameProvider.useEffect.unsubscribe"]);
            return unsubscribe;
        }
    }["GameProvider.useEffect"], []);
    const handleUserLogin = async (uid)=>{
        try {
            const cloudProgress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWizardProgress"])(uid);
            if (cloudProgress) {
                const localXp = Number(localStorage.getItem("wizard_xp") || "0");
                const finalXp = Math.max(localXp, cloudProgress.xp);
                setXp(finalXp);
                localStorage.setItem("wizard_xp", String(finalXp));
                const localBadgesStr = localStorage.getItem("wizard_badges");
                const localBadges = localBadgesStr ? JSON.parse(localBadgesStr) : [];
                const mergedBadges = Array.from(new Set([
                    ...localBadges,
                    ...cloudProgress.unlockedBadges
                ]));
                setUnlockedBadges(mergedBadges);
                localStorage.setItem("wizard_badges", JSON.stringify(mergedBadges));
                const localLevelsStr = localStorage.getItem("unlocked_levels");
                const localLevels = localLevelsStr ? JSON.parse(localLevelsStr) : [
                    "level-0-1-bootstrap"
                ];
                const mergedLevels = Array.from(new Set([
                    ...localLevels,
                    ...cloudProgress.unlockedLevels
                ]));
                setUnlockedLevelIds(mergedLevels);
                localStorage.setItem("unlocked_levels", JSON.stringify(mergedLevels));
                if (cloudProgress.wizardTitle) {
                    setWizardTitle(cloudProgress.wizardTitle);
                }
            }
        } catch (err) {
            console.warn("Could not sync profile during login:", err);
        }
    };
    const handleXpAwarded = (points)=>{
        setXp((prev)=>{
            const nextXp = prev + points;
            localStorage.setItem("wizard_xp", String(nextXp));
            return nextXp;
        });
    };
    const handleBadgeUnlocked = (badgeId, badgeName)=>{
        if (!unlockedBadges.includes(badgeId)) {
            const nextBadges = [
                ...unlockedBadges,
                badgeId
            ];
            setUnlockedBadges(nextBadges);
            localStorage.setItem("wizard_badges", JSON.stringify(nextBadges));
            setShowCelebration(badgeName);
        }
    };
    const handleSignOut = ()=>{
        setUser(null);
        setWizardTitle("Primitive Initiate");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: {
            xp,
            unlockedLevelIds,
            setUnlockedLevelIds,
            unlockedBadges,
            user,
            wizardTitle,
            isSanctumOpen,
            setIsSanctumOpen,
            showCelebration,
            setShowCelebration,
            handleXpAwarded,
            handleBadgeUnlocked,
            handleSignOut
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/GameContext.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GameProvider, "rp987gdIpubn8iKiW1lu7vOFIvU=");
_c = GameProvider;
const useGame = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (!context) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context;
};
_s1(useGame, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "GameProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WizardSanctum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WizardSanctum.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GameContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HomePageContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { xp, unlockedLevelIds, unlockedBadges, user, wizardTitle, isSanctumOpen, setIsSanctumOpen, handleSignOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const handleSelectLevel = (levelId)=>{
        sessionStorage.setItem("last_clicked_level_id", levelId);
        router.push(`/level/${levelId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeTab: "home",
                onTabChange: ()=>{},
                xp: xp,
                badgesCount: unlockedBadges.length,
                user: user,
                onOpenSanctum: ()=>setIsSanctumOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    xp: xp,
                    unlockedLevelIds: unlockedLevelIds,
                    onTabChange: ()=>{},
                    onSelectLevel: handleSelectLevel,
                    wizardTitle: wizardTitle
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WizardSanctum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSanctumOpen,
                onClose: ()=>setIsSanctumOpen(false),
                xp: xp,
                unlockedBadges: unlockedBadges,
                unlockedLevels: unlockedLevelIds,
                onAuthSuccess: ()=>{},
                onSignOut: handleSignOut
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePageContent, "jtb9kQV5F/IbKxul+M4lUSy9BX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = HomePageContent;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageContent, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomePageContent");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0zww-yo._.js.map
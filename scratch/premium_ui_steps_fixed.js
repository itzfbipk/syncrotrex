const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v25.mjs', 'utf8');
let indexHtml = fs.readFileSync('index.html', 'utf8');

function replaceComponentChildren(framerName, newChildrenReact, newChildrenHtml, styleHtml) {
    const target = '"data-framer-name": \`' + framerName + '\`,';
    const startIndex = code.indexOf(target);
    if (startIndex === -1) {
        console.log("Could not find component " + framerName + " in React");
        return;
    }

    const startSearchStrs = ['children: [', 'children: _(', 'children: h('];
    let childrenStart = -1;
    let chosenStr = '';
    
    for (const str of startSearchStrs) {
        const idx = code.indexOf(str, startIndex);
        if (idx !== -1 && idx < startIndex + 300) {
            childrenStart = idx;
            chosenStr = str;
            break;
        }
    }

    if (childrenStart === -1) {
        console.log("Could not find children array or single child for " + framerName);
        return;
    }

    let open = 0;
    let endIndex = -1;
    let inString = false;
    let stringChar = '';
    const startScanIndex = childrenStart + chosenStr.indexOf('(') !== -1 ? childrenStart + chosenStr.indexOf('(') : childrenStart + chosenStr.indexOf('[');

    for (let i = startScanIndex; i < code.length; i++) {
        const char = code[i];
        if (inString && code[i-1] === '\\') continue;
        if (!inString && (char === '"' || char === "'" || char === '\`')) {
            inString = true;
            stringChar = char;
            continue;
        }
        if (inString && char === stringChar) {
            inString = false;
            continue;
        }
        if (!inString) {
            if (char === '[' || char === '(') open++;
            if (char === ']' || char === ')') {
                open--;
                if (open === 0) {
                    endIndex = i;
                    break;
                }
            }
        }
    }

    const newCode = code.substring(0, childrenStart) + newChildrenReact + code.substring(endIndex + 1);
    code = newCode;

    // Replace in HTML
    const targetStrHTML = 'data-framer-name="' + framerName + '"';
    const startIndexHTML = indexHtml.indexOf(targetStrHTML);
    if (startIndexHTML !== -1) {
        const divStart = indexHtml.lastIndexOf('<div', startIndexHTML);
        let openHTML = 0;
        let endIndexHTML = -1;
        for(let i = divStart; i < indexHtml.length; i++) {
            if(indexHtml.substring(i, i+4) === '<div') openHTML++;
            else if(indexHtml.substring(i, i+6) === '</div>') {
                openHTML--;
                if(openHTML === 0) {
                    endIndexHTML = i + 5;
                    break;
                }
            }
        }
        
        if (endIndexHTML !== -1) {
            // Keep the outer div, just replace its inner content
            const outerDivOpenTagEnd = indexHtml.indexOf('>', divStart) + 1;
            const outerDivOpenTag = indexHtml.substring(divStart, outerDivOpenTagEnd);
            
            const newHtml = outerDivOpenTag + '\n' + styleHtml + '\n' + newChildrenHtml + '\n</div>';
            indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndexHTML + 1);
        }
    }
}

// PREMIUM TEST & REFINE UI
const testReact = `children: [
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes rotateDash {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
            0% { box-shadow: 0 0 20px rgba(39, 201, 63, 0.2); }
            50% { box-shadow: 0 0 40px rgba(39, 201, 63, 0.4); }
            100% { box-shadow: 0 0 20px rgba(39, 201, 63, 0.2); }
        }
        @keyframes floatUp1 {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
            100% { transform: translateY(0) scale(1); }
        }
        @keyframes floatUp2 {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(5px) scale(1.02); }
            100% { transform: translateY(0) scale(1); }
        }
        .premium-test * { box-sizing: border-box; }
    \`}}),
    h("div", {
        className: "premium-test",
        style: { width: "100%", height: "100%", position: "relative", backgroundColor: "#020202", backgroundImage: "radial-gradient(circle at 50% 50%, rgba(39,201,63,0.05) 0%, transparent 60%)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
        children: [
            // Center Circle
            h("div", {
                style: { position: "relative", width: "140px", height: "140px", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)", animation: "pulseGlow 4s infinite ease-in-out", zIndex: 1, backdropFilter: "blur(10px)" },
                children: [
                    h("svg", {
                        style: { position: "absolute", top: -1, left: -1, width: "142px", height: "142px", animation: "rotateDash 10s linear infinite" },
                        children: h("circle", { cx: "71", cy: "71", r: "70", fill: "none", stroke: "url(#gradTest)", strokeWidth: "2", strokeDasharray: "150 150", strokeLinecap: "round" })
                    }),
                    h("svg", {
                        style: { position: "absolute", width: "0", height: "0" },
                        children: h("defs", { children: h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                            h("stop", { offset: "0%", stopColor: "#27c93f" }),
                            h("stop", { offset: "100%", stopColor: "rgba(39,201,63,0)" })
                        ]}) })
                    }),
                    h("div", { style: { fontSize: "32px", fontWeight: "700", color: "white", letterSpacing: "-1px" }, children: "100" }),
                    h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "2px" }, children: "Health Score" })
                ]
            }),
            
            // Floating Pill 1 (Top Right)
            h("div", {
                style: { position: "absolute", top: "25%", right: "10%", padding: "8px 14px", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "30px", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: "8px", zIndex: 2, animation: "floatUp1 6s ease-in-out infinite" },
                children: [
                    h("div", { style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#27c93f", boxShadow: "0 0 8px #27c93f" } }),
                    h("div", { style: { fontSize: "11px", fontWeight: "500", color: "white" }, children: "0 Errors Found" })
                ]
            }),
            
            // Floating Pill 2 (Bottom Left)
            h("div", {
                style: { position: "absolute", bottom: "25%", left: "10%", padding: "8px 14px", backgroundColor: "rgba(189, 78, 255, 0.05)", border: "1px solid rgba(189, 78, 255, 0.2)", borderRadius: "30px", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: "8px", zIndex: 2, animation: "floatUp2 7s ease-in-out infinite" },
                children: [
                    h("div", { style: { fontSize: "12px" }, children: "⚡" }),
                    h("div", { style: { fontSize: "11px", fontWeight: "500", color: "#e3a8ff" }, children: "120ms Latency" })
                ]
            })
        ]
    })
]`;

const testHtml = `
<div class="premium-test" style="width: 100%; height: 100%; position: relative; background-color: #020202; background-image: radial-gradient(circle at 50% 50%, rgba(39,201,63,0.05) 0%, transparent 60%); display: flex; align-items: center; justify-content: center; overflow: hidden;">
    <div style="position: relative; width: 140px; height: 140px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.05); animation: pulseGlow 4s infinite ease-in-out; z-index: 1; backdrop-filter: blur(10px);">
        <svg style="position: absolute; top: -1px; left: -1px; width: 142px; height: 142px; animation: rotateDash 10s linear infinite;">
            <circle cx="71" cy="71" r="70" fill="none" stroke="url(#gradTest)" stroke-width="2" stroke-dasharray="150 150" stroke-linecap="round"></circle>
        </svg>
        <svg style="position: absolute; width: 0; height: 0;">
            <defs>
                <linearGradient id="gradTest" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#27c93f"></stop>
                    <stop offset="100%" stop-color="rgba(39,201,63,0)"></stop>
                </linearGradient>
            </defs>
        </svg>
        <div style="font-size: 32px; font-weight: 700; color: white; letter-spacing: -1px;">100</div>
        <div style="font-size: 10px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; margin-top: 2px;">Health Score</div>
    </div>
    
    <div style="position: absolute; top: 25%; right: 10%; padding: 8px 14px; background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 30px; backdrop-filter: blur(12px); display: flex; align-items: center; gap: 8px; z-index: 2; animation: floatUp1 6s ease-in-out infinite;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #27c93f; box-shadow: 0 0 8px #27c93f;"></div>
        <div style="font-size: 11px; font-weight: 500; color: white;">0 Errors Found</div>
    </div>
    
    <div style="position: absolute; bottom: 25%; left: 10%; padding: 8px 14px; background-color: rgba(189, 78, 255, 0.05); border: 1px solid rgba(189, 78, 255, 0.2); border-radius: 30px; backdrop-filter: blur(12px); display: flex; align-items: center; gap: 8px; z-index: 2; animation: floatUp2 7s ease-in-out infinite;">
        <div style="font-size: 12px;">⚡</div>
        <div style="font-size: 11px; font-weight: 500; color: #e3a8ff;">120ms Latency</div>
    </div>
</div>
`;

const testStyle = `
<style>
    @keyframes rotateDash {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes pulseGlow {
        0% { box-shadow: 0 0 20px rgba(39, 201, 63, 0.2); }
        50% { box-shadow: 0 0 40px rgba(39, 201, 63, 0.4); }
        100% { box-shadow: 0 0 20px rgba(39, 201, 63, 0.2); }
    }
    @keyframes floatUp1 {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-5px) scale(1.02); }
        100% { transform: translateY(0) scale(1); }
    }
    @keyframes floatUp2 {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(5px) scale(1.02); }
        100% { transform: translateY(0) scale(1); }
    }
    .premium-test * { box-sizing: border-box; }
</style>
`;


// PREMIUM LAUNCH & SCALE UI
const scaleReact = `children: [
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes drawChart {
            0% { stroke-dashoffset: 400; }
            100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeInChart {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes pulseDot {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(189, 78, 255, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(189, 78, 255, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(189, 78, 255, 0); }
        }
        .premium-scale * { box-sizing: border-box; }
        
        .grid-bg {
            background-size: 20px 20px;
            background-image: 
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
        }
    \`}}),
    h("div", {
        className: "premium-scale",
        style: { width: "100%", height: "100%", position: "relative", backgroundColor: "#020202", display: "flex", flexDirection: "column", overflow: "hidden" },
        children: [
            h("div", { className: "grid-bg", style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.5, zIndex: 0 } }),
            
            // Header
            h("div", {
                style: { position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px" },
                children: [
                    h("div", {
                        style: { display: "flex", flexDirection: "column", gap: "6px" },
                        children: [
                            h("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                                h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#c96ef0", boxShadow: "0 0 8px #c96ef0" } }),
                                h("div", { style: { fontSize: "14px", fontWeight: "600", color: "white" }, children: "Global Scaling" })
                            ]}),
                            h("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.5)", marginLeft: "16px" }, children: "Live traffic & requests" })
                        ]
                    }),
                    h("div", {
                        style: { padding: "6px 10px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: "6px" },
                        children: [
                            h("div", { style: { width: "12px", height: "12px" }, children: 
                                h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.7)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                                    h("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                                    h("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                                    h("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
                                ]})
                            }),
                            h("div", { style: { fontSize: "10px", fontWeight: "500", color: "rgba(255,255,255,0.8)" }, children: "v2.0 Active" })
                        ]
                    })
                ]
            }),
            
            // Chart Area
            h("div", {
                style: { flex: 1, position: "relative", zIndex: 1, display: "flex", alignItems: "flex-end" },
                children: [
                    h("svg", {
                        style: { width: "100%", height: "80%", overflow: "visible", position: "absolute", bottom: 0, left: 0 },
                        viewBox: "0 0 300 100",
                        preserveAspectRatio: "none",
                        children: [
                            // Gradient Fill
                            h("defs", {
                                children: h("linearGradient", { id: "chartFill", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                                    h("stop", { offset: "0%", stopColor: "rgba(189, 78, 255, 0.3)" }),
                                    h("stop", { offset: "100%", stopColor: "rgba(189, 78, 255, 0)" })
                                ]})
                            }),
                            // Fill Path
                            h("path", {
                                d: "M 0 100 L 0 70 C 40 70, 60 40, 100 50 C 140 60, 160 20, 200 30 C 240 40, 260 10, 300 20 L 300 100 Z",
                                fill: "url(#chartFill)",
                                style: { animation: "fadeInChart 1s ease-out forwards" }
                            }),
                            // Line Path
                            h("path", {
                                d: "M 0 70 C 40 70, 60 40, 100 50 C 140 60, 160 20, 200 30 C 240 40, 260 10, 300 20",
                                fill: "none",
                                stroke: "#c96ef0",
                                strokeWidth: "3",
                                strokeDasharray: "400",
                                strokeLinecap: "round",
                                style: { animation: "drawChart 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards" }
                            })
                        ]
                    }),
                    // Pulse Dot on Peak
                    h("div", {
                        style: { position: "absolute", top: "18%", right: "32%", width: "12px", height: "12px", backgroundColor: "#fff", borderRadius: "50%", border: "3px solid #c96ef0", animation: "pulseDot 2s infinite" }
                    }),
                    // Tooltip
                    h("div", {
                        style: { position: "absolute", top: "2%", right: "25%", padding: "8px 12px", backgroundColor: "rgba(30,30,30,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", backdropFilter: "blur(8px)", boxShadow: "0 10px 20px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", gap: "2px", zIndex: 10, transform: "translateY(-10px)", animation: "floatUp1 4s ease-in-out infinite" },
                        children: [
                            h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" }, children: "Current Load" }),
                            h("div", { style: { fontSize: "13px", fontWeight: "700", color: "white" }, children: "24,892 req/s" })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const scaleHtml = `
<div class="premium-scale" style="width: 100%; height: 100%; position: relative; background-color: #020202; display: flex; flex-direction: column; overflow: hidden;">
    <div class="grid-bg" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.5; z-index: 0;"></div>
    
    <div style="position: relative; z-index: 10; display: flex; justify-content: space-between; align-items: flex-start; padding: 20px;">
        <div style="display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 8px #c96ef0;"></div>
                <div style="font-size: 14px; font-weight: 600; color: white;">Global Scaling</div>
            </div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.5); margin-left: 16px;">Live traffic & requests</div>
        </div>
        <div style="padding: 6px 10px; border-radius: 6px; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); display: flex; align-items: center; gap: 6px;">
            <div style="width: 12px; height: 12px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            </div>
            <div style="font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.8);">v2.0 Active</div>
        </div>
    </div>
    
    <div style="flex: 1; position: relative; z-index: 1; display: flex; align-items: flex-end;">
        <svg style="width: 100%; height: 80%; overflow: visible; position: absolute; bottom: 0; left: 0;" viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
                <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="rgba(189, 78, 255, 0.3)"></stop>
                    <stop offset="100%" stop-color="rgba(189, 78, 255, 0)"></stop>
                </linearGradient>
            </defs>
            <path d="M 0 100 L 0 70 C 40 70, 60 40, 100 50 C 140 60, 160 20, 200 30 C 240 40, 260 10, 300 20 L 300 100 Z" fill="url(#chartFill)" style="animation: fadeInChart 1s ease-out forwards;"></path>
            <path d="M 0 70 C 40 70, 60 40, 100 50 C 140 60, 160 20, 200 30 C 240 40, 260 10, 300 20" fill="none" stroke="#c96ef0" stroke-width="3" stroke-dasharray="400" stroke-linecap="round" style="animation: drawChart 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;"></path>
        </svg>
        <div style="position: absolute; top: 18%; right: 32%; width: 12px; height: 12px; background-color: #fff; border-radius: 50%; border: 3px solid #c96ef0; animation: pulseDot 2s infinite;"></div>
        <div style="position: absolute; top: 2%; right: 25%; padding: 8px 12px; background-color: rgba(30,30,30,0.9); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; backdrop-filter: blur(8px); box-shadow: 0 10px 20px rgba(0,0,0,0.5); display: flex; flex-direction: column; gap: 2px; z-index: 10; transform: translateY(-10px); animation: floatUp1 4s ease-in-out infinite;">
            <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Current Load</div>
            <div style="font-size: 13px; font-weight: 700; color: white;">24,892 req/s</div>
        </div>
    </div>
</div>
`;

const scaleStyle = `
<style>
    @keyframes drawChart {
        0% { stroke-dashoffset: 400; }
        100% { stroke-dashoffset: 0; }
    }
    @keyframes fadeInChart {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes pulseDot {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(189, 78, 255, 0.7); }
        70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(189, 78, 255, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(189, 78, 255, 0); }
    }
    .premium-scale * { box-sizing: border-box; }
    
    .grid-bg {
        background-size: 20px 20px;
        background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    }
</style>
`;

replaceComponentChildren("Integration", testReact, testHtml, testStyle);
replaceComponentChildren("Optimization", scaleReact, scaleHtml, scaleStyle);

// Overwrite v26 to replace the corrupted version
fs.writeFileSync('scripts/xELU-v26.mjs', code, 'utf8');
fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log("Regenerated clean v26!");

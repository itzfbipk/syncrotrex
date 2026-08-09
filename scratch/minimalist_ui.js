const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v26.mjs', 'utf8');
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


// MINIMALIST TEST & REFINE UI
const testReact = `children: [
    h("div", {
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box" },
        children: [
            h("div", {
                style: { display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "10px" },
                children: [
                    h("div", { style: { width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.2)" } }),
                    h("div", { style: { fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px" }, children: "QA Checklist" })
                ]
            }),
            h("div", {
                style: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" },
                children: [
                    { name: "Unit tests", time: "12ms" },
                    { name: "Integration", time: "89ms" },
                    { name: "E2E workflows", time: "1.2s" },
                    { name: "Performance", time: "100 score" }
                ].map((item, i) => h("div", {
                    key: i,
                    style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                    children: [
                        h("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                            h("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "rgba(39,201,63,0.15)" }, children: 
                                h("svg", { width: "8", height: "8", viewBox: "0 0 10 10", fill: "none", children: 
                                    h("path", { d: "M2 5L4 7L8 3", stroke: "#27c93f", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
                                })
                            }),
                            h("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.6)", fontWeight: "400" }, children: item.name })
                        ]}),
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }, children: item.time })
                    ]
                }))
            }),
            h("div", {
                style: { marginTop: "auto", padding: "8px", borderRadius: "6px", backgroundColor: "rgba(39,201,63,0.05)", border: "1px solid rgba(39,201,63,0.1)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" },
                children: [
                    h("div", { style: { width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#27c93f", boxShadow: "0 0 4px #27c93f" } }),
                    h("div", { style: { fontSize: "10px", fontWeight: "500", color: "#27c93f" }, children: "All checks passed" })
                ]
            })
        ]
    })
]`;

const testHtml = `
<div style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; gap: 12px; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box;">
    <div style="display: flex; align-items: center; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
        <div style="width: 8px; height: 8px; border-radius: 2px; background-color: rgba(255,255,255,0.2);"></div>
        <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px;">QA Checklist</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px;">
        <!-- Items -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(39,201,63,0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#27c93f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">Unit tests</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">12ms</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(39,201,63,0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#27c93f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">Integration</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">89ms</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(39,201,63,0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#27c93f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">E2E workflows</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">1.2s</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(39,201,63,0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#27c93f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">Performance</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">100 score</div>
        </div>
    </div>
    <div style="margin-top: auto; padding: 8px; border-radius: 6px; background-color: rgba(39,201,63,0.05); border: 1px solid rgba(39,201,63,0.1); display: flex; align-items: center; justify-content: center; gap: 6px;">
        <div style="width: 4px; height: 4px; border-radius: 50%; background-color: #27c93f; box-shadow: 0 0 4px #27c93f;"></div>
        <div style="font-size: 10px; font-weight: 500; color: #27c93f;">All checks passed</div>
    </div>
</div>
`;


// MINIMALIST LAUNCH & SCALE UI
const scaleReact = `children: [
    h("div", {
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                children: [
                    h("div", { style: { fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px" }, children: "System Metrics" }),
                    h("div", { style: { display: "flex", alignItems: "center", gap: "4px", padding: "4px 8px", backgroundColor: "rgba(189, 78, 255, 0.1)", borderRadius: "4px", border: "1px solid rgba(189, 78, 255, 0.2)" }, children: [
                        h("div", { style: { width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#c96ef0", boxShadow: "0 0 4px #c96ef0" } }),
                        h("div", { style: { fontSize: "9px", color: "#e3a8ff", fontWeight: "500" }, children: "LIVE" })
                    ]})
                ]
            }),
            h("div", {
                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
                children: [
                    h("div", { style: { padding: "10px", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", gap: "4px" }, children: [
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.4)" }, children: "Uptime" }),
                        h("div", { style: { fontSize: "14px", fontWeight: "600", color: "white" }, children: "99.99%" })
                    ]}),
                    h("div", { style: { padding: "10px", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", gap: "4px" }, children: [
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.4)" }, children: "Latency" }),
                        h("div", { style: { fontSize: "14px", fontWeight: "600", color: "white" }, children: "45ms" })
                    ]})
                ]
            }),
            h("div", {
                style: { flex: 1, backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", overflow: "hidden" },
                children: [
                    h("div", { style: { position: "absolute", top: "10px", left: "12px", fontSize: "10px", color: "rgba(255,255,255,0.4)" }, children: "Traffic (Last 24h)" }),
                    h("svg", {
                        style: { width: "100%", height: "40px", overflow: "visible", marginTop: "10px" },
                        viewBox: "0 0 100 30",
                        preserveAspectRatio: "none",
                        children: [
                            h("path", {
                                d: "M 0 30 L 0 20 L 20 15 L 40 22 L 60 10 L 80 18 L 100 5 L 100 30 Z",
                                fill: "rgba(189, 78, 255, 0.15)"
                            }),
                            h("path", {
                                d: "M 0 20 L 20 15 L 40 22 L 60 10 L 80 18 L 100 5",
                                fill: "none",
                                stroke: "#c96ef0",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const scaleHtml = `
<div style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; gap: 16px; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px;">System Metrics</div>
        <div style="display: flex; align-items: center; gap: 4px; padding: 4px 8px; background-color: rgba(189, 78, 255, 0.1); border-radius: 4px; border: 1px solid rgba(189, 78, 255, 0.2);">
            <div style="width: 4px; height: 4px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 4px #c96ef0;"></div>
            <div style="font-size: 9px; color: #e3a8ff; font-weight: 500;">LIVE</div>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div style="padding: 10px; background-color: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 10px; color: rgba(255,255,255,0.4);">Uptime</div>
            <div style="font-size: 14px; font-weight: 600; color: white;">99.99%</div>
        </div>
        <div style="padding: 10px; background-color: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 10px; color: rgba(255,255,255,0.4);">Latency</div>
            <div style="font-size: 14px; font-weight: 600; color: white;">45ms</div>
        </div>
    </div>
    <div style="flex: 1; background-color: rgba(255,255,255,0.02); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); padding: 12px; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; min-height: 80px;">
        <div style="position: absolute; top: 10px; left: 12px; font-size: 10px; color: rgba(255,255,255,0.4);">Traffic (Last 24h)</div>
        <svg style="width: 100%; height: 40px; overflow: visible; margin-top: 10px;" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path d="M 0 30 L 0 20 L 20 15 L 40 22 L 60 10 L 80 18 L 100 5 L 100 30 Z" fill="rgba(189, 78, 255, 0.15)"></path>
            <path d="M 0 20 L 20 15 L 40 22 L 60 10 L 80 18 L 100 5" fill="none" stroke="#c96ef0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
</div>
`;

replaceComponentChildren("Integration", testReact, testHtml, "");
replaceComponentChildren("Optimization", scaleReact, scaleHtml, "");

fs.writeFileSync('scripts/xELU-v27.mjs', code, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v26.mjs')) {
                content = content.replace(/xELU-v26\.mjs/g, 'xELU-v27.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v26.mjs')) {
    fs.unlinkSync('scripts/xELU-v26.mjs');
}
updateReferences('.');

console.log("Updated to MINIMALIST UIs!");

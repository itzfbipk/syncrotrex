const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v27.mjs', 'utf8');
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
            const outerDivOpenTagEnd = indexHtml.indexOf('>', divStart) + 1;
            const outerDivOpenTag = indexHtml.substring(divStart, outerDivOpenTagEnd);
            
            const newHtml = outerDivOpenTag + '\n' + styleHtml + '\n' + newChildrenHtml + '\n</div>';
            indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndexHTML + 1);
        }
    }
}

// PURPLE TEST & REFINE UI
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
                            h("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "rgba(189, 78, 255, 0.15)" }, children: 
                                h("svg", { width: "8", height: "8", viewBox: "0 0 10 10", fill: "none", children: 
                                    h("path", { d: "M2 5L4 7L8 3", stroke: "#c96ef0", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
                                })
                            }),
                            h("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.6)", fontWeight: "400" }, children: item.name })
                        ]}),
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }, children: item.time })
                    ]
                }))
            }),
            h("div", {
                style: { marginTop: "auto", padding: "8px", borderRadius: "6px", backgroundColor: "rgba(189, 78, 255, 0.05)", border: "1px solid rgba(189, 78, 255, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" },
                children: [
                    h("div", { style: { width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#c96ef0", boxShadow: "0 0 4px #c96ef0" } }),
                    h("div", { style: { fontSize: "10px", fontWeight: "500", color: "#e3a8ff" }, children: "All checks passed" })
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
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(189, 78, 255, 0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#c96ef0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">Unit tests</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">12ms</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(189, 78, 255, 0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#c96ef0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">Integration</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">89ms</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(189, 78, 255, 0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#c96ef0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">E2E workflows</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">1.2s</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; background-color: rgba(189, 78, 255, 0.15);">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#c96ef0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 400;">Performance</div>
            </div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.3); font-family: monospace;">100 score</div>
        </div>
    </div>
    <div style="margin-top: auto; padding: 8px; border-radius: 6px; background-color: rgba(189, 78, 255, 0.05); border: 1px solid rgba(189, 78, 255, 0.15); display: flex; align-items: center; justify-content: center; gap: 6px;">
        <div style="width: 4px; height: 4px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 4px #c96ef0;"></div>
        <div style="font-size: 10px; font-weight: 500; color: #e3a8ff;">All checks passed</div>
    </div>
</div>
`;


// NEW LAUNCH & SCALE UI (Nodes)
const scaleReact = `children: [
    h("div", {
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                children: [
                    h("div", { style: { fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px" }, children: "Production Cluster" }),
                    h("div", { style: { fontSize: "9px", color: "#e3a8ff", border: "1px solid rgba(189, 78, 255, 0.2)", backgroundColor: "rgba(189, 78, 255, 0.05)", padding: "4px 8px", borderRadius: "4px", fontWeight: "500" }, children: "SCALING ACTIVE" })
                ]
            }),
            h("div", {
                style: { display: "flex", gap: "10px", marginTop: "4px" },
                children: [
                    { name: "us-east-1" },
                    { name: "eu-west-1" },
                    { name: "ap-south-1" }
                ].map((node, i) => h("div", {
                    key: i,
                    style: { flex: 1, height: "64px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(189, 78, 255, 0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" },
                    children: [
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#c96ef0", boxShadow: "0 0 6px rgba(201, 110, 240, 0.5)" } }),
                        h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }, children: node.name })
                    ]
                }))
            }),
            h("div", {
                style: { marginTop: "auto", padding: "10px 12px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" },
                children: [
                    h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" }, children: "Global Requests" }),
                    h("div", { style: { fontSize: "11px", color: "white", fontWeight: "500" }, children: "+24% this week" })
                ]
            })
        ]
    })
]`;

const scaleHtml = `
<div style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; gap: 16px; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px;">Production Cluster</div>
        <div style="font-size: 9px; color: #e3a8ff; border: 1px solid rgba(189, 78, 255, 0.2); background-color: rgba(189, 78, 255, 0.05); padding: 4px 8px; border-radius: 4px; font-weight: 500;">SCALING ACTIVE</div>
    </div>
    
    <div style="display: flex; gap: 10px; margin-top: 4px;">
        <div style="flex: 1; height: 64px; border-radius: 6px; background-color: rgba(255,255,255,0.02); border: 1px solid rgba(189, 78, 255, 0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 6px rgba(201, 110, 240, 0.5);"></div>
            <div style="font-size: 9px; color: rgba(255,255,255,0.6); font-family: monospace;">us-east-1</div>
        </div>
        <div style="flex: 1; height: 64px; border-radius: 6px; background-color: rgba(255,255,255,0.02); border: 1px solid rgba(189, 78, 255, 0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 6px rgba(201, 110, 240, 0.5);"></div>
            <div style="font-size: 9px; color: rgba(255,255,255,0.6); font-family: monospace;">eu-west-1</div>
        </div>
        <div style="flex: 1; height: 64px; border-radius: 6px; background-color: rgba(255,255,255,0.02); border: 1px solid rgba(189, 78, 255, 0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 6px rgba(201, 110, 240, 0.5);"></div>
            <div style="font-size: 9px; color: rgba(255,255,255,0.6); font-family: monospace;">ap-south-1</div>
        </div>
    </div>
    
    <div style="margin-top: auto; padding: 10px 12px; border-radius: 6px; background-color: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Global Requests</div>
        <div style="font-size: 11px; color: white; font-weight: 500;">+24% this week</div>
    </div>
</div>
`;

replaceComponentChildren("Integration", testReact, testHtml, "");
replaceComponentChildren("Optimization", scaleReact, scaleHtml, "");

fs.writeFileSync('scripts/xELU-v28.mjs', code, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v27.mjs')) {
                content = content.replace(/xELU-v27\.mjs/g, 'xELU-v28.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v27.mjs')) {
    fs.unlinkSync('scripts/xELU-v27.mjs');
}
updateReferences('.');

console.log("Updated UI to v28!");

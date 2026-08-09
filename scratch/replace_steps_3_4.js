const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v23.mjs', 'utf8');
let indexHtml = fs.readFileSync('index.html', 'utf8');

function replaceComponentChildren(framerName, newChildrenReact, newChildrenHtml, styleHtml) {
    const target = '"data-framer-name": \`' + framerName + '\`,';
    const startIndex = code.indexOf(target);
    if (startIndex === -1) {
        console.log("Could not find component " + framerName + " in React");
        return;
    }

    const childrenStartStr = 'children: [';
    let childrenStart = code.indexOf(childrenStartStr, startIndex);
    
    // If it's a single child without an array:
    if (childrenStart === -1 || childrenStart > startIndex + 300) {
        const altChildrenStartStr = 'children: _(';
        childrenStart = code.indexOf(altChildrenStartStr, startIndex);
        if (childrenStart === -1 || childrenStart > startIndex + 300) {
            console.log("Could not find children array or single child for " + framerName);
            return;
        }
        
        let open = 0;
        let endIndex = -1;
        let inString = false;
        let stringChar = '';
        const startScanIndex = childrenStart + 10;
        
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
                if (char === '(') open++;
                if (char === ')') {
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

    } else {
        let open = 0;
        let endIndex = -1;
        let inString = false;
        let stringChar = '';
        const startScanIndex = childrenStart + childrenStartStr.indexOf('[');

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
                if (char === '[') open++;
                if (char === ']') {
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
    }

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

const testReact = `children: [
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .test-ui * { box-sizing: border-box; }
    \`}}),
    h("div", {
        className: "test-ui",
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "12px", backgroundColor: "transparent", position: "relative", overflow: "hidden" },
        children: [
            h("div", {
                style: { position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "linear-gradient(to bottom, transparent, rgba(189, 78, 255, 0.1), transparent)", animation: "scanline 3s linear infinite", zIndex: 0, pointerEvents: "none" }
            }),
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "12px", zIndex: 1 },
                children: [
                    h("div", { style: { fontSize: "12px", fontWeight: "600", color: "white" }, children: "Automated QA Suite" }),
                    h("div", { style: { fontSize: "10px", color: "#27c93f", display: "flex", alignItems: "center", gap: "4px" }, children: [
                        h("div", { style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#27c93f", boxShadow: "0 0 5px #27c93f" } }),
                        "All Tests Passing"
                    ]})
                ]
            }),
            ...[
                { name: "Performance Load", val: "120ms" },
                { name: "Security Scan", val: "Passed" },
                { name: "Cross-device Check", val: "Passed" },
                { name: "Code Quality", val: "99/100" }
            ].map((item, i) => h("div", {
                key: i,
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)", zIndex: 1 },
                children: [
                    h("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                        h("div", { style: { width: "14px", height: "14px", borderRadius: "3px", backgroundColor: "rgba(39, 201, 63, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }, children: 
                            h("div", { style: { width: "6px", height: "6px", borderRadius: "1px", borderBottom: "2px solid #27c93f", borderRight: "2px solid #27c93f", transform: "rotate(45deg) translateY(-1px)" } })
                        }),
                        h("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.7)" }, children: item.name })
                    ]}),
                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "white" }, children: item.val })
                ]
            }))
        ]
    })
]`;

const testHtml = `
<div class="test-ui" style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; gap: 12px; background-color: transparent; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 100%; background: linear-gradient(to bottom, transparent, rgba(189, 78, 255, 0.1), transparent); animation: scanline 3s linear infinite; z-index: 0; pointer-events: none;"></div>
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; z-index: 1;">
        <div style="font-size: 12px; font-weight: 600; color: white;">Automated QA Suite</div>
        <div style="font-size: 10px; color: #27c93f; display: flex; align-items: center; gap: 4px;">
            <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #27c93f; box-shadow: 0 0 5px #27c93f;"></div>
            All Tests Passing
        </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background-color: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); z-index: 1;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 14px; height: 14px; border-radius: 3px; background-color: rgba(39, 201, 63, 0.1); display: flex; align-items: center; justify-content: center;">
                <div style="width: 6px; height: 6px; border-radius: 1px; border-bottom: 2px solid #27c93f; border-right: 2px solid #27c93f; transform: rotate(45deg) translateY(-1px);"></div>
            </div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.7);">Performance Load</div>
        </div>
        <div style="font-size: 11px; font-weight: 600; color: white;">120ms</div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background-color: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); z-index: 1;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 14px; height: 14px; border-radius: 3px; background-color: rgba(39, 201, 63, 0.1); display: flex; align-items: center; justify-content: center;">
                <div style="width: 6px; height: 6px; border-radius: 1px; border-bottom: 2px solid #27c93f; border-right: 2px solid #27c93f; transform: rotate(45deg) translateY(-1px);"></div>
            </div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.7);">Security Scan</div>
        </div>
        <div style="font-size: 11px; font-weight: 600; color: white;">Passed</div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background-color: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); z-index: 1;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 14px; height: 14px; border-radius: 3px; background-color: rgba(39, 201, 63, 0.1); display: flex; align-items: center; justify-content: center;">
                <div style="width: 6px; height: 6px; border-radius: 1px; border-bottom: 2px solid #27c93f; border-right: 2px solid #27c93f; transform: rotate(45deg) translateY(-1px);"></div>
            </div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.7);">Cross-device Check</div>
        </div>
        <div style="font-size: 11px; font-weight: 600; color: white;">Passed</div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background-color: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); z-index: 1;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 14px; height: 14px; border-radius: 3px; background-color: rgba(39, 201, 63, 0.1); display: flex; align-items: center; justify-content: center;">
                <div style="width: 6px; height: 6px; border-radius: 1px; border-bottom: 2px solid #27c93f; border-right: 2px solid #27c93f; transform: rotate(45deg) translateY(-1px);"></div>
            </div>
            <div style="font-size: 11px; color: rgba(255,255,255,0.7);">Code Quality</div>
        </div>
        <div style="font-size: 11px; font-weight: 600; color: white;">99/100</div>
    </div>
</div>
`;

const testStyle = `
<style>
    @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
    }
    .test-ui * { box-sizing: border-box; }
</style>
`;

const scaleReact = `children: [
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes scaleUp {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
        }
        .scale-ui * { box-sizing: border-box; }
    \`}}),
    h("div", {
        className: "scale-ui",
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "transparent" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                children: [
                    h("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
                        h("div", { style: { fontSize: "12px", fontWeight: "600", color: "white" }, children: "v1.0 Deployed" }),
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" }, children: "Live Production" })
                    ]}),
                    h("div", { style: { padding: "4px 8px", backgroundColor: "rgba(189, 78, 255, 0.15)", borderRadius: "4px", border: "1px solid rgba(189, 78, 255, 0.4)", fontSize: "9px", color: "#c96ef0", fontWeight: "600" }, children: "AUTO-SCALING ON" })
                ]
            }),
            h("div", {
                style: { flex: 1, backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", padding: "12px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end" },
                children: [
                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)", position: "absolute", top: "12px", left: "12px" }, children: "Traffic / Users" }),
                    h("svg", {
                        style: { width: "100%", height: "80%", overflow: "visible" },
                        children: [
                            h("path", {
                                d: "M 0 60 Q 30 50 60 40 T 120 20 T 200 0",
                                fill: "none",
                                stroke: "#c96ef0",
                                strokeWidth: "3",
                                strokeDasharray: "200",
                                style: { animation: "scaleUp 2s ease-out forwards" }
                            }),
                            h("path", {
                                d: "M 0 60 L 0 80 L 200 80 L 200 0 Q 150 10 120 20 T 60 40 Q 30 50 0 60 Z",
                                fill: "rgba(189, 78, 255, 0.1)",
                            })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const scaleHtml = `
<div class="scale-ui" style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; gap: 16px; background-color: transparent;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 12px; font-weight: 600; color: white;">v1.0 Deployed</div>
            <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Live Production</div>
        </div>
        <div style="padding: 4px 8px; background-color: rgba(189, 78, 255, 0.15); border-radius: 4px; border: 1px solid rgba(189, 78, 255, 0.4); font-size: 9px; color: #c96ef0; font-weight: 600;">AUTO-SCALING ON</div>
    </div>
    <div style="flex: 1; background-color: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 12px; position: relative; display: flex; flex-direction: column; justify-content: flex-end; min-height: 120px;">
        <div style="font-size: 9px; color: rgba(255,255,255,0.4); position: absolute; top: 12px; left: 12px;">Traffic / Users</div>
        <svg style="width: 100%; height: 80%; overflow: visible;" viewBox="0 0 200 80" preserveAspectRatio="none">
            <path d="M 0 60 Q 30 50 60 40 T 120 20 T 200 0" fill="none" stroke="#c96ef0" stroke-width="3" stroke-dasharray="200" style="animation: scaleUp 2s ease-out forwards;" />
            <path d="M 0 60 L 0 80 L 200 80 L 200 0 Q 150 10 120 20 T 60 40 Q 30 50 0 60 Z" fill="rgba(189, 78, 255, 0.1)" />
        </svg>
    </div>
</div>
`;

const scaleStyle = `
<style>
    @keyframes scaleUp {
        0% { stroke-dashoffset: 200; }
        100% { stroke-dashoffset: 0; }
    }
    .scale-ui * { box-sizing: border-box; }
</style>
`;

replaceComponentChildren("Integration", testReact, testHtml, testStyle);
replaceComponentChildren("Optimization", scaleReact, scaleHtml, scaleStyle);

fs.writeFileSync('scripts/xELU-v24.mjs', code, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v23.mjs')) {
                content = content.replace(/xELU-v23\.mjs/g, 'xELU-v24.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v23.mjs')) {
    fs.unlinkSync('scripts/xELU-v23.mjs');
}
updateReferences('.');

console.log("Updated Step 3 and Step 4 UIs!");

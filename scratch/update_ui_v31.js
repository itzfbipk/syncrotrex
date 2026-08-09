const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v30.mjs', 'utf8');
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

// PREMIUM MINIMALIST UNDERSTAND & PLAN UI (Strategy card)
const strategyReact = `children: [
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes drawLine {
            0% { height: 0%; opacity: 0; }
            100% { height: 45%; opacity: 1; }
        }
        @keyframes pulseDotPurple {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201, 110, 240, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(201, 110, 240, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201, 110, 240, 0); }
        }
        @keyframes slideInRight {
            0% { transform: translateX(-10px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes scanningBar {
            0% { left: -30%; }
            100% { left: 100%; }
        }
    \`}}),
    h("div", {
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "12px", marginBottom: "16px" },
                children: [
                    h("div", { style: { fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px" }, children: "Strategic Roadmap" }),
                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }, children: "PHASE 1" })
                ]
            }),
            
            h("div", {
                style: { position: "relative", flex: 1, paddingLeft: "12px" },
                children: [
                    h("div", { style: { position: "absolute", left: "14px", top: "6px", bottom: "10px", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                    h("div", { style: { position: "absolute", left: "14px", top: "6px", width: "1px", backgroundColor: "#c96ef0", animation: "drawLine 1s ease-out forwards" } }),
                    
                    h("div", {
                        style: { position: "relative", display: "flex", alignItems: "flex-start", marginBottom: "16px", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.2s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "0px", top: "4px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#c96ef0", animation: "pulseDotPurple 2s infinite", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column", width: "100%" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "white" }, children: "Discovery & Requirements" }),
                                    h("div", {
                                        style: { padding: "8px 10px", backgroundColor: "rgba(201, 110, 240, 0.05)", border: "1px solid rgba(201, 110, 240, 0.2)", borderRadius: "6px", marginTop: "6px" },
                                        children: [
                                            h("div", { style: { fontSize: "9px", color: "#e3a8ff", marginBottom: "6px" }, children: "Analyzing workflow..." }),
                                            h("div", { style: { height: "2px", width: "100%", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden", position: "relative" }, children: 
                                                h("div", { style: { position: "absolute", top: 0, bottom: 0, width: "30%", backgroundColor: "#c96ef0", animation: "scanningBar 1.5s ease-in-out infinite" } })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    
                    h("div", {
                        style: { position: "relative", display: "flex", alignItems: "flex-start", marginBottom: "16px", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.4s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "1px", top: "4px", width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "400", color: "rgba(255,255,255,0.4)" }, children: "Technical Architecture" })
                                ]
                            })
                        ]
                    }),
                    
                    h("div", {
                        style: { position: "relative", display: "flex", alignItems: "flex-start", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.6s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "1px", top: "4px", width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "400", color: "rgba(255,255,255,0.4)" }, children: "Implementation Plan" })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const strategyHtml = `
<style>
    @keyframes drawLine {
        0% { height: 0%; opacity: 0; }
        100% { height: 45%; opacity: 1; }
    }
    @keyframes pulseDotPurple {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201, 110, 240, 0.7); }
        70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(201, 110, 240, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201, 110, 240, 0); }
    }
    @keyframes slideInRight {
        0% { transform: translateX(-10px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes scanningBar {
        0% { left: -30%; }
        100% { left: 100%; }
    }
</style>
<div style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box;">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px; margin-bottom: 16px;">
        <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px;">Strategic Roadmap</div>
        <div style="font-size: 9px; color: rgba(255,255,255,0.4); font-family: monospace;">PHASE 1</div>
    </div>
    
    <div style="position: relative; flex: 1; padding-left: 12px;">
        <div style="position: absolute; left: 14px; top: 6px; bottom: 10px; width: 1px; background-color: rgba(255,255,255,0.05);"></div>
        <div style="position: absolute; left: 14px; top: 6px; width: 1px; background-color: #c96ef0; animation: drawLine 1s ease-out forwards;"></div>
        
        <div style="position: relative; display: flex; align-items: flex-start; margin-bottom: 16px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s;">
            <div style="position: absolute; left: 0px; top: 4px; width: 5px; height: 5px; border-radius: 50%; background-color: #c96ef0; animation: pulseDotPurple 2s infinite; z-index: 2;"></div>
            <div style="margin-left: 20px; display: flex; flex-direction: column; width: 100%;">
                <div style="font-size: 11px; font-weight: 600; color: white;">Discovery & Requirements</div>
                <div style="padding: 8px 10px; background-color: rgba(201, 110, 240, 0.05); border: 1px solid rgba(201, 110, 240, 0.2); border-radius: 6px; margin-top: 6px;">
                    <div style="font-size: 9px; color: #e3a8ff; margin-bottom: 6px;">Analyzing workflow...</div>
                    <div style="height: 2px; width: 100%; background-color: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; position: relative;">
                        <div style="position: absolute; top: 0; bottom: 0; width: 30%; background-color: #c96ef0; animation: scanningBar 1.5s ease-in-out infinite;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="position: relative; display: flex; align-items: flex-start; margin-bottom: 16px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s;">
            <div style="position: absolute; left: 1px; top: 4px; width: 3px; height: 3px; border-radius: 50%; background-color: rgba(255,255,255,0.2); z-index: 2;"></div>
            <div style="margin-left: 20px; display: flex; flex-direction: column;">
                <div style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4);">Technical Architecture</div>
            </div>
        </div>
        
        <div style="position: relative; display: flex; align-items: flex-start; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.6s;">
            <div style="position: absolute; left: 1px; top: 4px; width: 3px; height: 3px; border-radius: 50%; background-color: rgba(255,255,255,0.2); z-index: 2;"></div>
            <div style="margin-left: 20px; display: flex; flex-direction: column;">
                <div style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4);">Implementation Plan</div>
            </div>
        </div>
    </div>
</div>
`;

replaceComponentChildren("Strategy card", strategyReact, strategyHtml, "");

fs.writeFileSync('scripts/xELU-v31.mjs', code, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v30.mjs')) {
                content = content.replace(/xELU-v30\.mjs/g, 'xELU-v31.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}

if (fs.existsSync('scripts/xELU-v30.mjs')) {
    fs.unlinkSync('scripts/xELU-v30.mjs');
}
updateReferences('.');

console.log("Updated Step 1 (Strategy card) to Strategic Roadmap v31!");

const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v28.mjs', 'utf8');
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

// PREMIUM ISOMETRIC LAUNCH & SCALE UI
const scaleReact = `children: [
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes floatIso1 {
            0%, 100% { transform: translateZ(-35px) scale(1); box-shadow: 0 0 10px rgba(201,110,240,0.2); }
            50% { transform: translateZ(-40px) scale(1.02); box-shadow: 0 0 20px rgba(201,110,240,0.4); }
        }
        @keyframes floatIso2 {
            0%, 100% { transform: translateZ(0px) scale(1); box-shadow: 0 0 15px rgba(201,110,240,0.3); }
            50% { transform: translateZ(5px) scale(1.03); box-shadow: 0 0 25px rgba(201,110,240,0.5); }
        }
        @keyframes floatIso3 {
            0%, 100% { transform: translateZ(35px) scale(1); box-shadow: 0 0 20px rgba(201,110,240,0.4); }
            50% { transform: translateZ(45px) scale(1.05); box-shadow: 0 0 30px rgba(201,110,240,0.7); }
        }
        @keyframes pulseLine {
            0% { opacity: 0.2; height: 0%; }
            50% { opacity: 1; height: 100%; }
            100% { opacity: 0.2; height: 0%; }
        }
    \`}}),
    h("div", {
        style: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box", overflow: "hidden", position: "relative" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 },
                children: [
                    h("div", { style: { fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px" }, children: "Architecture" }),
                    h("div", { style: { display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", backgroundColor: "rgba(189, 78, 255, 0.1)", borderRadius: "30px", border: "1px solid rgba(189, 78, 255, 0.3)" }, children: [
                        h("div", { style: { width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#c96ef0", boxShadow: "0 0 6px #c96ef0" } }),
                        h("div", { style: { fontSize: "9px", color: "#e3a8ff", fontWeight: "600", letterSpacing: "0.5px" }, children: "SCALED" })
                    ]})
                ]
            }),
            
            // 3D Isometric Container
            h("div", {
                style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", perspective: "1000px", marginTop: "10px" },
                children: h("div", {
                    style: { position: "relative", width: "80px", height: "80px", transformStyle: "preserve-3d", transform: "rotateX(60deg) rotateZ(45deg)" },
                    children: [
                        // Vertical Connecting Line
                        h("div", { style: { position: "absolute", top: "50%", left: "50%", width: "2px", height: "80px", backgroundColor: "#c96ef0", transform: "translate(-50%, -50%) rotateX(-90deg)", opacity: 0.5, boxShadow: "0 0 10px #c96ef0" } }),
                        
                        // Bottom Layer (Database)
                        h("div", {
                            style: { position: "absolute", width: "100%", height: "100%", border: "1px solid rgba(201,110,240,0.4)", backgroundColor: "rgba(201,110,240,0.05)", animation: "floatIso1 4s ease-in-out infinite", display: "flex", alignItems: "center", justifyContent: "center" }
                        }),
                        
                        // Middle Layer (API)
                        h("div", {
                            style: { position: "absolute", width: "100%", height: "100%", border: "1px solid rgba(201,110,240,0.6)", backgroundColor: "rgba(201,110,240,0.1)", animation: "floatIso2 4s ease-in-out infinite 0.2s", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)" }
                        }),
                        
                        // Top Layer (Client)
                        h("div", {
                            style: { position: "absolute", width: "100%", height: "100%", border: "1px solid rgba(201,110,240,0.9)", backgroundColor: "rgba(201,110,240,0.15)", animation: "floatIso3 4s ease-in-out infinite 0.4s", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" },
                            children: h("div", { style: { width: "20px", height: "20px", border: "1px solid rgba(255,255,255,0.5)", transform: "rotateZ(0deg)" } })
                        })
                    ]
                })
            }),
            
            // Labels overlay
            h("div", {
                style: { position: "absolute", bottom: "20px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 10 },
                children: [
                    h("div", { style: { display: "flex", flexDirection: "column", gap: "2px" }, children: [
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.4)" }, children: "Capacity" }),
                        h("div", { style: { fontSize: "12px", color: "white", fontWeight: "500" }, children: "Elastic" })
                    ]}),
                    h("div", { style: { display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-end" }, children: [
                        h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.4)" }, children: "Load" }),
                        h("div", { style: { fontSize: "12px", color: "#c96ef0", fontWeight: "500" }, children: "Distributed" })
                    ]})
                ]
            })
        ]
    })
]`;

const scaleHtml = `
<style>
    @keyframes floatIso1 {
        0%, 100% { transform: translateZ(-35px) scale(1); box-shadow: 0 0 10px rgba(201,110,240,0.2); }
        50% { transform: translateZ(-40px) scale(1.02); box-shadow: 0 0 20px rgba(201,110,240,0.4); }
    }
    @keyframes floatIso2 {
        0%, 100% { transform: translateZ(0px) scale(1); box-shadow: 0 0 15px rgba(201,110,240,0.3); }
        50% { transform: translateZ(5px) scale(1.03); box-shadow: 0 0 25px rgba(201,110,240,0.5); }
    }
    @keyframes floatIso3 {
        0%, 100% { transform: translateZ(35px) scale(1); box-shadow: 0 0 20px rgba(201,110,240,0.4); }
        50% { transform: translateZ(45px) scale(1.05); box-shadow: 0 0 30px rgba(201,110,240,0.7); }
    }
</style>
<div style="width: 100%; height: 100%; padding: 20px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; overflow: hidden; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; z-index: 10;">
        <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px;">Architecture</div>
        <div style="display: flex; align-items: center; gap: 6px; padding: 4px 10px; background-color: rgba(189, 78, 255, 0.1); border-radius: 30px; border: 1px solid rgba(189, 78, 255, 0.3);">
            <div style="width: 4px; height: 4px; border-radius: 50%; background-color: #c96ef0; box-shadow: 0 0 6px #c96ef0;"></div>
            <div style="font-size: 9px; color: #e3a8ff; font-weight: 600; letter-spacing: 0.5px;">SCALED</div>
        </div>
    </div>
    
    <div style="flex: 1; display: flex; align-items: center; justify-content: center; perspective: 1000px; margin-top: 10px;">
        <div style="position: relative; width: 80px; height: 80px; transform-style: preserve-3d; transform: rotateX(60deg) rotateZ(45deg);">
            <div style="position: absolute; top: 50%; left: 50%; width: 2px; height: 80px; background-color: #c96ef0; transform: translate(-50%, -50%) rotateX(-90deg); opacity: 0.5; box-shadow: 0 0 10px #c96ef0;"></div>
            <div style="position: absolute; width: 100%; height: 100%; border: 1px solid rgba(201,110,240,0.4); background-color: rgba(201,110,240,0.05); animation: floatIso1 4s ease-in-out infinite;"></div>
            <div style="position: absolute; width: 100%; height: 100%; border: 1px solid rgba(201,110,240,0.6); background-color: rgba(201,110,240,0.1); animation: floatIso2 4s ease-in-out infinite 0.2s; backdrop-filter: blur(2px);"></div>
            <div style="position: absolute; width: 100%; height: 100%; border: 1px solid rgba(201,110,240,0.9); background-color: rgba(201,110,240,0.15); animation: floatIso3 4s ease-in-out infinite 0.4s; backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center;">
                <div style="width: 20px; height: 20px; border: 1px solid rgba(255,255,255,0.5);"></div>
            </div>
        </div>
    </div>
    
    <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; display: flex; justify-content: space-between; align-items: flex-end; z-index: 10;">
        <div style="display: flex; flex-direction: column; gap: 2px;">
            <div style="font-size: 10px; color: rgba(255,255,255,0.4);">Capacity</div>
            <div style="font-size: 12px; color: white; font-weight: 500;">Elastic</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 2px; align-items: flex-end;">
            <div style="font-size: 10px; color: rgba(255,255,255,0.4);">Load</div>
            <div style="font-size: 12px; color: #c96ef0; font-weight: 500;">Distributed</div>
        </div>
    </div>
</div>
`;

replaceComponentChildren("Optimization", scaleReact, scaleHtml, "");

fs.writeFileSync('scripts/xELU-v29.mjs', code, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v28.mjs')) {
                content = content.replace(/xELU-v28\.mjs/g, 'xELU-v29.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v28.mjs')) {
    fs.unlinkSync('scripts/xELU-v28.mjs');
}
updateReferences('.');

console.log("Updated Launch & Scale to Isometric 3D v29!");

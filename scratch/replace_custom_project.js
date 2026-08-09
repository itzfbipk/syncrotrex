const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('scripts/xELU-v21.mjs', 'utf8');

const target = '"data-framer-name": `Custom project`,';
const startIndex = code.indexOf(target);
if (startIndex === -1) {
    console.log("Could not find component");
    process.exit(1);
}

const childrenStartStr = 'children: [';
const childrenStart = code.indexOf(childrenStartStr, startIndex);

if (childrenStart === -1) {
    console.log("Could not find children");
    process.exit(1);
}

let open = 0;
let endIndex = -1;
let inString = false;
let stringChar = '';
const startScanIndex = childrenStart + childrenStartStr.indexOf('[');

for (let i = startScanIndex; i < code.length; i++) {
    const char = code[i];
    
    if (inString && code[i-1] === '\\') continue;
    
    if (!inString && (char === '"' || char === "'" || char === '`')) {
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

const newChildren = `children: [
    h("style", {
        dangerouslySetInnerHTML: {
            __html: \`
                @keyframes pulsePath {
                    0% { stroke-dashoffset: 24; opacity: 0.3; }
                    50% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 0.3; }
                }
                .workflow-minimal * { box-sizing: border-box; }
            \`
        }
    }),
    h("div", {
        className: "workflow-minimal",
        style: {
            display: "flex", flexDirection: "column", width: "100%", height: "100%",
            backgroundColor: "#050505", overflow: "hidden", 
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0",
            position: "relative"
        },
        children: [
            h("div", {
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgb(34,34,34)", backgroundColor: "transparent" },
                children: [
                    h("div", {
                        style: { display: "flex", gap: "10px", alignItems: "center" },
                        children: [
                            h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(189, 78, 255, 0.4)" } }),
                            h("div", { style: { fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,0.9)", letterSpacing: "0.5px" }, children: "Data Sync Pipeline" })
                        ]
                    }),
                    h("div", {
                        style: { display: "flex", gap: "8px", alignItems: "center" },
                        children: [
                            h("div", { style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#27c93f", boxShadow: "0 0 5px #27c93f" } }),
                            h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" }, children: "Running" })
                        ]
                    })
                ]
            }),
            h("div", {
                style: { flex: 1, position: "relative", padding: "20px" },
                children: [
                    h("div", {
                        style: { position: "absolute", top: "40px", left: "20px", width: "140px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 },
                        children: [
                            h("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                                h("div", { style: { width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.2)" } }),
                                h("div", { style: { fontSize: "10px", fontWeight: "600", color: "white" }, children: "Webhook" })
                            ]}),
                            h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)" }, children: "Listens for new entries" })
                        ]
                    }),
                    h("div", {
                        style: { position: "absolute", top: "140px", left: "100px", width: "140px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(189, 78, 255, 0.3)", backgroundColor: "rgba(189, 78, 255, 0.05)", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 },
                        children: [
                            h("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                                h("div", { style: { width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "rgba(189, 78, 255, 0.6)" } }),
                                h("div", { style: { fontSize: "10px", fontWeight: "600", color: "#c96ef0" }, children: "Transform" })
                            ]}),
                            h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)" }, children: "Format data structure" })
                        ]
                    }),
                    h("div", {
                        style: { position: "absolute", top: "40px", right: "20px", width: "140px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 },
                        children: [
                            h("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                                h("div", { style: { width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.2)" } }),
                                h("div", { style: { fontSize: "10px", fontWeight: "600", color: "white" }, children: "Database" })
                            ]}),
                            h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)" }, children: "Insert new records" })
                        ]
                    }),
                    h("svg", {
                        style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 },
                        children: [
                            h("path", {
                                d: "M 90 95 C 90 120, 170 115, 170 140",
                                fill: "none",
                                stroke: "rgba(189, 78, 255, 0.5)",
                                strokeWidth: "2",
                                strokeDasharray: "4 4",
                                style: { animation: "pulsePath 1s linear infinite" }
                            }),
                            h("path", {
                                d: "M 170 200 C 170 230, 290 150, 290 95",
                                fill: "none",
                                stroke: "rgba(189, 78, 255, 0.5)",
                                strokeWidth: "2",
                                strokeDasharray: "4 4",
                                style: { animation: "pulsePath 1s linear infinite reverse" }
                            })
                        ]
                    }),
                    h("div", {
                        style: { position: "absolute", bottom: "16px", left: "16px", right: "16px", padding: "10px", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.4)", border: "1px solid rgb(34,34,34)", display: "flex", flexDirection: "column", gap: "4px" },
                        children: [
                            h("div", { style: { fontSize: "8px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }, children: "> [14:02:44] Webhook received payload (2.4kb)" }),
                            h("div", { style: { fontSize: "8px", color: "#c96ef0", fontFamily: "monospace" }, children: "> [14:02:45] Transformation successful. Mapped 14 fields." }),
                            h("div", { style: { fontSize: "8px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }, children: "> [14:02:46] Pushing to Database..." })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const newCode = code.substring(0, childrenStart) + newChildren + code.substring(endIndex + 1);
fs.writeFileSync('scripts/xELU-v22.mjs', newCode, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v21.mjs')) {
                content = content.replace(/xELU-v21\.mjs/g, 'xELU-v22.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v21.mjs')) {
    fs.unlinkSync('scripts/xELU-v21.mjs');
}
updateReferences('.');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const targetStrHTML = 'data-framer-name="Custom project"';
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
        const newHtml = '<div class="framer-1a43s46" data-framer-name="Custom project" style="background-color: rgb(0, 0, 0); border-radius: 12px; opacity: 1;">\n' +
        '    <style>\n' +
        '        @keyframes pulsePath {\n' +
        '            0% { stroke-dashoffset: 24; opacity: 0.3; }\n' +
        '            50% { opacity: 1; }\n' +
        '            100% { stroke-dashoffset: 0; opacity: 0.3; }\n' +
        '        }\n' +
        '        .workflow-minimal * { box-sizing: border-box; }\n' +
        '    </style>\n' +
        '    <div class="workflow-minimal" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #050505; overflow: hidden; font-family: \'Inter\', sans-serif; color: white; padding: 0; position: relative;">\n' +
        '        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid rgb(34,34,34); background-color: transparent;">\n' +
        '            <div style="display: flex; gap: 10px; align-items: center;">\n' +
        '                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(189, 78, 255, 0.4);"></div>\n' +
        '                <div style="font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.9); letter-spacing: 0.5px;">Data Sync Pipeline</div>\n' +
        '            </div>\n' +
        '            <div style="display: flex; gap: 8px; align-items: center;">\n' +
        '                <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #27c93f; box-shadow: 0 0 5px #27c93f;"></div>\n' +
        '                <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Running</div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div style="flex: 1; position: relative; padding: 20px;">\n' +
        '            <div style="position: absolute; top: 40px; left: 20px; width: 140px; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.02); display: flex; flex-direction: column; gap: 8px; z-index: 10;">\n' +
        '                <div style="display: flex; align-items: center; gap: 6px;">\n' +
        '                    <div style="width: 12px; height: 12px; border-radius: 3px; background-color: rgba(255,255,255,0.2);"></div>\n' +
        '                    <div style="font-size: 10px; font-weight: 600; color: white;">Webhook</div>\n' +
        '                </div>\n' +
        '                <div style="font-size: 9px; color: rgba(255,255,255,0.4);">Listens for new entries</div>\n' +
        '            </div>\n' +
        '            <div style="position: absolute; top: 140px; left: 100px; width: 140px; padding: 12px; border-radius: 8px; border: 1px solid rgba(189, 78, 255, 0.3); background-color: rgba(189, 78, 255, 0.05); display: flex; flex-direction: column; gap: 8px; z-index: 10;">\n' +
        '                <div style="display: flex; align-items: center; gap: 6px;">\n' +
        '                    <div style="width: 12px; height: 12px; border-radius: 3px; background-color: rgba(189, 78, 255, 0.6);"></div>\n' +
        '                    <div style="font-size: 10px; font-weight: 600; color: #c96ef0;">Transform</div>\n' +
        '                </div>\n' +
        '                <div style="font-size: 9px; color: rgba(255,255,255,0.4);">Format data structure</div>\n' +
        '            </div>\n' +
        '            <div style="position: absolute; top: 40px; right: 20px; width: 140px; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.02); display: flex; flex-direction: column; gap: 8px; z-index: 10;">\n' +
        '                <div style="display: flex; align-items: center; gap: 6px;">\n' +
        '                    <div style="width: 12px; height: 12px; border-radius: 3px; background-color: rgba(255,255,255,0.2);"></div>\n' +
        '                    <div style="font-size: 10px; font-weight: 600; color: white;">Database</div>\n' +
        '                </div>\n' +
        '                <div style="font-size: 9px; color: rgba(255,255,255,0.4);">Insert new records</div>\n' +
        '            </div>\n' +
        '            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;">\n' +
        '                <path d="M 90 95 C 90 120, 170 115, 170 140" fill="none" stroke="rgba(189, 78, 255, 0.5)" stroke-width="2" stroke-dasharray="4 4" style="animation: pulsePath 1s linear infinite;" />\n' +
        '                <path d="M 170 200 C 170 230, 290 150, 290 95" fill="none" stroke="rgba(189, 78, 255, 0.5)" stroke-width="2" stroke-dasharray="4 4" style="animation: pulsePath 1s linear infinite reverse;" />\n' +
        '            </svg>\n' +
        '            <div style="position: absolute; bottom: 16px; left: 16px; right: 16px; padding: 10px; border-radius: 6px; background-color: rgba(0,0,0,0.4); border: 1px solid rgb(34,34,34); display: flex; flex-direction: column; gap: 4px;">\n' +
        '                <div style="font-size: 8px; color: rgba(255,255,255,0.3); font-family: monospace;">> [14:02:44] Webhook received payload (2.4kb)</div>\n' +
        '                <div style="font-size: 8px; color: #c96ef0; font-family: monospace;">> [14:02:45] Transformation successful. Mapped 14 fields.</div>\n' +
        '                <div style="font-size: 8px; color: rgba(255,255,255,0.3); font-family: monospace;">> [14:02:46] Pushing to Database...</div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
        
        indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndexHTML + 1);
        fs.writeFileSync('index.html', indexHtml, 'utf8');
        console.log('Updated index.html');
    }
}

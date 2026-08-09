const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('scripts/xELU-v22.mjs', 'utf8');

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
                @keyframes pulseLine {
                    0% { height: 0%; opacity: 0; }
                    50% { height: 100%; opacity: 1; }
                    100% { height: 100%; opacity: 0; }
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
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0"
        },
        children: [
            h("div", {
                style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgb(34,34,34)", backgroundColor: "transparent" },
                children: [
                    h("div", {
                        style: { display: "flex", gap: "10px", alignItems: "center" },
                        children: [
                            h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(189, 78, 255, 0.4)" } }),
                            h("div", { style: { fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,0.9)", letterSpacing: "0.5px" }, children: "Data Pipeline" })
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
                style: { flex: 1, padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
                children: [
                    // Step 1
                    h("div", {
                        style: { width: "180px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", gap: "12px" },
                        children: [
                            h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.1)" } }),
                            h("div", {
                                style: { display: "flex", flexDirection: "column", gap: "4px" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "white" }, children: "Webhook" }),
                                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)" }, children: "Data received" })
                                ]
                            })
                        ]
                    }),
                    
                    // Connector
                    h("div", {
                        style: { width: "2px", height: "16px", backgroundColor: "rgba(255,255,255,0.05)", position: "relative" },
                        children: h("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "#c96ef0", animation: "pulseLine 2s infinite" } })
                    }),
                    
                    // Step 2
                    h("div", {
                        style: { width: "180px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(189, 78, 255, 0.4)", backgroundColor: "rgba(189, 78, 255, 0.05)", display: "flex", alignItems: "center", gap: "12px" },
                        children: [
                            h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(189, 78, 255, 0.8)", boxShadow: "0 0 8px rgba(189, 78, 255, 0.5)" } }),
                            h("div", {
                                style: { display: "flex", flexDirection: "column", gap: "4px" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "#c96ef0" }, children: "Transform" }),
                                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)" }, children: "Formatting JSON" })
                                ]
                            })
                        ]
                    }),
                    
                    // Connector
                    h("div", {
                        style: { width: "2px", height: "16px", backgroundColor: "rgba(255,255,255,0.05)", position: "relative" },
                        children: h("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", backgroundColor: "#c96ef0", animation: "pulseLine 2s infinite 1s" } })
                    }),
                    
                    // Step 3
                    h("div", {
                        style: { width: "180px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", gap: "12px" },
                        children: [
                            h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.1)" } }),
                            h("div", {
                                style: { display: "flex", flexDirection: "column", gap: "4px" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "white" }, children: "Database" }),
                                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)" }, children: "Syncing records" })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const newCode = code.substring(0, childrenStart) + newChildren + code.substring(endIndex + 1);
fs.writeFileSync('scripts/xELU-v23.mjs', newCode, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v22.mjs')) {
                content = content.replace(/xELU-v22\.mjs/g, 'xELU-v23.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v22.mjs')) {
    fs.unlinkSync('scripts/xELU-v22.mjs');
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
        '        @keyframes pulseLine {\n' +
        '            0% { height: 0%; opacity: 0; }\n' +
        '            50% { height: 100%; opacity: 1; }\n' +
        '            100% { height: 100%; opacity: 0; }\n' +
        '        }\n' +
        '        .workflow-minimal * { box-sizing: border-box; }\n' +
        '    </style>\n' +
        '    <div class="workflow-minimal" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #050505; overflow: hidden; font-family: \'Inter\', sans-serif; color: white; padding: 0;">\n' +
        '        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid rgb(34,34,34); background-color: transparent;">\n' +
        '            <div style="display: flex; gap: 10px; align-items: center;">\n' +
        '                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(189, 78, 255, 0.4);"></div>\n' +
        '                <div style="font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.9); letter-spacing: 0.5px;">Data Pipeline</div>\n' +
        '            </div>\n' +
        '            <div style="display: flex; gap: 8px; align-items: center;">\n' +
        '                <div style="width: 6px; height: 6px; border-radius: 50%; background-color: #27c93f; box-shadow: 0 0 5px #27c93f;"></div>\n' +
        '                <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Running</div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div style="flex: 1; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">\n' +
        '            <div style="width: 180px; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.02); display: flex; align-items: center; gap: 12px;">\n' +
        '                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.1);"></div>\n' +
        '                <div style="display: flex; flex-direction: column; gap: 4px;">\n' +
        '                    <div style="font-size: 11px; font-weight: 600; color: white;">Webhook</div>\n' +
        '                    <div style="font-size: 9px; color: rgba(255,255,255,0.4);">Data received</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div style="width: 2px; height: 16px; background-color: rgba(255,255,255,0.05); position: relative;">\n' +
        '                <div style="position: absolute; top: 0; left: 0; width: 100%; background-color: #c96ef0; animation: pulseLine 2s infinite;"></div>\n' +
        '            </div>\n' +
        '            <div style="width: 180px; padding: 12px; border-radius: 8px; border: 1px solid rgba(189, 78, 255, 0.4); background-color: rgba(189, 78, 255, 0.05); display: flex; align-items: center; gap: 12px;">\n' +
        '                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(189, 78, 255, 0.8); box-shadow: 0 0 8px rgba(189, 78, 255, 0.5);"></div>\n' +
        '                <div style="display: flex; flex-direction: column; gap: 4px;">\n' +
        '                    <div style="font-size: 11px; font-weight: 600; color: #c96ef0;">Transform</div>\n' +
        '                    <div style="font-size: 9px; color: rgba(255,255,255,0.4);">Formatting JSON</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div style="width: 2px; height: 16px; background-color: rgba(255,255,255,0.05); position: relative;">\n' +
        '                <div style="position: absolute; top: 0; left: 0; width: 100%; background-color: #c96ef0; animation: pulseLine 2s infinite 1s;"></div>\n' +
        '            </div>\n' +
        '            <div style="width: 180px; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(255,255,255,0.02); display: flex; align-items: center; gap: 12px;">\n' +
        '                <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.1);"></div>\n' +
        '                <div style="display: flex; flex-direction: column; gap: 4px;">\n' +
        '                    <div style="font-size: 11px; font-weight: 600; color: white;">Database</div>\n' +
        '                    <div style="font-size: 9px; color: rgba(255,255,255,0.4);">Syncing records</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
        
        indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndexHTML + 1);
        fs.writeFileSync('index.html', indexHtml, 'utf8');
        console.log('Updated index.html');
    }
}

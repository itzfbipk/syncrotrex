const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('scripts/xELU-v20.mjs', 'utf8');

const target = '"data-framer-name": `Personal assistant`,';
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
                @keyframes barGrow {
                    0% { transform: scaleY(0.1); }
                    100% { transform: scaleY(1); }
                }
                .saas-dash-minimal * { box-sizing: border-box; }
            \`
        }
    }),
    h("div", {
        className: "saas-dash-minimal",
        style: {
            display: "flex", width: "100%", height: "100%",
            backgroundColor: "#050505", overflow: "hidden", 
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0",
            position: "relative"
        },
        children: [
            h("div", {
                style: { width: "45px", borderRight: "1px solid rgb(34,34,34)", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: "16px" },
                children: [
                    h("div", { style: { width: "20px", height: "20px", borderRadius: "4px", backgroundColor: "rgba(189, 78, 255, 0.15)", border: "1px solid rgba(189, 78, 255, 0.4)", marginBottom: "10px" } }),
                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.05)" } })
                ]
            }),
            h("div", {
                style: { flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "20px" },
                children: [
                    h("div", {
                        style: { display: "flex", flexDirection: "column", gap: "8px" },
                        children: [
                            h("div", { style: { fontSize: "14px", fontWeight: "600", color: "white" }, children: "Workspace Overview" }),
                            h("div", {
                                style: { display: "flex", gap: "16px", fontSize: "10px", color: "rgba(255,255,255,0.4)" },
                                children: [
                                    h("span", { children: "Active Users: 1,284" }),
                                    h("span", { children: "Projects: 24" }),
                                    h("span", { children: "Revenue: $18,420" })
                                ]
                            })
                        ]
                    }),
                    h("div", {
                        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
                        children: [
                            h("div", {
                                style: { height: "70px", borderRadius: "8px", border: "1px solid rgb(34,34,34)", backgroundColor: "transparent", padding: "12px", display: "flex", flexDirection: "column", justify-content: "space-between" },
                                children: [
                                    h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" }, children: "MRR Growth" }),
                                    h("div", { style: { fontSize: "16px", fontWeight: "600", color: "#c96ef0" }, children: "+24.8%" })
                                ]
                            }),
                            h("div", {
                                style: { height: "70px", borderRadius: "8px", border: "1px solid rgb(34,34,34)", backgroundColor: "transparent", padding: "12px", display: "flex", flexDirection: "column", justify-content: "space-between" },
                                children: [
                                    h("div", { style: { fontSize: "10px", color: "rgba(255,255,255,0.5)" }, children: "Churn Rate" }),
                                    h("div", { style: { fontSize: "16px", fontWeight: "600", color: "white" }, children: "1.2%" })
                                ]
                            })
                        ]
                    }),
                    h("div", {
                        style: { flex: 1, borderRadius: "8px", border: "1px solid rgb(34,34,34)", padding: "16px", display: "flex", alignItems: "flex-end", gap: "8px", justifyContent: "space-between" },
                        children: [0.3, 0.5, 0.4, 0.7, 0.6, 0.9, 0.8, 1.0].map((hVal, i) => 
                            h("div", {
                                key: i,
                                style: {
                                    flex: 1,
                                    height: \`\${hVal * 100}%\`,
                                    backgroundColor: i === 7 ? "rgba(189, 78, 255, 0.4)" : "rgba(255,255,255,0.05)",
                                    borderRadius: "2px 2px 0 0",
                                    transformOrigin: "bottom",
                                    animation: \`barGrow 1s ease-out \${i * 0.1}s both\`
                                }
                            })
                        )
                    })
                ]
            })
        ]
    })
]`;

const newCode = code.substring(0, childrenStart) + newChildren + code.substring(endIndex + 1);
fs.writeFileSync('scripts/xELU-v21.mjs', newCode, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v20.mjs')) {
                content = content.replace(/xELU-v20\.mjs/g, 'xELU-v21.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v20.mjs')) {
    fs.unlinkSync('scripts/xELU-v20.mjs');
}
updateReferences('.');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const targetStrHTML = 'data-framer-name="Personal assistant"';
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
        const newHtml = '<div class="framer-1a43s46" data-framer-name="Personal assistant" style="background-color: rgb(0, 0, 0); border-radius: 12px; opacity: 1;">\n' +
        '    <style>\n' +
        '        @keyframes barGrow {\n' +
        '            0% { transform: scaleY(0.1); }\n' +
        '            100% { transform: scaleY(1); }\n' +
        '        }\n' +
        '        .saas-dash-minimal * { box-sizing: border-box; }\n' +
        '    </style>\n' +
        '    <div class="saas-dash-minimal" style="display: flex; width: 100%; height: 100%; background-color: #050505; overflow: hidden; font-family: \'Inter\', sans-serif; color: white; padding: 0; position: relative;">\n' +
        '        <div style="width: 45px; border-right: 1px solid rgb(34,34,34); display: flex; flex-direction: column; align-items: center; padding: 16px 0; gap: 16px;">\n' +
        '            <div style="width: 20px; height: 20px; border-radius: 4px; background-color: rgba(189, 78, 255, 0.15); border: 1px solid rgba(189, 78, 255, 0.4); margin-bottom: 10px;"></div>\n' +
        '            <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>\n' +
        '            <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>\n' +
        '            <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>\n' +
        '        </div>\n' +
        '        <div style="flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 20px;">\n' +
        '            <div style="display: flex; flex-direction: column; gap: 8px;">\n' +
        '                <div style="font-size: 14px; font-weight: 600; color: white;">Workspace Overview</div>\n' +
        '                <div style="display: flex; gap: 16px; font-size: 10px; color: rgba(255,255,255,0.4);">\n' +
        '                    <span>Active Users: 1,284</span>\n' +
        '                    <span>Projects: 24</span>\n' +
        '                    <span>Revenue: $18,420</span>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">\n' +
        '                <div style="height: 70px; border-radius: 8px; border: 1px solid rgb(34,34,34); background-color: transparent; padding: 12px; display: flex; flex-direction: column; justify-content: space-between;">\n' +
        '                    <div style="font-size: 10px; color: rgba(255,255,255,0.5);">MRR Growth</div>\n' +
        '                    <div style="font-size: 16px; font-weight: 600; color: #c96ef0;">+24.8%</div>\n' +
        '                </div>\n' +
        '                <div style="height: 70px; border-radius: 8px; border: 1px solid rgb(34,34,34); background-color: transparent; padding: 12px; display: flex; flex-direction: column; justify-content: space-between;">\n' +
        '                    <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Churn Rate</div>\n' +
        '                    <div style="font-size: 16px; font-weight: 600; color: white;">1.2%</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div style="flex: 1; border-radius: 8px; border: 1px solid rgb(34,34,34); padding: 16px; display: flex; align-items: flex-end; gap: 8px; justify-content: space-between; min-height: 80px;">\n' +
        '                <div style="flex: 1; height: 30%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 50%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 40%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 70%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 60%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 90%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 80%; background-color: rgba(255,255,255,0.05); border-radius: 2px 2px 0 0;"></div>\n' +
        '                <div style="flex: 1; height: 100%; background-color: rgba(189, 78, 255, 0.4); border-radius: 2px 2px 0 0;"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
        
        indexHtml = indexHtml.substring(0, divStart) + newHtml + indexHtml.substring(endIndexHTML + 1);
        fs.writeFileSync('index.html', indexHtml, 'utf8');
        console.log('Updated index.html');
    }
}

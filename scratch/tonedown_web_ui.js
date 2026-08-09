const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('scripts/xELU-v18.mjs', 'utf8');

const target = '"data-framer-name": `Sales and marketing`,';
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
                @keyframes subtleFloat {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-3px); }
                    100% { transform: translateY(0px); }
                }
                .web-builder-minimal * { box-sizing: border-box; }
            \`
        }
    }),
    h("div", {
        className: "web-builder-minimal",
        style: {
            display: "flex", flexDirection: "column", width: "100%", height: "100%",
            backgroundColor: "#050505", overflow: "hidden", 
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0",
            position: "relative"
        },
        children: [
            h("div", {
                style: { position: "absolute", top: "-50px", left: "20%", right: "20%", height: "100px", background: "radial-gradient(ellipse at top, rgba(189, 78, 255, 0.15), transparent 70%)", pointerEvents: "none" }
            }),
            h("div", {
                style: { display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid rgb(34,34,34)", backgroundColor: "transparent" },
                children: [
                    h("div", { style: { display: "flex", gap: "6px" }, children: [
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#333" } }),
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#333" } }),
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#333" } })
                    ]}),
                    h("div", {
                        style: { margin: "0 auto", fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" },
                        children: "syncrotrex.com / design"
                    })
                ]
            }),
            h("div", {
                style: { flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "20px" },
                children: [
                    h("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
                        children: [
                            h("div", { style: { width: "24px", height: "24px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                            h("div", { style: { display: "flex", gap: "12px" }, children: [
                                h("div", { style: { width: "30px", height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" } }),
                                h("div", { style: { width: "30px", height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" } }),
                                h("div", { style: { width: "30px", height: "4px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" } })
                            ]})
                        ]
                    }),
                    h("div", {
                        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "10px", animation: "subtleFloat 6s ease-in-out infinite" },
                        children: [
                            h("div", { style: { width: "60%", height: "14px", backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "2px" } }),
                            h("div", { style: { width: "40%", height: "6px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "2px", marginBottom: "16px" } }),
                            h("div", { style: { padding: "8px 20px", borderRadius: "4px", border: "1px solid rgba(189, 78, 255, 0.3)", backgroundColor: "rgba(189, 78, 255, 0.05)", fontSize: "10px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.5px" }, children: "Publish" })
                        ]
                    }),
                    h("div", {
                        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "auto", paddingBottom: "10px" },
                        children: [
                            h("div", {
                                style: { height: "60px", borderRadius: "6px", border: "1px solid rgb(34,34,34)", backgroundColor: "transparent", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" },
                                children: [
                                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.03)" } }),
                                    h("div", { style: { width: "50%", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.1)" } })
                                ]
                            }),
                            h("div", {
                                style: { height: "60px", borderRadius: "6px", border: "1px solid rgb(34,34,34)", backgroundColor: "transparent", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" },
                                children: [
                                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.03)" } }),
                                    h("div", { style: { width: "50%", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.1)" } })
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
fs.writeFileSync('scripts/xELU-v19.mjs', newCode, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v18.mjs')) {
                content = content.replace(/xELU-v18\.mjs/g, 'xELU-v19.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
if (fs.existsSync('scripts/xELU-v18.mjs')) {
    fs.unlinkSync('scripts/xELU-v18.mjs');
}
updateReferences('.');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const targetStrHTML = 'data-framer-name="Sales and marketing"';
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
        const newHtml = '<div class="framer-1hijlhj" data-border="true" data-framer-name="Sales and marketing" style="--border-bottom-width: 1px; --border-color: var(--token-313dd4d6-9859-4bdd-889b-954a849d13e3, rgb(34, 34, 34)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-aae92d1e-1be4-447e-8038-565c6944f982, rgb(0, 0, 0)); border-top-left-radius: 12px; border-top-right-radius: 12px; opacity: 1;">\n' +
        '    <style>\n' +
        '        @keyframes subtleFloat {\n' +
        '            0% { transform: translateY(0px); }\n' +
        '            50% { transform: translateY(-3px); }\n' +
        '            100% { transform: translateY(0px); }\n' +
        '        }\n' +
        '        .web-builder-minimal * { box-sizing: border-box; }\n' +
        '    </style>\n' +
        '    <div class="web-builder-minimal" style="display: flex; flex-direction: column; width: 100%; height: 100%; background-color: #050505; overflow: hidden; font-family: \'Inter\', sans-serif; color: white; padding: 0; position: relative;">\n' +
        '        <div style="position: absolute; top: -50px; left: 20%; right: 20%; height: 100px; background: radial-gradient(ellipse at top, rgba(189, 78, 255, 0.15), transparent 70%); pointer-events: none;"></div>\n' +
        '        <div style="display: flex; align-items: center; padding: 12px 16px; border-bottom: 1px solid rgb(34,34,34); background-color: transparent;">\n' +
        '            <div style="display: flex; gap: 6px;">\n' +
        '                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #333;"></div>\n' +
        '                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #333;"></div>\n' +
        '                <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #333;"></div>\n' +
        '            </div>\n' +
        '            <div style="margin: 0 auto; font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 0.5px;">syncrotrex.com / design</div>\n' +
        '        </div>\n' +
        '        <div style="flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 20px;">\n' +
        '            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">\n' +
        '                <div style="width: 24px; height: 24px; border-radius: 4px; background-color: rgba(255,255,255,0.05);"></div>\n' +
        '                <div style="display: flex; gap: 12px;">\n' +
        '                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>\n' +
        '                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>\n' +
        '                    <div style="width: 30px; height: 4px; background-color: rgba(255,255,255,0.1); border-radius: 2px;"></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin-top: 10px; animation: subtleFloat 6s ease-in-out infinite;">\n' +
        '                <div style="width: 60%; height: 14px; background-color: rgba(255,255,255,0.6); border-radius: 2px;"></div>\n' +
        '                <div style="width: 40%; height: 6px; background-color: rgba(255,255,255,0.2); border-radius: 2px; margin-bottom: 16px;"></div>\n' +
        '                <div style="padding: 8px 20px; border-radius: 4px; border: 1px solid rgba(189, 78, 255, 0.3); background-color: rgba(189, 78, 255, 0.05); font-size: 10px; color: rgba(255,255,255,0.7); letter-spacing: 0.5px;">Publish</div>\n' +
        '            </div>\n' +
        '            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto; padding-bottom: 10px;">\n' +
        '                <div style="height: 60px; border-radius: 6px; border: 1px solid rgb(34,34,34); background-color: transparent; padding: 12px; display: flex; flex-direction: column; gap: 8px;">\n' +
        '                    <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.03);"></div>\n' +
        '                    <div style="width: 50%; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1);"></div>\n' +
        '                </div>\n' +
        '                <div style="height: 60px; border-radius: 6px; border: 1px solid rgb(34,34,34); background-color: transparent; padding: 12px; display: flex; flex-direction: column; gap: 8px;">\n' +
        '                    <div style="width: 16px; height: 16px; border-radius: 4px; background-color: rgba(255,255,255,0.03);"></div>\n' +
        '                    <div style="width: 50%; height: 4px; border-radius: 2px; background-color: rgba(255,255,255,0.1);"></div>\n' +
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

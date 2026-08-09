const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('scripts/xELU-v17.mjs', 'utf8');

const target = '"data-framer-name": `Sales and marketing`,';
const startIndex = code.indexOf(target);
if (startIndex === -1) {
    console.log("Could not find Sales and marketing component");
    process.exit(1);
}

const childrenStartStr = 'children: [';
const childrenStart = code.indexOf(childrenStartStr, startIndex);

if (childrenStart === -1 || childrenStart > startIndex + 1000) {
    console.log("Could not reliably find children array");
    process.exit(1);
}

// Find matching closing bracket for children array
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

if (endIndex === -1) {
    console.log("Could not find closing bracket");
    process.exit(1);
}

const newChildren = `children: [
    h("style", {
        dangerouslySetInnerHTML: {
            __html: \`
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 10px rgba(189, 78, 255, 0.2); }
                    50% { box-shadow: 0 0 25px rgba(189, 78, 255, 0.8); }
                    100% { box-shadow: 0 0 10px rgba(189, 78, 255, 0.2); }
                }
                @keyframes slideUpFade {
                    from { transform: translateY(15px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(300%); }
                }
                .web-builder-container * { box-sizing: border-box; }
            \`
        }
    }),
    h("div", {
        className: "web-builder-container",
        style: {
            display: "flex", flexDirection: "column", width: "100%", height: "100%",
            backgroundColor: "#060606", overflow: "hidden", 
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0",
            position: "relative",
            backgroundImage: "radial-gradient(circle at 50% -20%, rgba(189, 78, 255, 0.25) 0%, transparent 60%)"
        },
        children: [
            h("div", {
                style: { display: "flex", alignItems: "center", padding: "10px 16px", backgroundColor: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" },
                children: [
                    h("div", { style: { display: "flex", gap: "6px" }, children: [
                        h("div", { style: { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f56" } }),
                        h("div", { style: { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffbd2e" } }),
                        h("div", { style: { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27c93f" } })
                    ]}),
                    h("div", {
                        style: { margin: "0 auto", backgroundColor: "rgba(0,0,0,0.4)", padding: "4px 20px", borderRadius: "12px", fontSize: "10px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.04)" },
                        children: "syncrotrex.com/design"
                    }),
                    h("div", { style: { display: "flex", gap: "4px" }, children: [
                        h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                        h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.05)" } })
                    ]})
                ]
            }),
            h("div", {
                style: { flex: 1, display: "flex", overflow: "hidden" },
                children: [
                    h("div", {
                        style: { width: "50px", backgroundColor: "rgba(255,255,255,0.01)", borderRight: "1px solid rgba(255,255,255,0.04)", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: "14px" },
                        children: [
                            h("div", { style: { width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "rgba(189, 78, 255, 0.3)", border: "1px solid rgba(189, 78, 255, 0.6)" } }),
                            h("div", { style: { width: "20px", height: "2px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" } }),
                            h("div", { style: { width: "22px", height: "22px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.06)" } }),
                            h("div", { style: { width: "22px", height: "22px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.03)" } }),
                            h("div", { style: { width: "22px", height: "22px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.03)" } })
                        ]
                    }),
                    h("div", {
                        style: { flex: 1, padding: "20px", display: "flex", flexDirection: "column", gap: "16px", position: "relative" },
                        children: [
                            h("div", {
                                style: { position: "absolute", top: 0, left: 0, right: 0, height: "150px", background: "linear-gradient(to bottom, transparent, rgba(189, 78, 255, 0.08) 50%, transparent)", animation: "scanline 5s linear infinite", pointerEvents: "none", zIndex: 10 }
                            }),
                            h("div", {
                                style: { padding: "24px", borderRadius: "14px", background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", alignItems: "center", animation: "slideUpFade 0.6s ease-out forwards", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" },
                                children: [
                                    h("div", { style: { display: "flex", gap: "8px", marginBottom: "16px" }, children: [
                                        h("div", { style: { width: "12px", height: "12px", borderRadius: "50%", background: "linear-gradient(135deg, #c96ef0, #6a00ff)", boxShadow: "0 0 10px rgba(201, 110, 240, 0.6)" } }),
                                        h("div", { style: { fontSize: "10px", fontWeight: "700", color: "#c96ef0", letterSpacing: "1px" }, children: "WEB BUILDER" })
                                    ]}),
                                    h("div", { style: { width: "75%", height: "26px", borderRadius: "6px", background: "linear-gradient(90deg, #fff, rgba(255,255,255,0.5))", marginBottom: "10px" } }),
                                    h("div", { style: { width: "45%", height: "12px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.2)", marginBottom: "24px" } }),
                                    h("div", { style: { padding: "8px 28px", borderRadius: "20px", background: "linear-gradient(135deg, #c96ef0, #6a00ff)", fontSize: "12px", fontWeight: "bold", animation: "pulseGlow 2s infinite", border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 4px 15px rgba(201,110,240,0.4)" }, children: "Publish Site" })
                                ]
                            }),
                            h("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", animation: "slideUpFade 0.6s ease-out 0.2s forwards", opacity: 0 },
                                children: [
                                    h("div", {
                                        style: { height: "76px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(189, 78, 255, 0.5)", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" },
                                        children: [
                                            h("div", { style: { width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "rgba(189, 78, 255, 0.25)" } }),
                                            h("div", { style: { width: "60%", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.3)" } })
                                        ]
                                    }),
                                    h("div", {
                                        style: { height: "76px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" },
                                        children: [
                                            h("div", { style: { width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.08)" } }),
                                            h("div", { style: { width: "50%", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.15)" } })
                                        ]
                                    })
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
fs.writeFileSync('scripts/xELU-v18.mjs', newCode, 'utf8');

// Update References in files
function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v17.mjs')) {
                content = content.replace(/xELU-v17\.mjs/g, 'xELU-v18.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated reference in ' + fullPath);
            }
        }
    });
}

if (fs.existsSync('scripts/xELU-v17.mjs')) {
    fs.unlinkSync('scripts/xELU-v17.mjs'); 
}
updateReferences('.');

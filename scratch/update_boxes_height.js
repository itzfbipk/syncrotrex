const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v37.mjs', 'utf8');
let htmlCode = fs.readFileSync('index.html', 'utf8');

const box1V36 = `
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
        style: { width: "100%", padding: "12px 16px", display: "flex", flexDirection: "column", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box", borderTop: "1px solid rgba(255,255,255,0.05)" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "6px", marginBottom: "8px" },
                children: [
                    h("div", { style: { fontSize: "11px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px", lineHeight: 1 }, children: "Strategic Roadmap" }),
                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", lineHeight: 1 }, children: "PHASE 1" })
                ]
            }),
            
            h("div", {
                style: { position: "relative", flex: 1, paddingLeft: "12px" },
                children: [
                    h("div", { style: { position: "absolute", left: "14px", top: "6px", bottom: "10px", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                    h("div", { style: { position: "absolute", left: "14px", top: "6px", width: "1px", backgroundColor: "#c96ef0", animation: "drawLine 1s ease-out forwards" } }),
                    
                    h("div", {
                        style: { position: "relative", display: "flex", alignItems: "flex-start", marginBottom: "6px", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.2s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "0px", top: "4px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#c96ef0", animation: "pulseDotPurple 2s infinite", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column", width: "100%" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "white", lineHeight: 1 }, children: "Discovery & Requirements" }),
                                    h("div", {
                                        style: { padding: "4px 8px", backgroundColor: "rgba(201, 110, 240, 0.05)", border: "1px solid rgba(201, 110, 240, 0.2)", borderRadius: "6px", marginTop: "4px" },
                                        children: [
                                            h("div", { style: { fontSize: "9px", color: "#e3a8ff", marginBottom: "4px", lineHeight: 1 }, children: "Analyzing workflow..." }),
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
                        style: { position: "relative", display: "flex", alignItems: "flex-start", marginBottom: "6px", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.4s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "1px", top: "4px", width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "400", color: "rgba(255,255,255,0.4)", lineHeight: 1 }, children: "Technical Architecture" })
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
                                    h("div", { style: { fontSize: "11px", fontWeight: "400", color: "rgba(255,255,255,0.4)", lineHeight: 1 }, children: "Implementation Plan" })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
`;

const box1V35 = `
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
        style: { height: "100%", width: "100%", padding: "16px", display: "flex", flexDirection: "column", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box", borderTop: "1px solid rgba(255,255,255,0.05)" },
        children: [
            h("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px", marginBottom: "12px" },
                children: [
                    h("div", { style: { fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px", lineHeight: 1 }, children: "Strategic Roadmap" }),
                    h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", lineHeight: 1 }, children: "PHASE 1" })
                ]
            }),
            
            h("div", {
                style: { position: "relative", flex: 1, paddingLeft: "12px" },
                children: [
                    h("div", { style: { position: "absolute", left: "14px", top: "6px", bottom: "10px", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" } }),
                    h("div", { style: { position: "absolute", left: "14px", top: "6px", width: "1px", backgroundColor: "#c96ef0", animation: "drawLine 1s ease-out forwards" } }),
                    
                    h("div", {
                        style: { position: "relative", display: "flex", alignItems: "flex-start", marginBottom: "8px", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.2s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "0px", top: "4px", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#c96ef0", animation: "pulseDotPurple 2s infinite", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column", width: "100%" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "600", color: "white", lineHeight: 1 }, children: "Discovery & Requirements" }),
                                    h("div", {
                                        style: { padding: "6px 10px", backgroundColor: "rgba(201, 110, 240, 0.05)", border: "1px solid rgba(201, 110, 240, 0.2)", borderRadius: "6px", marginTop: "6px" },
                                        children: [
                                            h("div", { style: { fontSize: "9px", color: "#e3a8ff", marginBottom: "4px", lineHeight: 1 }, children: "Analyzing workflow..." }),
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
                        style: { position: "relative", display: "flex", alignItems: "flex-start", marginBottom: "8px", opacity: 0, animation: "slideInRight 0.5s ease-out forwards 0.4s" },
                        children: [
                            h("div", { style: { position: "absolute", left: "1px", top: "4px", width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", zIndex: 2 } }),
                            h("div", {
                                style: { marginLeft: "20px", display: "flex", flexDirection: "column" },
                                children: [
                                    h("div", { style: { fontSize: "11px", fontWeight: "400", color: "rgba(255,255,255,0.4)", lineHeight: 1 }, children: "Technical Architecture" })
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
                                    h("div", { style: { fontSize: "11px", fontWeight: "400", color: "rgba(255,255,255,0.4)", lineHeight: 1 }, children: "Implementation Plan" })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
`;

// Replace Box 1 in JS
code = code.replace(box1V36, box1V35);

const box2React = `
    h("style", { dangerouslySetInnerHTML: { __html: \`
        @keyframes typeWriter {
            from { opacity: 0; transform: translateY(2px); }
            to { opacity: 1; transform: translateY(0); }
        }
    \`}}),
    h("div", {
        style: { width: "100%", height: "100%", padding: "16px", display: "flex", flexDirection: "column", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box", borderTop: "1px solid rgba(255,255,255,0.05)" },
        children: [
            h("div", {
                style: { flex: 1, backgroundColor: "#0D0D12", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", overflow: "hidden" },
                children: [
                    h("div", {
                        style: { height: "28px", backgroundColor: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", padding: "0 12px", justifyContent: "space-between" },
                        children: [
                            h("div", { style: { display: "flex", gap: "8px" }, children: [
                                h("div", { style: { width: "12px", height: "12px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px", opacity: 0.5 } }),
                                h("div", { style: { width: "12px", height: "12px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px", opacity: 0.5 } })
                            ]}),
                            h("div", { style: { fontSize: "9px", color: "rgba(255,255,255,0.3)" }, children: "automation.py" }),
                            h("div", { style: { display: "flex", gap: "4px" }, children: [
                                h("div", { style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" } }),
                                h("div", { style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)" } })
                            ]})
                        ]
                    }),
                    h("div", {
                        style: { display: "flex", flex: 1 },
                        children: [
                            h("div", {
                                style: { width: "32px", borderRight: "1px solid rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.01)", display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 0", gap: "16px" },
                                children: [
                                    h("div", { style: { width: "14px", height: "14px", border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.1)" } }),
                                    h("div", { style: { width: "14px", height: "14px", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "50%", backgroundColor: "transparent" } }),
                                    h("div", { style: { width: "14px", height: "14px", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "2px", backgroundColor: "transparent", transform: "rotate(45deg)" } })
                                ]
                            }),
                            h("div", {
                                style: { padding: "12px", fontFamily: "monospace", fontSize: "10px", lineHeight: 1.6, color: "rgba(255,255,255,0.7)", display: "flex", flexDirection: "column", gap: "4px" },
                                children: [
                                    h("div", { style: { animation: "typeWriter 0.3s ease-out forwards", opacity: 0 }, children: [h("span", { style: { color: "#c96ef0" } }, "if "), "value > self.threshold:"] }),
                                    h("div", { style: { paddingLeft: "16px", animation: "typeWriter 0.3s ease-out forwards 0.1s", opacity: 0 }, children: ["self.status = ", h("span", { style: { color: "#c96ef0" } }, '"active"')] }),
                                    h("div", { style: { paddingLeft: "16px", animation: "typeWriter 0.3s ease-out forwards 0.2s", opacity: 0 }, children: [h("span", { style: { color: "#c96ef0" } }, "return "), '"Automation triggered!"'] }),
                                    h("div", { style: { animation: "typeWriter 0.3s ease-out forwards 0.3s", opacity: 0 }, children: [h("span", { style: { color: "#c96ef0" } }, "else:")] }),
                                    h("div", { style: { paddingLeft: "16px", marginBottom: "8px", animation: "typeWriter 0.3s ease-out forwards 0.4s", opacity: 0 }, children: [h("span", { style: { color: "#c96ef0" } }, "return "), '"No action taken."'] }),
                                    h("div", { style: { animation: "typeWriter 0.3s ease-out forwards 0.5s", opacity: 0 }, children: [h("span", { style: { color: "#c96ef0" } }, "def "), h("span", { style: { color: "white" } }, "get_status"), "(self):"] }),
                                    h("div", { style: { paddingLeft: "16px", animation: "typeWriter 0.3s ease-out forwards 0.6s", opacity: 0 }, children: [h("span", { style: { color: "#c96ef0" } }, "return "), 'f"Status: {self.status}"'] })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
`;

// Replace Box 2 in JS
const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const containerStart2 = code.indexOf('className: \`framer-mmt41l-container\`,', s2Start);
const childrenStart2 = code.indexOf('children: _(', containerStart2);
let open2 = 0;
let endIndex2 = -1;
for (let i = childrenStart2 + 10; i < code.length; i++) {
    if (code[i] === '(') open2++;
    if (code[i] === ')') {
        open2--;
        if (open2 === 0) {
            endIndex2 = i;
            break;
        }
    }
}
code = code.substring(0, childrenStart2) + 'children: [\n' + box2React + '\n]' + code.substring(endIndex2 + 1);

fs.writeFileSync('scripts/xELU-v38.mjs', code, 'utf8');

// Update index.html script tags
htmlCode = htmlCode.replace(/xELU-v37\.mjs/g, 'xELU-v38.mjs');

// To ensure no height jumps, we'll strip the inner contents of framer-mmt41l-container in HTML (since the JS will mount our React component over it)
// We already replaced the inner html for framer-15bmlrg-container, so it should be fine. The JS overrides the HTML.

fs.writeFileSync('index.html', htmlCode, 'utf8');

// Also update references in all other files
function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch') || fullPath === 'index.html') return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v37.mjs')) {
                content = content.replace(/xELU-v37\.mjs/g, 'xELU-v38.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
updateReferences('.');

if (fs.existsSync('scripts/xELU-v37.mjs')) {
    fs.unlinkSync('scripts/xELU-v37.mjs');
}

console.log("Updated both Box 1 and Box 2 to be exactly 100% height!");

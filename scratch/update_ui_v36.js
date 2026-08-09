const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');
let indexHtml = fs.readFileSync('index.html', 'utf8');

const strategyReact = `
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

// Replace in JS
const target = '"data-framer-name": \`Strategy card\`,';
const startIndex = code.indexOf(target);
const containerStart = code.indexOf('className: \`framer-15bmlrg-container\`,', startIndex);

const childrenStart = code.indexOf('children: [', containerStart);
if (childrenStart === -1) {
    console.log("Could not find children array in JS");
} else {
    let open = 0;
    let endIndex = -1;
    for (let i = childrenStart + 9; i < code.length; i++) {
        if (code[i] === '[') open++;
        if (code[i] === ']') {
            open--;
            if (open === 0) {
                endIndex = i;
                break;
            }
        }
    }
    code = code.substring(0, childrenStart) + 'children: [\n' + strategyReact + '\n]' + code.substring(endIndex + 1);
    fs.writeFileSync('scripts/xELU-v36.mjs', code, 'utf8');
}

// Replace in HTML
let htmlCode = fs.readFileSync('index.html', 'utf8');

// Replace exact style strings in HTML that we injected in v35
const oldStyle = 'height: 100%; width: 100%; padding: 16px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);';
const newStyle = 'width: 100%; padding: 12px 16px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);';
htmlCode = htmlCode.replace(oldStyle, newStyle);

htmlCode = htmlCode.replace('padding-bottom: 8px; margin-bottom: 12px;', 'padding-bottom: 6px; margin-bottom: 8px;');
htmlCode = htmlCode.replace('font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9);', 'font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.9);');

htmlCode = htmlCode.replace('margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s;', 'margin-bottom: 6px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s;');
htmlCode = htmlCode.replace('margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s;', 'margin-bottom: 6px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s;');

htmlCode = htmlCode.replace('padding: 6px 10px;', 'padding: 4px 8px;');
htmlCode = htmlCode.replace('margin-top: 6px;', 'margin-top: 4px;');

fs.writeFileSync('index.html', htmlCode, 'utf8');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v35.mjs')) {
                content = content.replace(/xELU-v35\.mjs/g, 'xELU-v36.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}

if (fs.existsSync('scripts/xELU-v35.mjs')) {
    fs.unlinkSync('scripts/xELU-v35.mjs');
}
updateReferences('.');

console.log("Updated Step 1 graphic to be naturally smaller (v36)!");

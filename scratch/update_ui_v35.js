const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('scripts/xELU-v34.mjs', 'utf8');
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
        style: { width: "100%", height: "100%", padding: "16px", display: "flex", flexDirection: "column", backgroundColor: "transparent", fontFamily: "var(--framer-font-family, Satoshi, Inter, sans-serif)", boxSizing: "border-box", borderTop: "1px solid rgba(255,255,255,0.05)" },
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
<div style="height: 100%; width: 100%; padding: 16px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 12px;">
        <div style="font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.9); letter-spacing: -0.2px; line-height: 1;">Strategic Roadmap</div>
        <div style="font-size: 9px; color: rgba(255,255,255,0.4); font-family: monospace; line-height: 1;">PHASE 1</div>
    </div>
    
    <div style="position: relative; flex: 1; padding-left: 12px;">
        <div style="position: absolute; left: 14px; top: 6px; bottom: 10px; width: 1px; background-color: rgba(255,255,255,0.05);"></div>
        <div style="position: absolute; left: 14px; top: 6px; width: 1px; background-color: #c96ef0; animation: drawLine 1s ease-out forwards;"></div>
        
        <div style="position: relative; display: flex; align-items: flex-start; margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s;">
            <div style="position: absolute; left: 0px; top: 4px; width: 5px; height: 5px; border-radius: 50%; background-color: #c96ef0; animation: pulseDotPurple 2s infinite; z-index: 2;"></div>
            <div style="margin-left: 20px; display: flex; flex-direction: column; width: 100%;">
                <div style="font-size: 11px; font-weight: 600; color: white; line-height: 1;">Discovery & Requirements</div>
                <div style="padding: 6px 10px; background-color: rgba(201, 110, 240, 0.05); border: 1px solid rgba(201, 110, 240, 0.2); border-radius: 6px; margin-top: 6px;">
                    <div style="font-size: 9px; color: #e3a8ff; margin-bottom: 4px; line-height: 1;">Analyzing workflow...</div>
                    <div style="height: 2px; width: 100%; background-color: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; position: relative;">
                        <div style="position: absolute; top: 0; bottom: 0; width: 30%; background-color: #c96ef0; animation: scanningBar 1.5s ease-in-out infinite;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="position: relative; display: flex; align-items: flex-start; margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s;">
            <div style="position: absolute; left: 1px; top: 4px; width: 3px; height: 3px; border-radius: 50%; background-color: rgba(255,255,255,0.2); z-index: 2;"></div>
            <div style="margin-left: 20px; display: flex; flex-direction: column;">
                <div style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); line-height: 1;">Technical Architecture</div>
            </div>
        </div>
        
        <div style="position: relative; display: flex; align-items: flex-start; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.6s;">
            <div style="position: absolute; left: 1px; top: 4px; width: 3px; height: 3px; border-radius: 50%; background-color: rgba(255,255,255,0.2); z-index: 2;"></div>
            <div style="margin-left: 20px; display: flex; flex-direction: column;">
                <div style="font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.4); line-height: 1;">Implementation Plan</div>
            </div>
        </div>
    </div>
</div>
`;

// REPLACE IN JS
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
    fs.writeFileSync('scripts/xELU-v35.mjs', code, 'utf8');
}

// REPLACE IN HTML
const targetStrHTML = 'data-framer-name="Strategy card"';
const startIndexHTML = indexHtml.indexOf(targetStrHTML);
const containerStrHTML = 'class="framer-15bmlrg-container"';
const containerStartHTML = indexHtml.indexOf(containerStrHTML, startIndexHTML);

const childrenStartHTML = indexHtml.indexOf('>', containerStartHTML) + 1;
let openHTML = 0;
let endIndexHTML = -1;
for(let i = childrenStartHTML; i < indexHtml.length; i++) {
    if(indexHtml.substring(i, i+4) === '<div') openHTML++;
    else if(indexHtml.substring(i, i+6) === '</div>') {
        if(openHTML === 0) {
            endIndexHTML = i;
            break;
        }
        openHTML--;
    }
}

if (endIndexHTML !== -1) {
    // Wait, the children of framer-15bmlrg-container is now `<style>...<div>...</div>`.
    // My previous script replaced it exactly like this.
    // Wait, <style> does not count as <div...
    // Let's just find the closing </div> of framer-15bmlrg-container!
    const outerDivEnd = indexHtml.indexOf('</div></div></div>', childrenStartHTML);
    // Since framer-15bmlrg-container is inside ssr-variant, it might be tricky.
    // I can just run a simple replacement using the known v34 HTML:
}

// Actually, let's just do a string replace on the HTML since we know exactly what we injected in v34.
let htmlCode = fs.readFileSync('index.html', 'utf8');
const oldPadding = 'padding: 20px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);';
const newPadding = 'padding: 16px; display: flex; flex-direction: column; background-color: transparent; font-family: var(--framer-font-family, Satoshi, Inter, sans-serif); box-sizing: border-box; border-top: 1px solid rgba(255,255,255,0.05);';
htmlCode = htmlCode.replace(oldPadding, newPadding);

htmlCode = htmlCode.replace('padding-bottom: 12px; margin-bottom: 16px;', 'padding-bottom: 8px; margin-bottom: 12px;');
htmlCode = htmlCode.replace('padding-bottom: 12px; margin-bottom: 16px;', 'padding-bottom: 8px; margin-bottom: 12px;');

htmlCode = htmlCode.replace('margin-bottom: 10px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s', 'margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.2s');
htmlCode = htmlCode.replace('margin-bottom: 10px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s', 'margin-bottom: 8px; opacity: 0; animation: slideInRight 0.5s ease-out forwards 0.4s');

htmlCode = htmlCode.replace('padding: 8px 10px;', 'padding: 6px 10px;');
htmlCode = htmlCode.replace('margin-bottom: 6px;', 'margin-bottom: 4px;');

// Also add line-height: 1 to all texts
htmlCode = htmlCode.replace('color: rgba(255,255,255,0.9); letter-spacing: -0.2px;', 'color: rgba(255,255,255,0.9); letter-spacing: -0.2px; line-height: 1;');
htmlCode = htmlCode.replace('color: rgba(255,255,255,0.4); font-family: monospace;', 'color: rgba(255,255,255,0.4); font-family: monospace; line-height: 1;');
htmlCode = htmlCode.replace('color: white;', 'color: white; line-height: 1;');
htmlCode = htmlCode.replace('color: rgba(255,255,255,0.4);', 'color: rgba(255,255,255,0.4); line-height: 1;');

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
            if (content.includes('xELU-v34.mjs')) {
                content = content.replace(/xELU-v34\.mjs/g, 'xELU-v35.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}

if (fs.existsSync('scripts/xELU-v34.mjs')) {
    fs.unlinkSync('scripts/xELU-v34.mjs');
}
updateReferences('.');

console.log("Updated Step 1 graphic to fit within 180px strictly (v35)!");

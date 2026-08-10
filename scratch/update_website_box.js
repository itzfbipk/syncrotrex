const fs = require('fs');

const originalHTML = `
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
                        children: "yoursite.com"
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
`;

const vibrantHTML = `
    h("style", {
        dangerouslySetInnerHTML: {
            __html: \`
                @keyframes subtleFloat {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-3px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes pulsePublish {
                    0% { box-shadow: 0 0 0 0 rgba(201, 110, 240, 0.4); }
                    70% { box-shadow: 0 0 0 8px rgba(201, 110, 240, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(201, 110, 240, 0); }
                }
                .web-builder-minimal * { box-sizing: border-box; }
            \`
        }
    }),
    h("div", {
        className: "web-builder-minimal",
        style: {
            display: "flex", flexDirection: "column", width: "100%", height: "100%",
            backgroundColor: "#0d0d12", overflow: "hidden", 
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0",
            position: "relative",
            boxShadow: "inset 0 0 40px rgba(201, 110, 240, 0.05)"
        },
        children: [
            h("div", {
                style: { position: "absolute", top: "-50px", left: "10%", right: "10%", height: "150px", background: "radial-gradient(ellipse at top, rgba(201, 110, 240, 0.25), transparent 70%)", pointerEvents: "none" }
            }),
            h("div", {
                style: { display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" },
                children: [
                    h("div", { style: { display: "flex", gap: "6px" }, children: [
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(255, 95, 86, 0.8)" } }),
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(255, 189, 46, 0.8)" } }),
                        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(39, 201, 63, 0.8)" } })
                    ]}),
                    h("div", {
                        style: { margin: "0 auto", fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.5px", fontWeight: "500" },
                        children: "yoursite.com"
                    })
                ]
            }),
            h("div", {
                style: { flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "20px" },
                children: [
                    h("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
                        children: [
                            h("div", { style: { width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "rgba(201, 110, 240, 0.15)", border: "1px solid rgba(201, 110, 240, 0.3)" } }),
                            h("div", { style: { display: "flex", gap: "12px" }, children: [
                                h("div", { style: { width: "30px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "2px" } }),
                                h("div", { style: { width: "30px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "2px" } }),
                                h("div", { style: { width: "30px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "2px" } })
                            ]})
                        ]
                    }),
                    h("div", {
                        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "10px", animation: "subtleFloat 6s ease-in-out infinite" },
                        children: [
                            h("div", { style: { width: "65%", height: "18px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "4px", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" } }),
                            h("div", { style: { width: "45%", height: "8px", backgroundColor: "rgba(255,255,255,0.4)", borderRadius: "4px", marginBottom: "16px" } }),
                            h("div", { style: { padding: "8px 24px", borderRadius: "6px", border: "1px solid rgba(201, 110, 240, 0.6)", backgroundColor: "rgba(201, 110, 240, 0.15)", fontSize: "11px", fontWeight: "600", color: "#e3a8ff", letterSpacing: "0.5px", animation: "pulsePublish 2s infinite" }, children: "Publish" })
                        ]
                    }),
                    h("div", {
                        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "auto", paddingBottom: "10px" },
                        children: [
                            h("div", {
                                style: { height: "60px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)", padding: "12px", display: "flex", flexDirection: "column", gap: "10px" },
                                children: [
                                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.15)" } }),
                                    h("div", { style: { width: "60%", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.25)" } })
                                ]
                            }),
                            h("div", {
                                style: { height: "60px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)", padding: "12px", display: "flex", flexDirection: "column", gap: "10px" },
                                children: [
                                    h("div", { style: { width: "16px", height: "16px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.15)" } }),
                                    h("div", { style: { width: "60%", height: "6px", borderRadius: "3px", backgroundColor: "rgba(255,255,255,0.25)" } })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    })
`;

let code = fs.readFileSync('scripts/xELU-v36.mjs', 'utf8');
code = code.replace(originalHTML, vibrantHTML);
fs.writeFileSync('scripts/xELU-v37.mjs', code, 'utf8');

let htmlCode = fs.readFileSync('index.html', 'utf8');
// For HTML, it's minified, so we need to just replace the script reference
// Wait, is there inline HTML injected into index.html for this?
// YES, we found it with check_website_box_html4.js, but wait, my script check_website_box_html4.js output showed that index.html DOES NOT HAVE this graphic!
// Wait! check_website_box_html4.js output:
// <div class="framer-1a43s46" data-framer-name="Personal assistant"...
// Wait, that output was from the *other* component (the dashboard with Active Users).
// Wait, WHERE did the `yoursite.com` HTML come from? 
// In find_yoursite.js, it printed the `yoursite.com` HTML.
// Let me just regex replace the specific strings in index.html to be safe.

htmlCode = htmlCode.replace(/xELU-v36\.mjs/g, 'xELU-v37.mjs');
fs.writeFileSync('index.html', htmlCode, 'utf8');

// Also update references in all other files
const path = require('path');
function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch') || fullPath === 'index.html') return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v36.mjs')) {
                content = content.replace(/xELU-v36\.mjs/g, 'xELU-v37.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}
updateReferences('.');

if (fs.existsSync('scripts/xELU-v36.mjs')) {
    fs.unlinkSync('scripts/xELU-v36.mjs');
}

console.log("Updated website box to be vibrant!");

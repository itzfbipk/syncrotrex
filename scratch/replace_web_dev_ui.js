const fs = require('fs');

const code = fs.readFileSync('scripts/xELU-v16.mjs', 'utf8');

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

// Start scanning from the '[' character
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
    h("div", {
        style: {
            display: "flex", flexDirection: "column", width: "100%", height: "100%",
            backgroundColor: "#111", overflow: "hidden", 
            fontFamily: "'Inter', sans-serif", color: "white", padding: "0"
        },
        children: [
            h("div", {
                style: { display: "flex", alignItems: "center", padding: "12px 16px", backgroundColor: "#1e1e1e", borderBottom: "1px solid rgba(255,255,255,0.05)" },
                children: [
                    h("div", { style: { display: "flex", gap: "6px" }, children: [
                        h("div", { style: { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f56" } }),
                        h("div", { style: { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffbd2e" } }),
                        h("div", { style: { width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27c93f" } })
                    ]}),
                    h("div", {
                        style: { margin: "0 auto", backgroundColor: "#000", padding: "4px 16px", borderRadius: "12px", fontSize: "10px", color: "#888", border: "1px solid rgba(255,255,255,0.1)" },
                        children: "syncrotrex.com/preview"
                    })
                ]
            }),
            h("div", {
                style: { flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: "20px" },
                children: [
                    h("div", {
                        style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                        children: [
                            h("div", { style: { width: "30px", height: "30px", backgroundColor: "#c96ef0", borderRadius: "4px" } }),
                            h("div", { style: { display: "flex", gap: "12px" }, children: [
                                h("div", { style: { width: "40px", height: "6px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "3px" } }),
                                h("div", { style: { width: "40px", height: "6px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "3px" } }),
                                h("div", { style: { width: "40px", height: "6px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "3px" } })
                            ]})
                        ]
                    }),
                    h("div", {
                        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "30px" },
                        children: [
                            h("div", { style: { width: "70%", height: "20px", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "4px" } }),
                            h("div", { style: { width: "50%", height: "8px", backgroundColor: "rgba(255,255,255,0.5)", borderRadius: "4px" } }),
                            h("div", { style: { marginTop: "16px", padding: "10px 24px", background: "linear-gradient(to right, #c96ef0, #df7afe)", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }, children: "Launch Site" })
                        ]
                    }),
                    h("div", {
                        style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "30px" },
                        children: [
                            h("div", { style: { height: "70px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" } }),
                            h("div", { style: { height: "70px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" } }),
                            h("div", { style: { height: "70px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" } })
                        ]
                    })
                ]
            })
        ]
    })
]`;

const newCode = code.substring(0, childrenStart) + newChildren + code.substring(endIndex + 1);

fs.writeFileSync('scripts/xELU-v17.mjs', newCode, 'utf8');
console.log("Replaced Web Dev UI successfully.");

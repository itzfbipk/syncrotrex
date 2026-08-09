const fs = require('fs');

const path = 'scripts/xELU-v26.mjs';
let code = fs.readFileSync(path, 'utf8');

// Replace:
//                             h("stop", { offset: "100%", stopColor: "rgba(39,201,63,0)" })
//                         ])})
// With:
//                             h("stop", { offset: "100%", stopColor: "rgba(39,201,63,0)" })
//                         ]})})

code = code.replace(
    'h("stop", { offset: "100%", stopColor: "rgba(39,201,63,0)" })\n                        ]})',
    'h("stop", { offset: "100%", stopColor: "rgba(39,201,63,0)" })\n                        ]})})'
);

// Actually, wait, let's just do a regex replace to be safe.
code = code.replace(/h\("stop", { offset: "100%", stopColor: "rgba\(39,201,63,0\)" }\)\r?\n\s*\]\)\}\)/,
    'h("stop", { offset: "100%", stopColor: "rgba(39,201,63,0)" })\n                        ]})})'
);

fs.writeFileSync(path, code, 'utf8');
console.log('Fixed syntax error!');

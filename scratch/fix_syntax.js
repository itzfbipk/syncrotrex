const fs = require('fs');

const path = 'scripts/xELU-v21.mjs';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(/justify-content: "space-between"/g, 'justifyContent: "space-between"');

fs.writeFileSync(path, code, 'utf8');
console.log('Fixed syntax error in xELU-v21.mjs');

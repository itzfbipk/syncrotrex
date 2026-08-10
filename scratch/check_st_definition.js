const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Let's find "Q = e((()=>" block.
// st is the function containing Q. Let's find where "st = e((()=>" or "st=" is.
const target = "st=e(";
const idx = code.indexOf(target);
if (idx !== -1) {
    const end = code.indexOf('))', idx);
    console.log("Scope st content (part):");
    console.log(code.substring(idx, idx + 1000).replace(/\n/g, ' '));
}

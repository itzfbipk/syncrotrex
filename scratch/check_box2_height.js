const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
if (s2Start !== -1) {
    const p2Start = code.indexOf('_(P, {', s2Start);
    // Find the first height property after this P
    const rStart = code.indexOf('_(R, {', p2Start);
    if (rStart !== -1) {
        console.log(code.substring(rStart, rStart + 150));
    } else {
        console.log("No _(R, { found near AI development card P");
    }
}

const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 11037;
// We saw line 78 had "variants: {". Let's print out 2000 characters starting from "variants: {"
const idx = code.indexOf('variants: {', targetIdx);
if (idx !== -1) {
    console.log(`Found 'variants: {' at index ${idx}:`);
    console.log(code.substring(idx, idx + 1000).replace(/\n/g, ' '));
} else {
    console.log("variants: { not found.");
}

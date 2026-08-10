const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
// Dump 8000 characters before the CTA Button style tag
fs.writeFileSync('scratch/cta_button_dump.js', code.substring(targetIdx - 8000, targetIdx + 1000));
console.log("Wrote scratch/cta_button_dump.js");

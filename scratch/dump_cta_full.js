const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const target = "Q.displayName";
const idx = code.indexOf(target);
if (idx !== -1) {
    console.log(`Found Q.displayName at ${idx}`);
    // Search backward for component function start.
    // It's usually declared as `var Q = ...` or `let Q = ...` or `function Q`
    // Let's print out 8000 characters before Q.displayName
    const start = Math.max(0, idx - 8000);
    fs.writeFileSync('scratch/cta_button_source_full.js', code.substring(start, idx + 200));
    console.log(`Wrote from index ${start} to ${idx + 200}`);
}

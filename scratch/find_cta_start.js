const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// The display name assignment is: Q.displayName = "CTA Button"
// Let's find "Q.displayName"
const target = "Q.displayName";
const idx = code.indexOf(target);
if (idx !== -1) {
    console.log(`Found Q.displayName at ${idx}`);
    // Find the definition of Q.
    // It's usually preceding it. Let's look for "Q = " or similar.
    let startIdx = code.lastIndexOf('var Q', idx);
    if (startIdx === -1) {
        startIdx = code.lastIndexOf('let Q', idx);
    }
    if (startIdx === -1) {
        startIdx = code.lastIndexOf('const Q', idx);
    }
    if (startIdx === -1) {
        startIdx = idx - 5000; // fallback
    }
    console.log(`Component Q starts at ${startIdx}`);
    // Print from startIdx to idx + 200
    fs.writeFileSync('scratch/cta_button_source.js', code.substring(startIdx, idx + 200));
    console.log("Wrote scratch/cta_button_source.js");
} else {
    console.log("Q.displayName not found.");
}

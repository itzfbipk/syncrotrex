const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
// Search for he( or other variant helpers in the 9000 characters before targetIdx
const block = code.substring(targetIdx - 9000, targetIdx);
// Let's print out the code around where variants are defined, like defaultVariant
let idx = block.indexOf('defaultVariant');
if (idx !== -1) {
    console.log("Found defaultVariant in JSX block:");
    console.log(block.substring(idx - 200, idx + 600).replace(/\n/g, ' '));
} else {
    console.log("defaultVariant not found.");
}

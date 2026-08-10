const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
const block = code.substring(targetIdx - 5000, targetIdx);

// Look for declarations of U and k. E.g. "U =" or "k =" or "U," or "k,"
// Let's print out all lines in this block that contain "U" or "k" in a declaration context.
const lines = block.split('\n');
lines.forEach((line, index) => {
    if (line.includes(' = ') && (line.includes('U') || line.includes('k'))) {
        console.log(`Line ${index + 1}: ${line}`);
    }
});

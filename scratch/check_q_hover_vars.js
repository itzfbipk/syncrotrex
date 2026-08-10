const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const start = 11037;
const end = 24526;
const block = code.substring(start, end);

// Let's print out all lines in the block that contain "hover" or "gesture" or "variant"
const lines = block.split('\n');
lines.forEach((line, index) => {
    if (line.includes('hover') || line.includes('gesture') || line.includes('Variant') || line.includes('variant')) {
        console.log(`Line ${index + 1}: ${line}`);
    }
});

const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 19524; // Component start
const endIdx = 24524; // Component style start

const block = code.substring(targetIdx, endIdx);

// Let's print out lines containing "variants" or "animate" or "whileHover"
const lines = block.split('\n');
lines.forEach((line, index) => {
    if (line.includes('animate') || line.includes('while') || line.includes('variant') || line.includes('transition')) {
        console.log(`Line ${index + 1}: ${line}`);
    }
});

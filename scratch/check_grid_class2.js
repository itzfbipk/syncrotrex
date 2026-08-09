const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const s1Start = code.indexOf('"data-framer-name": \`Strategy card\`,');
const parentStart = code.lastIndexOf('className: \`', s1Start); // This is the Strategy card
const gridStart = code.lastIndexOf('className: \`', parentStart - 20); // This is the grid
const gridClassEnd = code.indexOf('\`', gridStart + 12);
const gridClass = code.substring(gridStart + 12, gridClassEnd);

console.log("Grid class: " + gridClass);

// Look for CSS definitions
const regex = new RegExp('\\.' + gridClass + '\\s*{([^}]+)}', 'g');
let match;
while ((match = regex.exec(code)) !== null) {
    console.log(match[0]);
}

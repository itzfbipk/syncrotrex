const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v36.mjs', 'utf8');

const targetLine = 25695; // 0-indexed would be 25694
const lines = code.split('\n');

console.log(lines.slice(targetLine - 50, targetLine + 50).join('\n'));

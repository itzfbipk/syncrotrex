const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v36.mjs', 'utf8');

const lines = code.split('\n');
const targetLine = 27091; // 0-indexed would be 27090

console.log(lines.slice(targetLine - 20, targetLine + 20).join('\n'));

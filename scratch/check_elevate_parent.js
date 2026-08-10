const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v36.mjs', 'utf8');

const targetLine = 27091; // 0-indexed would be 27090
const lines = code.split('\n');

console.log(lines.slice(targetLine - 60, targetLine - 20).join('\n'));

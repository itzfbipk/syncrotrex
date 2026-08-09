const fs = require('fs');

const code = fs.readFileSync('scripts/xELU-v20.mjs', 'utf8');
const idx = code.indexOf('Workspace Overview');
const sub = code.substring(Math.max(0, idx - 3000), idx);

const regex = /"data-framer-name": `([^`]+)`/g;
let match;
while ((match = regex.exec(sub)) !== null) {
    console.log(match[1]);
}

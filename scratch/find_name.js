const fs = require('fs');
let code = fs.readFileSync('scripts/xELU-v29.mjs', 'utf8');
const regex = /"data-framer-name":\s*`([^`]+)`/g;
let match;
while (match = regex.exec(code)) {
    if (match[1].includes('Discovery') || match[1].includes('Understand')) {
        console.log(match[1]);
    }
}

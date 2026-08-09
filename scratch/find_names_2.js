const fs = require('fs');
let code = fs.readFileSync('scripts/xELU-v30.mjs', 'utf8');

// The framer component names are usually defined like: `"data-framer-name": \`Discovery\``
const regex = /"data-framer-name":\s*`([^`]+)`/g;
let match;
console.log("Looking for framer names...");
while (match = regex.exec(code)) {
    console.log(match[1]);
}

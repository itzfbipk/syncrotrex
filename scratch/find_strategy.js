const fs = require('fs');
let code = fs.readFileSync('scripts/xELU-v25.mjs', 'utf8'); // Read original v25 to see how it was structured!

const regex = /"data-framer-name":\s*`([^`]+)`/g;
let match;
while (match = regex.exec(code)) {
    if (match[1].toLowerCase().includes('strategy') || match[1].toLowerCase().includes('understand') || match[1].toLowerCase().includes('discovery')) {
        console.log("MATCH:", match[1]);
    }
}

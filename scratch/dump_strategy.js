const fs = require('fs');
let code = fs.readFileSync('scripts/xELU-v25.mjs', 'utf8');

const target = '"data-framer-name": `Strategy card`,';
const startIndex = code.indexOf(target);
if (startIndex !== -1) {
    const startStr = 'children: [';
    let childrenStart = code.indexOf(startStr, startIndex);
    if (childrenStart !== -1) {
        let open = 0;
        let endIndex = -1;
        for (let i = childrenStart + startStr.indexOf('['); i < code.length; i++) {
            if (code[i] === '[') open++;
            if (code[i] === ']') {
                open--;
                if (open === 0) {
                    endIndex = i;
                    break;
                }
            }
        }
        console.log("STRATEGY CARD CHILDREN:");
        console.log(code.substring(childrenStart, endIndex + 1));
    }
}

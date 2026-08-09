const fs = require('fs');
let code = fs.readFileSync('scripts/xELU-v29.mjs', 'utf8');

const target = '"data-framer-name": `Strategy card`,';
const startIndex = code.indexOf(target);
const containerStart = code.indexOf('className: `framer-15bmlrg-container`', startIndex);

// Back up to the `_(F, {`
const blockStart = code.lastIndexOf('_(F, {', containerStart);
let open = 0;
let endIndex = -1;
for (let i = blockStart + 5; i < code.length; i++) {
    if (code[i] === '{') open++;
    if (code[i] === '}') {
        open--;
        if (open === 0) {
            for(let j = i+1; j < code.length; j++){
                if(code[j] === ')') {
                    endIndex = j;
                    break;
                }
            }
            break;
        }
    }
}
const blockStr = code.substring(blockStart, endIndex + 1);
console.log(blockStr);

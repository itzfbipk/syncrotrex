const fs = require('fs');
let code = fs.readFileSync('scripts/xELU-v25.mjs', 'utf8');

const target = '"data-framer-name": `Name and description`,';
// We need the specific one inside Strategy card.
const strategyIndex = code.indexOf('"data-framer-name": `Strategy card`,');
const targetIndex = code.indexOf(target, strategyIndex);

// Back up to the h(`div`
const blockStart = code.lastIndexOf('h(`div`, {', targetIndex);
let open = 0;
let endIndex = -1;
for (let i = blockStart + 9; i < code.length; i++) {
    if (code[i] === '{') open++;
    if (code[i] === '}') {
        open--;
        if (open === 0) {
            // Find the matching ')' for 'h('
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

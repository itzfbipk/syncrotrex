const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const target = "framer-1hhkatf";
let idx = 0;
while ((idx = code.indexOf(target, idx)) !== -1) {
    console.log(`Found '${target}' at index ${idx}:`);
    console.log(code.substring(idx - 100, idx + 150).replace(/\n/g, ' '));
    console.log('---');
    idx += target.length;
}

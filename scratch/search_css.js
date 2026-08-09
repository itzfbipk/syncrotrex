const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const class1 = 'framer-1kat19j';
const class2 = 'framer-s0rhwo';

const regex1 = new RegExp(class1 + '[^"]+"', 'g');
let match;
while ((match = regex1.exec(code)) !== null) {
    const start = Math.max(0, match.index - 50);
    console.log(code.substring(start, match.index + 100));
}

const regex2 = new RegExp(class2 + '[^"]+"', 'g');
while ((match = regex2.exec(code)) !== null) {
    const start = Math.max(0, match.index - 50);
    console.log(code.substring(start, match.index + 100));
}

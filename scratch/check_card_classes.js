const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v35.mjs', 'utf8');

const s1Start = code.indexOf('"data-framer-name": \`Strategy card\`,');
const s1ClassStart = code.lastIndexOf('className: \`', s1Start);
const s1ClassEnd = code.indexOf('\`', s1ClassStart + 12);
const s1Class = code.substring(s1ClassStart + 12, s1ClassEnd);

const s2Start = code.indexOf('"data-framer-name": \`AI development card\`,');
const s2ClassStart = code.lastIndexOf('className: \`', s2Start);
const s2ClassEnd = code.indexOf('\`', s2ClassStart + 12);
const s2Class = code.substring(s2ClassStart + 12, s2ClassEnd);

console.log("Strategy card class: " + s1Class);
console.log("AI development card class: " + s2Class);

// Look for CSS definitions in the file
const cssStart = code.indexOf(s1Class + ' {');
if (cssStart !== -1) {
    console.log(code.substring(cssStart, code.indexOf('}', cssStart) + 1));
} else {
    console.log(s1Class + " CSS not found directly.");
}

const cssStart2 = code.indexOf(s2Class + ' {');
if (cssStart2 !== -1) {
    console.log(code.substring(cssStart2, code.indexOf('}', cssStart2) + 1));
} else {
    console.log(s2Class + " CSS not found directly.");
}

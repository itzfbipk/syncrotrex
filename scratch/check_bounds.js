const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetStr = 'children: l("div", {\n                      className: `framer-1hhkatf`,';
const startIdx = code.indexOf(targetStr);
if (startIdx === -1) {
    console.log("Could not find start index");
    process.exit(1);
}

console.log("Found start at " + startIdx);

// We need to trace parentheses/brackets matching to find the exact end.
// We start from `l("div"` which is at startIdx + 10.
let openParens = 0;
let endIdx = -1;
for (let i = startIdx + 10; i < code.length; i++) {
    if (code[i] === '(') {
        openParens++;
    } else if (code[i] === ')') {
        openParens--;
        if (openParens === 0) {
            endIdx = i + 1; // include closing parenthesis
            break;
        }
    }
}

if (endIdx !== -1) {
    console.log("Found end at " + endIdx);
    const originalText = code.substring(startIdx, endIdx);
    console.log("Original Text:");
    console.log(originalText.substring(0, 300) + ' ... ' + originalText.substring(originalText.length - 300));
} else {
    console.log("Could not find matching closing parenthesis");
}

const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Find the string children: l("div", { className: `framer-1hhkatf`
const target = 'children: l("div", {\n                      className: `framer-1hhkatf`,';
const target2 = 'children: l("div", {\n                      className: "framer-1hhkatf",';

let idx = code.indexOf(target);
if (idx === -1) {
    idx = code.indexOf(target2);
}

if (idx !== -1) {
    console.log(`Found target at index ${idx}`);
    console.log(code.substring(idx, idx + 500).replace(/\n/g, ' '));
} else {
    console.log("Target not found. Let's search case insensitively or with different whitespace.");
    // Try regex
    const regex = /children\s*:\s*\w\(\s*(["'`])div\1\s*,\s*\{\s*className\s*:\s*(["'`])framer-1hhkatf\2/g;
    let match = regex.exec(code);
    if (match) {
        console.log(`Regex found match at index ${match.index}:`);
        console.log(code.substring(match.index, match.index + 500).replace(/\n/g, ' '));
    }
}

const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetStr = 'children: l("div", {\n                      className: `framer-1hhkatf`,';
const startIdx = code.indexOf(targetStr);
if (startIdx === -1) {
    console.log("Could not find start index");
    process.exit(1);
}

// Find endIdx by matching parentheses
let openParens = 0;
let endIdx = -1;
for (let i = startIdx + 10; i < code.length; i++) {
    if (code[i] === '(') {
        openParens++;
    } else if (code[i] === ')') {
        openParens--;
        if (openParens === 0) {
            endIdx = i + 1;
            break;
        }
    }
}

if (endIdx === -1) {
    console.log("Could not find end index");
    process.exit(1);
}

// Let's extract the JSX of the 1st state.
// It starts with `d(ee, {` and ends before the second child `l("div", { className: "framer-4obbbk"`
// Let's print out the exact string to be sure of the split.
const innerText = code.substring(startIdx, endIdx);
const firstStateStartIdx = innerText.indexOf('d(ee, {');
const secondStateStartIdx = innerText.indexOf('l("div", {\n                          className: `framer-4obbbk`,');

if (firstStateStartIdx === -1 || secondStateStartIdx === -1) {
    console.log("First or second state not found inside innerText");
    process.exit(1);
}

// Extract children of 1st state.
// We want to keep everything from firstStateStartIdx to the end of the 1st state div children array.
// Let's trace it.
// The 1st state div looks like:
// l("div", { className: "framer-15k178i", ..., children: [ ee_component, icon_component ] })
// We want the children array contents!
const childrenStartStr = 'children: [';
const firstChildrenStartIdx = innerText.indexOf(childrenStartStr, firstStateStartIdx);
if (firstChildrenStartIdx === -1) {
    console.log("Could not find children array inside 1st state");
    process.exit(1);
}

// Find matching closing bracket for children array
let openBrackets = 0;
let firstChildrenEndIdx = -1;
for (let i = firstChildrenStartIdx + childrenStartStr.length - 1; i < innerText.length; i++) {
    if (innerText[i] === '[') {
        openBrackets++;
    } else if (innerText[i] === ']') {
        openBrackets--;
        if (openBrackets === 0) {
            firstChildrenEndIdx = i; // exclude the bracket
            break;
        }
    }
}

if (firstChildrenEndIdx === -1) {
    console.log("Could not find matching bracket for 1st state children");
    process.exit(1);
}

const replacementChildren = innerText.substring(firstChildrenStartIdx + childrenStartStr.length, firstChildrenEndIdx);

console.log("Extracted Replacement Children:");
console.log(replacementChildren.substring(0, 300) + ' ... ' + replacementChildren.substring(replacementChildren.length - 300));

// Build replacement string
const replacement = `children: [${replacementChildren}]`;

console.log("Replacement code:");
console.log(replacement.substring(0, 300));

// Verify that it compiles/evaluates correctly by writing to a test file
const newCode = code.substring(0, startIdx) + replacement + code.substring(endIdx);
fs.writeFileSync('scratch/test_replaced_chunk.js', newCode);
console.log("Wrote test replacement to scratch/test_replaced_chunk.js");

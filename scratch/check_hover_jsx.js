const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
// Search for hover-related variables in the JSX block (about 8000 chars before targetIdx)
const block = code.substring(targetIdx - 9000, targetIdx);
let pos = 0;
while ((pos = block.indexOf('hover', pos)) !== -1) {
    console.log(`Found 'hover' in JSX block at offset ${pos}:`);
    console.log(block.substring(pos - 100, pos + 100).replace(/\n/g, ' '));
    console.log('---');
    pos += 5;
}

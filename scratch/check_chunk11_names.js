const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

// Find all definitions of "t" or "export t" or "var t" in chunk-11-v3.mjs
// Or since the file is large, let's search for where the displayName is set.
// Wait, in main-v25.mjs, the component name was imported as `t as Y`.
// Let's search for "displayName" or "defaultProps" or component registration inside chunk-11-v3.mjs.
let idx = 0;
while ((idx = code.indexOf('displayName', idx)) !== -1) {
    console.log(`Found 'displayName' in chunk-11-v3.mjs at index ${idx}:`);
    console.log(code.substring(idx - 100, idx + 150).replace(/\n/g, ' '));
    console.log('---');
    idx += 11;
}

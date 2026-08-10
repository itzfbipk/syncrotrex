const fs = require('fs');
const { execSync } = require('child_process');

try {
    // Run node with syntax-check flag on the generated file.
    // Note: since it's an ES Module (.mjs / import statements), we might want to check it with a tool or parser.
    // Actually, node --check works for ES modules if we set type: module in package.json or name it .mjs.
    // Let's write it to a temporary .mjs file and syntax check it.
    fs.writeFileSync('scratch/test_syntax.mjs', fs.readFileSync('scratch/test_replaced_chunk.js'));
    execSync('node --check scratch/test_syntax.mjs');
    console.log("Syntax is 100% correct!");
} catch (err) {
    console.error("Syntax Error found:");
    console.error(err.message || err);
}

const fs = require('fs');
const code = fs.readFileSync('scripts/xELU-v24.mjs', 'utf8');

function findAndPrint(name) {
    const idx = code.indexOf('"data-framer-name": `' + name + '`,');
    if (idx !== -1) {
        console.log("=== " + name + " ===");
        console.log(code.substring(Math.max(0, idx - 100), idx + 500));
    }
}

findAndPrint('Optimization');

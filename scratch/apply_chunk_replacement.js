const fs = require('fs');

fs.writeFileSync('scripts/chunk-11-v3.mjs', fs.readFileSync('scratch/test_replaced_chunk.js'));
console.log("Successfully wrote the modified chunk file!");

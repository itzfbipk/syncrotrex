const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

const targets = ["Book a call", "Book a free call"];
targets.forEach(t => {
    let idx = 0;
    while ((idx = code.indexOf(t, idx)) !== -1) {
        console.log(`Found '${t}' in main-v25.mjs at index ${idx}:`);
        console.log(code.substring(idx - 150, idx + 150).replace(/\n/g, ' '));
        console.log('---');
        idx += t.length;
    }
});

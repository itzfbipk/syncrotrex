const fs = require('fs');

const code = fs.readFileSync('scripts/xELU-v38.mjs', 'utf8');

const targets = ["Faizan", "Aki", "Syncrotrex - Build Smarter"];
targets.forEach(t => {
    let idx = 0;
    while ((idx = code.indexOf(t, idx)) !== -1) {
        console.log(`Found '${t}' in xELU-v38.mjs at index ${idx}`);
        const start = Math.max(0, idx - 300);
        const end = Math.min(code.length, idx + 300);
        console.log(code.substring(start, end).replace(/\n/g, ' '));
        console.log('------------------');
        idx += t.length;
    }
});

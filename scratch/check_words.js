const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const targets = ["Faizan", "Aki", "footer", "Syncrotrex"];
targets.forEach(t => {
    let idx = html.toLowerCase().indexOf(t.toLowerCase());
    console.log(`Searching for '${t}': found first at index ${idx}`);
});

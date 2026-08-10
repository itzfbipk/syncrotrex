const fs = require('fs');
const path = require('path');

const dir = 'D:/Projetcs/Syncrotrex Site (agency)';

function walk(currentDir) {
    let results = [];
    const list = fs.readdirSync(currentDir);
    list.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'scratch') {
                results = results.concat(walk(filePath));
            }
        } else {
            results.push(filePath);
        }
    });
    return results;
}

const allFiles = walk(dir);

const searchStrings = ["Schedule a call", "Choose this plan"];

allFiles.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.mjs') || file.endsWith('.json')) {
        const content = fs.readFileSync(file, 'utf8');
        searchStrings.forEach(str => {
            if (content.includes(str)) {
                console.log(`Found "${str}" in ${path.relative(dir, file)}`);
            }
        });
    }
});

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
            if (file !== 'node_modules' && file !== '.git') {
                results = results.concat(walk(filePath));
            }
        } else {
            if (filePath.endsWith('.html') || filePath.endsWith('.js')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk(dir);

let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace all occurrences of cal.com link with calendly.com link
    content = content.replace(/https:\/\/cal\.com\/syncrotrex/g, 'https://calendly.com/syncrotrex');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated links in: ${path.relative(dir, file)}`);
    }
});

console.log(`Updated ${changedFiles} files with the new Calendly link.`);

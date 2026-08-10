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
            if (filePath.endsWith('.html')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const htmlFiles = walk(dir);

let changed = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/content="\/images\/og_preview\.jpg"/g, 'content="https://syncrotrex.vercel.app/images/og_preview.jpg"');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changed++;
    }
});

console.log("Updated absolute URLs in " + changed + " files.");

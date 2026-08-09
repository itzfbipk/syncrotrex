const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

const allFiles = walk('.');

const oldChunk = 'chunk-11.mjs';
const newChunk = 'chunk-11-v2.mjs';

allFiles.forEach(file => {
    if (!fs.existsSync(file)) return; // safety check
    
    if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.mjs')) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(oldChunk)) {
            content = content.replace(new RegExp(oldChunk, 'g'), newChunk);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated reference in: ${file}`);
        }
    }
});

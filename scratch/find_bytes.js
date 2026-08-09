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

const searchStr = 'Have questions';
const searchBuf = Buffer.from(searchStr, 'utf8');

allFiles.forEach(file => {
    try {
        const buf = fs.readFileSync(file);
        if (buf.indexOf(searchBuf) !== -1) {
            console.log('Found in:', file);
        }
    } catch (e) {}
});

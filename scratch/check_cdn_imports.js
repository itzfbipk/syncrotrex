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

allFiles.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.mjs')) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Look for imports from framer CDN
        const matches = content.match(/https?:\/\/[^\s"'`]+framer[^\s"'`]*/g);
        if (matches) {
            console.log(`Found CDN URL in ${file}:`);
            matches.forEach(m => console.log('  ', m));
        }
    }
});

const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git')) return;
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

const allFiles = walk('.').filter(f => f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.mjs') || f.endsWith('.framercms'));

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.toLowerCase().includes('filling out the form') || content.toLowerCase().includes('have questions or need ai')) {
        console.log('Found CONTACT text in:', file);
    }
    if (content.toLowerCase().includes('looks like you') || content.toLowerCase().includes('off track')) {
        console.log('Found 404 text in:', file);
    }
});

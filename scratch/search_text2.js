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

const allFiles = walk('.').filter(f => f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.mjs') || f.endsWith('.framercms'));

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8').toLowerCase();
    if (content.includes('questions') && content.includes('solutions') && content.includes('filling out the form')) {
        console.log('Found ALL WORDS in:', file);
    }
});

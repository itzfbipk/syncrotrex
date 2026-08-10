const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.mjs') || fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            let idx = 0;
            while ((idx = content.indexOf('Build Smarter', idx)) !== -1) {
                console.log(`Found 'Build Smarter' in: ${fullPath} at index ${idx}`);
                console.log(content.substring(idx - 100, idx + 100).replace(/\n/g, ' '));
                idx += 13;
            }
        }
    });
}

walkDir('.');

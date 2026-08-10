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
            if (content.includes('framer-js')) {
                console.log(`Found 'framer-js' in: ${fullPath}`);
            }
        }
    });
}

walkDir('.');

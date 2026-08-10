const fs = require('fs');
const path = require('path');

const targets = ["Key Benefits", "Business Growth"];

function searchDir(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            searchDir(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.mjs') || fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            targets.forEach(target => {
                if (content.toLowerCase().includes(target.toLowerCase())) {
                    console.log(`Found "${target}" in: ${fullPath}`);
                }
            });
        }
    });
}

searchDir('.');

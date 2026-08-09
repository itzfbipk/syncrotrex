const fs = require('fs');
const path = require('path');

// 1. Replace in xELU-v19.mjs and rename to v20
let code = fs.readFileSync('scripts/xELU-v19.mjs', 'utf8');
code = code.replace(/syncrotrex\.com \/ design/g, 'yoursite.com');
fs.writeFileSync('scripts/xELU-v20.mjs', code, 'utf8');

// 2. Replace in index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/syncrotrex\.com \/ design/g, 'yoursite.com');
fs.writeFileSync('index.html', indexHtml, 'utf8');

// 3. Update References
function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v19.mjs')) {
                content = content.replace(/xELU-v19\.mjs/g, 'xELU-v20.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated reference in ' + fullPath);
            }
        }
    });
}

if (fs.existsSync('scripts/xELU-v19.mjs')) {
    fs.unlinkSync('scripts/xELU-v19.mjs');
}
updateReferences('.');

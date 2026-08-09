const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix the static HTML in index.html (and animation.html if it exists there)
        content = content.replace(/Schedule a 30 day cont/g, 'Create a new project');
        content = content.replace(/Schedule a 30 day content/g, 'Create a new project');
        content = content.replace(/Give me the price/g, 'Create a new project');
        content = content.replace(/Provide me full report/g, 'Create a new project');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + filePath);
    }
}

// Update the files that contain these texts
replaceInFile('index.html');
replaceInFile('animation.html');

// Also cache bust xELU-v14 -> xELU-v15 just in case the browser cached the previous run
if (fs.existsSync('scripts/xELU-v14.mjs')) {
    fs.renameSync('scripts/xELU-v14.mjs', 'scripts/xELU-v15.mjs');
    console.log('Renamed xELU-v14.mjs to xELU-v15.mjs');
}

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v14.mjs')) {
                content = content.replace(/xELU-v14\.mjs/g, 'xELU-v15.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated reference in ' + fullPath);
            }
        }
    });
}
updateReferences('.');

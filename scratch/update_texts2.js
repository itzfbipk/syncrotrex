const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 1. Replace Input Placeholder
        content = content.replace('View detailed analytics reports', 'Create a new project');
        
        // 2. Replace the specific "Users" button text
        // In xELU-v12.mjs, the button text is like: children:`Users`
        // In index.html, it is >Users<
        
        if (filePath.endsWith('.mjs')) {
            content = content.replace('children:`Users`', 'children:`Analytics`');
        } else if (filePath.endsWith('.html')) {
            content = content.replace('>Users<', '>Analytics<');
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + filePath);
    }
}

// Update the files that contain these texts
replaceInFile('scripts/xELU-v12.mjs');
replaceInFile('index.html');
replaceInFile('animation.html');

// Cache bust xELU-v12 to xELU-v13 to ensure changes reflect!
if (fs.existsSync('scripts/xELU-v12.mjs')) {
    fs.renameSync('scripts/xELU-v12.mjs', 'scripts/xELU-v13.mjs');
    console.log('Renamed xELU-v12.mjs to xELU-v13.mjs');
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
            if (content.includes('xELU-v12.mjs')) {
                content = content.replace(/xELU-v12\.mjs/g, 'xELU-v13.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated reference in ' + fullPath);
            }
        }
    });
}
updateReferences('.');

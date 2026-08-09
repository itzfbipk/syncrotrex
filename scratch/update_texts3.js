const fs = require('fs');

function updateFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let code = fs.readFileSync(filePath, 'utf8');

    // 1. Replace Analyze -> Analytics
    if (filePath.endsWith('.mjs')) {
        code = code.replace('children: `Analyze`', 'children: `Analytics`');
        code = code.replace('children: `research`', 'children: `Settings`');
        code = code.replace('children: `Add document`', 'children: `Create a new project`');
    } else if (filePath.endsWith('.html')) {
        code = code.replace('>Analyze<', '>Analytics<');
        code = code.replace('>research<', '>Settings<');
        code = code.replace('>Add document<', '>Create a new project<');
    }

    // 2. Replace the typing strings
    // In xELU, the strings are likely passed as an array to a Typewriter component
    // Let's find the string `Schedule a 30 day content` and replace it
    if (filePath.endsWith('.mjs')) {
        code = code.replace('`Give me the price`', '`Create a new project`');
        code = code.replace('`Schedule a 30 day content`', '`Create a new project`');
        code = code.replace('`Provide me full report`', '`Create a new project`');
    }

    fs.writeFileSync(filePath, code, 'utf8');
    console.log('Updated ' + filePath);
}

updateFile('scripts/xELU-v13.mjs');
updateFile('index.html');
updateFile('animation.html');

// Cache bust to xELU-v14
fs.renameSync('scripts/xELU-v13.mjs', 'scripts/xELU-v14.mjs');

function updateReferences(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = require('path').join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.json') || fullPath.endsWith('.mjs')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('xELU-v13.mjs')) {
                content = content.replace(/xELU-v13\.mjs/g, 'xELU-v14.mjs');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated reference in ' + fullPath);
            }
        }
    });
}
updateReferences('.');

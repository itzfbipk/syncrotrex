const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let code = fs.readFileSync(filePath, 'utf8');

    // Restore the pill to "Add document"
    // Since we replaced >Add document< with >Create a new project< in HTML
    // and children: `Add document` with children: `Create a new project` in MJS.
    // The problem is we ALSO have `Create a new project` as the typing string!
    // So we must be precise.
    
    if (filePath.endsWith('.mjs')) {
        // The pill is inside a p tag with data-styles-preset="nWaHBmz7N" (wait, no, it was a different preset)
        // Let's just do a regex replace for the Pill's children specifically.
        code = code.replace(/children:\s*`Create a new project`/g, function(match, offset, string) {
            // Check context to see if it's the pill
            let context = string.substring(offset - 100, offset + 100);
            if (context.includes('data-styles-preset') || context.includes('framer-styles-preset')) {
                return 'children: `Add document`';
            }
            return match; // keep for the array
        });
        
        // Also fix the first typing string
        code = code.replace(/`Generate a invoice`/g, '`Create a new project`');
    } else if (filePath.endsWith('.html')) {
        // In HTML, the pill is <p ...>Create a new project</p>
        code = code.replace(/>Create a new project<\/p>/g, function(match, offset, string) {
            let context = string.substring(offset - 150, offset + 50);
            if (context.includes('styles-preset')) {
                return '>Add document</p>';
            }
            return match;
        });
        code = code.replace(/Generate a invoice/g, 'Create a new project');
    }

    fs.writeFileSync(filePath, code, 'utf8');
    console.log('Fixed ' + filePath);
}

fixFile('scripts/xELU-v15.mjs');
fixFile('index.html');
fixFile('animation.html');

// Cache bust to v16
fs.renameSync('scripts/xELU-v15.mjs', 'scripts/xELU-v16.mjs');

function updateRefs(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const full = path.join(dir, file);
        if (full.includes('node_modules') || full.includes('.git') || full.includes('scratch')) return;
        
        if (fs.statSync(full).isDirectory()) {
            updateRefs(full);
        } else if (full.endsWith('.html') || full.endsWith('.json') || full.endsWith('.mjs')) {
            let content = fs.readFileSync(full, 'utf8');
            if (content.includes('xELU-v15.mjs')) {
                content = content.replace(/xELU-v15\.mjs/g, 'xELU-v16.mjs');
                fs.writeFileSync(full, content, 'utf8');
                console.log('Updated ref in ' + full);
            }
        }
    });
}
updateRefs('.');

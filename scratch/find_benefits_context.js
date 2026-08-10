const fs = require('fs');

const files = ['index.html', 'about/index.html', 'animation.html', 'scripts/xELU-v38.mjs'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    
    // We want to find matches that contain "Benefits" or "Growth" in close proximity, or just look for the text case insensitively.
    // Let's look for "Benefits" and print some context.
    let idx = 0;
    while ((idx = content.indexOf('Benefits', idx)) !== -1) {
        const start = Math.max(0, idx - 100);
        const end = Math.min(content.length, idx + 100);
        console.log(`--- MATCH IN ${file} ---`);
        console.log(content.substring(start, end).replace(/\n/g, ' '));
        idx += 8;
    }
});

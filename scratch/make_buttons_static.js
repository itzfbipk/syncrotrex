const fs = require('fs');
const path = require('path');

const chunkPath = path.join('scripts', 'chunk-11-v2.mjs');

if (fs.existsSync(chunkPath)) {
    let code = fs.readFileSync(chunkPath, 'utf8');
    
    // Replace m.div with "div" for Text Container, 1st state, 2nd state
    // We will target the specific sections of the code
    
    // 1. Text Container
    const target1 = `children: l(m.div, {\n                      className: \`framer-1hhkatf\`,`;
    const replacement1 = `children: l("div", {\n                      className: \`framer-1hhkatf\`,`;
    
    // 2. 1st state
    const target2 = `l(m.div, {\n                          className: \`framer-15k178i\`,`;
    const replacement2 = `l("div", {\n                          className: \`framer-15k178i\`,`;
    
    // 3. 2nd state
    const target3 = `l(m.div, {\n                          className: \`framer-4obbbk\`,`;
    const replacement3 = `l("div", {\n                          className: \`framer-4obbbk\`,`;
    
    if (code.includes(target1)) {
        code = code.replace(target1, replacement1);
        console.log('Replaced Text Container m.div');
    } else {
        console.log('Text Container target not found');
    }
    
    if (code.includes(target2)) {
        code = code.replace(target2, replacement2);
        console.log('Replaced 1st state m.div');
    } else {
        console.log('1st state target not found');
    }
    
    if (code.includes(target3)) {
        code = code.replace(target3, replacement3);
        console.log('Replaced 2nd state m.div');
    } else {
        console.log('2nd state target not found');
    }
    
    fs.writeFileSync(chunkPath, code, 'utf8');
    console.log('Successfully updated chunk-11-v2.mjs');
} else {
    console.log('chunk-11-v2.mjs not found');
}

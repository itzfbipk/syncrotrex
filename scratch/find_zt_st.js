const fs = require('fs');

const code = fs.readFileSync('scripts/main-v25.mjs', 'utf8');

// Find declaration of zt and st.
// They might be imported or declared like `let zt = ...` or `import zt from ...`
// Let's look for definitions around the render block.
// Let's just find the imports/declarations of zt and st.
const targets = ["zt", "st"];
targets.forEach(t => {
    let regex = new RegExp(`(?:const|let|var|import)\\s+${t}\\s*=`, 'g');
    let match;
    while ((match = regex.exec(code)) !== null) {
        console.log(`Found definition of ${t} at index ${match.index}:`);
        console.log(code.substring(match.index - 50, match.index + 200).replace(/\n/g, ' '));
    }
    
    // Also try checking if it's imported like `import { ... zt ... }` or `import zt from`
    let importRegex = new RegExp(`import\\s+[^;]*?\\b${t}\\b[^;]*?;`, 'g');
    let importMatch;
    while ((importMatch = importRegex.exec(code)) !== null) {
        console.log(`Found import of ${t}:`);
        console.log(importMatch[0].replace(/\n/g, ' '));
    }
});

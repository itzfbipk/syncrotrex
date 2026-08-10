const fs = require('fs');
const path = require('path');

const dir = 'D:/Projetcs/Syncrotrex Site (agency)';

function walk(currentDir) {
    let results = [];
    const list = fs.readdirSync(currentDir);
    list.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'scratch') {
                results = results.concat(walk(filePath));
            }
        } else {
            if (filePath.endsWith('.html')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const htmlFiles = walk(dir);

const newDesc = "Syncrotrex - Custom Software & SaaS Development Agency. We build reliable digital products that simplify workflows, improve efficiency, and give your business the tools it needs to grow.";
const newImg = "/images/og_preview.jpg";

let changed = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace descriptions
    // Match <meta name="description" content="..."> etc.
    content = content.replace(/(<meta\s+[^>]*?(?:name|property)=["'](?:description|og:description|twitter:description)["'][^>]*?content=["'])(.*?)(["'])/gi, 
        (match, p1, p2, p3) => {
            return p1 + newDesc + p3;
        }
    );

    // Replace images
    content = content.replace(/(<meta\s+[^>]*?(?:name|property)=["'](?:og:image|twitter:image)["'][^>]*?content=["'])(.*?)(["'])/gi, 
        (match, p1, p2, p3) => {
            return p1 + newImg + p3;
        }
    );

    if (content !== original) {
        fs.writeFileSync(file, content);
        changed++;
        console.log("Updated metas in: " + path.relative(dir, file));
    }
});

console.log("Updated " + changed + " files.");

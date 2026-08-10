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

const scriptToInject = `
<script id="force-cal-links">
document.addEventListener("click", function(e) {
    const a = e.target.closest("a");
    if (!a) return;
    
    const text = a.textContent || "";
    if (text.includes("Schedule a call") || 
        text.includes("Book a free call") || 
        text.includes("Choose this plan")) {
        
        e.preventDefault();
        e.stopPropagation();
        window.open("https://cal.com/syncrotrex", "_blank");
    }
}, true);
</script>
`;

let changedFiles = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('id="force-cal-links"')) {
        return; // already injected
    }
    
    if (content.includes('</body>')) {
        content = content.replace('</body>', scriptToInject + '\n</body>');
        fs.writeFileSync(file, content);
        changedFiles++;
    }
});

console.log("Injected force-cal-links script into " + changedFiles + " files.");

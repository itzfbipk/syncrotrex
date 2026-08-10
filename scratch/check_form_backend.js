const fs = require('fs');

function findInFiles(dir, regex) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = dir + '/' + file.name;
        if (file.isDirectory()) {
            if (file.name !== 'node_modules' && file.name !== '.git') {
                findInFiles(fullPath, regex);
            }
        } else if (file.name.endsWith('.mjs') || file.name.endsWith('.js') || file.name.endsWith('.html') || file.name.endsWith('.json')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (regex.test(content)) {
                console.log(`Found match in: ${fullPath}`);
            }
        }
    }
}

findInFiles('D:/Projetcs/Syncrotrex Site (agency)', /formspark|formspree|action=/i);

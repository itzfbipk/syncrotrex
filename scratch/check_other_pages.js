const fs = require('fs');

const files = ['about/index.html', 'blog/index.html', 'contact/index.html'];
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    console.log(`${file} contains 'framer-js': ${content.includes('framer-js')}`);
    console.log(`${file} contains 'ssr-variant': ${content.includes('ssr-variant')}`);
});

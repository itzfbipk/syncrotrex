const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('scratch')) return;
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

const allFiles = walk('.');

// 1. Rename framercms file and update references
const oldCmsName = 'VGIpJvAdb-chunk-default-0.framercms';
const newCmsName = 'VGIpJvAdb-chunk-default-v2.framercms';

if (fs.existsSync(path.join('assets', oldCmsName))) {
    fs.renameSync(path.join('assets', oldCmsName), path.join('assets', newCmsName));
    console.log(`Renamed ${oldCmsName} to ${newCmsName}`);
}

allFiles.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.mjs')) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(oldCmsName)) {
            content = content.replace(new RegExp(oldCmsName, 'g'), newCmsName);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated CMS reference in: ${file}`);
        }
    }
});

// 2. Update contact/index.html text
const contactFile = path.join('contact', 'index.html');
if (fs.existsSync(contactFile)) {
    let contactHtml = fs.readFileSync(contactFile, 'utf8');
    
    // We will find the parent container <p class="framer-text ..."> that contains "Have</span>"
    // and replace its inner HTML.
    
    // "Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch!"
    const contactRegex = /<span[^>]*>Have<\/span>.*?<span[^>]*>touch!<\/span>/s;
    if (contactRegex.test(contactHtml)) {
        contactHtml = contactHtml.replace(contactRegex, "Have a project in mind or need a custom digital solution? Tell us what you're looking to build and we'll get back to you.");
        fs.writeFileSync(contactFile, contactHtml, 'utf8');
        console.log('Updated Contact text in contact/index.html');
    } else {
        console.log('Could not find Contact text to replace.');
    }
}

// 3. Update 404/index.html text
const notFoundFile = path.join('404', 'index.html');
if (fs.existsSync(notFoundFile)) {
    let notFoundHtml = fs.readFileSync(notFoundFile, 'utf8');
    
    // "Couldn’t Predict This One!"
    const regex1 = /<span[^>]*>Couldn’t<\/span>.*?<span[^>]*>One!<\/span>/s;
    if (regex1.test(notFoundHtml)) {
        notFoundHtml = notFoundHtml.replace(regex1, "Looks Like You’re Off Track");
        console.log('Updated 404 heading text.');
    }
    
    // "Even AI isn’t perfect—this page seems missing! Let’s back track. Head back home."
    const regex2 = /<span[^>]*>Even<\/span>.*?<span[^>]*>home\.<\/span>/s;
    if (regex2.test(notFoundHtml)) {
        notFoundHtml = notFoundHtml.replace(regex2, "The page you're looking for doesn't exist or may have been moved. Let's get you back to where you need to be.");
        console.log('Updated 404 body text.');
    }
    
    fs.writeFileSync(notFoundFile, notFoundHtml, 'utf8');
}

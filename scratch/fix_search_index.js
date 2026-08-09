const fs = require('fs');
const path = require('path');

const files = [
    path.join('assets', 'searchIndex.json'),
    path.join('assets', 'searchIndex-fallback.json')
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        content = content.replace(/Have questions or need AI solutions\? Let us know by filling out the form, and we’ll be in touch!/g, "Have a project in mind or need a custom digital solution? Tell us what you're looking to build and we'll get back to you.");
        
        content = content.replace(/Couldn’t Predict This One!/g, "Looks Like You’re Off Track");
        content = content.replace(/Even AI isn’t perfect—this page seems missing! Let’s back track\. Head back home\./g, "The page you're looking for doesn't exist or may have been moved. Let's get you back to where you need to be.");
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

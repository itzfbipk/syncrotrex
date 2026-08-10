const fs = require('fs');
const content = fs.readFileSync('D:/Projetcs/Syncrotrex Site (agency)/contact/index.html', 'utf8');

const inputs = content.match(/<input[^>]*>|<textarea[^>]*>/gi);
if (inputs) {
    inputs.forEach(input => {
        const nameMatch = input.match(/name="([^"]*)"/);
        const typeMatch = input.match(/type="([^"]*)"/);
        const placeholderMatch = input.match(/placeholder="([^"]*)"/);
        console.log(`Input: name=${nameMatch ? nameMatch[1] : 'NONE'}, type=${typeMatch ? typeMatch[1] : 'NONE'}, placeholder=${placeholderMatch ? placeholderMatch[1] : 'NONE'}`);
    });
}

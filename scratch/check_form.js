const fs = require('fs');

const content = fs.readFileSync('D:/Projetcs/Syncrotrex Site (agency)/contact/index.html', 'utf8');

const forms = content.match(/<form[^>]*>/g);
if (forms) {
    console.log("Forms found:", forms);
} else {
    console.log("No <form> tags found in contact/index.html");
}

const inputs = content.match(/<input[^>]*>/g);
if (inputs) {
    console.log("Inputs found:", inputs.length);
}

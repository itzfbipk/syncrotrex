const fs = require('fs');

const code = fs.readFileSync('scripts/chunk-11-v3.mjs', 'utf8');

const targetIdx = 24526;
const startStyles = code.indexOf('[', targetIdx - 3000);
const endStyles = code.indexOf(']', startStyles) + 1;
const stylesText = code.substring(startStyles, endStyles);

// Evaluate it safely since it's just an array of strings
const styles = eval(stylesText);

styles.forEach(style => {
    if (style.includes('1hhkatf') || style.includes('15k178i') || style.includes('4obbbk')) {
        console.log(style);
    }
});

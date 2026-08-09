const fs = require('fs');

const path = 'scripts/xELU-v26.mjs';
let code = fs.readFileSync(path, 'utf8');

// The line is:
// children: h("defs", { children: h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" , children: [}
// Let's replace it with the correct one:
// children: h("defs", { children: h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [

code = code.replace(
    '{ id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" , children: [}',
    '{ id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: ['
);

code = code.replace(
    '{ id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [',
    '{ id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: ['
);

fs.writeFileSync(path, code, 'utf8');
console.log('Fixed syntax error!');

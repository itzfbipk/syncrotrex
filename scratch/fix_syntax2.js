const fs = require('fs');

const path = 'scripts/xELU-v26.mjs';
let code = fs.readFileSync(path, 'utf8');

// Fix the syntax error: }, children: [ -> , children: [
code = code.replace(/}, children: \[/g, ', children: [}');
// Wait, that's dangerous. Let's do it precisely.
// The error is:
// h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [
code = code.replace(
    'h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [',
    'h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: ['
);

// I might have made the same error elsewhere. Let's check.
// In the replacement script I wrote:
// h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [
// No, wait, in replace_steps_3_4.js I wrote:
// h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [
// Oh wait, in my original script I wrote:
// h("defs", { children: h("linearGradient", { id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [
// This means the array needs to be inside the props.
code = code.replace(
    '{ id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, children: [',
    '{ id: "gradTest", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: ['
);

fs.writeFileSync(path, code, 'utf8');
console.log('Fixed syntax error!');

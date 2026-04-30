const prompt = require("prompt-sync")({ sigint: true });
let a = Number(prompt("Masukkan angka pertama : "));
let b = Number(prompt("Masukkan angka kedua : "));

let rumus1 = a + b;
let rumus2 = a - b;
let rumus3 = a * b;
let rumus4 = a / b;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`angka pertama + kedua\t: ${rumus1.toFixed(2)}  
angka pertama - kedua\t: ${rumus2.toFixed(2)}  
angka pertama x kedua\t: ${rumus3.toFixed(2)} 
angka pertama / kedua\t: ${rumus4.toFixed(2)} `)

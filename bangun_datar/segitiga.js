const prompt = require("prompt-sync")({ sigint: true });
let a = Number(prompt("Masukkan alas : "));
let b = Number(prompt("Masukkan sisi miring 1 : "));
let c = Number(prompt("Masukkan sisi miring 2 : "));
let tinggi = Number(prompt("Masukkan tinggi : "));

let luas = 0.5 * a * tinggi;
let keliling = a + b + c;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Luas Segitiga\t\t: ${luas.toFixed(2)}  cm2
Keliling Segitga\t: ${keliling.toFixed(2)}  cm`)

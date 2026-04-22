const prompt = require("prompt-sync")({ sigint: true });
let a = Number(prompt("Masukkan sisi atas : "));
let b = Number(prompt("Masukkan sisi bawah : "));
let tinggi = Number(prompt("Masukkan tinggi : "));

let luas = 0.5 * (a + b) * tinggi;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Luas Trapesium\t\t: ${luas.toFixed(2)}  cm2`)

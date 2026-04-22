// sebelumnya install dengan perintah : npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });
let sisi = Number(prompt("Masukkan sisi : "));

let luas = sisi * sisi;
let keliling = 4 * sisi;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Luas Persegi\t\t: ${luas.toFixed(2)}  cm2
Keliling Persegi\t: ${keliling.toFixed(2)}  cm`)

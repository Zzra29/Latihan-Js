const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Masukkan jari-jari : "));
let tinggi = Number(prompt("Masukkan tinggi : "));

let volume = 3.14 * r * r * tinggi;
let luas = 2 * 3.14 * r * (r + tinggi);

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Volume Tabung\t\t: ${volume.toFixed(2)}  cm2
Luas Permukaan Tabung\t: ${luas.toFixed(2)}  cm`)

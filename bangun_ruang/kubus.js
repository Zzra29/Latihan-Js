const prompt = require("prompt-sync")({ sigint: true });
let sisi = Number(prompt("Masukkan sisi : "));

let volume = sisi * sisi * sisi;
let luas = 6 * sisi * sisi;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Volume Kubus\t\t: ${volume.toFixed(2)}  cm2
Luas Permukaan Kubus\t: ${luas.toFixed(2)}  cm`)

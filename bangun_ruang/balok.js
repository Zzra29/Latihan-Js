const prompt = require("prompt-sync")({ sigint: true });
let p = Number(prompt("Masukkan panjang : "));
let l = Number(prompt("Masukkan lebar : "));
let t = Number(prompt("Masukkan tinggi : "));

let volume = p * l * t;
let luas = 2 * (p * l + p * t + l * t);

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Volume Balok\t\t: ${volume.toFixed(2)}  cm2
Luas Permukaan Balok\t: ${luas.toFixed(2)}  cm`)

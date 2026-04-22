const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Masukkan jari-jaroo : "));
let tinggi = Number(prompt("Masukkan tinggi : "));

let volume = (1/3) * 3.14 * r * r * tinggi;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Volume Limas\t\t: ${volume.toFixed(2)}  cm2`)

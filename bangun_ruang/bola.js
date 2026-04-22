const prompt = require("prompt-sync")({ sigint: true });
let r = Number(prompt("Masukkan jari-jari : "));

let volume = (4/3) * 3.14 * r * r * r;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Volume Bola\t\t: ${volume.toFixed(2)}  cm2`)

const prompt = require("prompt-sync")({ sigint: true });
let luasAlas = Number(prompt("Masukkan luas alas : "));
let tinggi = Number(prompt("Masukkan tinggi : "));

let volume = luasAlas * tinggi;

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Volume Prisma Segitiga\t\t: ${volume.toFixed(2)}  cm2`)

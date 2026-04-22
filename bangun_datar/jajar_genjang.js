const prompt = require("prompt-sync")({ sigint: true });
let a = Number(prompt("Masukkan alas : "));
let b = Number(prompt("Masukkan sisi miring : "));
let tinggi = Number(prompt("Masukkan tinggi : "));

let luas = a * tinggi;
let keliling = 2 * (a + b);

console.log("===========================")
console.log("         H A S I L         ")
console.log("===========================")

console.log(
`Luas Jajar Genjang\t\t: ${luas.toFixed(2)}  cm2
Keliling Jajar Genjang\t: ${keliling.toFixed(2)}  cm`)

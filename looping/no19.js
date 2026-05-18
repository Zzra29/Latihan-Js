const prompt = require("prompt-sync")();

let angka1 = Number(prompt("Masukkan angka pertama: "));
let angka2 = Number(prompt("Masukkan angka kedua: "));
let angka3 = Number(prompt("Masukkan angka ketiga: "));

let jumlah = angka1 + angka2 + angka3;
let rataRata = jumlah / 3;

console.log("-------------------------------")
console.log("----------Hasilllll------------")
console.log("-------------------------------")


console.log("Jumlah: " + jumlah);
console.log("Rata-rata: " + rataRata.toFixed(2));
const prompt = require("prompt-sync")();

const angka = Number(prompt("Masukkan angka: "));
for (let i = 1; i <= 5; i++) {
    console.log( i + " x " + angka + " = " + i * angka);
}

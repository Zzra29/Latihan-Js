const prompt = require("prompt-sync")({ sigint: true });

let tinggi = Number(prompt("Masukkan tinggi badan (cm): "));

let beratIdeal = (tinggi - 100) * 0.9;

console.log("Berat badan ideal =", beratIdeal, "kg");
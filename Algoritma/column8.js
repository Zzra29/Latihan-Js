const prompt = require("prompt-sync")({ sigint: true });

let cm = Number(prompt("Masukkan jarak (cm): "));

let km = Math.floor(cm / 100000);
cm %= 100000;

let m = Math.floor(cm / 100);
cm %= 100;

console.log(km + " km");
console.log(m + " m");
console.log(cm + " cm");
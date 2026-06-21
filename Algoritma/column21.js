const prompt = require("prompt-sync")({ sigint: true });

let jam = Number(prompt("Jam (hh): "));
let menit = Number(prompt("Menit (mm): "));
let detik = Number(prompt("Detik (ss): "));

detik = detik + 1;

if (detik == 60) {
    detik = 0;
    menit = menit + 1;
}

if (menit == 60) {
    menit = 0;
    jam = jam + 1;
}

if (jam == 24) {
    jam = 0;
}

console.log("Jam baru = " + jam + ":" + menit + ":" + detik);
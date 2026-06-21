const prompt = require("prompt-sync")({ sigint: true });

let d1 = Number(prompt("Tanggal 1: "));
let m1 = Number(prompt("Bulan 1: "));
let y1 = Number(prompt("Tahun 1: "));

let d2 = Number(prompt("Tanggal 2: "));
let m2 = Number(prompt("Bulan 2: "));
let y2 = Number(prompt("Tahun 2: "));

let total1 = y1 * 365 + m1 * 30 + d1;
let total2 = y2 * 365 + m2 * 30 + d2;

let selisih = Math.abs(total2 - total1);

let tahun = Math.floor(selisih / 365);
let bulan = Math.floor((selisih % 365) / 30);
let hari = (selisih % 365) % 30;

console.log("Selisih:");
console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(hari + " hari");
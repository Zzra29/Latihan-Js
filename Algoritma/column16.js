const prompt = require("prompt-sync")({ sigint: true });

let nama = prompt("Masukkan nama karyawan: ");
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jamKerja = Number(prompt("Masukkan jumlah jam kerja: "));

let upahPerJam;

if (golongan == "A") {
    upahPerJam = 4000;
} else if (golongan == "B") {
    upahPerJam = 5000;
} else if (golongan == "C") {
    upahPerJam = 6000;
} else if (golongan == "D") {
    upahPerJam = 7500;
} else {
    console.log("Golongan tidak valid");
}

let gaji;

if (jamKerja <= 48) {
    gaji = jamKerja * upahPerJam;
} else {
    let lembur = jamKerja - 48;
    gaji = (48 * upahPerJam) + (lembur * 3000);
}

console.log("Nama Karyawan :", nama);
console.log("Golongan       :", golongan);
console.log("Gaji Mingguan  : Rp" + gaji);
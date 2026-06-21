const prompt = require("prompt-sync")({ sigint: true });

let jamKerja = Number(prompt("Masukkan jumlah jam kerja: "));
let upah;

if (jamKerja <= 48) {
    upah = jamKerja * 2000;
} else {
    let lembur = jamKerja - 48;
    upah = (48 * 2000) + (lembur * 3000);
}

console.log("Upah mingguan = Rp" + upah);
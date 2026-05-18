const prompt = require("prompt-sync")();
const n = Number(prompt("Masukkan angka:")); 

// 1. Bikin baris paling atas (Header kolom)
let header = "*\t";
for (let i = 1; i <= n; i++) {
    header += i + "\t";
}
console.log(header);

// 2. Bikin baris perkalian ke bawah
for (let i = 1; i <= n; i++) {
    let baris = i + "\t"; // Angka paling kiri
    
    for (let j = 1; j <= n; j++) {
        baris += (i * j) + "\t"; // Hasil perkaliannya
    }
    
    console.log(baris); // Cetak barisnya satu per satu
}
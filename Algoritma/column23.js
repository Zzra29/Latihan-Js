const prompt = require("prompt-sync")({ sigint: true });

// SOAL 1
let bilangan = Number(prompt("Masukkan bilangan: "));

if (bilangan % 4 == 0) {
    console.log("Bilangan merupakan kelipatan 4");
} else {
    console.log("Bilangan bukan kelipatan 4");
}

// SOAL 2
let belanja = Number(prompt("Total belanja: "));
let diskon = 0;

if (belanja > 100000) {
    diskon = belanja * 0.10;
}

let bayar = belanja - diskon;

console.log("Diskon = Rp" + diskon);
console.log("Total bayar = Rp" + bayar);

// SOAL 3
let a = Number(prompt("Bilangan pertama: "));
let b = Number(prompt("Bilangan kedua: "));
let c = Number(prompt("Bilangan ketiga: "));

if (a > b) {
    let t = a;
    a = b;
    b = t;
}

if (a > c) {
    let t = a;
    a = c;
    c = t;
}

if (b > c) {
    let t = b;
    b = c;
    c = t;
}

console.log("Urutan: " + a + ", " + b + ", " + c);

// SOAL 4
let s1 = Number(prompt("Sisi a: "));
let s2 = Number(prompt("Sisi b: "));
let s3 = Number(prompt("Sisi c: "));

if (s1 * s1 + s2 * s2 == s3 * s3) {
    console.log("Segitiga siku-siku");
} else if (s1 * s1 + s2 * s2 > s3 * s3) {
    console.log("Segitiga lancip");
} else {
    console.log("Segitiga tumpul");
}

// SOAL 5
let digit = prompt("Masukkan karakter digit (0-9): ");

console.log("Nilai integer = " + Number(digit));

// SOAL 5A
let digitA = prompt("Masukkan digit (0-9): ");

console.log("Nilai integer = " + Number(digitA));

// SOAL 5B
let digitB = prompt("Masukkan karakter: ");

if (digitB >= "0" && digitB <= "9") {
    console.log("Nilai integer = " + Number(digitB));
} else {
    console.log("Nilai integer = -99");
}

// SOAL 6
let belanja2 = Number(prompt("Masukkan nilai belanja: "));

let hasil = Math.floor(belanja2 / 25) * 25;

console.log("Nilai setelah pembulatan = Rp" + hasil);

// SOAL 7A
let n = Number(prompt("Masukkan bilangan (1-10): "));

if (n == 1) {
    console.log("I");
} else if (n == 2) {
    console.log("II");
} else if (n == 3) {
    console.log("III");
} else if (n == 4) {
    console.log("IV");
} else if (n == 5) {
    console.log("V");
} else if (n == 6) {
    console.log("VI");
} else if (n == 7) {
    console.log("VII");
} else if (n == 8) {
    console.log("VIII");
} else if (n == 9) {
    console.log("IX");
} else if (n == 10) {
    console.log("X");
} else {
    console.log("Di luar rentang");
}

// SOAL 7B
let angka = Number(prompt("Masukkan bilangan: "));
let romawi = "";

while (angka >= 1000) {
    romawi += "M";
    angka -= 1000;
}
while (angka >= 900) {
    romawi += "CM";
    angka -= 900;
}
while (angka >= 500) {
    romawi += "D";
    angka -= 500;
}
while (angka >= 400) {
    romawi += "CD";
    angka -= 400;
}
while (angka >= 100) {
    romawi += "C";
    angka -= 100;
}
while (angka >= 90) {
    romawi += "XC";
    angka -= 90;
}
while (angka >= 50) {
    romawi += "L";
    angka -= 50;
}
while (angka >= 40) {
    romawi += "XL";
    angka -= 40;
}
while (angka >= 10) {
    romawi += "X";
    angka -= 10;
}
while (angka >= 9) {
    romawi += "IX";
    angka -= 9;
}
while (angka >= 5) {
    romawi += "V";
    angka -= 5;
}
while (angka >= 4) {
    romawi += "IV";
    angka -= 4;
}
while (angka >= 1) {
    romawi += "I";
    angka -= 1;
}

console.log("Angka Romawi = " + romawi);

// SOAL 8
let pixel = Number(prompt("Masukkan nilai pixel: "));

if (pixel > 255) {
    pixel = 255;
} else if (pixel < 0) {
    pixel = 0;
}

console.log("Hasil clipping = " + pixel);

// SOAL 9
let berat = Number(prompt("Masukkan berat badan (kg): "));
let tinggi = Number(prompt("Masukkan tinggi badan (cm): "));

let ideal = (tinggi - 100) * 0.9;

if (Math.abs(berat - ideal) <= 2) {
    console.log("Ideal");
} else {
    console.log("Tidak ideal");
}

//Nomor 10 tidak perlu dibuat di JavaScript, karena soal memang meminta menerjemahkan algoritma nomor 1–9 ke bahasa Pascal dan C. Jadi file JavaScript cukup sampai Soal 9.
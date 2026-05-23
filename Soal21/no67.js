
let angka = prompt("masukkan harga : ")
let p = angka * 10/100;
let f = angka * 5/100;
let total = Number(angka) + p + f;

console.log("harga : " + angka)
console.log("pajak : " + p)
console.log("Fee : " + f)
console.log("total : " + total)

document.write("harga : " + angka + ("<br>"))
document.write("pajak : " + p + ("<br>"))
document.write("Fee : " + f + ("<br>"))
document.write("total : " + total + ("<br>"))
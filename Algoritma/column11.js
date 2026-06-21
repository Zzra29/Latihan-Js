const prompt = require("prompt-sync")({ sigint: true });

let x = Number(prompt("Masukkan nilai x: "));
let y = Number(prompt("Masukkan nilai y: "));

if (x > 0 && y > 0) {
    console.log("Titik berada di Kuadran I");
} else if (x < 0 && y > 0) {
    console.log("Titik berada di Kuadran II");
} else if (x < 0 && y < 0) {
    console.log("Titik berada di Kuadran III");
} else if (x > 0 && y < 0) {
    console.log("Titik berada di Kuadran IV");
} else {
    console.log("Titik tidak berada di kuadran manapun");
}
let string = "The QuiCk BrOwN Fox";
let result1 = "";

for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
        result1 += string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
        result1 += string[i].toUpperCase();
    }
}
console.log(`${result1}`);
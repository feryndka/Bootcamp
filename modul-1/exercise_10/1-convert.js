function convert(chars) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let total = 0;

    for (let i = 0; i < chars.length; i++) {
        let find = alphabet.split("").findIndex((item) => item === chars[i]) + 1;
        total += Math.pow(26, chars.length - i - 1) * find;
    }

    return total;
}

console.log(convert("ABC"))
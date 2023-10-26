let kata = "An apple a day keeps the doctor away"
let hasil = ""

for (let i = 0; i < kata.length; i++) {
    if (kata[i] == "a" || (kata[i] == "A")) {
        hasil += "*"
    } else {
        hasil += kata[i]
    }
}
console.log(hasil)
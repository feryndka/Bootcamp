function anagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
}

let s = "rat";
let t = "car";
console.log(anagram(s, t));

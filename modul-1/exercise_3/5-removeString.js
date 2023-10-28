let str = "hello world"
let counter = "ell"
let result = "";
let found = false;

for (let i = 0; i < str.length; i++) {
    let match = true;

    for (let j = 0; j < counter.length; j++) {
        if (str[i + j] !== counter[j]) {
            match = false;
            break;
        }
    }
    
    if (match) {
        i += counter.length - 1;
        found = true;
    } else {
        result += str[i];
    }
}
console.log(found ? result : str);
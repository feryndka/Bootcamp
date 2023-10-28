const reverse = (str) => {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

let str = "hello"
console.log(reverse(str))

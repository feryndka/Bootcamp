const currency = (num) => {
    let result = ""

    for (let i = num.length - 1, j = 0; i >= 0; i--) {
        result = num[i] + result
        j++

        if (j % 3 === 0 && i > 0) {
            result = "." + result
        }
    }
    return result
}

let num = 1000
let str = num.toString()
console.log(`Rp.${currency(str)},00`)
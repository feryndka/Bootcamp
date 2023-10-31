const split = (str) => {
    let arr = []
    let string = ""

    for (let i = 0; i < str.length; i ++) {
        if (str[i] !== " ") {
            string += str[i]
        } else {
            if (string !== "") {
                arr.push(string)
                string = ""
            }
        }
    }
    if (string !== "") {
        arr.push(string)
    }
    console.log(arr)
}

let str = "Hello World"
split(str)
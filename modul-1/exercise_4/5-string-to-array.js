const convert = (str) => {
    let arr = []
    let word = ""

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== " ") {
            word += str[i]
        } else {
            if (word !== "") {
                arr.push(word)
                word = ""
            }
        }
    }

    if (word !== "") {
        arr.push(word)
    }
    
    console.log(arr)
}

str = "Hello World"
convert(str)
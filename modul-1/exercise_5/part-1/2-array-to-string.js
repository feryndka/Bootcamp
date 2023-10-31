const convert = (arr) => {
    let result = ""; last = ""

    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] + ", "
    }

    last = arr[arr.length - 1]
    console.log(`${result}and ${last}`)
}

let arr = ["apple", "banana", "cherry", "date"];
convert(arr)
function sumNum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            sum += arr[i]
        }
    }
    console.log(sum)
}

let arr = ["3", 1, "string", null, false, undefined, 2]
sumNum(arr)
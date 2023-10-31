function primitive(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== "object") {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

let arr = [1, [], undefined, {}, "string", {}, []];
primitive(arr)
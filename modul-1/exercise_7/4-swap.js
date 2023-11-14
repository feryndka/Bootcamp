function swap(arr) {
    let newArr = []
    for (item of arr) {
        let newObj = {}
        for (key in item) {
            newObj[item[key]] = key;
        }
        newArr.push(newObj)
    }
    return newArr
}

let arr = [{ name: "David", age: 20 }, {name : "Fery", age: 21}]
console.log(swap(arr))
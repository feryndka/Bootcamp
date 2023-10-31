const insertArr = (size, num) => {
    let arr = []
    for (let i = 0; i < size; i++) {
        arr.push(num[i])
    }
    console.log(arr)
}

let size = 2
let num = [5,10,24,3,6,7,8]
insertArr(size, num)
const newElement = (arr, num) => {
    let same = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            same = true;
        }
    }
    if (!same) {
        arr.push(num)
    }
    console.log(arr)
}

let arr = [1,2,3,4]
let num = 7
newElement(arr, num)
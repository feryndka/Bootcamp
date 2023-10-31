function sumDuplicate(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                total++
            }
        }
    }
    console.log(total)
}

let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]
sumDuplicate(arr)
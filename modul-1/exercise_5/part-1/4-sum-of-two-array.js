const sumOfTwo = (arr1, arr2) => {
    let result = []
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] + arr2[i]
        result.push(sum)
    }
    console.log(result)
}

let arr1 = [1,2,3]
let arr2 = [3,2,1]
sumOfTwo(arr1, arr2)
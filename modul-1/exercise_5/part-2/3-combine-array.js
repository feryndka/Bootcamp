const combine = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    console.log(arr1)
}

let arr1 = [1,2,3]
let arr2 = [4,5,6]
combine(arr1, arr2)
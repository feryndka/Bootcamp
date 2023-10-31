function find(arr1, arr2) {
    let arr = [];
    let duplicate = null;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] !== arr2[j] && i !== j) {
                duplicate = arr1[i];
                arr.push(duplicate)
            }
        }
    }
    console.log(arr)
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7]
find(arr1, arr2)
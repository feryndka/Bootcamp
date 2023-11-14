function singleNum(arr) {
    //selection sort
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }

    //searching
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i+1] && arr[i] != arr[i-1]) {
            return arr[i]
        }
    }
    return arr[0]
}

let arr = [1,4,1,2,2,3,3,4,5,6,9,6,9,10,12,11,10,12,11]
console.log(`Single Number => ${singleNum(arr)}`)
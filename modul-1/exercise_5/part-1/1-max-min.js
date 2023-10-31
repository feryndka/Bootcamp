const value = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i]
    }
    let avg = sum / arr.length
    console.log(`{lowest: ${min}, highest: ${max}, average: ${avg}}`)
}

let arr = [12, 5, 23, 18, 4, 45, 32];
value(arr)
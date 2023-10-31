const duplicate = (num) => {
    let arr = [];
    let duplicate = null;
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[i] === num[j] && i !== j && duplicate !== num[i]) {
                duplicate = num[i];
                arr.push(duplicate)
            }
        }
    }
    console.log(arr)
}

let num = [1, 2, 2, 2, 3, 3, 4, 5, 5];
duplicate(num)
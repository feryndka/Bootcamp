function small(num) {
    for (let i = 1; i < num.length; i++) {
        let key = num[i]
        let j = i-1
        while (j >= 0 && num[j] > key) {
            num[j+1] = num[j]
            j--
        }
        num[j+1] = key
    }
    console.log(num)
}

let num = [5,3,1,7,2,6]
small(num)
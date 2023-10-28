const even = (num) => {
    let arr = []
    for (let i = 1; i <= num.length; i++) {
        if (i % 2 === 0) {
            arr.push(i)
        }
    }
    console.log(arr)
}
let num = [1,2,3,4,5,6,7,8,9,10]
even(num)
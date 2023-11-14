function majority(nums) {
    let n = Math.floor(nums.length / 2);
    let number = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let sumNum = 1;
        for (let j = 0; j < nums.length; j++ ) {
            if (i != j && nums[i] == nums[j]) {
                sumNum++
            }
        }
        if (sumNum > n) {
            number = nums[i]
        }
    }
    return number
}

console.log(majority([2,2,1,1,1,2,2]));
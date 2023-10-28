const triangle = (num) => {
    let row = ""
    let current = 1

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            if (current < 10) {
                row += `0${current} `
            } else {
                row += `${current} `
            }
            current++
        }
        row += "\n"
    }
    console.log(row)
}

triangle(4)
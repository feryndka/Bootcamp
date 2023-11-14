function intersection(obj1, obj2) {
    let result = {}

    for (key in obj1) {
        if (obj1[key] === obj2[key]) {
            result[key] = obj1[key]
        }
    }
    
    return result
}

const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    a:1,
    c:3
}

console.log(intersection(obj1, obj2))
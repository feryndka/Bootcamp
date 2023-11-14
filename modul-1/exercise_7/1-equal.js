function findDifference(obj1, obj2) {
    console.log(obj1, obj2)
    let longObject = Object.keys(obj1).length > Object.keys(obj2).length ? obj1 : obj2;

    for (key in longObject) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true
}

const obj1 = { a : "Hello" }
const obj2 = { a : 1 }

console.log(findDifference(obj1, obj2))
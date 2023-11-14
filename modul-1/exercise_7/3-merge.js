function merge(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let flag = true;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i].name == arr1[j].name) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr1.push(arr2[i])
        }
    }
    return arr1
}

const arr1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
]

const arr2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
]

console.log(merge(arr1, arr2))
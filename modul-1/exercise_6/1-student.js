const arrStudent = [
    {name: "Fery Andika", email: "feryandika@gmail.com", age: 20, score: 90},
    {name: "Ryan Rezky", email: "ryanrezky@gmail.com", age: 25, score: 82},
    {name: "Ahmad Kasim", email: "kasimahmad@gmail.com", age: 30, score: 80},
    {name: "Bella Nova", email: "novabella@gmail.com", age: 18, score: 85},
    {name: "Julia Putri", email: "juliaputri@gmail.com", age: 19, score: 87}
]

function student () {
    const result = {
        score: {
            highest : arrStudent[0].score,
            lowest : arrStudent[0].score,
            average : 0
        },

        age: {
            highest : arrStudent[0].age,
            lowest : arrStudent[0].age,
            average : 0
        }
    }

    let sumScore = 0;
    let sumAge = 0;

    for (item of arrStudent) {
        if (item.score > result.score.highest) {
            result.score.highest = item.score
        }
        if (item.score < result.score.lowest) {
            result.score.lowest = item.score
        }
        if (item.age > result.age.highest) {
            result.age.highest = item.age
        }
        if (item.age < result.age.lowest) {
            result.age.lowest = item.age
        }
        sumScore += item.score;
        sumAge += item.age;
    }

    result.score.average = Math.round(sumScore / arrStudent.length);
    result.age.average =  Math.round(sumAge / arrStudent.length)

    return result
}

console.log(student())
const bmi = (weight, height) => {
    let result = (weight / height)
    switch (true) {
        case (result < 18.5):
            return "less weight"
            break;
        case (result >= 18.5 && result <= 24.9):
            return "ideal"
            break;
        case (result >= 25.0 && result <= 29.9):
            return "overweight"
            break;
        case (result >= 30.0 && result <= 39.9):
            return "very overweight"
            break;
        case (result > 39.9):
            return "obesity"
            break;
    }
}

console.log(bmi(60, 1.70))
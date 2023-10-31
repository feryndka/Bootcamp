const game = (str) => {
    let pick = "scissor"
    if (str === "scissor" && pick) {
        return "Balance"
    } else if (str === "rock" && pick) {
        return "Win"
    } else {
        return "Lose"
    }
}

let str = "rock"
console.log(game(str))
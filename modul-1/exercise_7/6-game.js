class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        return {
            health : Math.round(Math.random() * 10),
            power : Math.round(Math.random() * 10)
        }
    }

    start() {
        player1.showStatus()
        player2.showStatus()
        console.log("")
        console.log("================== START GAME =================")
        while (player1.health > 0 && player2.health > 0) {
            let item1 = this.getRandomItem()
            console.log(`${player1.name} get health: ${item1.health}, and power: ${item1.power}`)
            player1.useItem(item1)
            
            let item2 = this.getRandomItem()
            console.log(`${player2.name} get health: ${item2.health}, and power: ${item2.power}`)
            player2.useItem(item2)
            console.log("------ HEAL ------")
            player1.showStatus()
            player2.showStatus()
            console.log("")
            player1.hit(player2.power);
            player2.hit(player1.power);
            console.log("----- ATTACK -----")
            player1.showStatus()
            player2.showStatus()
            console.log("")
        }
        console.log("================= GAME OVER ==================")
        console.log("")
        console.log(player1.health < player2.health ? `${player2.name} win the game!` : `${player1.name} win the game!`)  
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    hit(power) {
        console.log(`${this.name} get hit ${power}!`)
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(this)
    }
}

let player1 = new Player("Fery")
let player2 = new Player("Lala")
let startGame = new ShootingGame(player1, player2);

startGame.start()
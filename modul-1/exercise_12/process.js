class Restaurant {
    #daftarTransaksi = []
    addOrders(order) {
        this.#daftarTransaksi.push(order)
    }

    async transaction() {
        let i = 0;
        while(i < this.#daftarTransaksi.length) {
            console.log("Processing...")
            let timeInterval = Math.round(Math.random() * 10000) + 1000
            await new Promise((success, failed) => {
                if(typeof (this.#daftarTransaksi[i]) != "string") failed("[Error] please check again!")
                else setTimeout(() => success(`Order ${i+1} Done in ${Math.floor(timeInterval/1000)} minutes`), timeInterval);
            })
            .then((res) => console.log(res)) 
            .catch((err) => console.log(err))
            i++
            console.log("")
        }
    }

    showData() {
        console.log("Order List:")
        console.log(this.#daftarTransaksi)
    }
}

module.exports = Restaurant;
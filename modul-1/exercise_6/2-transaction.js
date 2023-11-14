class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

class Transaction {
    #total = 0;
    constructor() {
        this.productCart = []
    }

    addToCart(product, qty) {
        this.productCart.push({
            product: JSON.stringify(product),
            qty: qty,
            totalHarga: product.price * qty
        });
        this.#total += product.price * qty
    }

    get showTotal() {
        return this.#total
    }

    get checkOut() {
        return {
            product: this.productCart,
            total: this.#total
        }
    }
}

const product1 = new Product("Asus TUF Gaming", 12000000)
const product2 = new Product("Fantech MAXFIT 61", 600000)
const product3 = new Product("Fantech Venom II", 100000)

const transaksi1 = new Transaction()

transaksi1.addToCart(product1, 1)
transaksi1.addToCart(product2, 2)
transaksi1.addToCart(product3, 3)

console.log(transaksi1.checkOut)
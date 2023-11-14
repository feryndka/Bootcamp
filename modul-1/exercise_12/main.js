const Restaurant = require("./process.js")
const resto = new Restaurant()

resto.addOrders("Fried Rice")
resto.addOrders("Chicken Grilled")
resto.addOrders("Steak")
resto.addOrders("Ice Tea")

resto.showData()
resto.transaction()
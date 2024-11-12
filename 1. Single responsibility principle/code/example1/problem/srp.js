const { Order, Product } = require("./order");

const product1 = new Product('1', 'Laptop', 1000);
const product2 = new Product('2', 'IPhone', 500);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);
console.log(order.getProducts());
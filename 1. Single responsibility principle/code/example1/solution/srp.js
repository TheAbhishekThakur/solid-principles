const { Invoice } = require("./invoice");
const { Order, Product } = require("./order");
const { PaymentProcessor } = require("./paymentProcessor");
const { PricingCalculator } = require("./pricingCalculator");

const product1 = new Product('1', 'Laptop', 1000);
const product2 = new Product('2', 'IPhone', 500);


const order = new Order();
order.addProduct(product1);
order.addProduct(product2);
console.log(order.getProducts());


const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProducts());
console.log(total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment();

const invoice = new Invoice();
invoice.generateInvoice(total);
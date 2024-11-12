class Product {
    id = "";
    name = "";
    price = "";

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price
    }
}

class Order {

    products = [];

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    removeProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }

    calculatePricing() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    generateInvoice() {
        console.log('This is your total amount.', this.calculatePricing());
    }

    processPayment() {
        console.log('Processing payment.');
        console.log('Payment proceed successfully.');
        console.log('Added to accounting system.');
        console.log('Notifying shipping service.');
        console.log('Email sent to customer.');
    }
}

module.exports = {
    Product,
    Order
}
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
}

module.exports = {
    Product,
    Order
}
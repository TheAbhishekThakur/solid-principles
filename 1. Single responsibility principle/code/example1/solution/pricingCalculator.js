class PricingCalculator {
    calculatePricing(products) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}

module.exports = {
    PricingCalculator
}
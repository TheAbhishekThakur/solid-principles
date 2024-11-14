class PaymentProcessor {
    processPayment(amount, paymentType) {
        if (paymentType === 'paypal') {
            console.log(`Processing payment of ${amount} using paypal.`);
        } else if (paymentType === 'creditcard') {
            console.log(`Processing payment of ${amount} using credit card.`);
        } else if (paymentType === 'paytm') {
            console.log(`Processing payment of ${amount} using paytm.`);
        } else {
            throw new Error("Unknown payment type")
        }
    }
}

const processor = new PaymentProcessor();
processor.processPayment(100, "paypal");
processor.processPayment(1000, "creditcard");
processor.processPayment(200, "paytm");
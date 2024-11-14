class PaymentProcessor {

    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod
    }

    payment(amount) {
        this.paymentMethod.processPayment(amount)
    }
}

class CreditcardPayment {
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using credit card.`);
    }
}

class PaypalPayment {
    processPayment(amount) {
        console.log(`Processing payment of ${amount} using paypal.`);
    }
}

const creditcardPayment = new CreditcardPayment();
const paypalPayment = new PaypalPayment();


const processor1 = new PaymentProcessor(creditcardPayment);
const processor2 = new PaymentProcessor(paypalPayment);

processor1.payment(1000);
processor2.payment(100);
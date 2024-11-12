# Open-Closed Principle

Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.

## Using Class

// Bad Example: Modification is required to add a new payment method.

    class Payment {
        process(paymentMethod) {
            if (paymentMethod === "credit") {
                console.log("Processing credit payment");
            } else if (paymentMethod === "paypal") {
                console.log("Processing PayPal payment");
            }
        }
    }

// Good Example: Using polymorphism to add payment methods without modifying the Payment class.

    class Payment {
        process(paymentMethod) {
            paymentMethod.pay();
        }
    }

    class CreditPayment {
        pay() {
            console.log("Processing credit payment");
        }
    }

    class PaypalPayment {
        pay() {
            console.log("Processing PayPal payment");
        }
    }

    const payment = new Payment();
    payment.process(new CreditPayment());
    payment.process(new PaypalPayment());


## Using Function

// Bad Example: Modifying a function to handle different payment methods.

    const processPayment = (method, amount) => {
        if (method === "credit") {
            console.log(`Processing credit payment of ${amount}`);
        } else if (method === "paypal") {
            console.log(`Processing PayPal payment of ${amount}`);
        }
    };

// Good Example: Use a higher-order function to inject the payment method.

    const processPayment = (paymentMethod, amount) => {
        paymentMethod(amount);
    };

    const creditPayment = (amount) => console.log(`Processing credit payment of ${amount}`);
    const paypalPayment = (amount) => console.log(`Processing PayPal payment of ${amount}`);

    // Extending without modifying processPayment
    processPayment(creditPayment, 100);
    processPayment(paypalPayment, 200);

## Using ReactJs

// Bad Example: 

    import React from 'react';

    functon OpenClosePrinciple() {

        function Button({ label, type }) {
            return <button className={`btn-${type}`}>{label}</button>
        }

        return (
            <>
                <Button label="Save" type="primary" />
                 <Button label="Delete" type="danger" />
            </>
        )
    }

// Good Example:

    import React from 'react';

    functon OpenClosePrinciple() {

        function Button({ label, type }) {
            return <button className={type}>{label}</button>
        }

        return (
            <>
                <Button label="Save" type="btn-primary" />
                <Button label="Delete" type="btn-danger" />
            </>
        )
    }

// Bad Example: Violation of LSP because Penguin cannot fly.

class Bird {
    fly() {
        console.log("Flying");
    }
}

class Sparrow extends Bird {
    fly() {
        console.log("Sparrow can fly");
    }

    makeSound() {
        console.log('Sparrow Sound')
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly!");
    }

    makeSound() {
        console.log('Penguin Sound')
    }
}

function makeBirdFly(bird) {
    bird.fly();
}
makeBirdFly(new Bird()); // Flying
makeBirdFly(new Sparrow()) // Sparrow can fly
makeBirdFly(new Penguin()) // Penguins can't fly!


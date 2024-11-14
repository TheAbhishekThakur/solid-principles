
// Good Example: Separate flying birds from non-flying birds.

class BaseBird {
    makeSound() {
        console.log("Sound");
    }
}

class Bird extends BaseBird {
    fly() {
        console.log("Bird Flying");
    }

    makeSound() { }
}

class Sparrow extends Bird {
    fly() {
        console.log("Sparrow Flying");
    }

    makeSound() {
        console.log("Sparrow Sound");
    }
}

class Penguin extends BaseBird {
    makeSound() {
        console.log("Penguin Sound");
    }
}
function makeBirdFly(bird) {
    bird.fly();
}
makeBirdFly(new Sparrow()); // Sparrow Flying

function makeBirdSound(bird) {
    bird.makeSound();
}
makeBirdSound(new Penguin()) // Penguins sound
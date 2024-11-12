# Liskov Substitution Principle

Subtypes must be substitutable for their base types without altering the correctness of the program. Essentially, derived classes should be able to replace their base classes.

## Using Class

// Bad Example: Violation of LSP because Penguin cannot fly.

    class Bird {
        fly() {
            console.log("Flying");
        }
    }

    class Sparrow extends Bird {}

    class Penguin extends Bird {
        fly() {
            throw new Error("Penguins can't fly!");
        }
    }

// Good Example: Separate flying birds from non-flying birds.

    class Bird {}

    class FlyingBird extends Bird {
        fly() {
            console.log("Flying");
        }
    }

    class Sparrow extends FlyingBird {}

    class Penguin extends Bird {} // No fly method needed

    const sparrow = new Sparrow();
    sparrow.fly(); // Works fine

    const penguin = new Penguin();
    penguin.fly(); // No method to call


## Using Function

// Bad Example: Expecting all items to have a `fly` method, which can throw an error for non-flying types.

    const makeFly = (bird) => bird.fly();

// Good Example: Check behavior or capabilities, not types.

    const canFly = (animal) => typeof animal.fly === 'function';

    const sparrow = { 
        fly: () => console.log("Sparrow is flying!");
    };
    const penguin = { 
        swim: () => console.log("Penguin is swimming!") 
    };

    if (canFly(sparrow)) sparrow.fly();
    if (canFly(penguin)) penguin.fly(); // Safely does nothing


// OOP --> class

class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter operator

    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('lalu', 'dog', 'khew khew');
const cat = new Animal('pich pich', 'cat', 'maw mae');
dog.makeSound();
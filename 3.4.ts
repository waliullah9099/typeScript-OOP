{
    // instance of guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }
        makeSound() {
            console.log('Animal is calling.......');

        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log('Dog is bark but not..........');
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log('Cat is meaw but not..........');
        }
    }

    // use function for smart way do code

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }

    const cat = new Cat('Mini', 'Cat');
    const dog = new Dog('Lalu', 'Dog');

    getAnimal(cat);













}
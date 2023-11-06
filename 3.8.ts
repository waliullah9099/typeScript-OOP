{
    // polimorphisom

    class Person {
        getSleep() {
            console.log(`I am sleeping 8 hours per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping 6 hours per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping 5 hours per day`);
        }
    }

    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person3);

    // eaxmple 2
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }
    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super(),
                this.height = height,
                this.width = width
        }
        getArea(): number {
            return  this.height * this.width
        }
    }

    const getShapeAre = (param: Shape) => {
        console.log(param.getArea());
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(12, 12);

    getShapeAre(shape3);


















}
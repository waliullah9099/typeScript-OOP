{
    // oop --> inharitence

    class Parent {
        name: string;
        age: number;
        isMarried: boolean;

        constructor(name: string, age: number, isMarried: boolean) {
            this.name = name;
            this.age = age;
            this.isMarried = isMarried
        }
        getSleep(numbersOfHours: number) {
            console.log(`${this.name} will sleep for ${numbersOfHours} `);
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, isMarried: boolean) {
            super(name, age, isMarried);
        }
    }

    const student1 = new Student('sei', 11, true);
    student1.getSleep(12);


    class Teacher extends Parent {
        designation: string

        constructor(name: string, age: number, isMarried: boolean, designation: string) {
            super(name, age, isMarried)
            this.designation = designation;
        }
        takeClass(numbersOfClass) {
            console.log(`${this.name} will take call ${numbersOfClass} `);
        }
    }

    const teacher = new Teacher('sei', 11, true, 'teacher');
    student1.getSleep(12);




























}
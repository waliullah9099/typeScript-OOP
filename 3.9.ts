{
    // abastruction : 1. interface 2. abastruction

    // idea
    interface Vehicle1 {
        startEnginee(): void;
        endEnginee(): void;
        move(): void;
    }

    // real implementation
    class Car1 implements Vehicle1 {
        startEnginee(): void {
            console.log(`I ma currently starting`);
        }
        endEnginee(): void {
            console.log(`I am stoping now`);
        }
        move(): void {
            console.log('I am moving the car');
        }
        test() {
            console.log(`Just testing.......`);
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEnginee();


    // abastruc class 

    abstract class Car2 {
        abstract startEnginee(): void;
        abstract endEnginee(): void ;
        abstract move(): void ;
        test() {
            console.log(`Just testing.......`);
        }
    }

    class ToyotaCar extends Car2 {
        startEnginee(): void {
            console.log(`I am staring now`);
        }
        endEnginee(): void {
            console.log(`I am ending now`);
        }
        move(): void {
            console.log(`running........`);
        }
    }














}
{
    // static

    class Counter {
        static count: number = 0;
        static increment() {
            return Counter.count = Counter.count + 1
        }
        static decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    const instance1 = new Counter(); // no needed for OOP ststic

    console.log(Counter.increment()); // different memory
    console.log(Counter.increment()); // just call Object name and property name 
    console.log(Counter.increment()); 















}
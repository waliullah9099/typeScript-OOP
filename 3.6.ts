{
    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number; // can't chagne within this object
        protected _balance: number; // can chagne in child object


        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // setter
        set deposite(amount: number) {
            this._balance = this._balance + amount;
        }
        public addDeposite(amount: number) {
            this._balance = this._balance + amount;
        }


        public getBalance() {
            return this._balance;
        }

        // getter use for call as like property a function
        get balance() {
            return this._balance;
        }
    }

    class StudentAccout extends BankAccount {
        test() {
            this._balance = 110;
        }
    }

    const poorOwner = new BankAccount(111, 'Mr. Shaheb', 2);
    poorOwner.addDeposite(500); // function call korte hosse
    const myBalance2 = poorOwner.getBalance(); // function call korte hosse


    const poorOwner2 = new BankAccount(111, 'Mr. Shaheb', 12);
    poorOwner2.deposite = 99;
    const myBalance = poorOwner2.balance; //property ar moto kore
    console.log(myBalance);










}
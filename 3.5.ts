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
        public addDeposite(amount: number) {
            this._balance = this._balance + amount;
        }
        public getBalance() {
            return this._balance;
        }
    }

    class StudentAccout extends BankAccount{
        test(){
            this._balance = 110;
        }
    }

    const poorOwner = new BankAccount(111, 'Mr. Shaheb', 200);
    poorOwner.addDeposite(500);
    const myBalance = poorOwner.getBalance();
    console.log(myBalance);










}
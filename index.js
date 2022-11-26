
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects
    let balance = 10;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Check if transaction is allowed
    if (!this.isAllowed()) return false;
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
    // Add the transaction to the balance
    return true;
  }

}

class Withdrawal extends Transaction {
  // define a getter method called value
  get value() {
    return -this.amount;
  }
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;   // deposits always allowed
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("sam");

console.log('Starting Balance:', myAccount.balance);

console.log('Should fail if withdrawing $50.25');
const t1 = new Withdrawal(50.25, myAccount);
console.log('Commit result:', t1.commit());
console.log('Transaction 1:', t1);
console.log('Account Balance: ', myAccount.balance);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
//console.log('Transaction 2:', t2);

const t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Commit result:', t3.commit());
//console.log('Transaction 3:', t3);


console.log('Ending Balance:', myAccount.balance);



// old code before introducing transaction class to share common code between Withdrawal and Deposit classes
/*

let balance = 500.00;

class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.amount;
  }
*/

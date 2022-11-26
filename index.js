// let balance = 500.00;



class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Withdrawal extends Transaction {
  // define a getter method called value
  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("bob");

console.log('Starting Balance:', myAccount.balance)

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
//console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
//console.log('Transaction 2:', t2);

const t3 = new Deposit(120.00, myAccount);
t3.commit();
//console.log('Transaction 3:', t3)

console.log('Ending Balance:', myAccount.balance);



// old code before introducing transaction class to share common code between Withdrawal and Deposit classes
/*
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

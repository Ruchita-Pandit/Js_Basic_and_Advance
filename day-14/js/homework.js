// ==========================================
// Exercise 1 : multiplier(factor)
// ==========================================

const task1 = `
// multiplier(factor)

function multiplier(factor) {

    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);

const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));
`;

document.getElementById("task1Code").textContent = task1;

let output1 = "";

function multiplier(factor) {

    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);

const triple = multiplier(3);

output1 += "double(5) = " + double(5) + "\n";
output1 += "triple(5) = " + triple(5) + "\n\n";

output1 += "Explanation :\n";
output1 += "Each returned function remembers its own factor value.";

document.getElementById("exercise1Output").textContent = output1;


// ==========================================
// Exercise 2 : for...of with let
// ==========================================

const task2 = `
// for...of with let

const numbers = [10, 20, 30];

for (let value of numbers) {

    setTimeout(() => {
        console.log(value);
    }, 1000);
}
`;

document.getElementById("task2Code").textContent = task2;

let output2 = "";

const numbers = [10, 20, 30];

output2 += "Prediction :\n";
output2 += "10\n20\n30\n\n";

output2 += "Explanation :\n";
output2 += "let creates a new block-scoped variable\n";
output2 += "for every loop iteration.";

document.getElementById("exercise2Output").textContent = output2;

for (let value of numbers) {

    setTimeout(() => {
        console.log(value);
    }, 1000);
}


// ==========================================
// Exercise 3 : Bank Account Closure
// ==========================================

const task3 = `
// Bank account closure

function createBankAccount() {

    let balance = 0;

    let transactionCount = 0;

    return {

        deposit(amount) {
            balance += amount;
            transactionCount++;
        },

        withdraw(amount) {
            balance -= amount;
            transactionCount++;
        },

        getBalance() {
            return balance;
        },

        getTransactionCount() {
            return transactionCount;
        }
    };
}

const account = createBankAccount();

account.deposit(1000);

account.withdraw(200);

console.log(account.getBalance());

console.log(account.getTransactionCount());
`;

document.getElementById("task3Code").textContent = task3;

let output3 = "";

function createBankAccount() {

    let balance = 0;

    let transactionCount = 0;

    return {

        deposit(amount) {
            balance += amount;
            transactionCount++;
        },

        withdraw(amount) {
            balance -= amount;
            transactionCount++;
        },

        getBalance() {
            return balance;
        },

        getTransactionCount() {
            return transactionCount;
        }
    };
}

const account = createBankAccount();

account.deposit(1000);

account.withdraw(200);

output3 += "Balance : " + account.getBalance() + "\n";

output3 += "Transaction Count : ";
output3 += account.getTransactionCount();

document.getElementById("exercise3Output").textContent = output3;


// ==========================================
// Exercise 4 : once(fn)
// ==========================================

const task4 = `
// once(fn)

function once(fn) {

    let called = false;

    let result;

    return function(...args) {

        if (!called) {

            result = fn(...args);

            called = true;
        }

        return result;
    };
}

function greet(name) {

    console.log("Hello " + name);

    return "Greeting Done";
}

const greetOnce = once(greet);

console.log(greetOnce("Riya"));

console.log(greetOnce("Aman"));
`;

document.getElementById("task4Code").textContent = task4;

let output4 = "";

function once(fn) {

    let called = false;

    let result;

    return function(...args) {

        if (!called) {

            result = fn(...args);

            called = true;
        }

        return result;
    };
}

function greet(name) {

    output4 += "Hello " + name + "\n";

    return "Greeting Done";
}

const greetOnce = once(greet);

output4 += greetOnce("Riya") + "\n";

output4 += greetOnce("Aman") + "\n\n";

output4 += "Explanation :\n";
output4 += "Function runs only once.\n";
output4 += "Later calls return cached result.";

document.getElementById("exercise4Output").textContent = output4;
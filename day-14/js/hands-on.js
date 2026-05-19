// ==============================
// Task 1 : Build a Counter
// ==============================

const task1Code = `function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

// count lives inside the closure.
// It stays in memory even after makeCounter() finishes.`;


document.getElementById("task1Code").textContent = task1Code;

let task1Result = "";

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

task1Result += counter1() + "\n";
task1Result += counter1() + "\n";
task1Result += counter2() + "\n";
task1Result += counter2();

document.getElementById("task1Output").textContent = task1Result;


// ==============================
// Task 2 : var-in-Loop Bug
// ==============================

const task2Code = `// Using var

for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Output:
// 4
// 4
// 4

// Fixed using let

for (let j = 1; j <= 3; j++) {
    setTimeout(() => console.log(j), 100);
}

// let creates a new block-scoped variable
// for every iteration.
// var shares the same variable.`;


document.getElementById("task2Code").textContent = task2Code;

let task2Result = "";

task2Result += "Using var -> 4 4 4\n";
task2Result += "Using let -> 1 2 3";

document.getElementById("task2Output").textContent = task2Result;


// ==============================
// Task 3 : Private Bank Balance
// ==============================

const task3Code = `function createAccount(initial) {

    let balance = initial;

    return {

        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createAccount(1000);

account.deposit(500);

account.withdraw(200);

console.log(account.getBalance());

console.log(account.balance);

// balance is private because it exists
// inside the closure only.`;


document.getElementById("task3Code").textContent = task3Code;

let task3Result = "";

function createAccount(initial) {

    let balance = initial;

    return {

        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createAccount(1000);

account.deposit(500);

account.withdraw(200);

task3Result += "Balance : " + account.getBalance() + "\n";

task3Result += "account.balance : " + account.balance;

document.getElementById("task3Output").textContent = task3Result;


// ==============================
// Bonus Task : Memoizer
// ==============================

const taskBonusCode = `function memoize(fn) {

    const cache = {};

    return function (value) {

        if (cache[value]) {
            console.log("From Cache");
            return cache[value];
        }

        console.log("Calculating...");

        const result = fn(value);

        cache[value] = result;

        return result;
    };
}

function expensiveSquare(n) {
    return n * n;
}

const memoSquare = memoize(expensiveSquare);

console.log(memoSquare(5));

console.log(memoSquare(5));

console.log(memoSquare(6));

// cache lives inside the closure
// of memoize().`;


document.getElementById("taskBonusCode").textContent = taskBonusCode;

let bonusResult = "";

function memoize(fn) {

    const cache = {};

    return function (value) {

        if (cache[value]) {
            bonusResult += "From Cache\n";
            return cache[value];
        }

        bonusResult += "Calculating...\n";

        const result = fn(value);

        cache[value] = result;

        return result;
    };
}

function expensiveSquare(n) {
    return n * n;
}

const memoSquare = memoize(expensiveSquare);

bonusResult += memoSquare(5) + "\n";

bonusResult += memoSquare(5) + "\n";

bonusResult += memoSquare(6);

document.getElementById("taskBonusOutput").textContent = bonusResult;
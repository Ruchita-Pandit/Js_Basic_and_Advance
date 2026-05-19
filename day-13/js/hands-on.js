// ==============================
// Task 1 : var Hoisting
// ==============================

const task1Code = `// Prediction:
// First console.log -> undefined
// Second console.log -> Priya

console.log(name);

var name = "Priya";

console.log(name);

// Why undefined and not ReferenceError?
// var declarations are hoisted and initialized with undefined
// during memory creation phase.`;


document.getElementById("task1Code").textContent = task1Code;

let task1Result = "";

function task1Log(message) {
    task1Result += message + "\n";
}

var name;

task1Log(name);

name = "Priya";

task1Log(name);

document.getElementById("task1Output").textContent = task1Result;


// ==============================
// Task 2 : TDZ
// ==============================

const task2Code = `// Prediction:
// ReferenceError will occur

console.log(city);

let city = "Jaipur";

// TDZ stands for:
// Temporal Dead Zone`;


document.getElementById("task2Code").textContent = task2Code;

let task2Result = "";

try {
    task2Result += "Trying to access city before declaration...\n";

    console.log(city);

    let city = "Jaipur";

} catch (error) {
    task2Result += error.name + ": " + error.message;
}

document.getElementById("task2Output").textContent = task2Result;


// ==============================
// Task 3 : Function Declaration vs Expression
// ==============================

const task3Code = `// Prediction:
// sayHi() works
// greet() throws error

sayHi();

greet();

function sayHi() {
    console.log("Hi");
}

var greet = function () {
    console.log("Hello");
};

// Function declarations are fully hoisted.
// Function expressions behave like variables.
// Here greet is hoisted as undefined.`;


document.getElementById("task3Code").textContent = task3Code;

let task3Result = "";

function task3Log(message) {
    task3Result += message + "\n";
}

try {

    sayHi();

    function sayHi() {
        task3Log("Hi");
    }

    greet();

    var greet = function () {
        task3Log("Hello");
    };

} catch (error) {
    task3Log(error.name + ": " + error.message);
}

document.getElementById("task3Output").textContent = task3Result;


// ==============================
// Bonus Task : Call Stack
// ==============================

const taskBonusCode = `function multiply(a, b) {
    console.trace("Trace inside multiply");
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    console.log(square(n));
}

printSquare(5);

/*
Call Stack when multiply(5,5) runs:

| multiply(5,5) |
| square(5)     |
| printSquare(5)|
| Global()      |

Final Output:
25
*/`;

document.getElementById("taskBonusCode").textContent = taskBonusCode;

let bonusResult = "";

function multiply(a, b) {
    console.trace("Trace inside multiply");
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    bonusResult += square(n);
}

printSquare(5);

document.getElementById("taskBonusOutput").textContent = bonusResult;
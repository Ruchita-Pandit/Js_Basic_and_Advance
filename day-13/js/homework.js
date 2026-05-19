// ==========================================
// Exercise 1 : typeof with var
// ==========================================

const task1 = `
// Predict the output

console.log(typeof age);

var age = 25;
`;

document.getElementById("task1Code").textContent = task1;

let output1 = "";

output1 += "Prediction : undefined\n\n";

output1 += "Actual Output :\n";

output1 += typeof age;

var age = 25;

output1 += "\n\nExplanation :\n";
output1 += "var declarations are hoisted.\n";
output1 += "Before assignment, age is undefined.\n";
output1 += "typeof undefined returns 'undefined'.";

document.getElementById("exercise1Output").textContent = output1;


// ==========================================
// Exercise 2 : TDZ with let
// ==========================================

const task2 = `
// Accessing let before declaration

console.log(score);

let score = 90;
`;

document.getElementById("task2Code").textContent = task2;

let output2 = "";

try {

    console.log(score);

    let score = 90;

} catch (error) {

    output2 += "Error Message :\n\n";

    output2 += error;
}

output2 += "\n\nExplanation :\n";
output2 += "let variables stay in Temporal Dead Zone\n";
output2 += "from start of scope until declaration line.";

document.getElementById("exercise2Output").textContent = output2;


// ==========================================
// Exercise 3 : Function Hoisting
// ==========================================

const task3 = `
// Function Declaration

sayHello();

function sayHello() {
    console.log("Hello");
}


// Function Expression with var

greet();

var greet = function () {
    console.log("Hi");
};


// Arrow Function with const

welcome();

const welcome = () => {
    console.log("Welcome");
};
`;

document.getElementById("task3Code").textContent = task3;

let output3 = "";

// Function Declaration
try {

    sayHello();

    function sayHello() {
        output3 += "Function Declaration : Works\n";
    }

} catch (error) {

    output3 += error + "\n";
}


// Function Expression with var
try {

    greet();

    var greet = function () {
        output3 += "Function Expression : Works\n";
    };

} catch (error) {

    output3 += "Function Expression Error : ";
    output3 += error + "\n";
}


// Arrow Function with const
try {

    welcome();

    const welcome = () => {
        output3 += "Arrow Function : Works\n";
    };

} catch (error) {

    output3 += "Arrow Function Error : ";
    output3 += error + "\n";
}

output3 += "\nExplanation :\n";
output3 += "1. Function declarations are fully hoisted.\n";
output3 += "2. var function expressions become undefined.\n";
output3 += "3. const arrow functions stay in TDZ.";

document.getElementById("exercise3Output").textContent = output3;


// ==========================================
// Exercise 4 : console.trace()
// ==========================================

const task4 = `
// console.trace example

function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.trace();
}

first();
`;

document.getElementById("task4Code").textContent = task4;

let output4 = "";

function first() {
    second();
}

function second() {
    third();
}

function third() {

    console.trace();

    output4 += "Call Stack Order :\n\n";
    output4 += "Global EC\n";
    output4 += "-> first()\n";
    output4 += "-> second()\n";
    output4 += "-> third()\n";
}

first();

output4 += "\nExplanation :\n";
output4 += "Each function creates a new Execution Context.";

document.getElementById("exercise4Output").textContent = output4;


// ==========================================
// Exercise 5 : Lexical Environment
// ==========================================

const task5 = `
// Lexical Environment example

let outer = "Outside";

function parent() {

    let parentVar = "Parent";

    function child() {

        let childVar = "Child";

        console.log(outer);
        console.log(parentVar);
        console.log(childVar);
    }

    child();
}

parent();
`;

document.getElementById("task5Code").textContent = task5;

let output5 = "";

let outer = "Outside";

function parent() {

    let parentVar = "Parent";

    function child() {

        let childVar = "Child";

        output5 += outer + "\n";
        output5 += parentVar + "\n";
        output5 += childVar + "\n";
    }

    child();
}

parent();

output5 += "\nExplanation :\n";
output5 += "Inner functions can access variables\n";
output5 += "from outer lexical environments.";

document.getElementById("exercise5Output").textContent = output5;
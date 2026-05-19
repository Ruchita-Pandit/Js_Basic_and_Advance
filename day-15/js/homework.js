// ==========================================
// Exercise 1 : this keyword
// ==========================================

const task1 = `
// user object

const user = {

    name: "Riya",

    greet() {
        console.log(this.name);
    }
};

user.greet();

const fn = user.greet;

fn();

user.greet.call({ name: "X" });
`;

document.getElementById("task1Code").textContent = task1;

let output1 = "";

const user = {

    name: "Riya",

    greet() {
        return this.name;
    }
};

output1 += "Prediction :\n";
output1 += "Riya\n";
output1 += "undefined\n";
output1 += "X\n\n";

output1 += "Actual Output :\n";

output1 += user.greet() + "\n";

const fn = user.greet;

output1 += fn() + "\n";

output1 += user.greet.call({ name: "X" }) + "\n\n";

output1 += "Explanation :\n";
output1 += "1. user.greet() -> this refers to user\n";
output1 += "2. fn() -> normal function call, this becomes global/window\n";
output1 += "3. call() manually sets this";

document.getElementById("exercise1Output").textContent = output1;


// ==========================================
// Exercise 2 : Fix callback bug
// ==========================================

const task2 = `
// Fix callback bug

class Counter {

    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(this.count);
    }
}

const c1 = new Counter();

// Bug
setTimeout(c1.increment, 1000);


// Fix 1 : bind
setTimeout(c1.increment.bind(c1), 2000);


// Fix 2 : arrow wrapper
setTimeout(() => c1.increment(), 3000);


// Fix 3 : class field arrow

class Counter2 {

    count = 0;

    increment = () => {
        this.count++;
        console.log(this.count);
    };
}

const c2 = new Counter2();

setTimeout(c2.increment, 4000);
`;

document.getElementById("task2Code").textContent = task2;

let output2 = "";

output2 += "Bug : this is lost in callback\n\n";

output2 += "Fix 1 : bind()\n";
output2 += "bind permanently attaches this\n\n";

output2 += "Fix 2 : Arrow wrapper\n";
output2 += "Arrow uses outer this\n\n";

output2 += "Fix 3 : Class field arrow\n";
output2 += "Arrow method automatically keeps this";

document.getElementById("exercise2Output").textContent = output2;


// ==========================================
// Exercise 3 : apply()
// ==========================================

const task3 = `
// apply()

function sum(...nums) {

    return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum.apply(null, numbers));
`;

document.getElementById("task3Code").textContent = task3;

let output3 = "";

function sum(...nums) {

    return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3, 4, 5];

output3 += "Output : ";
output3 += sum.apply(null, numbers);

output3 += "\n\nExplanation :\n";
output3 += ".apply spreads array values as arguments.\n";
output3 += "Very useful when arguments already exist in array form.";

document.getElementById("exercise3Output").textContent = output3;


// ==========================================
// Exercise 4 : bind with arrow function
// ==========================================

const task4 = `
// Arrow function with bind

const f = () => console.log(this);

const bound = f.bind({ x: 1 });

bound();
`;

document.getElementById("task4Code").textContent = task4;

let output4 = "";

const f = () => this;

const bound = f.bind({ x: 1 });

output4 += "Output :\n";
output4 += String(bound());

output4 += "\n\nExplanation :\n";
output4 += "Arrow functions do not have their own this.\n";
output4 += "bind() cannot change arrow function this.";

document.getElementById("exercise4Output").textContent = output4;
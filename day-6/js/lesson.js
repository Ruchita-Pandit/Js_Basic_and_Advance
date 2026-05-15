// ==============================
// Day 6 - Functions
// ==============================

const topic1Snippet = `function greet(name) {
    console.log("Hello, " + name);
}

greet("Alice");
greet("Bob");`;

const topic2Snippet = `function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);`;

const topic3Snippet = `let multiply = function(x, y) {
    return x * y;
};

console.log(multiply(4, 5));`;

const topic4Snippet = `let square = (num) => {
    return num * num;
};

// Shorter syntax
let cube = (num) => num * num * num;

console.log(square(5));
console.log(cube(3));`;

// Inject snippets into HTML
// ==============================

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;

// Output Arrays
// ==============================

const topic1Output = [
    "Hello, Alice",
    "Hello, Bob"
];

const topic2Output = [
    "8"
];

const topic3Output = [
    "20"
];

const topic4Output = [
    "25",
    "27",
    "8",
    "hi",
    "undefined",
    "Hello, Ruchi",
    "8",
    "4",
    "4"
];

// Show Output in HTML
// ==============================

document.getElementById("topic1Output").textContent =topic1Output.join("\n");
document.getElementById("topic2Output").textContent =topic2Output.join("\n");
document.getElementById("topic3Output").textContent =topic3Output.join("\n");
document.getElementById("topic4Output").textContent =topic4Output.join("\n");

// Console Demonstration
// ==============================

console.log("=== Day 6: Functions ===");

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

function silent() {
    console.log("hi");
}

const x = silent();

console.log(x);

const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Ruchi"));

const addNum = (a, b) => a + b;

console.log(addNum(3, 5));

function square1(x) {
    return x * x;
}

console.log(square1(2));

const square2 = x => x * x;

console.log(square2(2));
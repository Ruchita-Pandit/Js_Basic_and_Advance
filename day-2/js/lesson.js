// ==============================
// Topic 1 : Declaring Variables
// ==============================

const topic1Snippet = `var name = "Alice";

let age = 25;

const country = "India";`;

document.querySelector("#topic1Code code").textContent = topic1Snippet;

document.getElementById("topic1Output").textContent = `
Alice string
25 number
India string
`;


// ==============================
// Topic 2 : Variable Naming Rules
// ==============================

const topic2Snippet = `let firstName = "John";

let _age = 30;

let $price = 100;`;

document.querySelector("#topic2Code code").textContent = topic2Snippet;

document.getElementById("topic2Output").textContent = `
John
30
100
`;


// ==============================
// Topic 3 : var vs let vs const
// ==============================

const topic3Snippet = `var x = 1;  
// Can be redeclared and reassigned

let y = 2;  
// Cannot be redeclared, can be reassigned

const z = 3; 
// Cannot be redeclared or reassigned`;

document.querySelector("#topic3Code code").textContent = topic3Snippet;

document.getElementById("topic3Output").textContent = `
10 number
20 number
30 number

var accessible in function: var

let is block-scoped
`;


// ==============================
// Console Demonstration
// ==============================

console.log("=== Day 2: Variables ===");

var x = 10;
let y = 20;
const z = 30;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

function testVar() {
    if (true) {
        var v = "var";
    }

    console.log("var accessible in function:", v);
}

testVar();

function testLet() {
    if (true) {
        let l = "let";
    }

    console.log("let is block-scoped");
}

testLet();
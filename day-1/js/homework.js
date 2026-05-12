// Exercise 1

let myName = "Ruchita Pandit";
let age = 20;
let city = "Bhopal";

const exercise1Result = `
My name is ${myName}
My age is ${age}
I live in ${city}
This year I'll be ${age + 1} years old
`;

document.querySelector("#exercise1Output").textContent = exercise1Result;


// Exercise 2

let weeklyAllowance = 500;

const exercise2Result = `
Weekly Allowance: ₹${weeklyAllowance}
Monthly Allowance: ₹${weeklyAllowance * 4}
Yearly Allowance: ₹${weeklyAllowance * 52}
`;

document.querySelector("#exercise2Output").textContent = exercise2Result;


// Exercise 3

let item1 = 100;
let item2 = 250;
let item3 = 75;

let subtotal = item1 + item2 + item3;
let tax = subtotal * 0.18;
let total = subtotal + tax;

const exercise3Result = `
Subtotal: ₹${subtotal}
Tax (18%): ₹${tax}
Total: ₹${total}
`;

document.querySelector("#exercise3Output").textContent = exercise3Result;
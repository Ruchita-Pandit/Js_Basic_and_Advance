z// ==============================
// Task 1 : Template Literals
// ==============================

let product = "Laptop";
let price = 50000;
let tax = 0.18;

let totalPrice = price + (price * tax);

document.getElementById("task1Output").textContent =
`${product} costs ₹${price} + ₹${price * tax} GST = ₹${totalPrice}`;


// ==============================
// Task 2 : Destructuring
// ==============================

let scores = [88, 75, 92, 60, 45];

let [top, second, ...rest] = scores;

let user = {
    name: "Anaya",
    age: 21,
    city: "Jaipur"
};

let { name, age } = user;

document.getElementById("task2Output").textContent =
`Top: ${top}
Second: ${second}
Rest: ${rest}

${name} is ${age} years old`;


// ==============================
// Task 3 : Spread Operator
// ==============================

let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5];

let defaults = {
    theme: "light",
    lang: "en"
};

let userPrefs = {
    theme: "dark"
};

let merged = {
    ...defaults,
    ...userPrefs
};

document.getElementById("task3Output").textContent =
`Merged Array: ${arr2}

Theme: ${merged.theme}
Language: ${merged.lang}`;
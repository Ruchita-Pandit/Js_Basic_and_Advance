// ==============================
// Task 1 : Rectangle Area
// ==============================

function area(length, width) {
    return length * width;
}

const areafn = (length, width) => length * width;

let task1Output = "";

task1Output += "Using Normal Function:\n";
task1Output += `area(5, 10) = ${area(5, 10)}\n`;
task1Output += `area(7, 3) = ${area(7, 3)}\n`;
task1Output += `area(12, 4) = ${area(12, 4)}\n\n`;

task1Output += "Using Arrow Function:\n";
task1Output += `areafn(5, 10) = ${areafn(5, 10)}\n`;
task1Output += `areafn(7, 3) = ${areafn(7, 3)}\n`;
task1Output += `areafn(12, 4) = ${areafn(12, 4)}`;

document.getElementById("task1Output").textContent = task1Output;


// ==============================
// Task 2 : Default Parameters
// ==============================

function greetName(name = "Guest") {
    return `Hello, ${name}!`;
}

let task2Output = "";
task2Output += `${greetName("Priya")}\n`;
task2Output += `${greetName("Aarav")}\n`;
task2Output += `${greetName()}\n`;
task2Output += `${greetName(null)}\n\n`;

task2Output += "Default parameter only works for undefined.";

document.getElementById("task2Output").textContent = task2Output;


// ==============================
// Task 3 : Temperature Converter
// ==============================

const temperature = (temp) => (temp * 9 / 5) + 32;

let task3Output = "";

task3Output += `0°C = ${temperature(0)}°F\n`;
task3Output += `100°C = ${temperature(100)}°F\n`;
task3Output += `37°C = ${temperature(37)}°F\n`;
task3Output += `45°C = ${temperature(45)}°F`;
document.getElementById("task3Output").textContent = task3Output;


// ==============================
// Bonus : Pure vs Impure Functions
// ==============================

function double(n) {
    return n * 2;
}

let total = 0;

function addToTotal(n) {
    total += n;
    return total;
}

let bonusOutput = "";
bonusOutput += "Pure Function:\n";
bonusOutput += `double(2) = ${double(2)}\n`;
bonusOutput += `double(5) = ${double(5)}\n`;
bonusOutput += `double(10) = ${double(10)}\n\n`;
bonusOutput += "Impure Function:\n";
bonusOutput += `addToTotal(2) = ${addToTotal(2)}\n`;
bonusOutput += `addToTotal(5) = ${addToTotal(5)}\n`;
bonusOutput += `addToTotal(10) = ${addToTotal(10)}\n\n`;
bonusOutput += "Pure functions always give the same output for the same input.\n";
bonusOutput += "Impure functions depend on external state.";
document.getElementById("bonusOutput").textContent = bonusOutput;
// ---------------- Task 1 ----------------
const task1 = [];

const name = "John";
const age = 22;
const isEmployed = true;
const emptyValue = null;
let notAssigned;

task1.push(`${name} -> ${typeof(name)}`);
task1.push(`${age} -> ${typeof(age)}`);
task1.push(`${isEmployed} -> ${typeof(isEmployed)}`);
task1.push(`${emptyValue} -> ${typeof(emptyValue)}`);
task1.push(`${notAssigned} -> ${typeof(notAssigned)}`);

document.querySelector("#task1Output").textContent = task1.join("\n");


// ---------------- Task 2 ----------------
const task2 = [];

task2.push(`"10" + 5 = ${"10" + 5}`);
task2.push(`"10" - 5 = ${"10" - 5}`);
task2.push(`true + true = ${true + true}`);
task2.push(`"" + false = ${"" + false}`);
task2.push(`null + 1 = ${null + 1}`);

document.querySelector("#task2Output").textContent = task2.join("\n");


// ---------------- Task 3 ----------------
const task3 = [];

const fullName = "   Ruchita Pandit   ";

const trimmed = fullName.trim();

task3.push(`Trimmed: ${trimmed}`);
task3.push(`Uppercase: ${trimmed.toUpperCase()}`);
task3.push(`Length: ${trimmed.length}`);
task3.push(`Includes "Ruchita": ${trimmed.includes("Ruchita")}`);

const firstName = trimmed.slice(0, 12);

task3.push(`Slice: ${firstName}`);

document.querySelector("#task3Output").textContent = task3.join("\n");

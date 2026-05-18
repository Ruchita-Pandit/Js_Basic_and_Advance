// ======================
// Task 1
// ======================

function printGrade(marks) {

    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    }
    else if (marks >= 90) {
        return "Grade is A";
    }
    else if (marks >= 75) {
        return "Grade is B";
    }
    else if (marks >= 60) {
        return "Grade is C";
    }
    else {
        return "Grade is F";
    }
}

document.getElementById("task1Output").textContent =
`${printGrade(75)}
${printGrade(95)}
${printGrade(50)}`;


// ======================
// Task 2
// ======================

let day = "Wednesday";
let result = "";

switch (day) {

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        result = "Weekday";
        break;

    case "Saturday":
    case "Sunday":
        result = "Weekend";
        break;

    default:
        result = "Invalid day";
}

document.getElementById("task2Output").textContent = result;


// ======================
// Task 3
// ======================

let truthyFalsyOutput = "";

if (0) {
    truthyFalsyOutput += "0 is a truthy value\n";
}
else {
    truthyFalsyOutput += "0 is a falsy value\n";
}

if ("0") {
    truthyFalsyOutput += '"0" is a truthy value\n';
}
else {
    truthyFalsyOutput += '"0" is a falsy value\n';
}

if ("") {
    truthyFalsyOutput += 'empty string is a truthy value\n';
}
else {
    truthyFalsyOutput += 'empty string is a falsy value\n';
}

if (" ") {
    truthyFalsyOutput += 'string with space is truthy\n';
}
else {
    truthyFalsyOutput += 'string with space is falsy\n';
}

if (null) {
    truthyFalsyOutput += 'null is truthy\n';
}
else {
    truthyFalsyOutput += 'null is falsy\n';
}

if (undefined) {
    truthyFalsyOutput += 'undefined is truthy\n';
}
else {
    truthyFalsyOutput += 'undefined is falsy\n';
}

if (NaN) {
    truthyFalsyOutput += 'NaN is truthy\n';
}
else {
    truthyFalsyOutput += 'NaN is falsy\n';
}

if ([]) {
    truthyFalsyOutput += '[] is truthy\n';
}
else {
    truthyFalsyOutput += '[] is falsy\n';
}

if ({}) {
    truthyFalsyOutput += '{} is truthy\n';
}
else {
    truthyFalsyOutput += '{} is falsy\n';
}

if ("false") {
    truthyFalsyOutput += '"false" string is truthy\n';
}
else {
    truthyFalsyOutput += '"false" string is falsy\n';
}

truthyFalsyOutput += `
Falsy values: false, 0, "", null, undefined, NaN`;

document.getElementById("task3Output").textContent = truthyFalsyOutput;


// ======================
// Bonus Task
// ======================

const user1 = {
    isBanned: true,
    age: 12
};

const user2 = {
    isBanned: null,
    age: 18
};

function comment(user) {

    if (!user) return "Comment not allowed";

    if (user.isBanned) return "Comment not allowed";

    if (user.age >= 13) return "Comment allowed";
}

const fruits = ["apple", "banana", "mango"];

let bonusOutput = "";

bonusOutput += `${comment(user1)}\n`;
bonusOutput += `${comment(user2)}\n\n`;

bonusOutput += "Fruits:\n";

for (let i = 0; i < fruits.length; i++) {
    bonusOutput += fruits[i] + "\n";
}

const Username = "Priya";

bonusOutput += "\nCharacters in Username:\n";

for (let i = 0; i < Username.length; i++) {
    bonusOutput += Username[i] + "\n";
}

const s = {
    name: "Aarav",
    age: 22
};

const keys = Object.keys(s);

bonusOutput += "\nObject Keys and Values:\n";

for (let i = 0; i < keys.length; i++) {

    const key = keys[i];

    bonusOutput += `${key} : ${s[key]}\n`;
}

document.getElementById("taskBonusOutput").textContent = bonusOutput;
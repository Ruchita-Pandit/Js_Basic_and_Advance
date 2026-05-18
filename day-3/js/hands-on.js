// ======================
// Task 1
// ======================

const a = 17;
const b = 5;

const firstResult = a + b;
const secondResult = a - b;
const thirdResult = a * b;
const fourthResult = a / b;
const fifthResult = a % b;
const sixthResult = a ** b;

const evenOrOdd = (42 % 2 === 0 ? "even" : "odd");

document.getElementById("task1Output").textContent =
`Addition: ${firstResult}
Subtraction: ${secondResult}
Multiplication: ${thirdResult}
Division: ${fourthResult}
Remainder: ${fifthResult}
`


// ======================
// Task 2
// ======================

document.getElementById("task2Output").textContent =
`5 == "5" -> ${5 == "5"}
5 === "5" -> ${5 === "5"}
0 == false -> ${0 == false}
0 === false -> ${0 === false}
null == undefined -> ${null == undefined}

// === is preferred because it checks both value and type`;


// ======================
// Task 3
// ======================

const age = 19;
let hasLicense = true;
const hasCar = false;

const canDrive = age >= 18 && hasLicense;
const canTravel = hasLicense || hasCar;

hasLicense = false;

const canDriveAfterFlip = age >= 18 && hasLicense;
const canTravelAfterFlip = hasLicense || hasCar;

document.getElementById("task3Output").textContent =
`canDrive: ${canDrive}
canTravel: ${canTravel}

After changing hasLicense to false:

canDriveAfterFlip: ${canDriveAfterFlip}
canTravelAfterFlip: ${canTravelAfterFlip}`;


// ======================
// Bonus Task
// ======================

const mood = age >= 18 ? "adult" : "minor";

let username = null;
const display = username ?? "Guest";
const display2 = username || "Guest";

document.getElementById("taskBonusOutput").textContent =`Mood: ${mood}

Using ?? operator: ${display}
Using || operator: ${display2}`

// ?? only falls back for null or undefined,
// while || falls back for any falsy value`;
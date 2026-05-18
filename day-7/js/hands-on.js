// ==============================
// Task 1 : Cart Manipulation
// ==============================

const cart = ["bread", "milk", "eggs"];

cart.push("butter");
cart.unshift("rice");

let task1Output = "";

task1Output += "After push and unshift:\n";
task1Output += `${cart.join(", ")}\n\n`;

cart.pop();

task1Output += "After pop:\n";
task1Output += `${cart.join(", ")}\n\n`;

cart.splice(1, 1);

task1Output += "After splice:\n";
task1Output += `${cart.join(", ")}`;

document.getElementById("task1Output").textContent = task1Output;


// ==============================
// Task 2 : Filter Passing Scores
// ==============================

const scores = [88, 42, 75, 60, 91, 39, 55, 70];

const passing = scores.filter(score => score >= 60);

const firstFail = scores.find(score => score < 60);

const allPassing = scores.every(score => score >= 60);

const anyAbove90 = scores.some(score => score > 90);

let task2Output = "";

task2Output += `Scores: ${scores.join(", ")}\n\n`;

task2Output += `Passing Scores: ${passing.join(", ")}\n`;
task2Output += `First Failed Score: ${firstFail}\n`;
task2Output += `All Passing: ${allPassing}\n`;
task2Output += `Any Above 90: ${anyAbove90}`;

document.getElementById("task2Output").textContent = task2Output;


// ==============================
// Task 3 : Map Prices with GST
// ==============================

const prices = [100, 250, 500, 1200, 80];

const withGST = prices.map(price => price * 1.18);

const withGSTRounded = withGST.map(price => price.toFixed(2));

let task3Output = "";

task3Output += `Original Prices: ${prices.join(", ")}\n\n`;

task3Output += `Prices with GST:\n`;
task3Output += `${withGST.join(", ")}\n\n`;

task3Output += `Rounded GST Prices:\n`;
task3Output += `${withGSTRounded.join(", ")}`;

document.getElementById("task3Output").textContent = task3Output;


// ==============================
// Bonus : Reduce to Total
// ==============================

const expenses = [250, 800, 120, 50, 1500, 75];

const totalExpense = expenses.reduce(
    (total, expense) => total + expense,
    0
);

const highestExpense = expenses.reduce(
    (max, expense) => expense > max ? expense : max,
    expenses[0]
);

const totalExpenseAbove100 = expenses
    .filter(expense => expense > 100)
    .reduce((total, expense) => total + expense, 0);

let bonusOutput = "";
bonusOutput += `Expenses: ${expenses.join(", ")}\n\n`;
bonusOutput += `Total Expense: ${totalExpense}\n`;
bonusOutput += `Highest Expense: ${highestExpense}\n`;
bonusOutput += `Total Expense Above 100: ${totalExpenseAbove100}`;
document.getElementById("taskBonusOutput").textContent = bonusOutput;
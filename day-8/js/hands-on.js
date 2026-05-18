// ==============================
// Task 1 : Build a Student Object
// ==============================

const student = {
    name: "Ananya",
    age: 21,
    city: "Jaipur",
    course: "BTech",
    marks: [60, 70, 80]
};

let task1Output = "";

task1Output += "Original Student Object:\n";
task1Output += JSON.stringify(student, null, 2);

task1Output += `\n\nName: ${student.name}`;
task1Output += `\nAge: ${student.age}`;
task1Output += `\nFirst Mark: ${student.marks[0]}`;

student.email = "anaya@example.com";
student.age = 22;
delete student.city;

task1Output += "\n\nUpdated Student Object:\n";
task1Output += JSON.stringify(student, null, 2);

document.getElementById("task1Output").textContent = task1Output;


// ==============================
// Task 2 : Method with this
// ==============================

const bankAccount = {
    holder: "Aarav",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    },

    withdraw(amount) {

        if (amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        }
        else {
            return "Insufficient balance";
        }
    }
};

let task2Output = "";

task2Output += `Deposit 1000: ${bankAccount.deposit(1000)}\n`;
task2Output += `Withdraw 2000: ${bankAccount.withdraw(2000)}\n`;
task2Output += `Withdraw 10000: ${bankAccount.withdraw(10000)}`;

document.getElementById("task2Output").textContent = task2Output;


// ==============================
// Task 3 : Destructuring
// ==============================

const product = {
    id: 101,
    name: "Laptop",
    price: 60000,
    brand: "Dell",
    stock: 5
};

const { name, price } = product;

const { brand: make } = product;

const { warranty = "1 year" } = product;

let task3Output = "";

task3Output += `Name: ${name}\n`;
task3Output += `Price: ${price}\n`;
task3Output += `Brand (make): ${make}\n`;
task3Output += `Warranty: ${warranty}`;

document.getElementById("task3Output").textContent = task3Output;


// ==============================
// Bonus : Object as Iterable
// ==============================

const keys = Object.keys(student);

const values = Object.values(student);

const entries = Object.entries(student);

let bonusOutput = "";

bonusOutput += "Keys:\n";
bonusOutput += `${JSON.stringify(keys)}\n\n`;

bonusOutput += "Values:\n";
bonusOutput += `${JSON.stringify(values)}\n\n`;

bonusOutput += "Entries:\n";
bonusOutput += `${JSON.stringify(entries)}\n\n`;

bonusOutput += "Key-Value Pairs:\n\n";

entries.forEach(([key, value]) => {
    bonusOutput += `${key}: ${value}\n`;
});

document.getElementById("taskBonusOutput").textContent = bonusOutput;
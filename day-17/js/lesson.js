// ===============================
// Topic 1 : Class Syntax Basics
// ===============================

const task1Code = `
class User {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    greet() {
        return \`Hi, I'm \${this.name} from \${this.city}\`;
    }
}

const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");

console.log(a.greet());
console.log(b.greet());

console.log(typeof User);
console.log(a.greet === b.greet);

console.log(
    Object.getPrototypeOf(a) === User.prototype
);
`;

document.getElementById("task1Code").textContent = task1Code;

class User {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    greet() {
        return `Hi, I'm ${this.name} from ${this.city}`;
    }
}

const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");

document.getElementById("lesson1Output").textContent =
`${a.greet()}
${b.greet()}

${typeof User}
${a.greet === b.greet}

${Object.getPrototypeOf(a) === User.prototype}`;



// ===============================
// Topic 2 : Getters and Setters
// ===============================

const task2Code = `
class Product {
    constructor(name, priceInPaise) {
        this.name = name;
        this._priceInPaise = priceInPaise;
    }

    get priceInRupees() {
        return this._priceInPaise / 100;
    }

    get priceWithGST() {
        return this.priceInRupees * 1.18;
    }

    set priceInRupees(rupees) {
        if (rupees < 0) {
            throw new Error("Price cannot be negative");
        }

        this._priceInPaise = rupees * 100;
    }
}

const p = new Product("Notebook", 5000);

console.log(p.priceInRupees);
console.log(p.priceWithGST);

p.priceInRupees = 100;

console.log(p.priceInRupees);
`;

document.getElementById("task2Code").textContent = task2Code;

class Product {
    constructor(name, priceInPaise) {
        this.name = name;
        this._priceInPaise = priceInPaise;
    }

    get priceInRupees() {
        return this._priceInPaise / 100;
    }

    get priceWithGST() {
        return this.priceInRupees * 1.18;
    }

    set priceInRupees(rupees) {
        if (rupees < 0) {
            throw new Error("Price cannot be negative");
        }

        this._priceInPaise = rupees * 100;
    }
}

const p = new Product("Notebook", 5000);

const beforeGST = p.priceWithGST;

p.priceInRupees = 100;

document.getElementById("lesson2Output").textContent =
`${p.priceInRupees}
${beforeGST}
100`;



// ===============================
// Topic 3 : extends and super
// ===============================

const task3Code = `
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return \`\${super.speak()}
\${this.name} barks!\`;
    }
}

const d = new Dog("Bruno", "Labrador");

console.log(d.speak());

console.log(d instanceof Dog);
console.log(d instanceof Animal);
`;

document.getElementById("task3Code").textContent = task3Code;

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return `${super.speak()}
${this.name} barks!`;
    }
}

const d = new Dog("Bruno", "Labrador");

document.getElementById("lesson3Output").textContent =
`${d.speak()}

${d instanceof Dog}
${d instanceof Animal}`;



// ===============================
// Topic 4 : static Methods
// ===============================

const task4Code = `
class MathUtils {
    static gst(amount, rate = 18) {
        return amount * (rate / 100);
    }

    static format(amount) {
        return \`₹\${amount.toFixed(2)}\`;
    }
}

console.log(MathUtils.gst(1000));
console.log(MathUtils.format(1180));

class UserFactory {
    constructor(name) {
        this.name = name;
    }

    static fromEmail(email) {
        const name = email.split("@")[0];
        return new UserFactory(name);
    }
}

const u = UserFactory.fromEmail(
    "priya@example.com"
);

console.log(u.name);
`;

document.getElementById("task4Code").textContent = task4Code;

class MathUtils {
    static gst(amount, rate = 18) {
        return amount * (rate / 100);
    }

    static format(amount) {
        return `₹${amount.toFixed(2)}`;
    }
}

class UserFactory {
    constructor(name) {
        this.name = name;
    }

    static fromEmail(email) {
        const name = email.split("@")[0];
        return new UserFactory(name);
    }
}

const u = UserFactory.fromEmail(
    "priya@example.com"
);

document.getElementById("lesson4Output").textContent =
`${MathUtils.gst(1000)}
${MathUtils.format(1180)}

${u.name}`;



// ===============================
// Topic 5 : Private Fields with #
// ===============================

const task5Code = `
class BankAccount {
    #balance;
    #transactions = [];

    constructor(initial) {
        this.#balance = initial;
    }

    deposit(amount) {
        this.#balance += amount;

        this.#transactions.push({
            type: "deposit",
            amount
        });
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error(
                "Insufficient funds"
            );
        }

        this.#balance -= amount;

        this.#transactions.push({
            type: "withdraw",
            amount
        });
    }

    get balance() {
        return this.#balance;
    }

    get history() {
        return [...this.#transactions];
    }
}

const acc = new BankAccount(1000);

acc.deposit(500);
acc.withdraw(200);

console.log(acc.balance);
console.log(acc.history);
`;

document.getElementById("task5Code").textContent = task5Code;

class BankAccount {
    #balance;
    #transactions = [];

    constructor(initial) {
        this.#balance = initial;
    }

    deposit(amount) {
        this.#balance += amount;

        this.#transactions.push({
            type: "deposit",
            amount
        });
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }

        this.#balance -= amount;

        this.#transactions.push({
            type: "withdraw",
            amount
        });
    }

    get balance() {
        return this.#balance;
    }

    get history() {
        return [...this.#transactions];
    }
}

const acc = new BankAccount(1000);

acc.deposit(500);
acc.withdraw(200);

document.getElementById("lesson5Output").textContent =
`Balance: ${acc.balance}

History:
${JSON.stringify(acc.history, null, 2)}`;



// ===============================
// Topic 6 : Custom Error Classes
// ===============================

const task6Code = `
class AppError extends Error {
    constructor(message, code) {
        super(message);

        this.name = this.constructor.name;
        this.code = code;
    }
}

class ValidationError extends AppError {
    constructor(field, message) {
        super(
            message,
            "VALIDATION_FAILED"
        );

        this.field = field;
    }
}

class NotFoundError extends AppError {
    constructor(resource) {
        super(
            \`\${resource} not found\`,
            "NOT_FOUND"
        );
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError(
            "age",
            "Must be non-negative"
        );
    }

    if (age > 150) {
        throw new ValidationError(
            "age",
            "Must be under 150"
        );
    }
}

try {
    validateAge(-5);
} catch (e) {
    if (e instanceof ValidationError) {
        console.log(
            \`[\${e.code}] \${e.field}: \${e.message}\`
        );
    }
}
`;

document.getElementById("task6Code").textContent = task6Code;

class AppError extends Error {
    constructor(message, code) {
        super(message);

        this.name = this.constructor.name;
        this.code = code;
    }
}

class ValidationError extends AppError {
    constructor(field, message) {
        super(message, "VALIDATION_FAILED");

        this.field = field;
    }
}

class NotFoundError extends AppError {
    constructor(resource) {
        super(`${resource} not found`, "NOT_FOUND");
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError(
            "age",
            "Must be non-negative"
        );
    }

    if (age > 150) {
        throw new ValidationError(
            "age",
            "Must be under 150"
        );
    }
}

let errorMessage = "";

try {
    validateAge(-5);
} catch (e) {
    if (e instanceof ValidationError) {
        errorMessage =
        `[${e.code}] ${e.field}: ${e.message}`;
    }
}

document.getElementById("lesson6Output").textContent =
errorMessage;



// ===============================
// Topic 7 : Classes are Sugar
// ===============================

const task7Code = `
function PersonOld(name) {
    this.name = name;
}

PersonOld.prototype.greet = function () {
    return this.name;
};

class PersonNew {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name;
    }
}

const p1 = new PersonOld("Priya");
const p2 = new PersonNew("Aarav");

console.log(p1.greet());
console.log(p2.greet());

console.log(typeof PersonNew);
`;

document.getElementById("task7Code").textContent = task7Code;

function PersonOld(name) {
    this.name = name;
}

PersonOld.prototype.greet = function () {
    return this.name;
};

class PersonNew {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name;
    }
}

const p1 = new PersonOld("Priya");
const p2 = new PersonNew("Aarav");

document.getElementById("lesson7Output").textContent =
`${p1.greet()}
${p2.greet()}

${typeof PersonNew}`;
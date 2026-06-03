// ===============================
// Task 1 : Basic Class with Getter
// ===============================

const task1Code = `class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}

const rect = new Rectangle(2, 3);

console.log("Initial Area:", rect.area);

rect.scale(2);

console.log("Area After Scaling:", rect.area);
`;

document.getElementById("task1Code").textContent = task1Code;

const task1Output = document.getElementById("task1Output");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}

const rect = new Rectangle(2, 3);

task1Output.textContent += `Initial Area: ${rect.area}\n`;

rect.scale(2);

task1Output.textContent += `Area After Scaling: ${rect.area}\n`;



// ======================================
// Task 2 : Inheritance with super
// ======================================

const task2Code = `class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    describe() {
        console.log(\`\${this.name} earns ₹\${this.salary}/month\`);
    }
}

class Manager extends Employee {
    constructor(name, salary, team) {
        super(name, salary);
        this.team = team;
    }

    describe() {
        super.describe();
        console.log(\`Leads team of \${this.team.length}\`);
    }
}

const manager = new Manager(
    "Riya",
    80000,
    ["Priya", "Aarav", "Anaya"]
);

manager.describe();
`;

document.querySelector("#task2Code code").textContent = task2Code;

const task2Output = document.getElementById("task2Output");

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    describe() {
        return `${this.name} earns ₹${this.salary}/month`;
    }
}

class Manager extends Employee {
    constructor(name, salary, team) {
        super(name, salary);
        this.team = team;
    }

    describe() {
        return `${super.describe()}\nLeads team of ${this.team.length}`;
    }
}

const manager = new Manager(
    "Riya",
    80000,
    ["Priya", "Aarav", "Anaya"]
);

task2Output.textContent = manager.describe();



// ======================================
// Task 3 : Private Field with #
// ======================================

const task3Code = `class Counter {
    #count = 0;

    inc() {
        this.#count++;
    }

    dec() {
        if (this.#count - 1 < 0) {
            throw new Error("Count cannot be negative");
        }

        this.#count--;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter();

counter.inc();
counter.inc();
counter.inc();

counter.dec();

console.log("Current Value:", counter.value);

try {
    counter.dec();
    counter.dec();
    counter.dec();
    counter.dec();
} catch (error) {
    console.log(error.message);
}
`;

document.querySelector("#task3Code code").textContent = task3Code;

const task3Output = document.getElementById("task3Output");

class Counter {
    #count = 0;

    inc() {
        this.#count++;
    }

    dec() {
        if (this.#count - 1 < 0) {
            throw new Error("Count cannot be negative");
        }

        this.#count--;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter();

counter.inc();
counter.inc();
counter.inc();

counter.dec();

task3Output.textContent += `Current Value: ${counter.value}\n`;

try {
    counter.dec();
    counter.dec();
    counter.dec();
    counter.dec();
} catch (error) {
    task3Output.textContent += error.message;
}



// ======================================
// Bonus Task : Custom Error Class
// ======================================

const task4Code = `class ValidationError extends Error {
    constructor(field, message) {
        super(message);

        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser({ name, age }) {
    if (!name) {
        throw new ValidationError(
            "name",
            "Name is required"
        );
    }

    if (age < 0) {
        throw new ValidationError(
            "age",
            "Age cannot be negative"
        );
    }

    return "Validation Successful";
}

try {
    validateUser({ name: "", age: 20 });
} catch (e) {
    console.log(e.message);
}

try {
    validateUser({ name: "Riya", age: -5 });
} catch (e) {
    console.log(e.message);
}
`;

document.querySelector("#task4Code code").textContent = task4Code;

const task4Output = document.getElementById("task4Output");

class ValidationError extends Error {
    constructor(field, message) {
        super(message);

        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser({ name, age }) {
    if (!name) {
        throw new ValidationError(
            "name",
            "Name is required"
        );
    }

    if (age < 0) {
        throw new ValidationError(
            "age",
            "Age cannot be negative"
        );
    }

    return "Validation Successful";
}

try {
    validateUser({ name: "", age: 20 });
} catch (e) {
    task4Output.textContent += `${e.message}\n`;
}

try {
    validateUser({ name: "Riya", age: -5 });
} catch (e) {
    task4Output.textContent += `${e.message}\n`;
}
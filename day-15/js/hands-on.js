// ==============================
// Task 1 : Predict the this
// ==============================

const task1Code = `const user = {
    name: "Priya",

    greet() {
        console.log(this.name);
    }
};

user.greet();

const g = user.greet;

g();

// First call -> Priya
// Second call -> undefined

// The second call loses this because
// the function is called independently.`;


document.getElementById("task1Code").textContent = task1Code;

let task1Result = "";

const user = {
    name: "Priya",

    greet() {
        return this.name;
    }
};

task1Result += user.greet() + "\n";

const g = user.greet;

task1Result += g() + "";

document.getElementById("task1Output").textContent = task1Result;


// ==============================
// Task 2 : Fix it Three Ways
// ==============================

const task2Code = `class Timer {

    constructor() {
        this.sec = 0;
    }

    tick() {
        this.sec++;
        console.log(this.sec);
    }
}

const t = new Timer();

// Wrong
// setInterval(t.tick, 1000);

// Fix 1 : bind
setInterval(t.tick.bind(t), 1000);

// Fix 2 : arrow wrapper
setInterval(() => t.tick(), 1000);

// Fix 3 : class field arrow
class Timer2 {

    sec = 0;

    tick = () => {
        this.sec++;
        console.log(this.sec);
    };
}`;


document.getElementById("task2Code").textContent = task2Code;

let task2Result = "";

class Timer {

    constructor() {
        this.sec = 0;
    }

    tick() {
        this.sec++;
        return this.sec;
    }
}

const t = new Timer();

task2Result += "Bind : " + t.tick.bind(t)() + "\n";

task2Result += "Arrow Wrapper : ";
(() => {
    task2Result += t.tick();
})();

task2Result += "\n";

class Timer2 {

    constructor() {
        this.sec = 0;
    }

    tick = () => {
        this.sec++;
        return this.sec;
    };
}

const t2 = new Timer2();

task2Result += "Class Field Arrow : " + t2.tick();

document.getElementById("task2Output").textContent = task2Result;


// ==============================
// Task 3 : call / apply / bind
// ==============================

const task3Code = `function describe(role, city) {

    console.log(\`\${this.name} is a \${role} from \${city}\`);
}

const u = {
    name: "Aarav"
};

// call
describe.call(u, "Designer", "Delhi");

// apply
describe.apply(u, ["Engineer", "Mumbai"]);

// bind
const bound = describe.bind(u, "Developer");

bound("Bangalore");`;


document.getElementById("task3Code").textContent = task3Code;

let task3Result = "";

function describe(role, city) {

    return `${this.name} is a ${role} from ${city}`;
}

const u = {
    name: "Aarav"
};

task3Result += describe.call(u, "Designer", "Delhi") + "\\n";

task3Result += describe.apply(u, ["Engineer", "Mumbai"]) + "\\n";

const bound = describe.bind(u, "Developer");

task3Result += bound("Bangalore");

document.getElementById("task3Output").textContent = task3Result;


// ==============================
// Bonus Task : Arrow vs Regular Method
// ==============================

const taskBonusCode = `const team = {

    members: ["Priya", "Aarav", "Riya"],

    printRegular() {

        this.members.forEach(function (m) {

            console.log(this.members.length, m);

        });
    },

    printArrow() {

        this.members.forEach((m) => {

            console.log(this.members.length, m);

        });
    }
};

// printRegular breaks because
// regular function gets its own this.

// printArrow works because
// arrow function uses lexical this.`;


document.getElementById("taskBonusCode").textContent = taskBonusCode;

let bonusResult = "";

const team = {

    members: ["Priya", "Aarav", "Riya"],

    printRegular() {

        try {

            this.members.forEach(function (m) {

                bonusResult += this.members.length + " " + m + "\\n";

            });

        } catch (error) {

            bonusResult += error.name + ": " + error.message + "\\n";
        }
    },

    printArrow() {

        this.members.forEach((m) => {

            bonusResult += this.members.length + " " + m + "\\n";

        });
    }
};

team.printRegular();

team.printArrow();

document.getElementById("taskBonusOutput").textContent = bonusResult;
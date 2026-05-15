// ==============================
// Topic 1 : What is this
// ==============================

const topic1Code = `function whoAmI() {
    console.log(this);
}

whoAmI();

const user1 = {
    name: "Priya",
    whoAmI
};

user1.whoAmI();

const other = {
    name: "Aarav",
    whoAmI
};

other.whoAmI();`;

document.getElementById("topic1Output").textContent = `
undefined
{ name: "Priya", whoAmI: f }
{ name: "Aarav", whoAmI: f }
`;


// ==============================
// Topic 2 : The 4 Binding Rules
// ==============================

const topic2Code = `function speak() {
    console.log(this);
}

speak();

const car = {
    brand: "Tata",

    show() {
        console.log(this.brand);
    }
};

car.show();

function intro(city) {
    console.log(\`\${this.name} from \${city}\`);
}

const u1 = { name: "Priya" };

intro.call(u1, "Jaipur");

function User(name) {
    this.name = name;
}

const p = new User("Anaya");

console.log(p.name);`;

document.getElementById("topic2Output").textContent = `
undefined
Tata
Priya from Jaipur
Anaya
`;


// ==============================
// Topic 3 : Call / Apply / Bind
// ==============================

const topic3Code = `function greet(city, lang) {
    console.log(\`\${this.name} from \${city} speaks \${lang}\`);
}

const u2 = { name: "Priya" };

greet.call(u2, "Jaipur", "Hindi");

greet.apply(u2, ["Jaipur", "Hindi"]);

const greetPriya = greet.bind(u2, "Jaipur");

greetPriya("English");

greetPriya("Marathi");

greetPriya.call({ name: "Aarav" }, "Tamil");`;

document.getElementById("topic3Output").textContent = `
Priya from Jaipur speaks Hindi
Priya from Jaipur speaks Hindi
Priya from Jaipur speaks English
Priya from Jaipur speaks Marathi
Priya from Jaipur speaks Tamil
`;


// ==============================
// Topic 4 : Arrow Function
// ==============================

const topic4Code = `const user2 = {
    name: "Priya",

    regular: function () {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user2.regular();

user2.arrow();

const team = {
    members: ["Priya", "Aarav", "Riya"],

    greetAll() {
        this.members.forEach((m) => {
            console.log(\`Hi \${m}, from team \${this.members.length}\`);
        });
    }
};

team.greetAll();`;

document.getElementById("topic4Output").textContent = `
Priya
undefined
Hi Priya, from team 3
Hi Aarav, from team 3
Hi Riya, from team 3
`;


// ==============================
// Topic 5 : this in class
// ==============================

const topic5Code = `class UserClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(\`Hi, I'm \${this.name}\`);
    }
}

const a = new UserClass("Priya");

const b = new UserClass("Aarav");

a.greet();

b.greet();

const greetFn = a.greet;

// greetFn();`;

document.getElementById("topic5Output").textContent = `
Hi, I'm Priya
Hi, I'm Aarav
TypeError if greetFn() is called
`;


// ==============================
// Topic 6 : Lost this Bug
// ==============================

const topic6Code = `class Counter {
    constructor() {
        this.count = 0;
    }

    inc() {
        this.count++;
        console.log(this.count);
    }
}

const c = new Counter();

// setTimeout(c.inc, 100);

setTimeout(c.inc.bind(c), 100);

setTimeout(() => c.inc(), 200);

class CounterArrow {
    count = 0;

    inc = () => {
        this.count++;
        console.log(this.count);
    };
}

const ca = new CounterArrow();

setTimeout(ca.inc, 300);`;

document.getElementById("topic6Output").textContent = `121`;
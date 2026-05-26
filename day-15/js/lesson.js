"use strict";

/* =========================
   Topic 1 : What is `this`?
========================= */

const topic1 = `
// What is this?

function whoAmI() {
    console.log(this);
}

whoAmI();

// strict mode → undefined
// non-strict → window/global


const user = {
    name: "Priya",
    whoAmI,
};

user.whoAmI();
// logs the user object


const other = {
    name: "Aarav",
    whoAmI,
};

other.whoAmI();
// same function, different this
`;

document.querySelector("#topic1Code code").textContent = topic1;


/* ===============================
   Topic 2 : The 4 Binding Rules
=============================== */

const topic2 = `
// 1. Default Binding

function speak() {
    console.log(this);
}

speak();

// strict mode → undefined


// 2. Implicit Binding

const car = {
    brand: "Tata",

    show() {
        console.log(this.brand);
    },
};

car.show();
// "Tata"


// 3. Explicit Binding

function intro(city) {
    console.log(\`\${this.name} from \${city}\`);
}

const u = {
    name: "Priya",
};

intro.call(u, "Jaipur");
// "Priya from Jaipur"


// 4. new Binding

function User(name) {
    this.name = name;
}

const p = new User("Anaya");

console.log(p.name);
// "Anaya"


// Predict first

const obj = {
    n: 7,

    f() {
        return this.n;
    },
};

const g = obj.f;

console.log(obj.f());
// 7

console.log(g());
// undefined in strict mode
`;

document.querySelector("#topic2Code code").textContent = topic2;


/* ==================================
   Topic 3 : call / apply / bind
================================== */

const topic3 = `
// call / apply / bind

function greet(city, lang) {

    console.log(
        \`\${this.name} from \${city} speaks \${lang}\`
    );
}

const u = {
    name: "Priya",
};


// call → invoke immediately

greet.call(
    u,
    "Jaipur",
    "Hindi"
);


// apply → arguments as array

greet.apply(
    u,
    ["Jaipur", "Hindi"]
);


// bind → returns new function

const greetPriya =
    greet.bind(u, "Jaipur");

greetPriya("English");

greetPriya("Marathi");


// Once bound, this cannot be re-bound

greetPriya.call(
    { name: "Aarav" },
    "Tamil"
);
`;

document.querySelector("#topic3Code code").textContent = topic3;


/* ==========================================
   Topic 4 : Arrow Functions — Lexical this
========================================== */

const topic4 = `
// Arrow Functions — Lexical this

const user = {

    name: "Priya",

    // Regular function → own this

    regular: function () {

        console.log(this.name);
    },

    // Arrow → no own this

    arrow: () => {

        console.log(this.name);
    },
};

user.regular();
// "Priya"

user.arrow();
// undefined


// Arrow shines in nested callbacks

const team = {

    members: [
        "Priya",
        "Aarav",
        "Riya",
    ],

    greetAll() {

        this.members.forEach((m) => {

            console.log(
                \`Hi \${m}, from team \${this.members.length}\`
            );

        });
    },
};

team.greetAll();
`;

document.querySelector("#topic4Code code").textContent = topic4;


/* ===========================
   Topic 5 : this in Classes
=========================== */

const topic5 = `
// this in Classes

class User {

    constructor(name) {

        this.name = name;
    }

    greet() {

        console.log(
            \`Hi, I'm \${this.name}\`
        );
    }
}

const a = new User("Priya");

const b = new User("Aarav");

a.greet();

b.greet();


// Classic loss-of-this bug

const greetFn = a.greet;

// greetFn();
// TypeError in strict mode
`;

document.querySelector("#topic5Code code").textContent = topic5;


/* ======================================
   Topic 6 : The "Lost this" Bug & Fixes
====================================== */

const topic6 = `
// Lost this Bug & Fixes

class Counter {

    constructor() {

        this.count = 0;
    }

    inc() {

        this.count++;

        console.log(this.count);
    }
}

const c = new Counter();


// BUG

setTimeout(
    c.inc,
    100
);


// FIX 1 → bind

setTimeout(
    c.inc.bind(c),
    100
);


// FIX 2 → arrow wrapper

setTimeout(
    () => c.inc(),
    100
);


// FIX 3 → class field arrow

class CounterArrow {

    count = 0;

    inc = () => {

        this.count++;

        console.log(this.count);
    };
}

const ca = new CounterArrow();

setTimeout(
    ca.inc,
    100
);
`;
document.querySelector("#topic6Code code").textContent = topic6;
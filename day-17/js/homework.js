// TASK 1 : Class Inheritance & Method Overriding
class Vehicle {

    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} vehicle started`;
    }

}

class Car extends Vehicle {

    constructor(brand, doors) {
        super(brand);
        this.doors = doors;
    }

    start() {

        let baseMessage = super.start();

        return `${baseMessage}
Car-specific check completed`;
    }

}



class Bike extends Vehicle {

    constructor(brand) {
        super(brand);
    }

}



// Creating objects

const car1 = new Car("Toyota", 4);

const bike1 = new Bike("Yamaha");



// Output
const task1Output = `
${car1.start()}

${bike1.start()}
`;



// Show code

document.getElementById("task1Code").textContent = `

class Vehicle {

    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return \`\${this.brand} vehicle started\`;
    }

}

class Car extends Vehicle {

    constructor(brand, doors) {
        super(brand);
        this.doors = doors;
    }

    start() {

        let baseMessage = super.start();

        return \`\${baseMessage}
Car-specific check completed\`;
    }

}

class Bike extends Vehicle {

    constructor(brand) {
        super(brand);
    }

}

const car1 = new Car("Toyota", 4);

const bike1 = new Bike("Yamaha");

console.log(car1.start());

console.log(bike1.start());

`;
document.getElementById("homework1Output").textContent = task1Output;

// ======================================================
// TASK 2 : Static Properties

class Counter {

    static count = 0;

    constructor(name) {

        this.name = name;

        Counter.count++;

    }

}



const c1 = new Counter("Counter 1");

const c2 = new Counter("Counter 2");

const c3 = new Counter("Counter 3");



const task2Output = `
Total Counters Created : ${Counter.count}
`;



// Show code

document.getElementById("task2Code").textContent = `

class Counter {

    static count = 0;

    constructor(name) {

        this.name = name;

        Counter.count++;

    }

}

const c1 = new Counter("Counter 1");

const c2 = new Counter("Counter 2");

const c3 = new Counter("Counter 3");

console.log(Counter.count);

`;
document.getElementById("homework2Output").textContent = task2Output;

// ======================================================
// TASK 3 : Private Fields, Getters & Setters

class Temperature {

    #celsius = 0;

    set celsius(value) {

        if (value >= -273.15) {

            this.#celsius = value;

        } else {

            console.log("Invalid temperature");

        }

    }

    get celsius() {
        return this.#celsius;
    }

}



const temp1 = new Temperature();



// Valid value

temp1.celsius = 25;

let validTemp = temp1.celsius;



// Invalid value

temp1.celsius = -500;

let invalidTemp = temp1.celsius;



const task3Output = `
Valid Temperature : ${validTemp}°C

After Invalid Attempt : ${invalidTemp}°C
`;



// Show code

document.getElementById("task3Code").textContent = `

class Temperature {

    #celsius = 0;

    set celsius(value) {

        if (value >= -273.15) {

            this.#celsius = value;

        } else {

            console.log("Invalid temperature");

        }

    }

    get celsius() {
        return this.#celsius;
    }

}

const temp1 = new Temperature();

temp1.celsius = 25;

console.log(temp1.celsius);

temp1.celsius = -500;

console.log(temp1.celsius);

`;
document.getElementById("homework3Output").textContent = task3Output;

// ======================================================
// TASK 4 : Read & Practice

const notes = `

constructor() :
Used to initialize object properties.

extends :
Used to inherit from another class.

super() :
Calls parent class constructor or methods.

static :
Belongs to the class itself.

#privateField :
Creates private properties.

`;

// Show code

document.getElementById("task4Code").textContent = `

constructor() :
Used to initialize object properties.

extends :
Used to inherit from another class.

super() :
Calls parent class constructor or methods.

static :
Belongs to the class itself.

#privateField :
Creates private properties.

`;

document.getElementById("homework4Output").textContent = notes;
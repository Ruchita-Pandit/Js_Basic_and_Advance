// ========================================
// TASK 1 : Multi-Level Prototype Chain
// ========================================

const task1Code = `
// TASK 1 : Multi-Level Prototype Chain

const tool = {

  useTool() {
    console.log("Using tool");
  }

};

const vehicle = Object.create(tool);

vehicle.drive = function () {
  console.log("Vehicle driving");
};

const car = Object.create(vehicle);

car.honk = function () {
  console.log("Car honking");
};

car.useTool();
car.drive();
car.honk();

// Prototype Chain:
// car -> vehicle -> tool -> Object.prototype -> null
`;

document.getElementById("task1Code").textContent =
  task1Code;

const homework1Output =
  document.getElementById("homework1Output");

const tool = {

  useTool() {
    return "Using tool";
  }

};

const vehicle = Object.create(tool);

vehicle.drive = function () {
  return "Vehicle driving";
};

const car = Object.create(vehicle);

car.honk = function () {
  return "Car honking";
};

homework1Output.textContent =
`${car.useTool()}
${car.drive()}
${car.honk()}

-------------------------

Prototype Checks

tool is prototype of vehicle
=> ${tool.isPrototypeOf(vehicle)}

vehicle is prototype of car
=> ${vehicle.isPrototypeOf(car)}

-------------------------

Prototype Chain:
car -> vehicle -> tool -> Object.prototype -> null`;


// ========================================
// TASK 2 : Constructor Function Inheritance
// ========================================

const task2Code = `
// TASK 2 : Constructor Function Inheritance

function Shape(name) {

  this.name = name;

}

Shape.prototype.describe = function () {

  console.log("Shape name: " + this.name);

};

function Circle(name, radius) {

  Shape.call(this, name);

  this.radius = radius;

}

Circle.prototype =
  Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {

  return Math.PI * this.radius * this.radius;

};

const c1 = new Circle("C1", 5);

c1.describe();

console.log(c1.area());
`;

document.getElementById("task2Code").textContent =
  task2Code;

const homework2Output =
  document.getElementById("homework2Output");

function Shape(name) {

  this.name = name;

}

Shape.prototype.describe = function () {

  return "Shape name: " + this.name;

};

function Circle(name, radius) {

  Shape.call(this, name);

  this.radius = radius;

}

Circle.prototype =
  Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {

  return (
    Math.PI * this.radius * this.radius
  ).toFixed(2);

};

const c1 = new Circle("C1", 5);

homework2Output.textContent =
`${c1.describe()}

Area:
${c1.area()}

-------------------------

c1 instanceof Circle
=> ${c1 instanceof Circle}

c1 instanceof Shape
=> ${c1 instanceof Shape}

-------------------------

Prototype Chain:
c1 -> Circle.prototype
-> Shape.prototype
-> Object.prototype -> null`;


// ========================================
// TASK 3 : Explore Built-in Prototypes
// ========================================

const task3Code = `
// TASK 3 : Explore Built-in Prototypes

console.log(String.prototype);

// Some lesser-known methods:
console.log("hello".at(1));
console.log("hello".padStart(10, "*"));
console.log("hello".repeat(2));
console.log("hello".replaceAll("l", "x"));
console.log("hello".startsWith("he"));

// Example:
const text = "JavaScript";

console.log(text.at(-1));

// .at(-1)
// returns the last character
`;

document.getElementById("task3Code").textContent =
  task3Code;

const homework3Output =
  document.getElementById("homework3Output");

const text = "JavaScript";

homework3Output.textContent =
`Explored:
String.prototype

-------------------------

Interesting Methods:

1. at()
2. padStart()
3. repeat()
4. replaceAll()
5. startsWith()

-------------------------

Example:

const text = "JavaScript";

text.at(-1)
=> ${text.at(-1)}

Explanation:
.at(-1) returns
the last character
of the string.`;

// ========================================
// TASK 4 : Prototype Chain Inspector
// ========================================

const task4Code = `
// TASK 4 : Prototype Chain Inspector

function chainOf(obj) {

  const chain = [];

  let current = obj;

  while (current !== null) {

    chain.push(current);

    current =
      Object.getPrototypeOf(current);

  }

  chain.push(null);

  return chain;

}

const arr = [1, 2, 3];

console.log(chainOf(arr));
`;

document.getElementById("task4Code").textContent =
  task4Code;

const homework4Output =
  document.getElementById("homework4Output");

function chainOf(obj) {

  const chain = [];

  let current = obj;

  while (current !== null) {

    chain.push(current);

    current =
      Object.getPrototypeOf(current);

  }

  chain.push(null);

  return chain;

}

const sampleArray = [1, 2, 3];

const prototypeChain =
  chainOf(sampleArray);

homework4Output.textContent =
`Prototype Chain Length:
${prototypeChain.length}

-------------------------

Chain Output:

${prototypeChain
  .map((item, index) => {

    if (item === null) {
      return `${index}: null`;
    }

    return `${index}: [object prototype]`;

  })
  .join("\n")}

-------------------------

Example Chain:
Array Instance
-> Array.prototype
-> Object.prototype
-> null`;
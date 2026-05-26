// ===============================
// TASK 1 : Inspect a Prototype
// ===============================

const task1Code = `
// TASK 1 : Inspect a Prototype

const arr = [1, 2, 3];

const level1 = Object.getPrototypeOf(arr);
console.log(level1);

const level2 = Object.getPrototypeOf(level1);
console.log(level2);

const level3 = Object.getPrototypeOf(level2);
console.log(level3);

// Prototype Chain:
// arr -> Array.prototype -> Object.prototype -> null
`;

document.querySelector("#task1Code code").textContent = task1Code;

const task1Output = document.getElementById("task1Output");

const arr = [1, 2, 3];

const level1 = Object.getPrototypeOf(arr);
const level2 = Object.getPrototypeOf(level1);
const level3 = Object.getPrototypeOf(level2);

task1Output.textContent =
`Prototype Level 1:
${level1}

-------------------------

Prototype Level 2:
${level2}

-------------------------

Prototype Level 3:
${level3}

-------------------------

Prototype Chain:
arr -> Array.prototype -> Object.prototype -> null`;


// ===============================
// TASK 2 : Build with Object.create
// ===============================

const task2Code = `
// TASK 2 : Build with Object.create

const vehicle = {

  start() {
    console.log(\`\${this.name} starting\`);
  }

};

const car = Object.create(vehicle);
car.name = "Tata Nexon";

const bike = Object.create(vehicle);
bike.name = "Royal Enfield";

car.start();
bike.start();

console.log(car.hasOwnProperty("name"));
console.log(car.hasOwnProperty("start"));

console.log("name" in car);
console.log("start" in car);
`;

document.querySelector("#task2Code code").textContent = task2Code;

const task2Output = document.getElementById("task2Output");

const vehicle = {

    start() {
        return `${this.name} starting`;
    }

};

const car = Object.create(vehicle);
car.name = "Tata Nexon";

const bike = Object.create(vehicle);
bike.name = "Royal Enfield";

task2Output.textContent =
`${car.start()}
${bike.start()}

-------------------------

car.hasOwnProperty("name")
=> ${car.hasOwnProperty("name")}

car.hasOwnProperty("start")
=> ${car.hasOwnProperty("start")}

-------------------------

"name" in car
=> ${"name" in car}

"start" in car
=> ${"start" in car}

-------------------------

"name" is OWN property.
"start" is INHERITED from vehicle.`;

// ===============================
// TASK 3 : Constructor Inheritance
// ===============================

const task3Code = `
// TASK 3 : Constructor Function Inheritance

function Person(name) {

  this.name = name;

}

Person.prototype.greet = function () {

  console.log("Hi, I'm " + this.name);

};

function Student(name, school) {

  Person.call(this, name);

  this.school = school;

}

Student.prototype =
  Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.study = function () {

  console.log(
    this.name + " studies at " + this.school
  );

};

const student1 =
  new Student("Riya", "IIT Delhi");

student1.greet();
student1.study();
`;

document.querySelector("#task3Code code").textContent = task3Code;

const task3Output = document.getElementById("task3Output");

function Person(name) {

    this.name = name;

}

Person.prototype.greet = function () {

    return "Hi, I'm " + this.name;

};

function Student(name, school) {

    Person.call(this, name);

    this.school = school;

}

Student.prototype =
    Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.study = function () {

    return this.name + " studies at " + this.school;

};

const student1 =
    new Student("Riya", "IIT Delhi");

task3Output.textContent =
`${student1.greet()}

${student1.study()}

-------------------------

student1 instanceof Student
=> ${student1 instanceof Student}

student1 instanceof Person
=> ${student1 instanceof Person}

-------------------------

Prototype Chain:
student1 -> Student.prototype
-> Person.prototype -> Object.prototype -> null`;


// ===============================
// BONUS TASK : hasOwnProperty vs in
// ===============================

const task4Code = `
// BONUS TASK : hasOwnProperty vs in

const dog =
  Object.create({ species: "Canis" });

dog.name = "Bruno";

console.log(
  dog.hasOwnProperty("name")
);

console.log(
  dog.hasOwnProperty("species")
);

console.log(
  "species" in dog
);

console.log(
  "toString" in dog
);

// Rule:
// hasOwnProperty()
// checks ONLY own properties.
//
// in
// checks own + inherited properties.
`;

document.querySelector("#task4Code code").textContent = task4Code;

const task4Output = document.getElementById("task4Output");

const dog =
    Object.create({ species: "Canis" });

dog.name = "Bruno";

task4Output.textContent =
`dog.hasOwnProperty("name")
=> ${dog.hasOwnProperty("name")}

dog.hasOwnProperty("species")
=> ${dog.hasOwnProperty("species")}

"name" in dog
=> ${"name" in dog}

"species" in dog
=> ${"species" in dog}

"toString" in dog
=> ${"toString" in dog}

-------------------------

Rule:

hasOwnProperty()
=> checks ONLY own properties

in
=> checks own + inherited properties`;
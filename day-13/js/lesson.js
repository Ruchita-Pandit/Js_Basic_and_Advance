const topic1 = `console.log(a);

var a = 1;

console.log(score);

var score = 90;`;

const topic2 = `let b = 2;

const c = 3;

{
  let mark = 87;
  console.log(mark);
}`;

const topic3 = `greetFunction();

function greetFunction() {
  console.log("Hi");
}

sayHi();

function sayHi() {
  console.log("Hi");
}

var greetVar = function () {
  console.log("Hello");
};

greetVar();

const welcome = function () {
  console.log("Welcome");
};

welcome();

const shout = () => {
  console.log("HEY");
};

shout();`;

document.querySelector("#topic1Code code").textContent = topic1;

document.querySelector("#topic2Code code").textContent = topic2;

document.querySelector("#topic3Code code").textContent = topic3;
// -----------------------------
// TASK 1 : Predict the Output
// -----------------------------

const task1Output = document.getElementById("task1Output");
const code1 = `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`;

document.getElementById("task1Code").textContent = code1;

function logTask1(message) {
    task1Output.textContent += message + "\n";
}

logTask1("1");

setTimeout(() => {
    logTask1("2");
}, 0);

Promise.resolve().then(() => {
    logTask1("3");
});

logTask1("4");


// -----------------------------
// TASK 2 : Two Promises and a Timer
// -----------------------------

const task2Code = document.getElementById("task2Code");
const task2Output = document.getElementById("task2Output");

const code2 = `console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
    .then(() => console.log("C"))
    .then(() => console.log("D"));

queueMicrotask(() => console.log("E"));

console.log("F");`;

task2Code.textContent = code2;

function logTask2(message) {
    task2Output.textContent += message + "\n";
}

logTask2("A");

setTimeout(() => {
    logTask2("B");
}, 0);

Promise.resolve()
    .then(() => {
        logTask2("C");
    })
    .then(() => {
        logTask2("D");
    });

queueMicrotask(() => {
    logTask2("E");
});

logTask2("F");


// -----------------------------
// TASK 3 : Block the Loop
// -----------------------------

const task3Code = document.getElementById("task3Code");
const task3Output = document.getElementById("task3Output");

const code3 = `function blockFor(ms) {
    const start = Date.now();

    while (Date.now() - start < ms) {
        // busy wait
    }
}

setTimeout(() => {
    console.log("timer");
}, 100);

blockFor(2000);

console.log("after block");`;

task3Code.textContent = code3;

function logTask3(message) {
    task3Output.textContent += message + "\n";
}

function blockFor(ms) {
    const start = Date.now();

    while (Date.now() - start < ms) {
        // busy wait
    }
}

setTimeout(() => {
    logTask3("timer");
}, 100);

blockFor(2000);

logTask3("after block");


// -----------------------------
// BONUS TASK : Microtask Storm
// -----------------------------

const task4Code = document.getElementById("task4Code");
const task4Output = document.getElementById("taskBonusOutput");

const code4 = `for (let i = 1; i <= 5; i++) {

    setTimeout(() => {

        console.log("Timer", i);

        if (i === 3) {

            Promise.resolve().then(() => {
                console.log("Microtask 1");
            });

            Promise.resolve().then(() => {
                console.log("Microtask 2");
            });

            Promise.resolve().then(() => {
                console.log("Microtask 3");
            });
        }

    }, 0);
}`;

task4Code.textContent = code4;

function logTask4(message) {
    task4Output.textContent += message + "\n";
}

for (let i = 1; i <= 5; i++) {

    setTimeout(() => {

        logTask4(`Timer ${i}`);

        if (i === 3) {

            Promise.resolve().then(() => {
                logTask4("Microtask 1");
            });

            Promise.resolve().then(() => {
                logTask4("Microtask 2");
            });

            Promise.resolve().then(() => {
                logTask4("Microtask 3");
            });
        }

    }, 0);
}
// -----------------------------------
// TASK 1 : Predict the Output Again
// -----------------------------------

const task1Code = document.getElementById("task1Code");
const task1Output = document.getElementById("homework1Output");

const code1 = `console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");`;

task1Code.textContent = code1;

function logTask1(message) {
    task1Output.textContent += message + "\n";
}

logTask1("A");

setTimeout(() => {
    logTask1("B");
}, 0);

Promise.resolve().then(() => {
    logTask1("C");
});

logTask1("D");


// -----------------------------------
// TASK 2 : Loupe Demo
// -----------------------------------

const task2Code = document.getElementById("task2Code");
const task2Output = document.getElementById("homework2Output");

const code2 = `console.log("1");

setTimeout(() => console.log("2"), 0);

console.log("3");`;

task2Code.textContent = code2;

function logTask2(message) {
    task2Output.textContent += message + "\n";
}

logTask2("1");

setTimeout(() => {
    logTask2("2");
}, 0);

logTask2("3");


// -----------------------------------
// TASK 3 : Chunk Processing
// -----------------------------------

const task3Code = document.getElementById("task3Code");
const task3Output = document.getElementById("homework3Output");

const code3 = `function chunk(array, fn, chunkSize) {

    let index = 0;

    function processChunk() {

        const end = Math.min(index + chunkSize, array.length);

        for (; index < end; index++) {
            fn(array[index]);
        }

        if (index < array.length) {
            setTimeout(processChunk, 0);
        }
    }

    processChunk();
}

const bigArray = Array.from({ length: 100000 }, (_, i) => i);

chunk(bigArray, (item) => {
    console.log(item);
}, 5000);`;

task3Code.textContent = code3;

function logTask3(message) {
    task3Output.textContent += message + "\n";
}

function chunk(array, fn, chunkSize) {

    let index = 0;

    function processChunk() {

        const end = Math.min(index + chunkSize, array.length);

        for (; index < end; index++) {
            fn(array[index]);
        }

        logTask3(`Processed ${index} items`);

        if (index < array.length) {
            setTimeout(processChunk, 0);
        } else {
            logTask3("Finished processing 100000 items");
        }
    }

    processChunk();
}

const bigArray = Array.from({ length: 100000 }, (_, i) => i);

chunk(bigArray, () => {}, 5000);


// -----------------------------------
// TASK 4 : await is a Microtask
// -----------------------------------

const task4Code = document.getElementById("task4Code");
const task4Output = document.getElementById("homework4Output");

const code4 = `async function demo() {

    console.log("start");

    await Promise.resolve();

    console.log("after await");
}

demo();

setTimeout(() => {
    console.log("timer");
}, 0);

console.log("end");`;

task4Code.textContent = code4;

function logTask4(message) {
    task4Output.textContent += message + "\n";
}

async function demo() {

    logTask4("start");

    await Promise.resolve();

    logTask4("after await");
}

demo();

setTimeout(() => {
    logTask4("timer");
}, 0);

logTask4("end");
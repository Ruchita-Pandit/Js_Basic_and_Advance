// ======================================================
// Day 18 — Generators & Iterators
// ======================================================



// ======================================================
// TASK 1 : Chunked Generator
// ======================================================

function* chunked(arr, size) {

    for (let i = 0; i < arr.length; i += size) {

        yield arr.slice(i, i + size);

    }

}



const chunkResult = [...chunked([1, 2, 3, 4, 5], 2)];



document.getElementById("task1Code").textContent = `

function* chunked(arr, size) {

    for (let i = 0; i < arr.length; i += size) {

        yield arr.slice(i, i + size);

    }

}

console.log([...chunked([1,2,3,4,5], 2)]);

`;



document.getElementById("homework1Output").textContent =
JSON.stringify(chunkResult);





// ======================================================
// TASK 2 : Infinite Prime Generator
// ======================================================

function isPrime(num) {

    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {

            return false;

        }

    }

    return true;

}



function* primes() {

    let num = 2;

    while (true) {

        if (isPrime(num)) {

            yield num;

        }

        num++;

    }

}



function take(generator, limit) {

    const result = [];

    for (const value of generator) {

        result.push(value);

        if (result.length === limit) {

            break;

        }

    }

    return result;

}



const first10Primes = take(primes(), 10);



document.getElementById("task2Code").textContent = `

function* primes() {

    let num = 2;

    while (true) {

        if (isPrime(num)) {

            yield num;

        }

        num++;

    }

}

function take(generator, limit) {

    const result = [];

    for (const value of generator) {

        result.push(value);

        if (result.length === limit) {

            break;

        }

    }

    return result;

}

console.log(take(primes(), 10));

`;



document.getElementById("homework2Output").textContent =
first10Primes.join(", ");





// ======================================================
// TASK 3 : Zip Generator
// ======================================================

function* zip(a, b) {

    const length = Math.min(a.length, b.length);

    for (let i = 0; i < length; i++) {

        yield [a[i], b[i]];

    }

}



const zipped = [...zip(

    [1, 2, 3, 4],

    ["A", "B"]

)];



document.getElementById("task3Code").textContent = `

function* zip(a, b) {

    const length = Math.min(a.length, b.length);

    for (let i = 0; i < length; i++) {

        yield [a[i], b[i]];

    }

}

console.log([...zip([1,2,3,4], ["A","B"])]);

`;



document.getElementById("homework3Output").textContent =
JSON.stringify(zipped);





// ======================================================
// TASK 4 : Fibonacci Generator
// ======================================================

function* fibonacci() {

    let a = 0;
    let b = 1;

    while (true) {

        yield a;

        [a, b] = [b, a + b];

    }

}



const first10Fibonacci = take(fibonacci(), 10);



document.getElementById("task4Code").textContent = `

function* fibonacci() {

    let a = 0;
    let b = 1;

    while (true) {

        yield a;

        [a, b] = [b, a + b];

    }

}

console.log(take(fibonacci(), 10));

`;



document.getElementById("homework4Output").textContent =
first10Fibonacci.join(", ");
// =========================
// TASK 1
// =========================

const code1 = `
// Task 1 : Convert .then() Chains to async/await

function fetchData(id) {

    return new Promise((resolve, reject) => {

        const success =
            Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve(
                    \`Data fetched for ID : \${id}\`
                );

            } else {

                reject(
                    \`Failed for ID : \${id}\`
                );

            }

        }, 500);

    });
}

async function runTasks() {

    try {

        const a =
            await fetchData(1);

        console.log(a);

        const b =
            await fetchData(2);

        console.log(b);

        const c =
            await fetchData(3);

        console.log(c);

    } catch (error) {

        console.log(error);

    }
}

runTasks();
`;

document.getElementById("task1Code").textContent =
    code1;

const out1 =
    document.getElementById("homework1Output");

function fetchData(id) {

    return new Promise((resolve, reject) => {

        const success =
            Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve(
                    `Data fetched for ID : ${id}`
                );

            } else {

                reject(
                    `Failed for ID : ${id}`
                );

            }

        }, 500);

    });
}

async function runTasks() {

    try {

        const a =
            await fetchData(1);

        out1.textContent += `${a}\n`;

        const b =
            await fetchData(2);

        out1.textContent += `${b}\n`;

        const c =
            await fetchData(3);

        out1.textContent += `${c}\n`;

    } catch (error) {

        out1.textContent += `${error}\n`;

    }
}

runTasks();



// =========================
// TASK 2
// =========================

const code2 = `
// Task 2 : Sequential vs Parallel User Fetch

function fetchUser(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                name: \`User \${id}\`
            });

        }, 500);

    });
}

async function sequential(ids) {

    const start =
        Date.now();

    const users = [];

    for (const id of ids) {

        const user =
            await fetchUser(id);

        users.push(user);

    }

    console.log(
        "Sequential:",
        Date.now() - start,
        "ms"
    );

    return users;
}

async function fetchAllUsers(ids) {

    const start =
        Date.now();

    const users =
        await Promise.all(

            ids.map((id) =>
                fetchUser(id)
            )

        );

    console.log(
        "Parallel:",
        Date.now() - start,
        "ms"
    );

    return users;
}

sequential([1, 2, 3]);

fetchAllUsers([1, 2, 3]);
`;

document.getElementById("task2Code").textContent =
    code2;

const out2 =
    document.getElementById("homework2Output");

function fetchUser(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                name: `User ${id}`
            });

        }, 500);

    });
}

async function sequential(ids) {

    const start =
        Date.now();

    const users = [];

    for (const id of ids) {

        const user =
            await fetchUser(id);

        users.push(user);

    }

    out2.textContent +=
        `Sequential : ${Date.now() - start} ms\n`;

    return users;
}

async function fetchAllUsers(ids) {

    const start =
        Date.now();

    const users =
        await Promise.all(

            ids.map((id) =>
                fetchUser(id)
            )

        );

    out2.textContent +=
        `Parallel : ${Date.now() - start} ms\n`;

    return users;
}

sequential([1, 2, 3]);

fetchAllUsers([1, 2, 3]);



// =========================
// TASK 3
// =========================

const code3 = `
// Task 3 : withTimeout Helper

function withTimeout(promise, ms) {

    return Promise.race([

        promise,

        new Promise((_, reject) => {

            setTimeout(() => {

                reject(
                    new Error("timeout")
                );

            }, ms);

        })

    ]);
}

function slowTask() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Task Finished");

        }, 2000);

    });
}

async function run() {

    try {

        const result =
            await withTimeout(
                slowTask(),
                1000
            );

        console.log(result);

    } catch (error) {

        console.log(error.message);

    }
}

run();
`;

document.getElementById("task3Code").textContent =
    code3;

const out3 =
    document.getElementById("homework3Output");

function withTimeout(promise, ms) {

    return Promise.race([

        promise,

        new Promise((_, reject) => {

            setTimeout(() => {

                reject(
                    new Error("timeout")
                );

            }, ms);

        })

    ]);
}

function slowTask() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Task Finished");

        }, 2000);

    });
}

async function run() {

    try {

        const result =
            await withTimeout(
                slowTask(),
                1000
            );

        out3.textContent +=
            `${result}\n`;

    } catch (error) {

        out3.textContent +=
            `${error.message}\n`;

    }
}

run();



// =========================
// TASK 4
// =========================

const code4 = `
// Task 4 : Async Loop with for...of

function wait(ms) {

    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });
}

async function runLoop() {

    const times =
        [300, 100, 200];

    for (const time of times) {

        await wait(time);

        console.log(
            \`\${time} ms finished\`
        );

    }
}

runLoop();
`;

document.getElementById("task4Code").textContent =
    code4;

const out4 =
    document.getElementById("homework4Output");

function wait(ms) {

    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });
}

async function runLoop() {

    const times =
        [300, 100, 200];

    for (const time of times) {

        await wait(time);

        out4.textContent +=
            `${time} ms finished\n`;

    }
}

runLoop();
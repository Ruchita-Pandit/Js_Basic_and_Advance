// =========================
// TASK 1
// =========================

const code1 = `
function fetchUser(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                name: "Priya"
            });

        }, 300);

    });
}

function fetchOrders(userId) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                { id: 1 },
                { id: 2 }
            ]);

        }, 300);

    });
}

async function showOrders(id) {

    try {

        const user =
            await fetchUser(id);

        const orders =
            await fetchOrders(user.id);

        console.log(
            orders.length
        );

    } catch (error) {

        console.error(error);

    }
}

showOrders(7);
`;

document.querySelector("#task1Code code").textContent = code1;

const out1 =
    document.getElementById("task1Output");

function fetchUser(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                name: "Priya"
            });

        }, 300);

    });
}

function fetchOrders(userId) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                { id: 1 },
                { id: 2 }
            ]);

        }, 300);

    });
}

async function showOrders(id) {

    try {

        const user =
            await fetchUser(id);

        const orders =
            await fetchOrders(user.id);

        out1.textContent +=
            `Orders Length : ${orders.length}\n`;

    } catch (error) {

        out1.textContent +=
            `${error}\n`;

    }
}

showOrders(7);



// =========================
// TASK 2
// =========================

const code2 = `
function fetchPrice(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                price: 100
            });

        }, 500);

    });
}

async function slow() {

    const start =
        Date.now();

    const a =
        await fetchPrice(1);

    const b =
        await fetchPrice(2);

    const c =
        await fetchPrice(3);

    console.log(
        "slow:",
        Date.now() - start,
        "ms"
    );
}

async function fast() {

    const start =
        Date.now();

    const [a, b, c] =
        await Promise.all([

            fetchPrice(1),
            fetchPrice(2),
            fetchPrice(3)

        ]);

    console.log(
        "fast:",
        Date.now() - start,
        "ms"
    );
}

slow();
fast();
`;

document.querySelector("#task2Code code").textContent = code2;

const out2 =
    document.getElementById("task2Output");

function fetchPrice(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                price: 100
            });

        }, 500);

    });
}

async function slow() {

    const start =
        Date.now();

    await fetchPrice(1);
    await fetchPrice(2);
    await fetchPrice(3);

    out2.textContent +=
        `slow : ${Date.now() - start} ms\n`;
}

async function fast() {

    const start =
        Date.now();

    await Promise.all([

        fetchPrice(1),
        fetchPrice(2),
        fetchPrice(3)

    ]);

    out2.textContent +=
        `fast : ${Date.now() - start} ms\n`;
}

slow();
fast();



// =========================
// TASK 3
// =========================

const code3 = `
const ids = [1, 2, 3];

function fetchPrice(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                price: 100
            });

        }, 500);

    });
}


// BUG

async function bug() {

    console.log("start");

    ids.forEach(async (id) => {

        const data =
            await fetchPrice(id);

        console.log(data);

    });

    console.log("end");
}


// FIX 1

async function sequential() {

    console.log("start");

    for (const id of ids) {

        const data =
            await fetchPrice(id);

        console.log(data);

    }

    console.log("end");
}


// FIX 2

async function parallel() {

    console.log("start");

    const results =
        await Promise.all(

            ids.map((id) =>
                fetchPrice(id)
            )

        );

    results.forEach((item) => {

        console.log(item);

    });

    console.log("end");
}

bug();

setTimeout(() => {

    sequential();

}, 2500);

setTimeout(() => {

    parallel();

}, 5000);
`;

document.querySelector("#task3Code code").textContent = code3;

const out3 =
    document.getElementById("task3Output");

const ids = [1, 2, 3];

function fetchPriceTask3(id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id,
                price: 100
            });

        }, 500);

    });
}

async function bug() {

    out3.textContent += `BUG START\n`;

    ids.forEach(async (id) => {

        const data =
            await fetchPriceTask3(id);

        out3.textContent +=
            `got : ${data.id}\n`;

    });

    out3.textContent +=
        `BUG END\n`;
}

async function sequential() {

    out3.textContent +=
        `SEQUENTIAL START\n`;

    for (const id of ids) {

        const data =
            await fetchPriceTask3(id);

        out3.textContent +=
            `got : ${data.id}\n`;

    }

    out3.textContent +=
        `SEQUENTIAL END\n`;
}

async function parallel() {

    out3.textContent +=
        `PARALLEL START\n`;

    const results =
        await Promise.all(

            ids.map((id) =>
                fetchPriceTask3(id)
            )

        );

    results.forEach((item) => {

        out3.textContent +=
            `got : ${item.id}\n`;

    });

    out3.textContent +=
        `PARALLEL END\n`;
}

bug();

setTimeout(() => {

    sequential();

}, 2500);

setTimeout(() => {

    parallel();

}, 5000);



// =========================
// TASK 4
// =========================

const code4 = `
function flaky() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.7) {

                reject(
                    new Error("flaked")
                );

            } else {

                resolve("success!");

            }

        }, 200);

    });
}

async function retry(fn, attempts) {

    let lastError;

    for (
        let i = 1;
        i <= attempts;
        i++
    ) {

        try {

            return await fn();

        } catch (error) {

            lastError = error;

            console.log(
                \`attempt \${i} failed : \${error.message}\`
            );

        }
    }

    throw lastError;
}

retry(flaky, 5)

    .then((result) => {

        console.log(
            "FINAL:",
            result
        );

    })

    .catch((error) => {

        console.log(
            "GAVE UP:",
            error.message
        );

    });
`;

document.querySelector("#task4Code code").textContent = code4;

const out4 =
    document.getElementById("task4Output");

function flaky() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.7) {

                reject(
                    new Error("flaked")
                );

            } else {

                resolve("success!");

            }

        }, 200);

    });
}

async function retry(fn, attempts) {

    let lastError;

    for (
        let i = 1;
        i <= attempts;
        i++
    ) {

        try {

            return await fn();

        } catch (error) {

            lastError = error;

            out4.textContent +=
                `attempt ${i} failed : ${error.message}\n`;

        }
    }

    throw lastError;
}

retry(flaky, 5)

    .then((result) => {

        out4.textContent +=
            `FINAL : ${result}\n`;

    })

    .catch((error) => {

        out4.textContent +=
            `GAVE UP : ${error.message}\n`;

    });
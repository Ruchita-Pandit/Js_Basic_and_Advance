// =========================
// TASK 1
// =========================

const code1 = `
// Task 1 : wait(ms)

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve();

        }, ms);

    });
}

wait(500)
    .then(() => {

        console.log("1s");

    });
`;

document.getElementById("task1Code").textContent = code1;

const out1 = document.getElementById("homework1Output");

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve();

        }, ms);

    });
}

wait(500)
    .then(() => {

        out1.textContent += `1s\n`;

    });



// =========================
// TASK 2
// =========================

const code2 = `
// Task 2 : Sequential Promise Chaining

function fetchData(id) {

    return new Promise((resolve, reject) => {

        const success = Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve(\`Data fetched for ID : \${id}\`);

            } else {

                reject(\`Failed for ID : \${id}\`);

            }

        }, 1000);

    });
}

fetchData(1)

    .then(result => {

        console.log(result);

        return fetchData(2);

    })

    .then(result => {

        console.log(result);

        return fetchData(3);

    })

    .then(result => {

        console.log(result);

    })

    .catch(error => {

        console.log(error);

    });
`;

document.getElementById("task2Code").textContent = code2;

const out2 = document.getElementById("homework2Output");

function fetchData(id) {

    return new Promise((resolve, reject) => {

        const success = Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve(`Data fetched for ID : ${id}`);

            } else {

                reject(`Failed for ID : ${id}`);

            }

        }, 1000);

    });
}

fetchData(1)

    .then(result => {

        out2.textContent += `${result}\n`;

        return fetchData(2);

    })

    .then(result => {

        out2.textContent += `${result}\n`;

        return fetchData(3);

    })

    .then(result => {

        out2.textContent += `${result}\n`;

    })

    .catch(error => {

        out2.textContent += `${error}\n`;

    });



// =========================
// TASK 3
// =========================

const code3 = `
// Task 3 : Promise.race with Timeout

function fetchUser(id) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(\`User fetched : \${id}\`);

        }, 1500);

    });
}

Promise.race([

    fetchUser(7),

    wait(2000)
        .then(() => {

            return Promise.reject(
                new Error("timeout")
            );

        })

])

.then(result => {

    console.log(result);

})

.catch(error => {

    console.log(error.message);

});
`;

document.getElementById("task3Code").textContent = code3;

const out3 = document.getElementById("homework3Output");

function fetchUser(id) {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(`User fetched : ${id}`);

        }, 1500);

    });
}

Promise.race([

    fetchUser(7),

    wait(2000)
        .then(() => {

            return Promise.reject(
                new Error("timeout")
            );

        })

])

.then(result => {

    out3.textContent += `${result}\n`;

})

.catch(error => {

    out3.textContent += `${error.message}\n`;

});



// =========================
// TASK 4
// =========================

const code4 = `
// Task 4 : Promise.any

function flakyFetch(name, ms) {

    return new Promise((resolve, reject) => {

        const success = Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve(\`\${name} Success\`);

            } else {

                reject(\`\${name} Failed\`);

            }

        }, ms);

    });
}

Promise.any([

    flakyFetch("API 1", 1000),
    flakyFetch("API 2", 500),
    flakyFetch("API 3", 1500)

])

.then(result => {

    console.log(result);

})

.catch(error => {

    console.log(error);

});
`;

document.getElementById("task4Code").textContent = code4;

const out4 = document.getElementById("homework4Output");

function flakyFetch(name, ms) {

    return new Promise((resolve, reject) => {

        const success = Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve(`${name} Success`);

            } else {

                reject(`${name} Failed`);

            }

        }, ms);

    });
}

Promise.any([

    flakyFetch("API 1", 1000),
    flakyFetch("API 2", 500),
    flakyFetch("API 3", 1500)

])

.then(result => {

    out4.textContent += `${result}\n`;

})

.catch(error => {

    out4.textContent += `All promises failed\n`;

});
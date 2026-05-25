// =========================

const code1 = `
// Task 1 : Sync vs Async Output

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

Promise.resolve()
    .then(() => {
        console.log("D");
    });

// Prediction:
// A
// C
// D
// B
`;

document.querySelector("#task1Code code").textContent = code1;

const out1 = document.getElementById("task1Output");

//out1.textContent += `Predicted:\n`;
out1.textContent += `A\n`;
out1.textContent += `C\n`;
out1.textContent += `D\n`;
out1.textContent += `B\n\n`;

/*console.log("A");

setTimeout(() => {

    console.log("B");

    out1.textContent += `B\n`;

}, 0);

console.log("C");

Promise.resolve()
    .then(() => {

        console.log("D");

        out1.textContent += `D\n`;

    });*/



// =========================

const code2 = `
// Task 2 : Promisify a Callback API

function getUser(id, callback) {

    setTimeout(() => {

        callback(null, {
            id: id,
            name: "Ruchita"
        });

    }, 1000);
}

function getUserPromise(id) {

    return new Promise((resolve, reject) => {

        getUser(id, (err, data) => {

            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });

    });
}

getUserPromise(1)
    .then(user => {

        console.log(user);

    });
`;

document.querySelector("#task2Code code").textContent = code2;

const out2 = document.getElementById("task2Output");

function getUser(id, callback) {

    setTimeout(() => {

        callback(null, {
            id: id,
            name: "Ruchita"
        });

    }, 1000);
}

function getUserPromise(id) {

    return new Promise((resolve, reject) => {

        getUser(id, (err, data) => {

            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });

    });
}

getUserPromise(1)
    .then(user => {

        out2.textContent += `ID : ${user.id}\n`;
        out2.textContent += `Name : ${user.name}\n`;

    });



// =========================

const code3 = `
// Task 3 : Promise.all in Action

function fetchPrice(item, ms) {

    const prices = {
        pen: 50,
        book: 200,
        bag: 800
    };

    return new Promise(resolve => {

        setTimeout(() => {

            resolve({
                item: item,
                price: prices[item]
            });

        }, ms);

    });
}

const start = Date.now();

Promise.all([
    fetchPrice("pen", 300),
    fetchPrice("book", 1000),
    fetchPrice("bag", 500)
])

.then(results => {

    console.log(results);

    const total =
        results.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

    console.log("Total:", total);

});
`;

document.querySelector("#task3Code code").textContent = code3;

const out3 = document.getElementById("task3Output");

function fetchPrice(item, ms) {

    const prices = {
        pen: 50,
        book: 200,
        bag: 800
    };

    return new Promise(resolve => {

        setTimeout(() => {

            resolve({
                item: item,
                price: prices[item]
            });

        }, ms);

    });
}

const start = Date.now();

Promise.all([
    fetchPrice("pen", 300),
    fetchPrice("book", 1000),
    fetchPrice("bag", 500)
])

.then(results => {

    results.forEach(result => {

        out3.textContent +=
            `${result.item} : ₹${result.price}\n`;

    });

    const total =
        results.reduce((sum, item) => {
            return sum + item.price;
        }, 0);

    out3.textContent += `\n`;
    out3.textContent += `Total : ₹${total}\n`;

    const end = Date.now();

    out3.textContent +=
        `Time : ${end - start} ms`;

});



// =========================

const code4 = `
// Bonus Task

function delayLog(msg, ms, cb) {

    setTimeout(() => {

        console.log(msg);

        cb(null);

    }, ms);
}

// Callback chain

delayLog("1", 300, () => {

    delayLog("2", 200, () => {

        delayLog("3", 100, () => {

            console.log("Done");

        });

    });

});


// Promise.all vs Promise.allSettled

const p1 = Promise.resolve("ok1");

const p2 = Promise.reject(
    new Error("fail")
);

const p3 = Promise.resolve("ok2");

Promise.all([p1, p2, p3])

    .catch(err => {

        console.log(err.message);

    });

Promise.allSettled([p1, p2, p3])

    .then(results => {

        console.log(results);

    });
`;

document.querySelector("#task4Code code").textContent = code4;

const out4 = document.getElementById("task4Output");

function delayLog(msg, ms, cb) {

    setTimeout(() => {

        out4.textContent += `${msg}\n`;

        cb(null);

    }, ms);
}

delayLog("1", 300, () => {

    delayLog("2", 200, () => {

        delayLog("3", 100, () => {

            out4.textContent += `Done\n`;

        });

    });

});

const p1 = Promise.resolve("ok1");

const p2 = Promise.reject(
    new Error("fail")
);

const p3 = Promise.resolve("ok2");

Promise.all([p1, p2, p3])

    .catch(err => {

        out4.textContent +=
            `\nPromise.all Error : ${err.message}\n`;

    });

Promise.allSettled([p1, p2, p3])

    .then(results => {

        out4.textContent +=
            `\nPromise.allSettled:\n`;

        results.forEach(result => {

            if (result.status === "fulfilled") {

                out4.textContent +=
                    `Fulfilled : ${result.value}\n`;

            } else {

                out4.textContent +=
                    `Rejected : ${result.reason.message}\n`;

            }

        });

    });
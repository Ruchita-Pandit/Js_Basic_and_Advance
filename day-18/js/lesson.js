//Lesson 1
// SYNCHRONOUS — top to bottom, no surprises
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3
// ASYNCHRONOUS — setTimeout schedules; doesn't pause
console.log("1");
setTimeout(() => console.log("2"), 0);   // scheduled — runs LATER
console.log("3");
// Output: 1, 3, 2
// Even with delay 0! "2" goes through the event loop (Day 8).
// JS keeps running synchronous code first; async callbacks wait their turn.

const task1Code = `// SYNCHRONOUS — top to bottom, no surprises
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3
// ASYNCHRONOUS — setTimeout schedules; doesn't pause
console.log("1");
setTimeout(() => console.log("2"), 0);   // scheduled — runs LATER
console.log("3");`;

document.getElementById("task1Code").textContent = task1Code;
const result = [];

// Sync
result.push("1");
result.push("2");
result.push("3");

// Async
result.push("1");

setTimeout(() => {
    result.push("2");

    document.getElementById("lesson1Output").textContent =
        result.join("\n");
}, 0);

result.push("3");

//========================================================================================================================================
const code = `
function fetchUser(id, callback) {
    console.log(\`Fetching user \${id}...\`);

    setTimeout(() => {
        const user = { id, name: "Priya" };
        callback(null, user);
    }, 1000);
}

fetchUser(7, (err, user) => {
    if (err) {
        console.error("Failed:", err);
        return;
    }

    console.log("Got user:", user);
});
`;

// SHOW CODE
document.getElementById("task2Code").textContent = code;

// OUTPUT BOX
const output = document.getElementById("lesson2Output");

// FUNCTION
function fetchUser(id, callback) {
    output.textContent += `Fetching user ${id}...\n`;

    setTimeout(() => {
        const user = { id, name: "Priya" };
        callback(null, user);
    }, 1000);
}

// RUN
fetchUser(7, (err, user) => {
    if (err) {
        output.textContent += `Failed: ${err}\n`;
        return;
    }

   output.textContent += `Got user: ID = ${user.id}, Name = ${user.name}\n`;
});

//==================================================================================

const code3 = `
// CALLBACK HELL / PYRAMID OF DOOM

function fetchUser(id, callback) {
    setTimeout(() => {
        callback(null, { id, name: "Priya" });
    }, 500);
}

function fetchOrders(userId, callback) {
    setTimeout(() => {
        callback(null, [
            { id: 101, item: "Laptop" }
        ]);
    }, 500);
}

function fetchItems(orderId, callback) {
    setTimeout(() => {
        callback(null, [
            "Mouse",
            "Keyboard",
            "Headphones"
        ]);
    }, 500);
}

// NESTED CALLBACKS
fetchUser(7, (err, user) => {

    if (err) {
        console.error(err);
        return;
    }

    fetchOrders(user.id, (err, orders) => {

        if (err) {
            console.error(err);
            return;
        }

        fetchItems(orders[0].id, (err, items) => {

            if (err) {
                console.error(err);
                return;
            }

            console.log("Items:", items);

        });

    });

});
`;

// SHOW CODE
document.getElementById("task3Code").textContent = code3;

// OUTPUT BOX
const lesson3Output =
    document.getElementById("lesson3Output");

// FUNCTIONS
function fetchOrders(userId, callback) {

    lesson3Output.textContent +=
        `Fetching orders for user ${userId}...\n`;

    setTimeout(() => {

        callback(null, [
            { id: 101, item: "Laptop" }
        ]);

    }, 1000);
}

function fetchItems(orderId, callback) {

    lesson3Output.textContent +=
        `Fetching items for order ${orderId}...\n`;

    setTimeout(() => {

        callback(null, [
            "Mouse",
            "Keyboard",
            "Headphones"
        ]);

    }, 1000);
}

// RUN
fetchUser(7, (err, user) => {

    if (err) {
        lesson3Output.textContent += err + "\n";
        return;
    }

    lesson3Output.textContent +=
        `User: ${user.name}\n`;

    fetchOrders(user.id, (err, orders) => {

        if (err) {
            lesson3Output.textContent += err + "\n";
            return;
        }

        lesson3Output.textContent +=
            `Order ID: ${orders[0].id}\n`;

        fetchItems(orders[0].id, (err, items) => {

            if (err) {
                lesson3Output.textContent += err + "\n";
                return;
            }

            lesson3Output.textContent +=
                `Items: ${items.join(", ")}`;

        });

    });

});

// Problems:
// 1. Indentation explodes — hard to read
// 2. Error handling repeated everywhere
// 3. Difficult to scale
// 4. Leads to deeply nested code

// ============================================================================

const code4 = `
// CREATE A PROMISE

const p = new Promise((resolve, reject) => {

    // async work
    setTimeout(() => {

        const success = true;

        if (success) {
            resolve("Done!");
        } else {
            reject(new Error("Oops"));
        }

    }, 1000);

});

// Promise states:
// pending -> fulfilled
// pending -> rejected

p.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.error(err.message);
});

// REAL EXAMPLE
function delay(ms) {

    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });

}

delay(500)
.then(() => {
    console.log("half a second passed");
});
`;

// SHOW CODE
document.getElementById("task4Code").textContent = code4;

// OUTPUT BOX
const lesson4Output =
    document.getElementById("lesson4Output");

// RUN
const q = new Promise((resolve, reject) => {

    setTimeout(() => {

        const success = true;

        if (success) {
            resolve("Done!");
        } else {
            reject(new Error("Oops"));
        }

    }, 1000);

});

q.then((msg) => {

    lesson4Output.textContent +=
        `Promise Resolved: ${msg}\n`;

})
.catch((err) => {

    lesson4Output.textContent +=
        `Promise Rejected: ${err.message}\n`;

});

// DELAY EXAMPLE
function delay(ms) {

    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });

}

delay(500)
.then(() => {

    lesson4Output.textContent +=
        "half a second passed";

});


// ===========================================================================

const code5 = `
// PROMISE CHAINING

function fetchUser(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id < 0) {
                reject(new Error("Bad id"));
            } else {
                resolve({
                    id,
                    name: "Priya"
                });
            }

        }, 500);

    });

}

// FLAT CHAIN
fetchUser(7)

.then((user) => {

    console.log("got user:", user);

    return user.id;

})

.then((id) => {

    return fetchUser(id + 1);

})

.then((nextUser) => {

    console.log("next user:", nextUser);

})

.catch((err) => {

    console.error(
        "any failure caught here:",
        err.message
    );

})

.finally(() => {

    console.log(
        "done — runs whether success or fail"
    );

});
`;

// SHOW CODE
document.getElementById("task5Code").textContent = code5;

// OUTPUT
const lesson5Output =
    document.getElementById("lesson5Output");

// RUN
fetchUserPromise(7)

.then((user) => {

    lesson5Output.textContent +=
        `Got User: ${user.name}\n`;

    return user.id;

})

.then((id) => {

    return fetchUserPromise(id + 1);

})

.then((nextUser) => {

    lesson5Output.textContent +=
        `Next User: ${nextUser.name}\n`;

})

.catch((err) => {

    lesson5Output.textContent +=
        `Error: ${err.message}\n`;

})

.finally(() => {

    lesson5Output.textContent +=
        "Done — always runs";

});

// FUNCTION
function fetchUserPromise(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id < 0) {
                reject(new Error("Bad id"));
            } else {
                resolve({
                    id,
                    name: "Priya"
                });
            }

        }, 500);

    });

}


// ============================================================================

const code6 = `
// PROMISE METHODS

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Items");

// 1. Promise.all
Promise.all([p1, p2, p3])

.then(([user, orders, items]) => {

    console.log(
        "all done:",
        user,
        orders,
        items
    );

})

.catch((err) => {

    console.error(
        "at least one failed:",
        err
    );

});

// 2. Promise.allSettled
Promise.allSettled([p1, p2, p3])

.then((results) => {

    results.forEach((r) => {

        if (r.status === "fulfilled") {
            console.log("ok:", r.value);
        } else {
            console.log("fail:", r.reason);
        }

    });

});

// 3. Promise.race
Promise.race([
    p1,
    new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), 5000)
    )
])

.then((winner) => {

    console.log("first done:", winner);

});

// 4. Promise.any
Promise.any([p1, p2, p3])

.then((firstSuccess) => {

    console.log("got one:", firstSuccess);

})

.catch((err) => {

    console.error("everyone failed");

});
`;

// SHOW CODE
document.getElementById("task6Code").textContent = code6;

// OUTPUT
const lesson6Output =
    document.getElementById("lesson6Output");

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Items");

// Promise.all
Promise.all([p1, p2, p3])

.then((values) => {

    lesson6Output.textContent +=
        `Promise.all -> ${values.join(", ")}\n`;
});

// Promise.allSettled
Promise.allSettled([p1, p2, p3])

.then((results) => {

    results.forEach((r) => {

        lesson6Output.textContent +=
            `${r.status}: ${r.value}\n`;

    });

});

// Promise.race
Promise.race([p1, p2, p3])

.then((winner) => {

    lesson6Output.textContent +=
        `Race Winner: ${winner}\n`;

});

// Promise.any
Promise.any([p1, p2, p3])

.then((winner) => {

    lesson6Output.textContent +=
        `Any Winner: ${winner}\n`;

});

// ============================================================================

const code7 = `
// Promise.resolve

const cached =
    Promise.resolve({
        id: 1,
        name: "Priya"
    });

cached.then((u) => {

    console.log(u);

});

// Promise.reject

const failed =
    Promise.reject(
        new Error("nope")
    );

failed.catch((e) => {

    console.log(
        "caught:",
        e.message
    );

});

// CACHE OR FETCH
function getUser(id, cache) {

    if (cache[id]) {

        return Promise.resolve(cache[id]);

    }

    return fetchUserPromise(id);

}

getUser(7, {})
.then(console.log);
`;

// SHOW CODE
document.getElementById("task7Code").textContent = code7;

// OUTPUT
const lesson7Output =
    document.getElementById("lesson7Output");

// RUN
const cached = Promise.resolve({
    id: 1,
    name: "Priya"
});

cached.then((u) => {

    lesson7Output.textContent +=
        `Cached User: ${u.name}\n`;

});

const failed = Promise.reject(
    new Error("nope")
);

failed.catch((e) => {

    lesson7Output.textContent +=
        `Caught Error: ${e.message}\n`;

});

function getUser(id, cache) {

    if (cache[id]) {

        return Promise.resolve(cache[id]);

    }

    return fetchUserPromise(id);

}

getUser(7, {})

.then((user) => {

    lesson7Output.textContent +=
        `Fetched User: ${user.name}`;

});
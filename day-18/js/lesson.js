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

//=====================================================================================================================
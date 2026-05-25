//========================================================================================================================================
const codeOne = `
// Task 1 : Tag Counter using Map

const posts = [
  { title: "Post 1", tags: ["js", "react"] },
  { title: "Post 2", tags: ["js", "node"] },
  { title: "Post 3", tags: ["react", "css"] }
];

function countTags(posts) {

  const tagCount = new Map();

  posts.forEach((post) => {

    post.tags.forEach((tag) => {

      const current =
        tagCount.get(tag) || 0;

      tagCount.set(tag, current + 1);
    });
  });

  return tagCount;
}

const result = countTags(posts);

console.log(result);
`;

document.getElementById("task1Code").textContent = codeOne;

const output1 = document.getElementById("homework1Output");

function log1(message) {
    output1.textContent += message + "\n";
}

// Posts
const posts = [
  { title: "Post 1", tags: ["js", "react"] },
  { title: "Post 2", tags: ["js", "node"] },
  { title: "Post 3", tags: ["react", "css"] }
];

// Count tags
function countTags(posts) {

  const tagCount = new Map();

  posts.forEach((post) => {

    post.tags.forEach((tag) => {

      const current =
        tagCount.get(tag) || 0;

      tagCount.set(tag, current + 1);
    });
  });

  return tagCount;
}

const result = countTags(posts);

// Output
for (const [tag, count] of result) {
    log1(tag + ": " + count);
}

//========================================================================================================================================
const codeTwo = `
// Task 2 : Set Helpers

function union(a, b) {
  return new Set([...a, ...b]);
}

function intersection(a, b) {
  return new Set(
    [...a].filter((x) => b.has(x))
  );
}

function difference(a, b) {
  return new Set(
    [...a].filter((x) => !b.has(x))
  );
}

const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

console.log([...union(a, b)]);
console.log([...intersection(a, b)]);
console.log([...difference(a, b)]);
`;

document.getElementById("task2Code").textContent = codeTwo;

const output2 = document.getElementById("homework2Output");

function log2(message) {
    output2.textContent += message + "\n";
}

// Sets
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
function union(a, b) {
  return new Set([...a, ...b]);
}

// Intersection
function intersection(a, b) {
  return new Set(
    [...a].filter((x) => b.has(x))
  );
}

// Difference
function difference(a, b) {
  return new Set(
    [...a].filter((x) => !b.has(x))
  );
}

// Logs
log2([...union(a, b)].join(", "));
log2([...intersection(a, b)].join(", "));
log2([...difference(a, b)].join(", "));

//========================================================================================================================================
const codeThree = `
// Task 3 : Sort Map Entries

const ages = new Map([
  ["Priya", 25],
  ["Aarav", 20],
  ["Riya", 28]
]);

const sorted = [...ages]
  .sort((a, b) => a[1] - b[1]);

console.log(sorted);

for (const [name, age] of sorted) {
  console.log(name, age);
}
`;

document.getElementById("task3Code").textContent = codeThree;

const output3 = document.getElementById("homework3Output");

function log3(message) {
    output3.textContent += message + "\n";
}

// Map
const ages = new Map([
  ["Priya", 25],
  ["Aarav", 20],
  ["Riya", 28]
]);

// Sort by age
const sorted = [...ages]
  .sort((a, b) => a[1] - b[1]);

// Logs
for (const [name, age] of sorted) {
    log3(name + ": " + age);
}

//========================================================================================================================================
const codeFour = `
// Task 4 : DOM Event Tracker with WeakMap

const clickCounts = new WeakMap();

function trackClicks(button) {

  if (!clickCounts.has(button)) {
    clickCounts.set(button, 0);
  }

  button.addEventListener("click", () => {

    const current =
      clickCounts.get(button);

    clickCounts.set(
      button,
      current + 1
    );

    console.log(
      "Clicks:",
      clickCounts.get(button)
    );
  });
}

// Example buttons
const btn1 =
  document.getElementById("btn1");

const btn2 =
  document.getElementById("btn2");

trackClicks(btn1);
trackClicks(btn2);

/*
Why WeakMap?

WeakMap does not prevent
garbage collection.

When a DOM element is removed
and no references remain,
its data is automatically cleaned.

A plain Map could cause
memory leaks.
*/
`;

document.getElementById("task4Code").textContent = codeFour;

const output4 = document.getElementById("homework4Output");

function log4(message) {
    output4.textContent += message + "\n";
}

// WeakMap
const clickCounts = new WeakMap();

// Track clicks
function trackClicks(button) {

  if (!clickCounts.has(button)) {
    clickCounts.set(button, 0);
  }

  button.addEventListener("click", () => {

    const current =
      clickCounts.get(button);

    clickCounts.set(
      button,
      current + 1
    );

    log4(
      button.id +
      " clicks: " +
      clickCounts.get(button)
    );
  });
}

// Example buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Attach tracking
trackClicks(btn1);
trackClicks(btn2);
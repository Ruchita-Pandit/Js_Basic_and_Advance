//========================================================================================================================================
const codeOne = `
const m = new Map();

m.set("name", "Priya");
m.set(42, "the answer");
m.set(true, "a boolean key");

const userObj = { id: 1 };

m.set(userObj, "value associated with userObj");

console.log(m.get("name"));
console.log(m.get(userObj));
console.log(m.size);
console.log(m.has(42));

m.delete(42);

// Initialise from array of pairs
const m2 = new Map([
  ["a", 1],
  ["b", 2],
]);

console.log(m2.get("a"));

// Iterate
for (const [key, value] of m2) {
  console.log(key, value);
}
`;

document.getElementById("task1Code").textContent = codeOne;

const output = document.getElementById("lesson1Output");

function log(message) {
    output.textContent += message + "\n";
}

// Create Map
const m = new Map();

m.set("name", "Priya");
m.set(42, "the answer");
m.set(true, "a boolean key");

// Object key
const userObj = { id: 1 };

m.set(userObj, "value associated with userObj");

// Logs
log(m.get("name"));          // Priya
log(m.get(userObj));         // value associated with userObj
log(m.size);                 // 4
log(m.has(42));              // true

// Delete key
m.delete(42);

log(m.size);                 // 3

// Initialize from array
const m2 = new Map([
  ["a", 1],
  ["b", 2],
]);

log(m2.get("a"));            // 1

// Iterate Map
for (const [key, value] of m2) {
    log(`${key} , ${value}`);
}

//========================================================================================================================================
const codeTwo = `
const obj = {
  name: "Priya",
  city: "Jaipur"
};

// Object → Map
const map = new Map(Object.entries(obj));

console.log(map.get("name"));

// Map → Object
const back = Object.fromEntries(map);

console.log(back);

// Map iteration helpers
for (const key of map.keys()) {
  console.log("key:", key);
}

for (const val of map.values()) {
  console.log("val:", val);
}

for (const [k, v] of map.entries()) {
  console.log(k, "=", v);
}

map.forEach((value, key) =>
  console.log(key, "=", value)
);
`;

document.getElementById("task2Code").textContent = codeTwo;

const output1 = document.getElementById("lesson2Output");

function log1(message) {
    output1.textContent += message + "\n";
}

// Original object
const obj = {
  name: "Priya",
  city: "Jaipur"
};

// Object → Map
const map = new Map(Object.entries(obj));

log1(map.get("name")); // Priya

// Map → Object
const back = Object.fromEntries(map);

log1(`${back.name} ${back.city}`);

// Map keys
for (const key of map.keys()) {
    log1(`key: ${key}`);
}

// Map values
for (const val of map.values()) {
    log1(`val: ${val}`);
}

// Map entries
for (const [k, v] of map.entries()) {
    log1(`${k} = ${v}`);
}

// forEach
map.forEach((value, key) => {
    log1(`${key} = ${value}`);
});

//========================================================================================================================================
const codeThree = `
const s = new Set();

s.add("a");
s.add("b");
s.add("a");

console.log(s.size);
console.log(s.has("a"));

s.delete("b");

// Initialise from array
const tags = new Set([
  "js",
  "react",
  "js",
  "node",
  "react"
]);

console.log(tags.size);

// Deduplicate array
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniq = [...new Set(arr)];

console.log(uniq);

// Iterate
for (const v of tags) {
  console.log(v);
}

// Object identity
const set = new Set();

set.add({ id: 1 });
set.add({ id: 1 });

console.log(set.size);
`;

document.getElementById("task3Code").textContent = codeThree;

const output2 = document.getElementById("lesson3Output");

function log2(message) {
    output2.textContent += message + "\n";
}

// Create Set
const s = new Set();

s.add("a");
s.add("b");
s.add("a");

// Logs
log2(s.size);       // 2
log2(s.has("a"));   // true

// Delete value
s.delete("b");

log2(s.size);       // 1

// Initialize from array
const tags = new Set([
  "js",
  "react",
  "js",
  "node",
  "react"
]);

log2(tags.size);    // 3

// Remove duplicates
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniq = [...new Set(arr)];

log2(uniq.join(", ")); // 1, 2, 3, 4, 5

// Iterate Set
for (const v of tags) {
    log2(v);
}

// Object identity
const set = new Set();

set.add({ id: 1 });
set.add({ id: 1 });

log2(set.size); // 2

//========================================================================================================================================
const codeFour = `
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
const union = new Set([...a, ...b]);

console.log([...union]);

// Intersection
const inter = new Set(
  [...a].filter((x) => b.has(x))
);

console.log([...inter]);

// Difference
const diff = new Set(
  [...a].filter((x) => !b.has(x))
);

console.log([...diff]);

// Modern methods
// a.union(b);
// a.intersection(b);
// a.difference(b);
`;

document.getElementById("task4Code").textContent = codeFour;

const output3 = document.getElementById("lesson4Output");

function log3(message) {
    output3.textContent += message + "\n";
}

// Create Sets
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
const union = new Set([...a, ...b]);

log3([...union].join(", ")); // 1, 2, 3, 4

// Intersection
const inter = new Set(
  [...a].filter((x) => b.has(x))
);

log3([...inter].join(", ")); // 2, 3

// Difference
const diff = new Set(
  [...a].filter((x) => !b.has(x))
);

log3([...diff].join(", ")); // 1

//========================================================================================================================================
const codeFive = `
// Use case: caching by request object

const cache = new Map();

function doFetch(req) {
  return "Data for " + req.url;
}

function fetchWithCache(req) {

  if (cache.has(req)) {
    return cache.get(req);
  }

  const result = doFetch(req);

  cache.set(req, result);

  return result;
}

const request = {
  url: "/users"
};

console.log(fetchWithCache(request));
console.log(fetchWithCache(request));

// Use case: unique tag list

const posts = [
  { title: "Post 1", tags: ["js", "react"] },
  { title: "Post 2", tags: ["react", "node"] },
  { title: "Post 3", tags: ["js", "css"] }
];

const allTags = new Set();

posts.forEach((p) =>
  p.tags.forEach((t) =>
    allTags.add(t)
  )
);

console.log([...allTags]);
`;

document.getElementById("task5Code").textContent = codeFive;

const output4 = document.getElementById("lesson5Output");

function log4(message) {
    output4.textContent += message + "\n";
}

// Cache using Map
const cache = new Map();

function doFetch(req) {
  return "Data for " + req.url;
}

function fetchWithCache(req) {

  if (cache.has(req)) {
    return cache.get(req);
  }

  const result = doFetch(req);

  cache.set(req, result);

  return result;
}

const request = {
  url: "/users"
};

// Logs
log4(fetchWithCache(request));
log4(fetchWithCache(request));

// Unique tags using Set
const posts = [
  { title: "Post 1", tags: ["js", "react"] },
  { title: "Post 2", tags: ["react", "node"] },
  { title: "Post 3", tags: ["js", "css"] }
];

const allTags = new Set();

posts.forEach((p) =>
  p.tags.forEach((t) =>
    allTags.add(t)
  )
);

// Output tags
log4([...allTags].join(", "));

//========================================================================================================================================
const codeSix = `
const wm = new WeakMap();

let user = {
  id: 1,
  name: "Priya"
};

// WeakMap key must be object
wm.set(user, {
  lastSeen: Date.now()
});

console.log(wm.get(user));

// Remove reference
user = null;

// WeakMap auto cleanup happens later

// Practical example
const dataForElement = new WeakMap();

function attachData(el, data) {
  dataForElement.set(el, data);
}

const button = {
  tag: "button"
};

attachData(button, {
  clicked: true
});

console.log(
  dataForElement.get(button)
);

// WeakSet example
const seen = new WeakSet();

function process(item) {

  if (seen.has(item)) {
    console.log("Already processed");
    return;
  }

  seen.add(item);

  console.log("Processing item");
}

const obj = { id: 1 };

process(obj);
process(obj);
`;

document.getElementById("task6Code").textContent = codeSix;

const output5 = document.getElementById("lesson6Output");

function log5(message) {
    output5.textContent += message + "\n";
}

// WeakMap
const wm = new WeakMap();

let user = {
  id: 1,
  name: "Priya"
};

// Store metadata
wm.set(user, {
  lastSeen: Date.now()
});

// Log WeakMap value
log5("User metadata stored");

// Remove reference
user = null;

log5("User reference removed");

// WeakMap practical example
const dataForElement = new WeakMap();

function attachData(el, data) {
  dataForElement.set(el, data);
}

const button = {
  tag: "button"
};

attachData(button, {
  clicked: true
});

log5("Button data attached");

// WeakSet
const seen = new WeakSet();

function process(item) {

  if (seen.has(item)) {
    log5("Already processed");
    return;
  }

  seen.add(item);

  log5("Processing item");
}

const obj1 = { id: 1 };

process(obj1);
process(obj1);


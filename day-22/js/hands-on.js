//========================================================================================================================================
const codeOne = `
// Task 1 : Map vs Object

const products = new Map();

products.set("pen", 50);
products.set("book", 200);
products.set("bag", 800);

// Iterate Map
for (const [item, price] of products) {
  console.log(item + ": ₹" + price);
}

// Map methods
console.log(products.has("book"));
console.log(products.get("bag"));

products.delete("pen");

console.log(products.size);

// Map → Object
const obj = Object.fromEntries(products);

console.log(obj);

// Object → Map
const backToMap = new Map(
  Object.entries(obj)
);

console.log(backToMap);
`;

document.getElementById("task1Code").textContent = codeOne;

const output1 = document.getElementById("task1Output");

function log1(message) {
    output1.textContent += message + "\n";
}

// Create Map
const products = new Map();

products.set("pen", 50);
products.set("book", 200);
products.set("bag", 800);

// Iterate
for (const [item, price] of products) {
    log1(item + ": ₹" + price);
}

// Map methods
log1(products.has("book"));
log1(products.get("bag"));

// Delete item
products.delete("pen");

log1(products.size);

// Convert to Object
const obj = Object.fromEntries(products);

log1(obj.book);
log1(obj.bag);

// Convert back to Map
const backToMap = new Map(
  Object.entries(obj)
);

log1(backToMap.get("book"));
//========================================================================================================================================
const codeTwo = `
// Task 2 : Deduplicate with Set

const ids = [
  101,
  102,
  103,
  101,
  104,
  102,
  105
];

// Remove duplicates
const uniqueIds = [...new Set(ids)];

console.log(uniqueIds);

// Unique count
console.log(uniqueIds.length);

// Mixed types
const mixed = [
  1,
  "1",
  1,
  true,
  1n
];

const mixedUnique = [...new Set(mixed)];

console.log(mixedUnique);
console.log(mixedUnique.length);
`;

document.getElementById("task2Code").textContent = codeTwo;

const output2 = document.getElementById("task2Output");

function log2(message) {
    output2.textContent += message + "\n";
}

// Student IDs
const ids = [
  101,
  102,
  103,
  101,
  104,
  102,
  105
];

// Deduplicate
const uniqueIds = [...new Set(ids)];

log2(uniqueIds.join(", "));

// Count unique IDs
log2(uniqueIds.length);

// Mixed types
const mixed = [
  1,
  "1",
  1,
  true,
  1n
];

const mixedUnique = [...new Set(mixed)];

log2(mixedUnique.join(", "));
log2(mixedUnique.length);
//========================================================================================================================================
const codeThree = `
// Task 3 : Cache with Map

function memoize(fn) {

  const cache = new Map();

  return function(n) {

    if (cache.has(n)) {
      return cache.get(n);
    }

    const result = fn(n);

    cache.set(n, result);

    console.log("Cache size:", cache.size);

    return result;
  };
}

function expensiveSquare(n) {

  console.log("computing...");

  return n * n;
}

const memoSquare = memoize(
  expensiveSquare
);

console.log(memoSquare(5));
console.log(memoSquare(5));
`;

document.getElementById("task3Code").textContent = codeThree;

const output3 = document.getElementById("task3Output");

function log3(message) {
    output3.textContent += message + "\n";
}

// Memoize using Map
function memoize(fn) {

  const cache = new Map();

  return function(n) {

    if (cache.has(n)) {
      log3("From cache");
      return cache.get(n);
    }

    log3("computing...");

    const result = fn(n);

    cache.set(n, result);

    log3("Cache size: " + cache.size);

    return result;
  };
}

// Expensive function
function expensiveSquare(n) {
  return n * n;
}

const memoSquare = memoize(
  expensiveSquare
);

// Calls
log3(memoSquare(5));
log3(memoSquare(5));
//========================================================================================================================================
const codeFour = `
// Bonus : WeakMap for Private Data

const metadata = new WeakMap();

function attach(obj, data) {
  metadata.set(obj, data);
}

function get(obj) {
  return metadata.get(obj);
}

let button1 = {
  id: 1
};

let button2 = {
  id: 2
};

// Attach metadata
attach(button1, {
  lastClick: Date.now()
});

attach(button2, {
  lastClick: Date.now()
});

console.log(get(button1));
console.log(get(button2));

// Drop reference
button1 = null;

// WeakMap entry for button1
// becomes eligible for GC
`;

document.getElementById("task4Code").textContent = codeFour;

const output4 = document.getElementById("task4Output");

function log4(message) {
    output4.textContent += message + "\n";
}

// WeakMap
const metadata = new WeakMap();

// Attach helper
function attach(obj, data) {
  metadata.set(obj, data);
}

// Get helper
function get(obj) {
  return metadata.get(obj);
}

// Objects
let button1 = {
  id: 1
};

let button2 = {
  id: 2
};

// Attach metadata
attach(button1, {
  lastClick: Date.now()
});

attach(button2, {
  lastClick: Date.now()
});

// Logs
log4("Metadata attached to button1");
log4("Metadata attached to button2");

// Access metadata
log4(get(button1).lastClick);
log4(get(button2).lastClick);

// Remove reference
button1 = null;

log4("button1 reference removed");
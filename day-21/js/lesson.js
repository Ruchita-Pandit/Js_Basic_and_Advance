//========================================================================================================================================
const codeOne = `
const original = {
  name: "Priya",
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};

// Shallow clones
const a = { ...original };
const b = Object.assign({}, original);

// Deep clone WITHOUT JSON
const c = structuredClone(original);

// Mutate nested object in shallow clone
a.address.city = "Mumbai";

console.log(original.address.city);
console.log(a.address === original.address);

// Deep clone is independent
c.address.city = "Delhi";
console.log(original.address.city);
`;

document.getElementById("task1Code").textContent = codeOne;
const output = document.getElementById("lesson1Output");
function log(message) {
    output.textContent += message + "\n";
}
// Original object
const original = {
  name: "Priya",
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};
// Shallow clones
const a = { ...original };
const b = Object.assign({}, original);
// Deep clone using structuredClone
const c = structuredClone(original);
// Mutate nested object in shallow clone
a.address.city = "Mumbai";
// Logs
log(original.address.city);              // Mumbai
log(a.address === original.address);     // true
// Deep clone stays independent
c.address.city = "Delhi";
log(original.address.city);  // still Mumbai

//========================================================================================================================================
//========================================================================================================================================
const codeTwo = `
const original = {
  name: "Priya",
  date: new Date(),
  nested: { city: "Jaipur" },
  scores: new Map([["math", 90]]),
};

const copy = structuredClone(original);

copy.nested.city = "Mumbai";

console.log(original.nested.city);

console.log(copy.date instanceof Date);
console.log(copy.scores instanceof Map);

// structuredClone({ fn: () => {} }); // throws DataCloneError
`;

document.getElementById("task2Code").textContent = codeTwo;

const output1 = document.getElementById("lesson2Output");

function log1(message) {
    output1.textContent += message + "\n";
}

// Original object
const original1 = {
  name: "Priya",
  date: new Date(),
  nested: { city: "Jaipur" },
  scores: new Map([["math", 90]]),
};

// Deep clone
const copy1 = structuredClone(original1);

// Modify clone
copy1.nested.city = "Mumbai";

// Logs
log1(original1.nested.city);          // Jaipur
log1(copy1.date instanceof Date);     // true
log1(copy1.scores instanceof Map);    // true

// structuredClone limitation
// structuredClone({ fn: () => {} });

//========================================================================================================================================
const codeThree = `
const config = Object.freeze({
  host: "api.example.com",
  port: 8080,
  retries: 3,
});

config.port = 9000;
console.log(config.port);

// Shallow — nested still mutable
const user = Object.freeze({
  name: "Priya",
  address: { city: "Jaipur" },
});

user.name = "Anaya";
user.address.city = "Mumbai";

console.log(user.address.city);

// Deep freeze — recurse manually
function deepFreeze(obj) {
  Object.values(obj).forEach((v) => {
    if (v && typeof v === "object") deepFreeze(v);
  });

  return Object.freeze(obj);
}

const fully = deepFreeze({
  a: 1,
  n: { x: 2 }
});

fully.n.x = 99;

console.log(fully.n.x);
`;

document.getElementById("task3Code").textContent = codeThree;

const output2 = document.getElementById("lesson3Output");

function log2(message) {
    output2.textContent += message + "\n";
}

// Freeze object
const config = Object.freeze({
  host: "api.example.com",
  port: 8080,
  retries: 3,
});

config.port = 9000;

// Logs
log2(config.port); // 8080

// Shallow freeze
const user = Object.freeze({
  name: "Priya",
  address: { city: "Jaipur" },
});

user.name = "Anaya";
user.address.city = "Mumbai";

// Nested object still changes
log2(user.address.city); // Mumbai

// Deep freeze
function deepFreeze(obj) {
  Object.values(obj).forEach((v) => {
    if (v && typeof v === "object") {
      deepFreeze(v);
    }
  });

  return Object.freeze(obj);
}

const fully = deepFreeze({
  a: 1,
  n: { x: 2 }
});

fully.n.x = 99;

// Deep freeze prevents mutation
log2(fully.n.x); // 2

//========================================================================================================================================
const codeFour = `
const user = {
  name: "Priya",
  age: 25,
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};

// 1. Update a top-level field
const u1 = { ...user, age: 26 };
console.log(u1.age, user.age);

// 2. Update a nested field
const u2 = {
  ...user,
  address: { ...user.address, city: "Mumbai" },
};

console.log(u2.address.city, user.address.city);

// 3. Add to array immutably
const u3 = {
  ...user,
  hobbies: [...user.hobbies, "swimming"]
};

console.log(u3.hobbies);
console.log(user.hobbies);

// 4. Remove from array immutably
const u4 = {
  ...user,
  hobbies: user.hobbies.filter((h) => h !== "trekking")
};

console.log(u4.hobbies);

// 5. Update one item in array of objects
const tasks = [
  { id: 1, done: false },
  { id: 2, done: false }
];

const t1 = tasks.map((t) =>
  t.id === 1 ? { ...t, done: true } : t
);

console.log(t1[0].done);
console.log(tasks[0].done);
`;

document.getElementById("task4Code").textContent = codeFour;

const output3 = document.getElementById("lesson4Output");

function log3(message) {
    output3.textContent += message + "\n";
}

// Original object
const user1 = {
  name: "Priya",
  age: 25,
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};

// 1. Top-level update
const u1 = { ...user1, age: 26 };

log3(`${u1.age} ${user1.age}`); // 26 25

// 2. Nested update
const u2 = {
  ...user1,
  address: { ...user1.address, city: "Mumbai" },
};

log3(`${u2.address.city} ${user1.address.city}`);

// 3. Add item to array
const u3 = {
  ...user1,
  hobbies: [...user1.hobbies, "swimming"]
};

log3(u3.hobbies.join(", "));
log3(user1.hobbies.join(", "));

// 4. Remove item from array
const u4 = {
  ...user1,
  hobbies: user1.hobbies.filter((h) => h !== "trekking")
};

log3(u4.hobbies.join(", "));

// 5. Update object inside array
const tasks = [
  { id: 1, done: false },
  { id: 2, done: false }
];

const t1 = tasks.map((t) =>
  t.id === 1 ? { ...t, done: true } : t
);

log3(t1[0].done);     // true
log3(tasks[0].done);  // false

//========================================================================================================================================
const codeFive = `
// 1. Defaults
const { name, role = "user" } = { name: "Priya" };

console.log(name, role);

// 2. Rename
const {
  name: userName,
  role: userRole = "user"
} = { name: "Aarav" };

console.log(userName, userRole);

// 3. Nested destructuring
const config = {
  api: { host: "api.example.com", port: 8080 },
  db:  { host: "db.example.com",  port: 5432 },
};

const {
  api: { host: apiHost, port: apiPort }
} = config;

console.log(apiHost, apiPort);

// 4. Array destructuring
const [first = "?", second = "?", ...rest] = [1, 2, 3, 4, 5];

console.log(first, second, rest);

// 5. Function parameter destructuring
function Card({ title, subtitle = "—", actions = [] }) {
  console.log(title, subtitle, actions);
}

Card({
  title: "Hello",
  actions: ["delete"]
});
`;

document.getElementById("task5Code").textContent = codeFive;
const output4 = document.getElementById("lesson5Output");
function log4(message) {
    output4.textContent += message + "\n";
}

// 1. Defaults
const { name, role = "user" } = { name: "Priya" };

log4(`${name} ${role}`);

// 2. Rename
const {
  name: userName,
  role: userRole = "user"
} = { name: "Aarav" };

log4(`${userName} ${userRole}`);

// 3. Nested destructuring
const config1 = {
  api: { host: "api.example.com", port: 8080 },
  db:  { host: "db.example.com",  port: 5432 },
};

const {
  api: { host: apiHost, port: apiPort }
} = config1;

log4(`${apiHost} ${apiPort}`);

// 4. Array destructuring
const [first = "?", second = "?", ...rest] = [1, 2, 3, 4, 5];

log4(`${first} ${second} ${rest.join(", ")}`);

// 5. Function parameter destructuring
function Card({ title, subtitle = "—", actions = [] }) {
  log4(`${title} ${subtitle} ${actions.join(", ")}`);
}

Card({
  title: "Hello",
  actions: ["delete"]
});

//========================================================================================================================================
const codeSix = `
const field = "city";
const value = "Mumbai";

// Computed (dynamic) key
const a1 = { city: "Jaipur" };
const b1 = { [field]: value };
console.log(b1);

// Practical — generic update helper
function updateField(obj, key, value) {
  return { ...obj, [key]: value };
}

const user3 = { name: "Priya", age: 25 };

console.log(updateField(user3, "age", 26));
console.log(updateField(user3, "city", "Jaipur"));
`;
// 6. Computed property names

document.getElementById("task6Code").textContent = codeSix;

const output5 = document.getElementById("lesson6Output");

function log5(message) {
    output5.textContent += message + "\n";
}
const field = "city";
const value = "Mumbai";

const a1 = { city: "Jaipur" };
const b1 = { [field]: value };

log5(`${b1.city}`);

// 7. Generic update helper
function updateField(obj, key, value) {
  return { ...obj, [key]: value };
}

const user3 = { name: "Priya", age: 25 };

const updatedAge = updateField(user3, "age", 26);
const updatedCity = updateField(user3, "city", "Jaipur");

log5(`${updatedAge.name} ${updatedAge.age}`);
log5(`${updatedCity.name} ${updatedCity.age} ${updatedCity.city}`);

//========================================================================================================================================
const codeSeven = `
const response = {
  user: {
    name: "Priya",
    profile: {
      bio: null,
      // city missing
    },
  },
};

// Walk safely
const city = response?.user?.profile?.city;
console.log(city);

// With fallback
const cityOrDefault =
  response?.user?.profile?.city ?? "Unknown";

console.log(cityOrDefault);

// Safe method call
const upper =
  response?.user?.name?.toUpperCase?.();

console.log(upper);

// Safe array access
const first =
  response?.user?.tags?.[0] ?? "no tags";

console.log(first);
`;

document.getElementById("task7Code").textContent = codeSeven;

const output6 = document.getElementById("lesson7Output");

function log6(message) {
    output6.textContent += message + "\n";
}

// Response object
const response = {
  user: {
    name: "Priya",
    profile: {
      bio: null,
      // city missing
    },
  },
};

// Safe property access
const city = response?.user?.profile?.city;

log6(city); // undefined

// Fallback value
const cityOrDefault =
  response?.user?.profile?.city ?? "Unknown";

log6(cityOrDefault); // Unknown

// Safe method call
const upper =
  response?.user?.name?.toUpperCase?.();

log6(upper); // PRIYA

// Safe array access
const f =
  response?.user?.tags?.[0] ?? "no tags";

log6(f); // no tags
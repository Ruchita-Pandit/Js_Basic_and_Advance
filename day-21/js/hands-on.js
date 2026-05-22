//========================================================================================================================================
const codeOne = `
// Original object
const orig = {
  name: "Priya",
  addr: { city: "Jaipur" }
};

// Shallow copy
const copy = { ...orig };

// Mutate nested object
copy.addr.city = "Mumbai";

console.log(orig.addr.city); // Mumbai ← bug

// Deep clone
const deepCopy = structuredClone(orig);

// Mutate deep clone
deepCopy.addr.city = "Delhi";

console.log(orig.addr.city); // still Mumbai
`;

document.getElementById("task1Code").textContent = codeOne;

const output1 = document.getElementById("task1Output");

function log1(message) {
    output1.textContent += message + "\n";
}

// Original object
const orig = {
  name: "Priya",
  addr: { city: "Jaipur" }
};

// Shallow copy
const copy = { ...orig };

// Mutate nested object
copy.addr.city = "Mumbai";

// Bug: original also changes
log1(orig.addr.city); // Mumbai

// Fresh original for deep clone example
const orig2 = {
  name: "Priya",
  addr: { city: "Jaipur" }
};

// Deep clone
const deepCopy = structuredClone(orig2);

// Mutate deep clone
deepCopy.addr.city = "Delhi";

// Original stays unchanged
log1(orig2.addr.city); // Jaipur

//===============================================================================================================================================

//========================================================================================================================================
const codeTwo = `
// Original state
const state = {
  user: {
    name: "Priya",
    prefs: {
      theme: "light",
      lang: "en"
    }
  }
};

// Create NEW state immutably
const newState = {
  ...state,
  user: {
    ...state.user,
    prefs: {
      ...state.user.prefs,
      theme: "dark"
    }
  }
};

console.log(newState.user.prefs.theme); // dark
console.log(state.user.prefs.theme);    // light
`;

document.getElementById("task2Code").textContent = codeTwo;

const output2 = document.getElementById("task2Output");

function log2(message) {
    output2.textContent += message + "\n";
}

// Original state
const state = {
  user: {
    name: "Priya",
    prefs: {
      theme: "light",
      lang: "en"
    }
  }
};

// Immutable update
const newState = {
  ...state,
  user: {
    ...state.user,
    prefs: {
      ...state.user.prefs,
      theme: "dark"
    }
  }
};

// Logs
log2(newState.user.prefs.theme); // dark
log2(state.user.prefs.theme);    // light

//========================================================================================================================================
const codeThree = `
// Original tasks
const tasks = [
  { id: 1, title: "Learn JS", done: false },
  { id: 2, title: "Build app", done: false }
];

// Toggle function
function toggleDone(tasks, id) {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, done: !task.done }
      : task
  );
}

// First update
const updated1 = toggleDone(tasks, 1);

// Second update
const updated2 = toggleDone(tasks, 2);

console.log(updated1);
console.log(updated2);

// Original remains unchanged
console.log(tasks);
`;

document.getElementById("task3Code").textContent = codeThree;

const output8 = document.getElementById("task3Output");

function log3(message) {
    output8.textContent += message + "\n";
}

// Original tasks
const tasks = [
  { id: 1, title: "Learn JS", done: false },
  { id: 2, title: "Build app", done: false }
];

// Toggle function
function toggleDone(tasks, id) {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, done: !task.done }
      : task
  );
}

// First toggle
const updated1 = toggleDone(tasks, 1);

// Second toggle
const updated2 = toggleDone(tasks, 2);

// Logs
log3(updated1[0].done); // true
log3(updated1[1].done); // false

log3(updated2[0].done); // false
log3(updated2[1].done); // true

// Original array unchanged
log3(tasks[0].done); // false
log3(tasks[1].done); // false

//========================================================================================================================================
const codeFour = `
// Partial API response
const data = {
  user: {
    name: "Priya",
    profile: {
      city: null
    }
  }
};

// Safe access with fallback
const city =
  data?.user?.profile?.city ?? "Unknown";

console.log(city);

// Safe bio length
const bioLength =
  data?.user?.profile?.bio?.length ?? 0;

console.log(bioLength);

// Try with empty object
const emptyData = {};

const city2 =
  emptyData?.user?.profile?.city ?? "Unknown";

const bioLength2 =
  emptyData?.user?.profile?.bio?.length ?? 0;

console.log(city2);
console.log(bioLength2);
`;

document.getElementById("task4Code").textContent = codeFour;

const output4 = document.getElementById("taskBonusOutput");

function log4(message) {
    output4.textContent += message + "\n";
}

// Partial API response
const data = {
  user: {
    name: "Priya",
    profile: {
      city: null
    }
  }
};

// Safe access with fallback
const city =
  data?.user?.profile?.city ?? "Unknown";

log4(city); // Unknown

// Safe bio length
const bioLength =
  data?.user?.profile?.bio?.length ?? 0;

log4(bioLength); // 0

// Empty object test
const emptyData = {};

// Still safe
const city2 =
  emptyData?.user?.profile?.city ?? "Unknown";

const bioLength2 =
  emptyData?.user?.profile?.bio?.length ?? 0;

log4(city2);      // Unknown
log4(bioLength2); // 0
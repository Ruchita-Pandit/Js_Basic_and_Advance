//========================================================================================================================================
const codeOne = `
// 1. Immutable update in deeply nested object

const state = {
  user: {
    profile: {
      settings: {
        theme: "light",
        lang: "en"
      }
    },
    stats: {
      score: 100
    }
  }
};

// Immutable update
const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      settings: {
        ...state.user.profile.settings,
        theme: "dark"
      }
    }
  }
};

console.log(newState.user.profile.settings.theme);

console.log(
  state.user.stats === newState.user.stats
);

console.log(
  state.user.profile === newState.user.profile
);
`;

document.getElementById("task1Code").textContent = codeOne;

const output1 = document.getElementById("homework1Output");

function log1(message) {
    output1.textContent += message + "\n";
}

// Original object
const state = {
  user: {
    profile: {
      settings: {
        theme: "light",
        lang: "en"
      }
    },
    stats: {
      score: 100
    }
  }
};

// Immutable update
const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      settings: {
        ...state.user.profile.settings,
        theme: "dark"
      }
    }
  }
};

// Logs
log1(newState.user.profile.settings.theme); // dark

// Unchanged branch shares reference
log1(state.user.stats === newState.user.stats); // true

// Changed branch gets new reference
log1(state.user.profile === newState.user.profile); // false

//========================================================================================================================================
const codeTwo = `
// 2. deepFreeze implementation

function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}

const user = {
  name: "Priya",
  address: {
    city: "Jaipur",
    location: {
      pin: 302001
    }
  }
};

deepFreeze(user);

user.address.city = "Mumbai";
user.address.location.pin = 999999;

console.log(user.address.city);
console.log(user.address.location.pin);
`;

document.getElementById("task2Code").textContent = codeTwo;

const output2 = document.getElementById("homework2Output");

function log2(message) {
    output2.textContent += message + "\n";
}

// deepFreeze function
function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}

// Test object
const user = {
  name: "Priya",
  address: {
    city: "Jaipur",
    location: {
      pin: 302001
    }
  }
};

// Freeze object
deepFreeze(user);

// Mutation attempts
user.address.city = "Mumbai";
user.address.location.pin = 999999;

// Logs
log2(user.address.city); // Jaipur
log2(user.address.location.pin); // 302001

//========================================================================================================================================
const codeThree = `
// 3. structuredClone vs JSON clone

const original = {
  date: new Date(),
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3])
};

const copy = structuredClone(original);

console.log(copy.date instanceof Date);
console.log(copy.map instanceof Map);
console.log(copy.set instanceof Set);
`;

document.getElementById("task3Code").textContent = codeThree;

const output3 = document.getElementById("homework3Output");

function log3(message) {
    output3.textContent += message + "\n";
}

// Original object
const original = {
  date: new Date(),
  map: new Map([["a", 1]]),
  set: new Set([1, 2, 3])
};

// structuredClone
const copy = structuredClone(original);

// Logs
log3(copy.date instanceof Date); // true
log3(copy.map instanceof Map);   // true
log3(copy.set instanceof Set);   // true

//========================================================================================================================================
const codeFour = `
// 4. pick helper

function pick(obj, keys) {
  const result = {};

  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}

const user = {
  name: "Priya",
  age: 25,
  city: "Jaipur"
};

console.log(
  pick(user, ["name", "city"])
);
`;

document.getElementById("task4Code").textContent = codeFour;

const output4 = document.getElementById("homework4Output");

function log4(message) {
    output4.textContent += message + "\n";
}

// pick helper
function pick(obj, keys) {
  const result = {};

  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}

// Object
const user1 = {
  name: "Priya",
  age: 25,
  city: "Jaipur"
};

// Pick selected keys
const picked = pick(user1, ["name", "city"]);

// Logs
log4(picked.name); // Priya
log4(picked.city); // Jaipur
// =========================
// TASK 1
// async Functions Always Return a Promise
// =========================

const code1 = `
// async function always returns a Promise

async function greet() {
  return "Namaste";
}

const result = greet();

console.log(result);

result.then((msg) => {
  console.log(msg);
});


// Equivalent without async

function greetOld() {
  return Promise.resolve("Namaste");
}
`;

document.querySelector("#task1Code code").textContent = code1;

const out1 = [];

async function greet() {
  return "Namaste";
}

const result = greet();

out1.push(`${result}`);

result.then((msg) => {

  out1.push(msg);

  document.getElementById("lesson1Output").textContent =
`${out1[0]}

${out1[1]}`;
});

document.getElementById("lesson1Output").textContent =
`${out1[0]}`;





// =========================
// TASK 2
// await Pauses Inside an async Function
// =========================

const code2 = `

function fetchUser(id) {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        id,
        name: "Priya"
      });

    }, 500);

  });
}


// .then style

function withThen() {

  fetchUser(7).then((user) => {
    console.log("got:", user);
  });

}


// async/await style

async function withAwait() {

  const user = await fetchUser(7);

  console.log("got:", user);

}

withAwait();
`;

document.querySelector("#task2Code code").textContent = code2;

const out2 = [];

function fetchUser(id) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        id,
        name: "Priya"
      });

    }, 500);

  });
}

async function withAwait() {

  const user = await fetchUser(7);

  out2.push(`got: ${JSON.stringify(user)}`);

  document.getElementById("lesson2Output").textContent =
`${out2[0]}`;
}

withAwait();





// =========================
// TASK 3
// try / catch / finally
// =========================

const code3 = `

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

    }, 300);

  });
}


async function showUser(id) {

  try {

    const user = await fetchUser(id);

    console.log("got:", user);

  } catch (err) {

    console.error("failed:", err.message);

  } finally {

    console.log("done");

  }

}

showUser(7);

showUser(-1);
`;

document.querySelector("#task3Code code").textContent = code3;

const out3 = [];

function fetchUserTask3(id) {

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

    }, 300);

  });
}

async function showUser(id) {

  try {

    const user = await fetchUserTask3(id);

    out3.push(`got: ${JSON.stringify(user)}`);

  } catch (err) {

    out3.push(`failed: ${err.message}`);

  } finally {

    out3.push("done");

    document.getElementById("lesson3Output").textContent =
`${out3[0] || ""}
${out3[1] || ""}
${out3[2] || ""}
${out3[3] || ""}`;
  }
}

showUser(7);

showUser(-1);





// =========================
// TASK 4
// Sequential vs Parallel
// =========================

const code4 = `

function fetchProduct(id) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        id,
        price: 100
      });

    }, 1000);

  });
}


// Sequential

async function slow() {

  const t0 = Date.now();

  const a = await fetchProduct(1);

  const b = await fetchProduct(2);

  const c = await fetchProduct(3);

  console.log(
    "Took",
    Date.now() - t0,
    "ms"
  );

}


// Parallel

async function fast() {

  const t0 = Date.now();

  const [a, b, c] = await Promise.all([
    fetchProduct(1),
    fetchProduct(2),
    fetchProduct(3)
  ]);

  console.log(
    "Took",
    Date.now() - t0,
    "ms"
  );

}

slow();

fast();
`;

document.querySelector("#task4Code code").textContent = code4;

const out4 = [];

function fetchProduct(id) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        id,
        price: 100
      });

    }, 1000);

  });
}

async function slow() {

  const t0 = Date.now();

  await fetchProduct(1);

  await fetchProduct(2);

  await fetchProduct(3);

  out4.push(`slow: ${Date.now() - t0} ms`);

  document.getElementById("lesson4Output").textContent =
`${out4[0] || ""}
${out4[1] || ""}`;
}

async function fast() {

  const t0 = Date.now();

  await Promise.all([
    fetchProduct(1),
    fetchProduct(2),
    fetchProduct(3)
  ]);

  out4.push(`fast: ${Date.now() - t0} ms`);

  document.getElementById("lesson4Output").textContent =
`${out4[0] || ""}
${out4[1] || ""}`;
}

slow();

fast();





// =========================
// TASK 5
// forEach Trap
// =========================

const code5 = `

const ids = [1, 2, 3];


// BUG

async function bug() {

  console.log("start");

  ids.forEach(async (id) => {

    const p = await fetchProduct(id);

    console.log("got", p);

  });

  console.log("end");

}


// FIX 1

async function sequential() {

  console.log("start");

  for (const id of ids) {

    const p = await fetchProduct(id);

    console.log("got", p);

  }

  console.log("end");

}


// FIX 2

async function parallel() {

  console.log("start");

  const results = await Promise.all(

    ids.map((id) => fetchProduct(id))

  );

  results.forEach((p) => {

    console.log("got", p);

  });

  console.log("end");

}
`;

document.querySelector("#task5Code code").textContent = code5;

const out5 = [];

const ids = [1, 2, 3];

async function bug() {

  out5.push("BUG");
  out5.push("start");

  ids.forEach(async (id) => {

    const p = await fetchProduct(id);

    out5.push(`got ${JSON.stringify(p)}`);

    document.getElementById("lesson5Output").textContent =
`${out5.join("\n")}`;
  });

  out5.push("end");

  document.getElementById("lesson5Output").textContent =
`${out5.join("\n")}`;
}

bug();





// =========================
// TASK 6
// Top-Level await
// =========================

const code6 = `

// Top-level await in module

const response = await fetch("/api/config");

const config = await response.json();

console.log(config);


// Regular script version

(async () => {

  const r = await fetch("/api/config");

  const c = await r.json();

  console.log(c);

})();
`;

document.querySelector("#task6Code code").textContent = code6;

document.getElementById("lesson6Output").textContent =
`Top-level await works only in ES modules.

Regular scripts must wrap await
inside an async function.`;





// =========================
// TASK 7
// Returning Values from async
// =========================

const code7 = `

async function getUserName(id) {

  const user = await fetchUser(id);

  return user.name;

}


// .then style

getUserName(7).then((name) => {

  console.log(name);

});


// await style

(async () => {

  const name = await getUserName(7);

  console.log(name);

})();
`;

document.querySelector("#task7Code code").textContent = code7;

const out7 = [];

async function getUserName(id) {

  const user = await fetchUser(id);

  return user.name;
}

getUserName(7).then((name) => {

  out7.push(`then: ${name}`);

  document.getElementById("lesson7Output").textContent =
`${out7[0] || ""}
${out7[1] || ""}`;
});

(async () => {

  const name = await getUserName(7);

  out7.push(`await: ${name}`);

  document.getElementById("lesson7Output").textContent =
`${out7[0] || ""}
${out7[1] || ""}`;
})();
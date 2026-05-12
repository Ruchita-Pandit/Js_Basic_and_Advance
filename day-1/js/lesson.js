/* firstName – not first_name or FirstName
MAX_SIZE or API_URL — use ALL_CAPS_WITH_UNDERSCORES
const AnimalClass */

// Good naming
const firstName = "Arjun";
const totalScore = 95;
const MAX_RETRIES = 3;

// Bad naming — avoid
const fn = "Arjun"; // too short, meaningless
const first_name = "Arjun"; // snake_case — not JS convention

const result = [
  `Good naming :`,
  `firstName = ${firstName}`,
  `totalScore = ${totalScore}`,
  `MAX_RETRIES = ${MAX_RETRIES}`,
  ``,
  `Bad naming :`,
  `fn = ${fn}`,
  `first_name = ${first_name}`
];

console.log(result.join("\n"));

document.querySelector("#namingOutput code").textContent =
  result.join("\n");
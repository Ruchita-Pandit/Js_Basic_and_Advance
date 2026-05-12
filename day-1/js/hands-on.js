//TASK 1
const Name = "Ruchi";
const collegeName = "LNCT";
const favSub = "Maths";
const FUTURE_PROJECT = "real-time";

// Store all lines inside an array
const result1 = [
  `Name : ${Name}`,
  `College Name : ${collegeName}`,
  `Favourite Subject : ${favSub}`,
  `Hope to build with JavaScript someday : ${FUTURE_PROJECT}`
];

// Console output
console.log(result1.join("\n"));
document.querySelector("#task1Output").textContent = result1.join("\n");

const result2 = [
  "Current Mood : Focused",
  "Updated Mood : Curious",
  "Constant Value : 13",
  "Error Statement : TypeError: Assignment to constant variable."
];

console.log(result2.join("\n"));
document.querySelector("#task2Output").textContent = result2.join("\n");



// TASK 3
let firstName;
let totalScore;



// BONUS WRITE A COMMENT STORY
const heroName = "Aryan";
const heroAge = 21;
const heroPower = "Control Water";
const city = "New York";
const works = "Mediacom";

const story = [
  `${heroName} is a ${heroAge} yrs old boy`,
  `working in ${works} in ${city}`,
  `he attains a power to ${heroPower}`
];

console.log(story.join("\n"));

document.querySelector("#taskBonusOutput").textContent = story.join("\n");
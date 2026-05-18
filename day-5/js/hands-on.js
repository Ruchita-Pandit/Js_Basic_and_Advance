// ==============================
// Topic 1 Snippet
// ==============================

const topic1Snippet = `// Task 1: Multiplication Table with for
for(let i = 1; i <= 10; i++){
    console.log(\`7*\${i} = \${7*i}\`);
}

console.log("even multiples of 7");

for(let i = 1; i <= 10; i++){
   if(7*i % 2 === 0){
      console.log(\`7*\${i} = \${7*i}\`);
   }
}`;


// ==============================
// Topic 2 Snippet
// ==============================

const topic2Snippet = `// Task 2: Sum with while
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

console.log(sum);

let sum1 = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {
        sum1 += j;
    }
    j++;
}

console.log(sum1);`;


// ==============================
// Topic 3 Snippet
// ==============================

const topic3Snippet = `// Task 3: for...of with Names
const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

for (const name of names) {
    console.log(name);
}

let count = 0;

for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}

console.log(count);

const city = "Jaipur";

for (const char of city) {
    console.log(char);
}
`;


// ==============================
// Inject Code into HTML
// ==============================

document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;


// ==============================
// Topic 1 Output
// ==============================

let topic1Output = "";

topic1Output += "Multiplication Table of 7\n\n";

for(let i = 1; i <= 10; i++){
    topic1Output += `7*${i} = ${7*i}\n`;
}

topic1Output += "\nEven multiples of 7\n\n";

for(let i = 1; i <= 10; i++){
   if(7*i % 2 === 0){
      topic1Output += `7*${i} = ${7*i}\n`;
   }
}

document.getElementById("task1Output").textContent = topic1Output;


// ==============================
// Topic 2 Output
// ==============================

let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

let sum1 = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {
        sum1 += j;
    }
    j++;
}

let topic2Output = "";

topic2Output += `Sum from 1 to 100 = ${sum}\n`;
topic2Output += `Sum of odd numbers from 1 to 100 = ${sum1}`;

document.getElementById("task2Output").textContent = topic2Output;


// ==============================
// Topic 3 Output
// ==============================

const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

let topic3Output = "";

topic3Output += "Names:\n\n";

for (const name of names) {
    topic3Output += `${name}\n`;
}

let count = 0;

for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}

topic3Output += `\nNames with length > 4 = ${count}\n`;

const city = "Jaipur";

topic3Output += `\nCharacters in Jaipur:\n\n`;

for (const char of city) {
    topic3Output += `${char}\n`;
}

document.getElementById("task3Output").textContent = topic3Output;
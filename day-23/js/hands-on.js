document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // TASK 1 : Manual Iterator
    // ======================================================

    function range(from, to) {

        return {

            [Symbol.iterator]() {

                let current = from;

                return {

                    next() {

                        if (current <= to) {

                            return {
                                value: current++,
                                done: false
                            };

                        }

                        return {
                            done: true
                        };

                    }

                };

            }

        };

    }

    let task1Result = "";

    for (let num of range(3, 7)) {

        task1Result += `${num}\n`;

    }

    task1Result += `\nSpread : ${JSON.stringify([...range(1, 3)])}`;

    document.getElementById("task1Output").textContent = task1Result;

    document.getElementById("task1Code").textContent = `

function range(from, to) {

    return {

        [Symbol.iterator]() {

            let current = from;

            return {

                next() {

                    if (current <= to) {

                        return {
                            value: current++,
                            done: false
                        };

                    }

                    return {
                        done: true
                    };

                }

            };

        }

    };

}

for (let num of range(3, 7)) {

    console.log(num);

}

console.log([...range(1, 3)]);

`;



    // ======================================================
    // TASK 2 : Range Generator
    // ======================================================

    function* rangeGenerator(from, to) {

        for (let i = from; i <= to; i++) {

            yield i;

        }

    }

    let task2Result = "";

    for (let num of rangeGenerator(3, 7)) {

        task2Result += `${num}\n`;

    }

    task2Result += `\nSpread : ${JSON.stringify([...rangeGenerator(1, 3)])}`;

    document.getElementById("task2Output").textContent = task2Result;

    document.getElementById("task2Code").textContent = `

function* rangeGenerator(from, to) {

    for (let i = from; i <= to; i++) {

        yield i;

    }

}

for (let num of rangeGenerator(3, 7)) {

    console.log(num);

}

console.log([...rangeGenerator(1, 3)]);

// Less code compared to manual iterator

`;



    // ======================================================
    // TASK 3 : Take from Infinite
    // ======================================================

    function* naturals() {

        let n = 1;

        while (true) {

            yield n++;

        }

    }

    function take(iter, count) {

        const result = [];

        for (let value of iter) {

            result.push(value);

            if (result.length === count) {

                break;

            }

        }

        return result;

    }

    const firstFive = take(naturals(), 5);

    document.getElementById("task3Output").textContent =
        JSON.stringify(firstFive);

    document.getElementById("task3Code").textContent = `

function* naturals() {

    let n = 1;

    while (true) {

        yield n++;

    }

}

function take(iter, count) {

    const result = [];

    for (let value of iter) {

        result.push(value);

        if (result.length === count) {

            break;

        }

    }

    return result;

}

console.log(take(naturals(), 5));

`;



    // ======================================================
    // BONUS TASK : Tree Walk with yield*
    // ======================================================

    const tree = {

        value: 1,

        children: [

            {

                value: 2,

                children: [

                    {

                        value: 3,

                        children: []

                    }

                ]

            },

            {

                value: 4,

                children: []

            }

        ]

    };

    function* walk(node) {

        yield node.value;

        for (let child of node.children) {

            yield* walk(child);

        }

    }

    const walkedTree = [...walk(tree)];

    document.getElementById("task4Output").textContent =
        JSON.stringify(walkedTree);

    document.getElementById("task4Code").textContent = `

const tree = {

    value: 1,

    children: [

        {

            value: 2,

            children: [

                {

                    value: 3,

                    children: []

                }

            ]

        },

        {

            value: 4,

            children: []

        }

    ]

};

function* walk(node) {

    yield node.value;

    for (let child of node.children) {

        yield* walk(child);

    }

}

console.log([...walk(tree)]);

`;

});
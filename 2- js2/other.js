/* import h, { f as Ali,a as Ahmed,m as Mohammed } from "./index.js";
console.log(Ali);
console.log(Mohammed);
console.log(Ahmed);
console.log(h()); */

// import * as all from "./index.js";

// console.log(all);
// console.log(all.default());
// console.log(all.m);

/* // Write Your Generator Function Here
function* gen() {
    yield 14;
    yield 154;
    yield 494;
    yield 1034;
    yield 1774;
    yield 2714;
    yield 3854;
    yield 5194;
    yield 6734;
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false} */

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
let uniquenums = new Set(genNumbers());
let uniquelet = new Set(genLetters());
function* genAll() {
    yield* uniquenums;
    yield* uniquelet;
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
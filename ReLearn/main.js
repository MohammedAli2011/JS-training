// document.write("tata");
// console.log(hello);
/* console.log("Elzero\n\nWeb\n\nSchool");
console.log(`Elzero Web School`)
console.log(
`Elzero
Web
School`
) */

////////////////////////////////////////////////////////

/* let theTitle = "Elzero";
let theDesc = "Elzero Web School";
let theDate = "20/5";
let card =
`<div class ="card">
    <div class ="container">
        <h1>${theTitle}</h1>
        <p>${theDesc}</p>
        <span>${theDate}</span>
    </div>
</div>`;
document.write("#".repeat(50));
document.write(card.repeat(4));
document.write("#".repeat(50)); */

//////////////////////////////////////////////////

/* console.log("elzero web %csch%cool", "color: blue;font-size: 50px;", "color: red;font-size: 50px;");

let names = ["ah", "ali", "mo"]

console.table(names) */

///////////////////////////////////////////////////

// console.log(100..toString())

///////////////////////////////////////////////////

/* let p = 100;
let d = true;
let dA = 10;

// if (d === true) {
//     p -= dA;
// };

// console.log(p);

// condation abbreviation

d === true ? p -= dA : p;

console.log(p); */

///////////////////////////////////////////////////

let day = +prompt("enter the num of day do you want");
sallary = 100;

switch (day) {
    case 1: console.log("The Day Is Saturday"); break;
    case 2: console.log("The Day Is Sunday"); break;
    case 3: console.log("The Day Is Monday"); break;
    case 4: console.log("The Day Is T day"); break;
    case 5: console.log("The Day Is W day"); break;
    case 6: console.log("The Day Is Tuesday"); break;
    case 7: console.log("The Day Is Friday"); break;
    default: console.log("The Day Is Unknown"); break;
};
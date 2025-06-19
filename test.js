/* tasks from 1 - 9

//task 1
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";
//task 2
console.log("%cElzero %cWeb %cSchool" , "color: red; font-size: 40px" , "color: green; font-weight: bold; font-size: 40px" , "background-color: blue; color: white; font-size: 40px");
console.group("group 1");
console.log("Message 1");
console.log("Message 2");
console.group("child group");
console.log("Message 1");
console.log("Message 2");
console.group("grand child group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();
console.group("group2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();console.groupEnd();console.groupEnd();console.groupEnd();

let title = "Elzero" , desc = "Elzero Web School" , date = "25/10";

let cards =
`<div class="card">
    <h3>${title}</h3>
    <p>${desc}</p>
    <span>${date}</span>
 </div>`;

document.write(cards.repeat(4)); */

/* let start = 10;
let end = 0;
let stop = 3;
let i = 0;
mainloop:
console.log (`${start - i}`)
for (;; i++) {
    if (start - i < start) {
        console.log (`0${start - i}`)
    }
    if (start - i === 3) {
        break;
    }
} */

/* console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 == typeof +"-40"); // true
console.log(typeof 10 === typeof -"-40"); // true
console.log(+ "10" === 10); // true
console.log(-20 < false); // true */



/* num = prompt("enter a num");

if (num < 10) {
    document.write(`<h3>00${num}</h3>`);
} else if (num > 10 && num < 100) {
    document.write(`<h3>0${num}</h3>`);
} else if (num >= 100) {
    document.write(`<h3>${num}</h3>`);
}; */



/* let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    document.write(`<h3>{ num1 } Is The Same Value As { str }</h3>`);
    if (num1 == str && typeof num1 != typeof str) {
        document.write(`<h3>{ num1 } Is The Same Value As { str } But Not The Same Type</h3>`);
        if (num1 != str2 && typeof num1 != typeof str2) {
            document.write(`<h3>{ num1 } Is Not The Same Value Or The Same Type As { str2 }</h3>`);
            if (str != str2 && typeof str === typeof str2) {
                document.write(`<h3>{ str } Is The Same Type As { str2 } But Not The Same Value</h3>`);
            }
        }
    }
} */



/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0 , num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(0 , num)); // ["Ahmed", "Elham", "Osama"]; */



/* let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.slice(1 , 3)); // ["Eman", "Osama"] */



/* let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne , arrTwo)); // ["Z", "X", "D", "C", "B", "A"] */



/* let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length , words[0].length + true).toUpperCase()); // ZERO */



/* let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.concat(arr2 , arr1).join()
allArrs.splice(0 , 0 , arr2 [arr2.indexOf("F")] , arr1 [arr1.indexOf("X")] , arr2 [arr2.indexOf("Y")])
console.log(allArrs.join("").toLowerCase()) // fxy */



/* let start = 10;
let end = 100;
let exclude = 40;

for (let i = 0; i < end ; i += start) {
    console.log(i + start)
} */



/* let start = 10;
let end = 0;
let stop = 3;
let i = 0;
mainloop:
console.log (`${start - i}`)
for (;; i++) {
    if (start - i < start) {
        console.log (`0${start - i}`)
    }
    if (start - i === 3) {
        break;
    }
} */



/* let start = 1;
let end = 6;
let breaker = 2;
let i = 0;

for (;;){
    i++
    if (i > end) {
        break;
    }

    document.write
    (
     `<div>
        <h3>${i}</h3>
        <ul class="list-unstyled">
            <li class="fs-4">-- <span class="ms-3">${ breaker}</span></li>
            <li class="fs-4">-- <span class="ms-3">${ end - breaker}</span></li>
        </ul>
      </div>`
    )
} */



/* let index = 10;
let jump = 2;

for (;;) {
    console.log(index)
    index -= jump
    if (index < 4) {
        break
    }
} */



/* let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (letter = letter.indexOf("a"); letter <= friends[friends.indexOf("Ahmed")].length + 1;letter++) {
    if (friends[letter] === "Ahmed" || friends[letter] === "Ameer" ) {
        continue
    }
    console.log(`${letter} => ${friends[letter]}`)
} */



/* let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (; start < mix[6];) {
    console.log(mix[start])
    start++
    if (mix[start] === String) {
        continue
    }
} */



/* function sayHello(theName, theGender="") {
    if (theGender === "Male") {
        document.write(`<h3>Hello Mr ${theName}</h3>`)
    }

    if (theGender === "Female") {
        document.write(`<h3>Hello Miss ${theName}</h3>`)
    }

    if (theGender === "" || theGender === undefined || theGender === null) {
        document.write(`<h3>Hello ${theName}</h3>`)
    }
}
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh" */



/* function calculate(firstNum, secondNum, operation="add") {
    if (operation === "add") {
        document.write(`<h3>${firstNum + secondNum}</h3>`)
    } if (operation === "subtract") {
        document.write(`<h3>${firstNum - secondNum}</h3>`)
    } if (operation === "multiply") {
        document.write(`<h3>${firstNum * secondNum}</h3>`)
    } if (firstNum === undefined || secondNum === undefined) {
        document.write(`<h3>${firstNum || secondNum}</h3>`)
    }
}


// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600 */



/* function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        document.write(`<h3>${theAge * 12} Months</h3>`)
        document.write(`<h3>${(theAge * 12)* 4} Weaks</h3>`)
        document.write(`<h3>${((theAge * 12)* 4)* 7} Days</h3>`)
        document.write(`<h3>${(((theAge * 12)* 4)* 7)* 24} Hours</h3>`)
        document.write(`<h3>${((((theAge * 12)* 4)* 7)* 24)* 60 } Minutes</h3>`)
        document.write(`<h3>${(((((theAge * 12)* 4)* 7)* 24)* 60)* 60 } Seconds</h3>`)
    }else if ( theAge >= 100) {
            document.write(`<h3>Age Out Of Range</h3>`)
        }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(39); // Months Example => 456 Months */



/* function multiply (num1 ="0" , num2 ="0" , num3 ="0") {
    document.write (num1 * num2 - num3)
}


multiply(10, 20); // 200
multiply("33", 10, 30); // 300
multiply(100.5, 10, "5"); // 1000 */

// function info(name = "un", age = "un", status = "true") {
//     if (typeof name === Number) {
//         age = name
//     } if (typeof name === Boolean) {
//         status = name
//     } if (typeof age === String) {
//         name = age
//     } if (typeof age === Boolean) {
//         status = age
//     } if (typeof status === String) {
//         name = status
//     } if (typeof status === Number) {
//         age = status
//     } if (status === true) {
//         return `Your Name Is ${name} & Your Age Is ${age} & You Are Show`
//     } if (status === false) {
//         return `Your Name Is ${name} & Your Age Is ${age} & You Are Hidden`
//     }
// }

// document.write(info("Ali", 39, true))
// document.write(info(39, "Ali", true))
// document.write(info(true, 39, "Ali"))
// document.write(info(39, false , "Ali"))

/* document.getElementById("cl").onclick = function () {
    console.log (`hello`)
}

let member = {
    name : "Elzero",
    age : 38,
    country : "Egypt",
    fullDetails : function () {
        return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); */
// My Name Is Elzero, My Age Is 38, I Live in Egypt

/* for (let i = 0; i <= 10; i++) {
    document.getElementsByTagName("img")[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    document.getElementsByTagName("img")[i].alt = "Elzero Logo"
} */

/* let dollar = document.getElementById("dollar");
let dollarVal = document.getElementById('dollar-v');
let poundVal = document.getElementById('pound-v');

dollar.onkeyup = function () {
    dollarVal.innerHTML = dollar.value;
    poundVal.innerHTML = dollar.value * 50;
} */

/* let one = document.getElementsByTagName("div")[0];
let two = document.getElementsByTagName("div")[1];
one.title = "one"
one.innerHTML = "<h3>one</h3>"
two.title = "two 2"
two.innerHTML = "<h3>two</h3>" */

/* document.images[0].alt = "Old"
document.images[1].alt = "Elzero New"
document.images[2].alt = "Old"
document.images[3].alt = "Elzero New"
document.images[4].alt = "Elzero New" */


/* let i = document.forms[0];
let z = document.getElementById("in")
console.log(z)
let inp = document.getElementById("num");
let inpVal = document.getElementById("num").value;
function product() {
    // create elements
    let alldiv = document.createElement(`${document.getElementById("opt").value}`);
    alldiv.className = "w-25 ms-5 me-5 mb-3 border border-black mt-3 p-3 pt-1 text-center d-inline-block";
    alldiv.id = "divAll"
    let heading = document.createElement("h3");
    heading.className = "heading mt-3";
    // elements text
    let headingText = document.createTextNode(`${document.getElementById("text").value}`);
    // add text to elements
    alldiv.appendChild(heading);
    heading.appendChild(headingText);
    document.body.appendChild(alldiv);
    // control
    document.body.style.paddingLeft = "65px";
};

i.onsubmit = function (e) {
    e.preventDefault();
};

inp.onkeyup = function () {
    inpVal = inp.value;
    z.onclick = function () {
        for (let z = 0; z < inpVal; z++) {
            product();
        };
    }
};*/
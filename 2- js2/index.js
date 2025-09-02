/* let t = ["ahmed", "ali", "sameh", ["shady", "hasan", ["lolo", "gamal"]]]

let [, , , [a, , [, b]]] = t

console.log(a)//sady
console.log(b)//lolo


let you = "sos";
let sos = "you";

[you, sos] = [sos, you];

console.log(you);
console.log(sos);

let n = {
    user: "mohammed",
    age: 36,
    work: "developer",
    country: "egypt",
    language: {
        l: "laten",
        ae: "Arabic",
        e: "English"
    }
};


// let{user , age , work ,country} = n;
let user = "gaga";
let age = "gaga";
let work = "gaga";
let country = "gaga";

({ user, age, work, country } = n);

console.log(user, age, work, country)

let {
    user: name,
    age: num,
    work: job,
    country: homeland,
    language: { l, ae, e }
} = n;

console.log(`His Name Is ${name} Ali`);
console.log(`His Age Is ${num}`);
console.log(`His Job Is ${job}`);
console.log(`His Country Is ${homeland}`);
console.log(`He Can Speak ${l}`);
console.log(`He Can Speak ${ae}`);
console.log(`He Can Speak ${e}`);

function d({ user: name, age: num, country: homeland, work: job, language: { l, ae, e } } = n) {
    console.log(name)
    console.log(num)
    console.log(homeland)
    console.log(job)
    console.log(l)
    console.log(ae)
    console.log(e)
}
d(n) */

// Destructuring Challenge
/* let chosen = Number(prompt("pick me a num between 1 an 3"));

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [a, b, c] = myFriends;

if (chosen === 1) {
    let { title: name, age: num, available: ava, skills: sk } = a;
    let [h, css] = sk
    console.log(`name: ${name}`)
    console.log(`age: ${num}`)
    if (ava === true) {
        console.log("status: available")
    } else {
        console.log("status: not available")
    }
    console.log(`skills: ${h} , ${css}`)
} else if (chosen === 2) {
    let { title: name, age: num, available: ava, skills: sk } = b;
    let [py, dj] = sk
    console.log(`name: ${name}`)
    console.log(`age: ${num}`)
    if (ava === true) {
        console.log("status: available")
    } else {
        console.log("status: not available")
    }
    console.log(`skills: ${py} , ${dj}`)
} else if (chosen === 3) {
    let { title: name, age: num, available: ava, skills: sk } = c;
    let [php, l] = sk
    console.log(`name: ${name}`)
    console.log(`age: ${num}`)
    if (ava === true) {
        console.log("status: available")
    } else {
        console.log("status: not available")
    }
    console.log(`skills: ${php} , ${l}`)
} else {
    console.log("you enter a wronge num")
} */

// destructuring tasks
// 1

/* let myNumbers = [1, 2, 3, 4, 5];

let[a,,,,e] = myNumbers

console.log(a * e); // 5 */

// 2

/* let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let[a,b,c,[d,e,[f,g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
console.log("My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel");

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel */

// 3

/* let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let [, a, b] = arr3
let [c, ,] = arr1

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
console.log(`My Best Friends: Shady, Mahmoud, Ahmed`);

// My Best Friends: Shady, Mahmoud, Ahmed */

// 4

/* const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let { age: a, working: w, country: c, hobbies: [h1, , h3] } = member

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming */

// let arr1 = [1, 1, 1, 1, 2, 3];
// // let uniqueArr1 = new Set(arr1);
// // let uniqueArr1 = new Set().add(1).add(1).add(1).add(2).add(3);
// let uniqueArr1 = new Set();
// // control
// uniqueArr1.add(1).add(1).add(1).add(2).add(3)
// // show
// console.log(arr1);
// console.log(uniqueArr1);

// console.log("####")

// console.log(Array.from(uniqueArr1));

// console.log("####")

// uniqueArr1.forEach((el) => {
//     console.log(el)
//     console.log("####")
// })

// // console.log(uniqueArr1.delete(1));//true and delete item
// // console.log(uniqueArr1.delete(10));//false
// // uniqueArr1.delete(1);//delete (1)
// // console.log(uniqueArr1.clear());//undefined and clear
// // uniqueArr1.clear()//clear
// // console.log(uniqueArr1);

// /* let a = new Map([
//     ["history", 1],
//     ["rare", 2],
//     ["Math", 3],
//     [10, 4]
// ]);

// console.log(a.get("history"))
// console.log(a.get("rare"))
// console.log(a.get("Math"))
// console.log(a.get(10))

// console.log("####")

// console.log(a.size)

// console.log("####")

// a.forEach((el) => console.log(el))


// let arr2 = [10, 20, 30, 40, 50, "A", "b"]

// // arr2.copyWithin(1,5,6)
// // or
// arr2.copyWithin(1, -2, -1)
// console.log(arr2)

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let range = {
//     min: 10,
//     max: 20,
// }

// let check = arr3.some(function(e){
//     console.log(e)
//     return e >= this.min && e < this.max;
// }, range);

// console.log(check) */

// // spread

// console.log([..."osama"])
// console.log(...[..."osama"])

// // concat

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let ab = [...a, ...b]

// console.log(ab)

// // object

// let o = {
//     a: 1,
//     b: 2
// }

// let o2 = {
//     c: 3,
//     d: 4
// }

// console.log({...o,...o2})

// Needed Output

// let s = new Set().add(10)

// s.add(20).add(s.size)

// console.log(s)
// console.log(Array.from(s).at(-1))


// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// // Needed Output

// console.log(Array.from(new Set(myFriends)).sort())

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };

// // Needed Output

// let m = new Map([
//     ['username', 'Osama'],
//     ['role', 'Admin'],
//     ['country', 'Egypt']
// ]);

// console.log(m)
// console.log(m.size)
// console.log(m.has("role"))


// let theName = "Elzero";

// // Needed Output

// console.log([...theName])


// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// // Needed Output
// chars.copyWithin(-2,3,5)
// chars.copyWithin(3,0,3)

// console.log(chars)

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// // Needed Output

// chars.copyWithin(3,4,5)
// chars.copyWithin(-2,4,6)
// chars.copyWithin(4,0,3)

// console.log(chars)

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// // Needed Output

// chars.copyWithin(-2,3,5)
// chars.copyWithin(-3,2,3)
// chars.copyWithin(2,0,2)

// console.log(chars)

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.copyWithin(-2,3,5)
// chars.copyWithin(3,0,3)

// console.log(chars)

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// // Needed Output

// let [a,b,c] = numsOne
// let [d,e,f] = numsTwo

// console.log(numsOne.concat(numsTwo))
// console.log([...numsOne,...numsTwo])
// console.log([a,b,c,d,e,f])


/* let line = "Iam 1 2 0 @@@@@ Mohammed 9 9 9 9 9 ------- , my 5 5 2 5 2 5 2 5 name %%%%%%% is 2 5 2 5 2 5 2 5 2 2 2 2 2 2 2 2 2 2 2 2 5 mohammed"
let agrex = /\w\S\D/

console.log(line.match(agrex)) */

// let t = document.getElementById("Telephone");
// let tRE = /(010\d{8}|012\d{8})/

// document.querySelector("[type = 'submit']").addEventListener("click", function (e) {
//     if (tRE.test(t.value) === false) {
//         e.preventDefault()
//     }
// })

// if (tRE.test(t.value) === false) {
//     let h = document.createElement("h3")
//     document.body.appendChild(h)
//     h.innerHTML = 'This Num Is Not Available'
// }

/* let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /((https:\/\/)|(http:\/\/))?(www.)?\w+.\w+(:\w+\/\w+.\w+\?\w+=\w+&\w+=\w+)?/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re)); */

/* let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regEx = /\d{4}:\w+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig

console.log(ip.match(regEx)) */

/* let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

let regEx = /\bos\d*o\b/ig

console.log(specialNames.match(regEx)) */

/* let phone = "+(995)-123 (4567)";
let regEx = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/ig

console.log(phone.match(regEx)) */


// let Userscount = 0;
// Object.prototype.count = 0;
// class User {
//     #s;
//     constructor(username, age, salary) {
//         this.u = username
//         this.a = age
//         this.#s = salary
//         Userscount++
//         User.count++
//     }
//     super() {
//         return parseInt(this.#s)
//     }
// }

// let user = new User("nana" , 10 , 1000)
// let user2 = new User("nan" , 20 , 2000)
// let user3 = new User("na" , 30 , 3000)
// let user4 = new User("n" , 40 , 4000)
// let user5 = new User("na" , 50 , 5000)
// console.log(`${Userscount} Users`)
// console.log("####")
// console.log(User.count)

// class Admin extends User {
//     constructor(username, age, salary) {
//         super(username, age, salary)
//     }
// }

// let admin = new Admin("tata", 23, 5000);

// console.log(admin.super())
// Admin.prototype.yay = "yay"
// console.log(admin.yay)
// /* let user1 = new User("mohammed", 12, 5000)

// document.write(`My Name Is ${user1.u}<br>`)
// document.write(`Iam ${user1.a} Years Old<br>`)
// document.write(`I Take On month $${user1.s}<br>`)
// document.write(`${user1.name(user1.u)}<br>`)
// document.write(`${user1.sasa("sasa")}`)
// console.log(user1 instanceof User)
// console.log(user1.constructor === User)
// console.log(user1 instanceof User)
// console.log(user1 instanceof user1.constructor) */

// class Userthree {
//     constructor(userName,salary = 0) {
//         this.n = userName || userName === "" ? userName = "Unknown":userName = userName || userName === undefined ? userName = "Unknown":userName = userName;
//         this.s = salary;
//     }
// }

// let userOne = new Userthree()

// console.log(userOne.n)
// console.log(userOne.s)














// counter
/* let i = 0;
class User {
    static count = 0;
    constructor(username, age, work, salary) {
        this.u = username;
        this.a = age;
        this.w = work;
        this.s = salary;
        User.count++;
    };
    static countMembers() {
        return `${User.count} Members Created`
    };
    information() {
        i++; 
        return `<h3>Member ${i}:</h3><br>Name: ${this.u}<br>Age: ${this.a}<br>Work: ${this.w}<br>Salary: ${this.s}<br>`
    }
};

let userOne = new User("Memo", 14, "Front End Developer", 2000)
let userTwo = new User("Ali", 40, "Full Stack Developer", 15000)
let userThree = new User("Ahmed", 12, "Not Work", 0)

document.write(userOne.information())
document.write(`<h3>####################</h3>`)
document.write(userTwo.information())
document.write(`<h3>####################</h3>`)
document.write(userThree.information())
document.write(`<h3>${User.countMembers()}</h3>`); */


/* class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    };
    run () {
       return "Car Is Running Now";
    };

    information () {
        return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
    };
};

let car1 = new Car("MG",2022,420000);

// Needed Output
console.log(car1.information());
console.log("Car One Name Is MG And Model Is 2022 And Price Is 420000");
console.log(car1.run());
console.log("Car Is Running Now"); */


/* class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

// Write Tablet Class Here
class Tablet extends Phone {
    constructor(name, serial, price ,size = "Unknown") {
        super(name, serial, price)
        this.size = size
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown */


// console.log(date.getTime());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDay());
// let date = new Date();
// console.log(date);

// console.log("#".repeat(66))

// date.setTime(0);
// console.log(date);

// console.log("#".repeat(66));

// // date.setDate(73);
// date.setFullYear(2011, 8, 11);
// date.setHours(3,0,0)
// console.log(date);

let date2 = new Date(2011, 8, 11, 3, 0, 0, 0);
console.log(date2);

// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// };

// for(let value of generateNumbers()) {
//     console.log(value);
// };
// let generator = generateNumbers();

// generator.next()
// generator.next()

// function* test() {
//     yield "A";
//     yield "B";
//     yield "C";
// };



// function* All() {
//     yield* generateNumbers();
//     yield* test();
//     yield* ["z","x","d"];
// };


// let generator = All();


// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("+"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

/* function* generateNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    };
};

let generator = generateNumbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */

/* function* user () {
    yield 1;
    yield 2;
    yield 3;
    return "r";
    yield 4;
    yield 5;
};

let genarator = user();

console.log(genarator.next());
console.log(genarator.next());
console.log(genarator.next());
console.log(genarator.next());
console.log(genarator.next()); */

let a = "Ahmed";
let m = "Mohammed";
let A = "Ali";

export {
    A as f, a, m
};

export default function () {
    return "Hello"
};
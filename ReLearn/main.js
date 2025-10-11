// document.write("tata");
// console.log(hello);
// console.log("Elzero\n\nWeb\n\nSchool");
// console.log(`Elzero Web School`)
// console.log(
//     `Elzero
// Web
// School`
// )

////////////////////////////////////////////////////////

// let theTitle = "Elzero";
// let theDesc = "Elzero Web School";
// let theDate = "20/5";
// let card =
//     `<div class ="card">
//     <div class ="container">
//         <h1>${theTitle}</h1>
//         <p>${theDesc}</p>
//         <span>${theDate}</span>
//     </div>
// </div>`;
// document.write("#".repeat(50));
// document.write(card.repeat(4));
// document.write("#".repeat(50));

//////////////////////////////////////////////////

// console.log("elzero web %csch%cool", "color: blue;font-size: 50px;", "color: red;font-size: 50px;");

// let names = ["ah", "ali", "mo"]

// console.table(names)

///////////////////////////////////////////////////

// console.log(100..toString())

///////////////////////////////////////////////////

// let p = 100;
// let d = true;
// let dA = 10;

// if (d === true) {
//     p -= dA;
// };

// console.log(p);

// condation abbreviation

// d === true ? p -= dA : p;

// console.log(p);

///////////////////////////////////////////////////

// let day = +prompt("enter the num of day do you want");
// sallary = 100;

// switch (day) {
//     case 1: console.log("The Day Is Saturday"); break;
//     case 2: console.log("The Day Is Sunday"); break;
//     case 3: console.log("The Day Is Monday"); break;
//     case 4: console.log("The Day Is T day"); break;
//     case 5: console.log("The Day Is W day"); break;
//     case 6: console.log("The Day Is Tuesday"); break;
//     case 7: console.log("The Day Is Friday"); break;
//     default: console.log("The Day Is Unknown"); break;
// };

///////////////////////////////////////////////////

// let myFamily = ["ali", "ahmed", "doaa"];

// console.log(myFamily[2])// doaa
// myFamily[2] = "noha"
// console.log(myFamily[2])// noha
// myFamily[2] = ["doaa", "noha"]
// console.log(myFamily[2])// ["doaa", "noha"]
// console.log(myFamily[2][1][0])// N

////////////////////////////////////////////////////

// let myFamily = ["ali", "ahmed", "doaa", "Gathem"];

// for (let i = 0; i < myFamily.length; i++) {
//     console.log(myFamily[i]);
// };

// let i = 0;
// for (; ;) {
//     console.log(myFamily[i]);
//     i++;
//     if (i === myFamily.length) break;
// };

// let i = 0;
// while (i < myFamily.length) {
//     console.log(myFamily[i]);
//     i++;
// }

//////////////////////////////////////////////////////////

//  function sayHello(theName) {
//     console.log(`Hello ${theName}`);
// };

// sayHello("memo");


// function genarateYears(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i)
//     }
// };

// genarateYears(2011, 2025);


// function Years(start, end) {
//     return `You Are (${end - start}) Years old`;
// };

// console.log(Years(2011, 2025));


// let calc = function () {
//     return `You Are (${end - start}) Years old`;
// };

// calc(2011, 2025);

// function Years3(start, end) {
//     function calc2() {
//         function gen() {
//             return `You Are (${end - start}) Years old`;
//         };
//         return gen();
//     };
//     return calc2();
// };

// console.log(Years3(2011, 2025));

// let years = (start, end) => `You Are (${end - start}) Years old`;

// console.log(years(2011, 2025));

////////////////////////////////////////////////////////////

// let a = [1, 2, 3, 4, 5, 6];

// let add = a.map((el) => el + el);
// console.log(add);

// let names = ["ahmed", "israa", "osama", "ayman", "amer"];

// let fillteredNames = names.filter((el) => el.startsWith("a"));

// console.log(fillteredNames)

// let a = [1, 2, 3, 4, 5, 6];

// let add = a.reduce(function (acc, cur) {
//     return acc + cur
// });

// console.log(add);

/////////////////////////////////////////////////////////////

// let obj = {
//     name: "memo",
//     age: 14,
//     country: "eg",
// };


// let name = "name";
// let age = "age";
// let country = "country";

// console.log(obj.name);//memo
// console.log(obj["name"]);//memo
// console.log("################################");
// console.log(obj[name]);//memo
// console.log("------------------------------------------");
// console.log(obj.age);//14
// console.log(obj["age"]);//14
// console.log("################################");
// console.log(obj[age]);//14
// console.log("------------------------------------------");
// console.log(obj.country);//eg
// console.log(obj["country"]);//eg
// console.log("################################");
// console.log(obj[country]);//eg

///////////////////////////////////////////////////////////////

// console.log(location.href);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.hash);
// console.log(location.protocol);
// console.log(location.replace("https://google.com"));
// console.log(location.assign("https://google.com"))

///////////////////////////////////////////////////////////////

// let myFamily = ["Ali", "Ahmed", "Doaa", "Mohammed", ['amged', 'samy']];

// let [a, a2, d, m, [s, v]] = myFamily;

// console.log(a);
// console.log(a2);
// console.log(d);
// console.log(m);
// console.log(s);
// console.log(v);


// let obj = {
//     name: "mohammed",
//     age: 14,
//     country: "Egy",
//     skills: {
//         html: 100,
//         css: 40,
//         js: 90
//     }
// };

// let {
//     name: n,
//     age: a,
//     country: c,
//     skills: { html: h, css, js }
// } = obj;
// let {
//     html: h,
//     css,
//     js
// } = obj.skills;//the same result of (skills: { html: h, css, js })



// console.log(name);
// console.log(age);
// console.log(country);
// console.log(html);
// console.log(css);
// console.log(js);

// console.log(n);
// console.log(a);
// console.log(c);
// console.log(h);
// console.log(css);
// console.log(js);

//////////////////////////////////////////////////////////////

// let nums = [1, 1, 1, 2, 3, 4];
// let uniqueNums = new Set(nums);

// console.log(nums);//[1, 1, 1, 2, 3, 4]
// console.log(uniqueNums);//{1, 2, 3, 4}
// console.log(nums.length);//6
// console.log(uniqueNums.size);//4

/////////////////////////////////////////////////////////////

/*
    i => The case of the first letter is not important, whether it is capital or small.
    g =>It does not bring the first matching word or thing it brings all matching words or things.
*/

// let text = 'I love Elzero Web School , I Love elzero';
// let reg1 = /elzero/;
// let reg2 = /Elzero/;
// let reg3 = /elzero/i;
// let reg4 = /Elzero/i;
// let reg5 = /elzero/g;
// let reg6 = /Elzero/g;
// let reg7 = /elzero/ig;
// let reg8 = /Elzero/ig;
// let reg9 = /elzeros/;

// console.log(text.match(reg1));// ['elzero', index: 34, input: 'I love Elzero Web School , I Love elzero', groups: undefined]
// console.log(text.match(reg2));// ['Elzero', index: 7, input: 'I love Elzero Web School , I Love elzero', groups: undefined]
// console.log(text.match(reg3));// ['Elzero', index: 7, input: 'I love Elzero Web School , I Love elzero', groups: undefined]
// console.log(text.match(reg4));// ['Elzero', index: 7, input: 'I love Elzero Web School , I Love elzero', groups: undefined]
// console.log(text.match(reg5));// ['elzero']
// console.log(text.match(reg6));// ['Elzero']
// console.log(text.match(reg7));// ['Elzero', 'elzero']
// console.log(text.match(reg8));// ['Elzero', 'elzero']
// console.log(text.match(reg9));// null

// let text = 'abcdefghijklmnopqrstuvwxyz111222333444555666777888999101010';
// let textReg = /[a-z]/ig;
// let numReg = /[^a-z]/ig;

// console.log(text.match(textReg))// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// console.log(text.match(numReg))// ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4', '5', '5', '5', '6', '6', '6', '7', '7', '7', '8', '8', '8', '9', '9', '9', '1', '0', '1', '0', '1', '0']

// let persons = '1spam,1spam,1spam,1spam, spam1, spam1, spam1, Aspamo, ahmed';
// let reg = /(\dspam|spam\d)/ig;

// console.log(persons.match(reg));

// let names = '3Mohammed 1Aliz 2Ahmedz 5gamalz 8Mohammedz';
// let reg = /\d\w{1,8}(?=z)/ig;
// let reg2 = /\d\w{8}(?=z)/ig;

// console.log(names.match(reg));
// console.log(names.match(reg2));
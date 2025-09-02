// create cards
/* function product(r) {
    // create elements
    let alldiv = document.createElement("div");
    alldiv.className = " w-25 ms-5 me-5 mb-3 border border-black mt-3 p-3 pt-1 text-center d-inline-block";
    let heading = document.createElement("h3");
    heading.className = "heading mt-3";
    let disc = document.createElement("p");
    disc.className = "disc mb-2";
    // elements text
    let headingText = document.createTextNode(`Iphone ${r}`);
    let discText = document.createTextNode(`This Is A Best Phone`);
    // add text to elements
    alldiv.appendChild(heading);
    alldiv.appendChild(disc);
    heading.appendChild(headingText);
    disc.appendChild(discText);
    document.body.appendChild(alldiv);
    // control
    document.body.style.paddingLeft = "65px";
};

let iphones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let r = 0; r < iphones.length; r++) {
    product(iphones[r]);
};*/

// change language
/* let l = document.getElementById("btnChangeLanguage");
l.className = "text-white border-black bg-primary ms-5 mt-5 me-5 px-2 fw-bold fs-4 text-capitalize shadow rounded";
l.onclick = function () {
    if (document.body.attributes[0].value === "ltr") {
        l.innerHTML = "en";
        document.body.setAttribute("dir", "rtl");
    }else {
        l.innerHTML = "ar";
        document.body.setAttribute("dir", "ltr");
    };
};
console.log(document.body.attributes[0].value); */

// scroll
/* let s = document.getElementById("btnScroll");
let a = document.getElementsByTagName("a")[0];
s.className = "position-fixed bottom-0 end-0 mb-4 me-4 z-3 text-white bg-primary rounded fw-bold fs-5 px-2";
a.className = "hide";
window.onscroll = function () {
    if (scrollY >= 400) {
        a.className = "d-block";
    };if (scrollY < 400) {
        a.className = "hide";
    };
};
a.setAttribute("href", "file:///D:/web_work/js/1-js/test2.html#"); */

// change theme
/* let t = document.getElementById("btnChangeTheme");
let n = document.getElementById("navbar");
let nl1 = document.getElementById("1");
let nl2 = document.getElementById("2");
let nl3 = document.getElementById("3");

t.onclick = function () {
    if (n.className === "navbar navbar-expand-lg p-0 bg-dark") {
        n.className = "navbar navbar-expand-lg p-0 bg-primary";
        n.style.setProperty("background", "#0029bd", "important");
        n.id = "nav";
        nl1.style.setProperty("color", "#0029bd", "important");
        nl1.style.setProperty("background", "#ed9925", "important");
        nl2.setAttribute("id", "nl2");
        nl3.setAttribute("id", "nl3");
        t.setAttribute("class", "h-100 p-3 fw-bold border-white bCT");
        t.style.setProperty("color", "#0029bd", "important");
        t.style.setProperty("background", "#fff", "important");
    }else {
        n.className = "navbar navbar-expand-lg p-0 bg-dark";
        n.style.setProperty("background", "#212529", "important");
        n.id = "nav";
        nl1.style.setProperty("color", "#212529", "important");
        nl1.style.setProperty("background", "#ed9925", "important");
        nl2.setAttribute("id", "2");
        nl3.setAttribute("id", "3");
        t.style.setProperty("color", "#212529", "important");
        t.style.setProperty("background", "#f0f0f0", "important");
    };
};*/

//burger menu
/* let burgerBtn = document.getElementById("burger");
let nav = document.getElementById("nav");
burgerBtn.onclick = function () {
    if(burgerBtn.id === "burger") {
        burgerBtn.id= "bb";
        nav.classList.remove('hide');
    }else {
        burgerBtn.id= "burger";
        nav.classList.add('hide');
    };
};*/


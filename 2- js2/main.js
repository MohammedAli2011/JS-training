/* function alert() {
    let alert = document.createElement("div");
    alert.className;
}; */


// start elzero tasks on Dom
// 1
/* console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name = 'js']"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name = 'js']")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.lastElementChild.previousElementSibling); */

// 2
/* let imgs = document.querySelectorAll("img");
for (let i = 0; i <= 10;i++) {
    imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    imgs[i].alt = "Elzero Logo";
    console.log(imgs[i]);
}; */

// 3
/* let inp = document.getElementsByTagName("input")[0];
let myDiv = document.getElementsByTagName("div")[0];
let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

inp.addEventListener("change", function () {
    if (dollar.innerHTML != inp.value) {
        dollar.innerHTML = inp.value;
        if(inp.value == "") {
            dollar.innerHTML = "0";
        };
        pound.innerHTML = inp.value * 50;
    };
});

inp.addEventListener("keyup", function () {
    if (dollar.innerHTML != inp.value) {
        dollar.innerHTML = inp.value;
        pound.innerHTML = inp.value * 50;
    };
}); */

// 4
/* let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];

one.innerHTML = two.innerHTML;
one.title = one.className;
two.innerHTML = two.className;
two.title = two.className;
two.innerHTML += (" ") + Number((two.innerHTML === two.className) + (one.className === one.title));
two.style.textTransform = "capitalize"; */

// 5
/* let imgs = document.images

for (let i = 0; i <= 5; i++) {
    if(imgs[i].alt != "") {
        imgs[i].alt= "Old"
    }

    if(imgs[i].alt === "") {
        imgs[i].alt= "Elzero New"
    }
} */

// 6
/* let num = document.getElementsByClassName("input")[0]
let text = document.getElementsByClassName("input")[1]
let type = document.getElementsByClassName("input")[2]
let btn = document.querySelector("[name = 'create']")
let d = document.getElementsByTagName("div")[0]

function element() {
    for (let i = 1; i <= num.value; i++) {
        let div = document.createElement(`div`)
        div.className = "box"
        div.id = `id-${i}`
        div.title = "element"
        div.innerHTML = `${text.value}`
        div.style.width = "23.333333333333%"
        div.style.color = "#000"
        div.style.display = "flex"
        div.style.alignContent = "center"
        div.style.justifyContent = "center"
        div.style.background = "#fff"
        div.style.marginBottom = "30px"
        div.style.padding = "30px"
        d.appendChild(div)
    }
    d.style.display = "flex"
    d.style.background = "#eee"
    d.style.flexWrap = "wrap"
    d.style.justifyContent = "space-between"
    d.style.borderRight = "10px solid #eee"
    d.style.borderLeft = "10px solid #eee"
    d.style.paddingTop = "20px"
    d.style.marginTop = "50px"
}


btn.addEventListener("click", function (e) {
    if (num.value > 99) {
        e.preventDefault()
        d.innerHTML = ""
    } else {
        e.preventDefault()
        d.innerHTML = ""
        element()
    }
}) */

// 7
/* let addBox = document.getElementsByClassName("add-box")[0];
let inpAdd = document.getElementsByClassName("classes-to-add")[0];
let btnAdd = document.getElementsByClassName("add")[0];
let removeBox = document.getElementsByClassName("remove-box")[0];
let inpRemove = document.getElementsByClassName("classes-to-remove")[0];
let btnRemove = document.getElementsByClassName("remove")[0];
let list = document.getElementsByClassName("classes-list")[0];
let classes = document.getElementsByClassName("classes")[0];

addBox.style.position = "relative";
addBox.style.width = "fit-content";
addBox.style.display = "inline-block";
btnAdd.style.position = "absolute";
btnAdd.style.right = "0";
btnAdd.style.top = "0";
btnAdd.style.height = "100%";
btnAdd.style.background = "blue";
btnAdd.style.border = "0";
btnAdd.style.color = "white";
btnAdd.style.cursor = "pointer";
addBox.style.marginRight = "45px";

removeBox.style.position = "relative";
removeBox.style.width = "fit-content";
removeBox.style.display = "inline-block";
btnRemove.style.position = "absolute";
btnRemove.style.right = "0";
btnRemove.style.top = "0";
btnRemove.style.height = "100%";
btnRemove.style.background = "#ff5722";
btnRemove.style.border = "0";
btnRemove.style.color = "white";
btnRemove.style.cursor = "pointer";

btnAdd.addEventListener("click", function () {
    if (inpAdd.value.includes(" ")) {
        let span = document.createElement("span")
        span.innerHTML = inpAdd.value.slice(0, inpAdd.value.indexOf(" ")).toLowerCase()
        span.id = inpAdd.value.slice(0, inpAdd.value.indexOf(" ")).toLowerCase()
        classes.appendChild(span)
        let span2 = document.createElement("span")
        span2.innerHTML = inpAdd.value.slice(inpAdd.value.indexOf(" ") + 1).toLowerCase()
        span2.id = inpAdd.value.slice(inpAdd.value.indexOf(" ") + 1).toLowerCase()
        classes.appendChild(span2)
    } else {
        let span = document.createElement("span")
        classes.appendChild(span)
        span.id = inpAdd.value.toLowerCase()
        span.innerHTML = inpAdd.value.toLowerCase()
    }
    inpAdd.value = ""
    document.getElementsByClassName("h4")[0].remove()
})

function remove() {
    if (inpRemove.value.includes(" ")) {
        document.getElementById(inpRemove.value.slice(0, inpRemove.value.indexOf(" ")).toLowerCase()).remove()
        document.getElementById(inpRemove.value.slice(inpRemove.value.indexOf(" ") + 1).toLowerCase()).remove()
    } else {
        document.getElementById(inpRemove.value.toLowerCase()).remove()
    }
    inpRemove.value = ""
    if (classes.innerHTML === "") {
        classes.innerHTML = `<h4 class = "h4">There Are Not Any Classes</h4>`
    }
}

if (classes.innerHTML === "") {
    classes.innerHTML = `<h4 class = "h4">There Are Not Any Classes</h4>`
} */

// start elzero tasks on Bom
// 1
/* let nums = prompt("Print Number From - To");
let i = 0;
if (Number(nums.slice(0, nums.indexOf("-"))) > Number(nums.slice(nums.indexOf("-") + 1))) {
    i = Number(nums.slice(nums.indexOf("-") + 1));
} if (Number(nums.slice(nums.indexOf("-") + 1)) > Number(nums.slice(0, nums.indexOf("-")))) {
    i = Number(nums.slice(0, nums.indexOf("-")));
}

for (; ; i++) {
    document.write(`${i}<br>`);
    if (Number(nums.slice(0, nums.indexOf("-"))) > Number(nums.slice(nums.indexOf("-") + 1))) {
        if (i === Number(nums.slice(0, nums.indexOf("-")))) {
            break;
        }
    } if (Number(nums.slice(nums.indexOf("-") + 1)) > Number(nums.slice(0, nums.indexOf("-")))) {
        if (i === Number(nums.slice(nums.indexOf("-") + 1))) {
            break;
        }
    }
} */

// start LocalStorge Tasks
// 1
/* let select1 = document.querySelector(".select1")
let font = document.getElementsByClassName("option")[select1.firstElementChild.nextElementSibling.selectedIndex].innerHTML
let fontI = select1.firstElementChild.nextElementSibling.selectedIndex
let fSelect = select1.firstElementChild.nextElementSibling
let select2 = document.querySelector(".select2")
let color = document.getElementsByClassName("option")[select2.firstElementChild.nextElementSibling.selectedIndex].innerHTML
let colorI = select2.firstElementChild.nextElementSibling.selectedIndex
let cSelect = select2.firstElementChild.nextElementSibling
let select3 = document.querySelector(".select3")
let size = document.getElementsByClassName("option")[select3.firstElementChild.nextElementSibling.selectedIndex].innerHTML
let sizeI = select3.firstElementChild.nextElementSibling.selectedIndex
let sSelect = select3.firstElementChild.nextElementSibling

//functions
function oFont() {
    for (let i = 0; i < 24; i++) {
        document.getElementsByClassName("option")[i].style.fontFamily = document.getElementsByClassName("option")[localStorage.getItem("fi")].innerHTML
    }
}

function oColor() {
    for (let i = 0; i < 24; i++) {
        document.getElementsByClassName("option")[i].style.color = document.getElementsByClassName("option")[localStorage.getItem("ci")].innerHTML
    }
}

// font select

fSelect.addEventListener("click", function () {
    fSelect.addEventListener("click", function () {
        font = document.getElementsByClassName("option")[fSelect.selectedIndex].innerHTML
        localStorage.setItem("font", font)
        fontI = fSelect.selectedIndex
        localStorage.setItem("fi", fontI)
        font = localStorage.getItem("font")
        document.getElementsByClassName("option")[localStorage.getItem("fi")].setAttribute("selected", "")
        document.body.style.fontFamily = document.getElementsByClassName("option")[localStorage.getItem("fi")].innerHTML
        oFont()
    })
})

font = localStorage.getItem("font")
document.getElementsByClassName("option")[localStorage.getItem("fi")].setAttribute("selected", "")
document.body.style.fontFamily = document.getElementsByClassName("option")[localStorage.getItem("fi")].innerHTML
oFont()

// color select

cSelect.addEventListener("click", function () {
    cSelect.addEventListener("click", function () {
        color = document.getElementsByClassName("option")[cSelect.selectedIndex + 3].innerHTML
        localStorage.setItem("color", color)
        colorI = cSelect.selectedIndex + 3
        localStorage.setItem("ci", colorI)
        color = localStorage.getItem("color")
        document.getElementsByClassName("option")[localStorage.getItem("ci")].setAttribute("selected", "")
        document.body.style.color = document.getElementsByClassName("option")[localStorage.getItem("ci")].innerHTML
        oColor()
    })
})

color = localStorage.getItem("color")
document.getElementsByClassName("option")[localStorage.getItem("ci")].setAttribute("selected", "")
document.body.style.color = document.getElementsByClassName("option")[localStorage.getItem("ci")].innerHTML
oColor()

// size select

sSelect.addEventListener("click", function () {
    sSelect.addEventListener("click", function () {
        size = document.getElementsByClassName("option")[sSelect.selectedIndex + 9].innerHTML
        localStorage.setItem("size", size)
        sizeI = sSelect.selectedIndex + 9
        localStorage.setItem("si", sizeI)
        size = localStorage.getItem("size")
        document.getElementsByClassName("option")[localStorage.getItem("si")].setAttribute("selected", "")
        document.body.style.fontSize = document.getElementsByClassName("option")[localStorage.getItem("si")].innerHTML + "px"
    })
})

size = localStorage.getItem("size")
document.getElementsByClassName("option")[localStorage.getItem("si")].setAttribute("selected", "")
document.body.style.fontSize = document.getElementsByClassName("option")[localStorage.getItem("si")].innerHTML + "px" */
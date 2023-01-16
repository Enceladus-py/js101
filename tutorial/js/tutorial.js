let i = 0;

for (let i = 0; i < 10; i++) {
    console.log(i**2); // i^2
}

/* look at "hoisting" */

console.log(a); // gives undefined
var a = "test"; // allows redeclaration

//console.log(b); // gives reference error
//let b = "test"; // doesnt allow redeclaration


/* Booleans */

let c;
console.log(Boolean(c)); // gives false

c = "0";
console.log(Boolean(c)); // gives true


/* Type Coercion */

let d = 123;

console.log(typeof d);

console.log(String(d)); // explicit

console.log(d + ""); // implicit

console.log(Symbol(d)); // gives unique keys

let arr = [1,2,3];

console.log(arr.toString()); // gives "1,2,3"


/* String Operations */

let s = "Berat Dalsuna";

console.log(s.length);

console.log(s.indexOf("Be")); // gives 0

console.log(s.slice(5,13)); // Dalsuna

console.log(s[9]);  


/* Prompt */

function inp() {
    var name = prompt("Enter your name","Your name...");
    document.querySelector(".par").innerHTML = name;
}

/* Change <ul> */

function op1(){
    var option = document.getElementById("opt1");
    if(option.style.color == "blue") option.style.color = "black";
    else option.style.color = "blue";   
}

var list = document.getElementsByClassName("options"); // gives a node list
var button = document.querySelector("#add");

button.addEventListener("click",function(){
    var data = document.querySelector("#data");

    if(data.value == ""){
        alert("Cannot be empty");
        return;
    }

    var li = document.createElement("li");
    li.textContent = data.value;

    list[0].appendChild(li);
    data.value = "";
});

/* Operators */

var f = "1";
var g = 1;

console.log(f==g) // true
console.log(f===g) // false
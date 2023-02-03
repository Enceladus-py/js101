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

let cq;
console.log(Boolean(cq)); // gives false

cq = "0";
console.log(Boolean(cq)); // gives true


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
    var par = document.querySelector(".par");
    par.innerHTML = name;
    par.style.color = "yellow";
}

/* Change <ul> */

function op1(){ // change the color of the first option by clicking it
    var option = document.getElementById("opt1");
    if(option.style.color == "blue") option.style.color = "black";
    else option.style.color = "blue";   
}

/* Operators */

var f = "1";
var g = 1;

console.log(f==g) // true
console.log(f===g) // false


/* Function Expressions */

f = (s1,s2) => s1*s2; // f and g are same expressions

g = function (s1,s2){
    return s1*s2;
}

/* Arrays */

let array = [1,2,'asd',[12,56,'b'],9,'o']; // supports different types

array.push(10); // add from end

array.unshift(0); // add from start

array.splice(1,0,'new element') // adds new element to 1th index - 0 is the number of deleted elements. Splice can be used to delete.

array.pop(); // pops an element from array

array.shift(); // deletes from start

console.log(array);

if(array.includes('asd')){
    console.log("array includes asd.");
}

array.forEach((element,index) => { // parameters are optional
    console.log(element,index);
});

let mapped_array = array.map((element) => {
    return element*5;
});

mapped_array = array.filter(element => element > 5); // return an array with each element being greater than 5
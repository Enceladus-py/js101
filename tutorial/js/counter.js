// increment or decrement counter with local storage

let counter = localStorage.getItem('counter') ? parseInt(JSON.parse(localStorage.getItem('counter'))) : 0; // check counter exists in storage
let c = document.querySelector("#ct");

c.innerHTML = counter;

const inc = document.querySelector("#increase");
const dec = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

inc.addEventListener("click",clickEvent);
dec.addEventListener("click",clickEvent);
reset.addEventListener("click",resetClickEvent);

function clickEvent(){
    console.log(this.id);
    this.id == "increase" ? c.innerHTML = ++counter : c.innerHTML = --counter;
    localStorage.setItem("counter",JSON.stringify(counter));
}

function resetClickEvent(){
    c.innerHTML = 0;
    localStorage.setItem("counter",JSON.stringify(0));
}
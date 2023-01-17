const inc = document.querySelector("#increase");
const dec = document.querySelector("#decrease");

inc.addEventListener("click",clickEvent);
dec.addEventListener("click",clickEvent);

function clickEvent(){
    console.log(this.id);
    let c = document.querySelector("#ct");
    this.id == "increase" ? c.innerHTML = parseInt(c.innerHTML)+1 : c.innerHTML = parseInt(c.innerHTML) - 1;
}
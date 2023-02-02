/* Dynamically create input and append to created div */

let dynamic_button = document.getElementById("dynamic_input_button");

dynamic_button.addEventListener("click", () =>{
    let myInput = document.createElement("input");

    myInput.setAttribute("id","myInput");
    myInput.setAttribute("type","text");
    myInput.setAttribute("value","Type here");
    
    let myDiv = document.createElement("div");
    
    myDiv.appendChild(myInput);

    let parentDiv = document.getElementById("dynamic_input_div");

    parentDiv.appendChild(myDiv);
});

let dynamicInput = document.getElementById("myInput");
if(dynamicInput){
    console.log(dynamicInput.value);
} 




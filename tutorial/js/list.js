var list = document.getElementsByClassName("options"); // gives a node list
var addButton = document.querySelector("#add"); 

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // check if there is a items array stored

const liMaker = (text) => { // creates a <li> tag inside the <ul> tag for given text
    const li = document.createElement('li');
    li.textContent = text;
    list[0].appendChild(li);
}

itemsArray.forEach(item => { // for each item in local storage create <li>
    liMaker(item);
});

addButton.addEventListener("click",function(){
    
    var data = document.querySelector("#data");

    if(data.value == ""){
        alert("Cannot be empty");
        return;
    }

    itemsArray.push(data.value);
    localStorage.setItem('items', JSON.stringify(itemsArray)); // update items
    liMaker(data.value);
    data.value = "";
});

let clearLocalButton = document.querySelector("#clearLocal"); // clears local storage and <ul> element

clearLocalButton.addEventListener("click",() => {

    localStorage.removeItem("items");

    let li_elements = document.querySelectorAll(".options li");
    let n = li_elements.length; 
    console.log(n);
    for (var i = n-1; i >= 3; i--) { // option 1, option 2 and option 3 are default, i >= 3
        let li = li_elements[i];
        li.parentNode.removeChild(li);
    }

});
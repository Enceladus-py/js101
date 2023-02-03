let todo_form = document.getElementById("todoForm");

let todo_list = document.getElementById("todoList");

let todo_items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; // check if there is a items array stored


const removeDiv = () => {
    console.log("Clicked"); // TODO - idk what to do to remove an element from storage
} 

const liMaker = (action,date) => { // creates a <li> tag inside the <ul> tag for given text

    let li = document.createElement("li");
    li.className = "border";
    li.style = "margin: 10px;";

    let row = document.createElement("div"); // create two columns inside a row - one for what to do, one for the date
    row.className = "row removable-row";

    row.addEventListener('click', removeDiv); // event for removal on click

    let col1 = document.createElement("div");
    col1.className = "col-md";
    col1.textContent = action;

    let col2 = document.createElement("div");
    col2.className = "col-md";
    if(date) col2.textContent = "Due date: " + date;

    row.appendChild(col1);
    row.appendChild(col2);

    li.appendChild(row);

    todo_list.appendChild(li);
    todo_list.appendChild(li);

};

todo_items.forEach(item => { // for each [task,date] append to list
    liMaker(item[0], item[1]);
});

todo_form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let action = document.getElementById("todoAction");
    let date = document.getElementById("todoDate");

    console.log(action);

    if(action.value){
        
        liMaker(action.value,date.value);
        
        todo_items.push([action.value,date.value]);
        localStorage.setItem('items', JSON.stringify(todo_items)); // update items

        action.value = ""; // reset input fields
        date.value = "";
    }
});


let resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    todo_items = [];
    localStorage.clear();
    todo_list.innerHTML = "";
});
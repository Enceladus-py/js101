let todo_form = document.getElementById("todoForm");

let todo_list = document.getElementById("todoList");

let todo_items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : {}; // check if there is a items array stored

let new_id = 0; // will change in iteration -> last key + 1

const removeElement = (evt) => {  // removes a task from the todo list upon clicking X button.
    
    delete todo_items[parseInt(evt.target.id)];

    localStorage.setItem("items",JSON.stringify(todo_items));

    $('#toast-deleted').toast('show'); // show toast message

    $(".btn.btn-danger.remove-element#"+evt.target.id).parent().parent().fadeOut(300, () => { // jsquery for fading effect
        $(".btn.btn-danger.remove-element#"+evt.target.id).parent().parent().remove();
    });

}

const taskDone = (evt) => { // task is done or not done when clicked the div
    
    let element_id = evt.currentTarget.myParam;

    if(!todo_items[element_id][2]){ // undone
        evt.currentTarget.className += " active";
        evt.currentTarget.querySelector("h5").style.visibility = "visible";
        todo_items[element_id][2] = true; // set as done
    }
    else{
        evt.currentTarget.className = evt.currentTarget.className.slice(0,-7); // deactive remove last 7 characters
        evt.currentTarget.querySelector("h5").style.visibility = "hidden";
        todo_items[element_id][2] = false; // set as undone
    }
    localStorage.setItem("items",JSON.stringify(todo_items));
}

const liMaker = (key,action,date,done) => { // creates a <a> tag inside the <div> tag for given text

    let li = document.createElement("a");
    if (done){
        li.className = "list-group-item list-group-item-action flex-column align-items-start active";
    }
    else {
        li.className = "list-group-item list-group-item-action flex-column align-items-start";
    }

    li.href = "#/";
    li.addEventListener("click",taskDone);
    li.myParam = new_id;

    let container = document.createElement("div");
    container.className = "d-flex justify-content-between";

    let heading = document.createElement("h5");
    //heading.className = "mb-1";
    heading.textContent = "Done!";
    if(!done){
        heading.style = "visibility: hidden;";
    }

    let sm = document.createElement("small");
    if (date) sm.textContent = date;
    else sm.textContent = "No deadline.";

    container.appendChild(heading);
    container.appendChild(sm);

    li.appendChild(container);

    let p_div = document.createElement("div");

    let p = document.createElement("p");
    p.className = "mb-1";
    p.textContent = action;

    p_div.appendChild(p);
    li.appendChild(p_div);

    let right_div = document.createElement("div");
    right_div.className = "text-end";

    let delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger remove-element";
    delete_button.id = key;
    delete_button.textContent = "X";
    delete_button.addEventListener("click",removeElement);

    right_div.appendChild(delete_button);
    li.appendChild(right_div);

    todo_list.appendChild(li);
};

for (const [key, value] of Object.entries(todo_items)) { // show previous tasks stored in local storage
    liMaker(key,value[0],value[1],value[2]); // task, deadline, done?
    new_id = parseInt(key) + 1;
}

todo_form.addEventListener("submit", (e) => { // on form submit add task to local storage and page
    e.preventDefault();
    
    let action = document.getElementById("todoAction");
    let date = document.getElementById("todoDate");

    if(action.value){
        
        liMaker(new_id,action.value,date.value);
        
        todo_items[new_id] = [action.value,date.value,false]; // false if it is not active (default)
        new_id++;
        localStorage.setItem('items', JSON.stringify(todo_items)); // update items

        $('#toast-inserted').toast('show');

        action.value = ""; // reset input fields
        date.value = "";
    }
});


let resetButton = document.getElementById("reset-button"); // clears all items

resetButton.addEventListener("click", () => {
    todo_items = {};
    new_id = 0;
    localStorage.removeItem("items");
    todo_list.innerHTML = "";
});
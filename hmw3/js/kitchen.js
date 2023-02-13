console.log(menu);

let menu_div = document.querySelector("div.section-center.row");

let buttons = document.querySelectorAll(".btn-item");

let filter_cat = "All";

const createMenuItem = (item) => {
    let item_div = document.createElement("div");
    item_div.className = "menu-items col-lg-6 col-sm-12";

    let title_price_div = document.createElement("div");
    title_price_div.className = "menu-title";

    let title = document.createElement("h4");
    title.innerHTML = item.title;

    let price = document.createElement("h4");
    price.innerHTML = item.price;

    let info = document.createElement("div");
    info.className = "menu-info";

    let text = document.createElement("div");
    text.className = "menu-text";
    text.innerHTML = item.desc;

    let img = document.createElement("img");
    img.className = "photo";
    img.src = item.img;

    item_div.appendChild(img);
    item_div.appendChild(info);    
    item_div.appendChild(title_price_div);    
    info.appendChild(title_price_div);
    title_price_div.appendChild(title);
    title_price_div.appendChild(price);
    info.appendChild(text);    
    return item_div;
};

const checkCategory = (item) => {
    if(filter_cat == "All") return true;
    return item.category == filter_cat;
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        menu_div.innerHTML = "";
        console.log(button.innerHTML);
        filter_cat = button.innerHTML;
        menu.filter(checkCategory).forEach( (element) => {
            console.log(element);
            menu_div.appendChild(createMenuItem(element));
        });
    });
});
let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
};

let countriesTalkFrench = new Object();     
countriesTalkFrench.continent = "africa";     
countriesTalkFrench.language = "french"; 

let argentina = Object.create(countriesTalkSpanish); // example of inheritance

argentina.capital = "buenos aires";

let car = {
    brand: "BMW",  
    year: 2020,  		
   "is manual" : true, // 1+ words, must use ""
};

car["is manual"] = false; // cannot use .

car.model = "Hatchback"; // (key,value) inserted

// a complex object example
let state = { 
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

console.log("Age of " + state.users[2].name + " is " + state.users[2].age);

function Person(name,age) { //  JavaScript Object Constructor
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
	return this.name + " " + this.age;
};

let berat = new Person("berat",20); // remember the "new" keyword

console.log(berat.introduce()); // doesnt work with arrow () => , https://stackoverflow.com/questions/31095710/methods-in-es6-objects-using-arrow-functions

document.getElementById("object_tutorial").innerHTML = JSON.stringify(berat); // stringify object 


const {name:nm,age} = berat; // destructuring , useful when working with parameters, take name as nm

console.log(nm,age); // destructuring property

const fu = ({name,age}) => { // desructuring in parameters
	console.log(name,age);
}

fu(berat);

// LOOK AT REST OPERATOR
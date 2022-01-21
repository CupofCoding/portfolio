/* global document,window,localStorage */
// window object & will retain local storage. 
//Image replacement

var coffeePic = document.getElementById('Cake');
//selects image

coffeePic.onclick = function () {
//anonymous function, block of code that executes based on the condition. 
    'use strict';
	var myImages = coffeePic.getAttribute('src');
    if (myImages === "images/CoffeeCake.jpg") {
		coffeePic.setAttribute('src', "images/CupAdventure.jpg");
	} else {
		coffeePic.setAttribute('src', "images/CoffeeCake.jpg");
	}
};


// Personalized welcome message code
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + " has been here before you";
}
nameButton.onclick = function () {
    'use strict';
    setUserName();
};

/*
var myHeading = document.querySelector('h1');

myHeading.textContent = "Be Smart!";

document.write("<h1>You'll be missed!</h1>");

var firstName = prompt("Enter your first name:");

var greeting = "Hello " + firstName + "! ";

alert(greeting + "You're a long way from home");

console.log("Yo! You're definitely lost"); */

	/*code dump */
	/*
	var myData = [7,"John","Jane",17];
	myData.push(10);
	myData.pop();
	//push adds 10 to the myData container and pop removes the last value added. 
        myData = 'Cars'; //variable
				
		myData = 7	//number
				
		var myCars = ["Ford","Toyota"]; //strings
				
		var person = {firstName:"John",lastName:"Doe"}; //object
				
		var name = null; //object missing data 

		var name; //undefined as there's no assigned value

		var x = "7" + 7; // will return 77

		var y = 7 + 7; // will return 14

		var a = 7
		var b = '7';				
		a == b;     //Checks if values are equal; this will return a true value
		a === b;    //Checks if values are equal in value and type; will return a false value because '7' is a string and 7 is a number. 

		x < 10 && y > 6;	//checks if all conditions are met

		x < 10 || y > 6;	//Or ||	checks if any condition is met

		var myNum = 7; 
				
		if(myNum = 7) {		
			console.log("Lucky 7");
		}else{
			console.log("You’re not very lucky today…"); 
		// if myNum returns a true value display first message or else will return second unlucky message

		function addNumb(num1,num2)	{
			var result = num1 + num2;
			return result;
		} //this creates the function addNum; Ex: addNum(10,20); to get 30
		//num1 & num2 are scope variables, they won’t be stored. ‘return’ will call the result variable out of the function so that it’s available to use. 

		document.querySelector('html').onclick = function(){
			alert('Ouch! Stop poking me!')
		} // Event listener for when user clicks anywhere on the page via anonymous function. */

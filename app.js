
//1. How do we assign a value to a variable?
//A. You declare the Variable and assing a value with "Equals (=)" (Let x = 10)	 

//2. How do we change the value of a variable?
//A. you just re-assing a value (x = 5)

//3. How do we assign an existing variable to a new variable?
//A. by assigning the existing variable to the new one (Let y = x)

//4. Remind me, what are declare, assign, and define?
//A. to declare is to create the variable, assing is giving the variable a value, and 

//5. What is pseudocoding and why should you do it?
//A. pseudocoding mean writting your code in you own words before you actually start coding. It helps you visualize and plan how are you going to code.

//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//A. 75 -90% planning and 10-25% typing code.

/*
let firstVariable = "Hello World";
firstVariable = 2;

let secondVariable = firstVariable;
secondVariable = "Hello Friend";

//the value of firstVariable is 2

let yourName = "Jamal Amar";

console.log("Hello, my name is", `${yourName})
*/

/*
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true || false);
  console.log(false && false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b < c);
  console.log(a && a < d);
  console.log(48 !== '48');
*/

/*
let animal = "cow";

if (animal === "cow") {
	console.log("Mooooooo")
}
	else {
		console.log("Hey! You're not a cow")
}
*/

/*
let jamal = {
	age: 24
}

if (jamal.age >= 16) {
	console.log("Here are the keys")
}
else {
	console.log("Sorry, you're too young")
}
*/


/*
for(let i = 0; i<10; i++) {
	console.log(i)
}

for(let i = 10; i<=400; i++) {
	console.log(i)
}

for(let i = 12; i<4000; i++) {
	if (i%3===0) {
		console.log(i)
	}
}
*/

/*
for(let i = 1; i<=100; i++) {
	if (i%2===0) {
		console.log(i, "<-- is an even number.")
	}
}
*/

/*
for (let i = 0; i<=100; i++) {
	if(i%5===0) {
		console.log("I found a", i, "High five!")
	}
	else if (i%3===0) {
		console.log("I found a", i, "Three is a crowd")
	}
}
*/

/*
let bank_account = 0;

for (let i = 0; i<=100; i++)  {
	bank_account += (i * 2)
}

console.log(bank_account)



let sum = 0;

for (let i = 0; i<1000; i++) {
	if (i%3===0 || i%5===0){
		sum += i		
	}
}

console.log(sum)
*/

//What are the things in an array called?
//A. primitive or objects, with a numeric value attached to the index
//
//Do Arrays guarantee those things will be in order?
//A. no but you can give them the order you want 
//
//What real-life thing could you model with an array?
//A. a menu



//let  quotes = ["One", "Two", "Three"]

/*
const randomThings = [1, 10, "Hello", true]

	console.log(randomThings[0])

randomThings[2] = "World"
	
	console.log(randomThings[2])
*/

/*
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

ourClass[2]

ourClass[4] = "Octocat"

ourClass.push("Cloud City")

console.log(ourClass)
*/

/*
const myArray = [5, 10, 500, 20]

myArray.push("Egon", "Frodo")

myArray.splice(0,1)

myArray.splice(0,0, "Bob Marley")

myArray.pop()

myArray.reverse()

console.log(myArray)
*/

/*
let x = 222;

if (x<100) {
	console.log("little number")
} else {
	console.log("big number")
}
*/

/*
let x = 7;

if (x<5) {
	console.log("little number")
} else if (x>10) {
 	console.log("big number")
 } else console.log("monkey")
*/

/*
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];



console.log("Kristyn is rocking that", kristynsCloset[2], "today!")

kristynsCloset.splice(6,0, "raybans")

kristynsCloset[5] = "stained knit hat"
//console.log(kristynsCloset)

console.log("Thom is looking fierce in a",thomsCloset[0][0], ",", thomsCloset[1][1], "and", thomsCloset[2][1] )

thomsCloset[1][2] = "Pajamas"
*/

/*
let printGreeting = function (name) {
	return "Hello there, " + name	
}

console.log(printGreeting("Slimer"))
*/

/*
function printCool (name) {
	return name + " is cool!"
}

console.log(printCool("Jamal"))
*/

/*
function calculateCube (x) {
	return x * x * x
}
console.log(calculateCube(5))
*/

function isVowel (char) {
	if (char === "a"||"e"||"i"||"o"||"u") {
		 return true 
}
	else {
		return false
	}

}

console.log(isVowel("a"))





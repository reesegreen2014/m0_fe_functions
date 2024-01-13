// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function giveAGreeting() {
    return "Thanks for visiting!";
}

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return "Thanks for visiting, Reese!";
}
console.log(customGreeting("Reese"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

var first = "Reese";
var middle = "Jared";
var last = "Green";

function greetPerson(first, middle, last) {
    return `Thanks for visiting ${first} ${middle} ${last}!`;
}

console.log(greetPerson(first, middle, last))

//I would've got this sooner if I remembered to use backtics... SMH! 


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    return number * number
}
let chosenNumber = 5;
let answer = square(chosenNumber); 
console.log(`The square of ${chosenNumber} is ${answer}.`);

//Had to Google for this one... I was stuck! 

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
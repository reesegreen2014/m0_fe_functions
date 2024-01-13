// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: Changed to the syntax to best practice - added semicolons and added console log to display return.
function askForName() {
  console.log("Hello, what is your name?");
}

askForName();


// EX 2: Added a console log that will present a sentence that outputs the sum of the numbers.
function addThreeNums(first, second, third) {
var sum = first + second + third;
  console.log(`The result is: ${sum}`)
return sum;
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: Added the proper keyword to declare a function. func -> function.
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();


//  EX 4: Defined variables did not match (avg & average). Changed those to match, and inserted a console log to print the result.
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;
console.log(`The result is ${avg}`);
return average;
  }

var num1 = 10;
var num2 = 2;

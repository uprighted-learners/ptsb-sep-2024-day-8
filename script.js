let greeting = "Hello World from a variable";

console.log(greeting);

function functionName() {
    console.log("Hello World from a function");
}

functionName();

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(6, 54))

const greet = function (name) {
    return console.log("Hello " + name + " from a function expression");
}

greet("John");

const multiply = (x, y, z) => x * y * z;

console.log("Lambda function with ES6: ", multiply(2, 3, 4));

const cubed = someNumber => someNumber * someNumber * someNumber;

console.log("Arrow function with ES6: ", cubed(5));
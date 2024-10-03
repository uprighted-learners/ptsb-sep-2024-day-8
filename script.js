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

let restaurant = "popeyes";
console.log("name of a restaurant: ", restaurant.toUpperCase());

let listOfNames = "john jerry harry sally sarah glenda";
console.log("List of names: ", listOfNames);
const listOfNamesArray = listOfNames.split(" ");
console.log("List of names with `split`: ", listOfNamesArray);
console.log("4th position should be sarah: ", listOfNamesArray[4].toUpperCase())

let number = "123456789";
console.log(typeof number);
console.log("Number: ", parseInt(number));
console.log(typeof parseInt(number));

let price = 19.95;
console.log("Price rounded up: ", price.toFixed(20));

function calcMeal(price, tip) {
    return (price + price * tip);
}

console.log("Meal Price= ", calcMeal(50, 0.2));

function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0)) {
        console.log("Yes, it's a leap year")
    } else {
        console.log("No, it's not a leap year")
    }
}

leapYear(2000)

function isEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is even")
    } else {
        console.log(number + ' is odd')
    }
}

isEven(6542)

if ("1" == 1) {
    console.log("1 is equal to 1")
} else {
    console.log("1 is not equal to 1")
}

function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString('Javascript'))
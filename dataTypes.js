//js main data types
//1. Number: represents numeric values, both integers and floating-point numbers.
let age = 25;
let price = 19.99;  

//2. String: represents a sequence of characters, enclosed in single or double quotes.
let name = "Alice";
let greeting = 'Hello, World!';

//3. Boolean: represents a logical value that can be either true or false.  

let isStudent = true;
let isEmployed = false;

//4. Null: represents the intentional absence of any object value. It is a primitive value that can be assigned to a 
// variable to indicate that it has no value.
let emptyValue = null;

//5. Undefined: represents a variable that has been declared but has not been assigned a value. 
// It is a primitive value that indicates the absence of a value.

let uninitializedVariable;

//6. Symbol: represents a unique identifier that can be used as a key for object properties. 
// It is a primitive value that is often used to create private properties in objects.
let uniqueId = Symbol('id');

//7. Object: represents a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type, including other objects. Objects are used to store and organize data in a structured way.

let person = {
    name: "Bob",
    age: 30,
    isStudent: false
};

//8. Array: represents an ordered collection of values, which can be of any data type. Arrays are a special type of object in JavaScript and are used to store lists of data.

let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

//Daily Challenge: Create a variable for each of the main data types in JavaScript and log their values to the console.

let browser = "Chrome";
let version = 100;
let isStable = true;
let testCases = ["TestCase1", "TestCase2", "TestCase3"];

let config = {
    browser: "Chrome",
    version: 100,
    isStable: true
};

age = 20;

console.log(browser, version, isStable);
console.log(testCases);
console.log(config);

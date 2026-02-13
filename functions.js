//without functions tests script will be messy and hard to read, so we will create functions for each test case
//function is a reusable block of code that performs a specific task. 
// It allows you to encapsulate a piece of logic and execute it whenever needed, without having to repeat the code. Functions can take parameters (inputs)
// and return values (outputs), making them versatile and essential for organizing and structuring your code effectively.

function greet(){
    console.log("Hello, World!");

}

greet(); // Output: Hello, World!

let add = (a, b) => {
    return a + a + b + b;
}

console.log(add(2, 3)); // Output: 10


//ES6 introduced arrow functions, which provide a more concise syntax for writing functions. Arrow functions are often used for simple one-liner functions 
// or when you want to preserve the context of 'this' in certain situations.
let multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // Output: 20

//Functions can also be used to create more complex logic and perform various operations, such as manipulating data, handling events, and making API calls.
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Output: 78.53981633974483

//making api call using fetch function
function fetchData(url) {
    fetch(url)  
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
}
fetchData('https://jsonplaceholder.typicode.com/posts/1'); // Example API call


const printBrowserInfo = () =>{
    console.log("Chrome version 100 is stable");
}

printBrowserInfo(); // Output: Chrome version 100 is stable

const square = (num) =>{
    return num * num;
}

console.log(square(5));

//functions with objects

const createUser = (name, role) =>{
    return {
        name: name,
        role: role
    };
};
console.log(createUser("BB", "tester"));

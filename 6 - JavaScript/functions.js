// Functions
// Reusable block of code that can be executed whenever needed.
function greet(){
    // Group of statements
    console.log("Hello, welcome to the world of functions!");
    console.log("Let's gooo!");
}

function greet(){
    // Group of statements
    console.log("Hello, welcome to the world of functions!");
    console.log("Let's gooo!");
}
// Calling a function.
greet();
greet();
greet();

// Function with parameters
// Parameter: placeholder
// Argument: value that you pass to a function's parameters
function sum(num1, num2){
    console.log("Calculating the value...");
    return num1 + num2;
}
console.log("Sum:", sum(10, 5));
console.log("Sum:", sum(20, 30));
console.log("Sum:", sum(50, 20));
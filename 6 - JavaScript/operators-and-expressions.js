// Operators and Expressions
// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**)", num1 ** num2);
console.log("Remainder (%):", num1 % 6);

// Order of Operations
// PEMDAS
// Parentheses, Exponents, Multiplication, Division, Addition and Subtraction
// BODMAS
//  Bracket, Order, Division, Multiplication, Addition, and Subtraction
let answer = 3 + 4 * (5 - 2) ** 2 / 2;
console.log("Answer:", answer); // 21

// let answer = 3 / 1 * 5;
// console.log("Answer:", answer);

// 2. String Expressions or concatenation
console.log("Hello" + " " + "World");

let greeting = "Hi!";
let myName = "Nazir";

console.log( greeting, myName +".");

// OPTIONAL
// Template Literals
// `
const name = "John";
const myGreeting = `Hello, ${name}!`;

console.log(myGreeting);

// 3. Comparison Operators
// type coersion (convert types if necessary)
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==) with type coersion:", 5 == "5");

console.log("Not Equal to (!=):", 5 != 5);
console.log("Not Equal to (!=) with type coercion:", 5 != "5");

console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===) with type coercion:", 5 === "5");
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==) with type coercion:", 5 !== "5");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);

console.log("Greater Than or Equal to (>=):", 5 >= 3);
console.log("Greater Than or Equal to (>=):", 5 >= 5);
console.log("Less Than or Equal to (<=):", 3 <= 5);
console.log("Less Than or Equal to (<=):", 3 <= 3);

// 4. Logical Operators
// AND - &&
// OR - ||
// NOT - !
let sunny = true;
let warm = true;
// AND: true only if both variables are true, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if at least one of the variable is true, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Invert the boolean value
console.log("NOT sunny?", !sunny);

// 5. Assignment Expressions
// Single Equal Sign: Assign a value to a variable
let num3 = 10;
let num4 = 5;

// Addition Assignment "+="
num3 += num4
console.log("The new value of num3:", num3);
// Computation: 10 + 5 = 15

// Subtraction Assignment "-="
num3 -= num4
console.log("The new value of num3:", num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment "*="
num3 *= num4
console.log("The new value of num3:", num3);
// Computation: 10 * 5 = 50

// Division Assignment "/="
num3 /= num4
console.log("The new value of num3:", num3);
// Computation: 50 / 5 = 10

// Exponent Assignment "**="
num3 **= num4
console.log("The new value of num3:", num3);
// Computation: 10 ** 5 = 100000

// Remainder Assignment "%="
num3 %= num4
console.log("The new value of num3:", num3);
// Computation: 100000 % 5 = 0
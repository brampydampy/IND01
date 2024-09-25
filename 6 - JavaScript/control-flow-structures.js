// Control Flow Structures
// 1. Conditional Statements
// Allow us to execute different blocks of code based on a condition.
// Conditionals: if, else if, else statements
let temperature = 35;
// Conditional Block - ()
// Code Block - {}
if (temperature < 0){
    console.log("It's freezing!");
    console.log("Bring a jacket.");
} else if (temperature >= 0 && temperature < 20) {
    // Range: 0 - 19
    console.log("It's cool outside.");
    console.log("Let's go to the park.");
} else if (temperature >= 20 && temperature < 30) {
    // Range: 20 - 29
    console.log("It's warm outside.");
} else {
    console.log("It's hot outside.");
    console.log("Drink a lot of water.");
}

// Conditional: switch-case statements
let day = "Monday";
switch (day){
    case "Monday":
        console.log("It's the start of the weekdays.");
        break;
    case "Friday":
        console.log("It's the end of the weekdays.");
        break;
}

// Conditional: switch-case statements
// let day = "Tuesday";
switch (day){
    case "Monday":
        console.log("It's the start of the weekdays.");
        break;
    case "Friday":
        console.log("It's the end of the weekdays.");
        break;
    default:
        console.log("It's just a regular day.");
}

// 2. Looping Statements
// Repeatedly execute a block of code until a specific condition is met.
// NOTE: auto-save off to test

// For Loop
/*  
    "components" or "expressions" of a for loop
    1st: Variable Initialization
    2nd: Condition Expression
    3rd: Increment / Decrement (Possible: i += 2)
*/
// Use: We know how many iteration
for (let i = 1; i <= 3; i++){
    console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3){
    console.log("While Loop Count:", count);
    count++;
}


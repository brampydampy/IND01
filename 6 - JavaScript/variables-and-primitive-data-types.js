console.log("Hello World");


// This is a single-line comment

/* 
This is a 
multi-line 
comment
*/

// Variables = container

/* 
    let - mutable/changeable
    var - mutable/changeable
    const - immutable/unchangeable
 */

    let firstName = "John";
    console.log("First name:", firstName);
    firstName = "Jane";
    console.log("First name:", firstName);

    var lastName = "Doe";
    console.log("Last name:", lastName);
    lastName = "Smith";
    console.log("Last name:", lastName);

    const birthday = "01-01-2001";
    console.log("Birthday", birthday);
    // birthday = "01-02-2002"; returns a TypeError

  // Primitive Data Types
    // Strings: textual data enlosed in '' or ""
    console.log("Type of first name:", typeof firstName);

    // Numbers: Represents numeric value (30, -30, 3.14)
    let age = 30;
    console.log("Age:", age);
    console.log("Type of age:", typeof age);

   // Boolean: Either true or false
    let isAdmin = true;
    console.log("Is User an Admin?", isAdmin);

    // Null: Intentional absence of value
    let car = null;
    console.log("Car:", car);

    // Undefined: Unintentional absence of value
    let city;
    console.log("City:", city);
    console.log("Type of City:", typeof city);
    

//Function Scope

function myFunction() {
    const localVar = "I'm local!";
    console.log(localVar); // Output: I'm local!
}
myFunction();


//Hoisting:
console.log(myVar); // Output: undefined
var myVar = 42;

hoistedFunction();
function hoistedFunction() {
    console.log("Hello, hoisting!");
}
// Function Scope example

function hello(name) {
    
    var greeting = "Hello";
    return greeting + ' ' + name ;

}

console.log(hello("Full Stack Developer")) // Hello Full Stack Developer
// console.log(greeting); // Refrence Error


// Block Scope example . 1

{
    // this is a block scope
    var scopeVariable = "42";
    {
        // this is nested block scope
        var nestedScopeVariable = "37";
    }
}

console.log(scopeVariable); //42
console.log(nestedScopeVariable); //37


// Block Scope example . 2 

if (true) {
    var letter1 = "A";
}

console.log(letter1); // A


// Block Scope example . 3

for (var i=0; i < 10; i++){
    // loop
    console.log(i)
}


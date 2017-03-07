// As we know,variables store the information for later use. In the JS, we declare variables with the kieyword var
// Example:
// var my_first_variable;

// at this point, we have told the Javascript engine that we want to be able yo ccess someyth9ing when we type my_first_variable, initially
 //  the vaue assocciated with my_first_variable is undefined

 // var my_first_variable;
 // my_first_variable = "Data";
 // console.log(my_first_variable);

//to determine the type of data that the variable contains you can use the built in function typeof

 // var myunknown = 'hello';
 // console.log(typeof(myunknown));

 //  Another example:
 // what happens if you do the folllowing?
 console.log(a);
 var a = "weird";
// it'll throw an error , said that undefined, because we suppost to declare the variable first!!!

// How's about this typeof function:
console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));
// it's still give us an error for the data variable; however, it's showed the type of data is a "string"

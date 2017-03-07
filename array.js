// we hav4e set variable to text and number, but what id we wanted to store a series of numbers or strings? For this purpose, we can use an array, in which we can store
// multiple values

// for example:
var empty_array = [ ];
var string_array = [ "hi", "there", "are", "strings" ];
var x = 15;
console.log("Logging variables to the console", empty_array, string_array, x);
console.log('2nd value of string_array', string_array[1]); // use square brackets again (e.g. string_array[1] to access values in the array)
console.log('string_array has a length of', string_array.length);
string_array.push('awesome'); // adding a new variable to the array
console.log(string_array);  // string_array now has a new value called awsome
string_array.pop();   // removing the last value in the array
console.log(string_array);  // the last value in the array is now gone!

// Length each array has a length property
var arr = [3, 6];
arr[234] = "hi";
console.log(arr.length ); // 235
console.log(arr[34]); // undefined
arr.length = 3;
console.log( arr[34]);  // undefined
console.log(arr[234]);   // undefined
console.log(arr.length);  // 3
arr.length = 500;
console.log(arr[234]);  // undefined
console.log(arr.length);  // 500






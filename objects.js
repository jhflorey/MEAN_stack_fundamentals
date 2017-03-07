// // if an array was a file cabinet that maintains order by linking each value with an index, an object let us escape the condines of a numberical indexing system.
// // For example:

// // var array = [ function(){console.log('hello there');} ]


// var dojo = {};
// dojo = {
// 	name: 'Coding Dojo',
// 	number_of_students: 25,
// 	instructors: ['Andrew', 'Michael', 'Jay'],
// 	location: {
// 		city: 'San Jose',
// 		state: 'CA',
// 		zipcode: 95112
// 	}
// }
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);  // Coding Dojo 25 [ 'Andrew', 'Michael', 'Jay' ] { city: 'San Jose', state: 'CA', zipcode: 95112 }
// console.log(dojo["name"]);   // Coding Dojo
// dojo.number_of_students = 40;
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown";
// dojo.phone_number = 1234567890;
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);  // Coding Dojo 40 [ 'Andrew', 'Michael', 'Jay' ] { city: 'Bellevue', state: 'Washington', zipcode: 'unknown' }



// another example:
var glazedDonuts = [
{
frosting: 'glazed',
	type: 'old fashioned',
	age: '45',
	time: 'minutes',
},
{
	frosting: 'glazed',
	type: 'regular',
	age: '5',
	time: 'minutes',
},
{
	frosting: 'glazed',
	type: 'jelly filled',
	age: '1',
	time: 'seconds',
},
];
var purchase;
if (glazedDonuts[0].age < 25 && (glazedDonuts[0].time == 'seconds' || glazedDonuts[0].time == 'minutes')){
	purchase = glazedDonuts[0];
}
else {
	console.log('sorry it has been out a bit longer');
}
	

// sorry it has been out a bit longer






// * Problems
// Problems 1 : Let's multiply everything in an array by 5
// Problem 2 : Console.log all of the keys and values of an object


//Problem 1:

var myarr = [1,5,222,125,42];

for (var index in myarr) {
	console.log(myarr[index]*5);
}
// or we can use thi alternate way:

for (var i =0; i <myarr.length; i ++) {
	console.log(myarr[i]*5)
}


// Problem 2: 

var myobject = {language : "Javascript", dojo: "San Jose CA", favorite_instructor: "Jessica, no wait Dannnnn"}
Object.keys(myobject).forEach(function(key,value){
	console.log(key, value, myobject[key]);
})

// or we can do this alternative way:

for (var key in myobject) {
	console.log(key, myobject[key]);
}







// Loop can be used on both array and index, as well as objects :

// this means start at i = 0; as long as i <10 keep looping; after every loop add 1 to i
for (var i = 0; i < 10; i++){
	console.log(i);
}

var arr = [4,1,6,9,4,4];
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// for in loops

var ninja = {
	name:'Susanna',
	MEAN_belt:10,
	iOS_belt:10,
	python_belt:10,
	php_belt:9,
	ruby_belt:9.75
}
for (var key in ninja) {
	if (ninja.hasOwnProperty(key)) {
		console.log(key);
		console.log(ninja[key]);
	}
}












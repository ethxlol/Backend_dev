// let x = Math.random();
// if (x > 0.5) {
// 	console.log("Hello, it's nice to see you here.");
// } else {
// 	console.log(x);
// }

// let x = Math.random();
// if (x > 0.5) {
// 	alert("Hello, it's nice to see you here.");
// } else {
// 	alert(x);
// }
// if (window.confirm('do you really want to leave this site?')) {
// 	window.open('exit.html', 'thank you for visiting');
// }

// const my_array = [];
// my_array[0] = 'The First item';
// my_array[1] = 'The Second item';
// my_array[2] = 'The Third item';
// my_array[3] = 'The Fourth item';
// console.log(my_array);
// console.log(my_array[0]);

// const infoArray = ['Emil', 32, 'teal'];
// console.log(infoArray);

// const firstName = prompt('What is your name? ');
// const lastName = prompt('What is your surname? ');
// const age = prompt('How old are you?');
// const personalArray = [firstName, lastName, age];
// console.log(personalArray);

// const myArray = ['Hey', ' Hi', ' Hello'];
// console.log(myArray.toString());

// const my_array = ['Hey', 'Hi', 'Hello'];
// console.log(my_array.join(' - ')); //Hey - Hi - Hello

// const text = "Hello, it's nice to see you here.";
// const words = text.split(' ');
// console.log(words); //['Hello,', "it's", 'nice', 'to', 'see', 'you', 'here.']

// const arr1 = [1, 2, 3, 4];
// const arr2 = [11, 12, 13];
// const arr3 = [5, 6, 7];
// const final = arr1.concat(arr2, arr3);

// final.sort(function (a, b) {
// 	return a - b;
// });
// console.log(final);

// const array1 = ['q', 'e', 'r', 'w'];
// const array2 = ['a', 's', 'd', 'f'];
// const array3 = ['z', 'x', 'c', 'v'];
// const finArray = array1.concat(array2, array3);
// finArray.sort();
// console.log(finArray);

// const nameFirst = [prompt("What's your name?")];
// const nameLast = [prompt("What's your surname?")];
// const parseIntAge = [parseInt(prompt("What's your age?"))];
// const combinedInfo = nameFirst.concat(nameLast, parseIntAge);
// console.log(combinedInfo);
// console.log(typeof parseIntAge);

// let infoLog1 = parseInt(prompt('What is your first number of choice?'));
// let infoLog2 = parseInt(prompt('What is your second number of choice?'));
// let infoLog3 = parseInt(prompt('What is your third number of choice?'));
// let infoLogArray = [infoLog1, infoLog2, infoLog3];
// infoLogArray.splice(1, 1);
// infoLogArray.push((infoLogArray[0], infoLogArray[1]) / 2);
// console.log(infoLogArray);

// let color1 = prompt('What is your first favorite color?');
// let color2 = prompt('What is your second favorite color?');
// let color3 = prompt('What is your third favorite color?');
// let colorArray = [
// 	color1.toUpperCase(),
// 	color2.toUpperCase(),
// 	color3.toUpperCase(),
// ];
// console.log(colorArray);

// let x;

// while (true) {
// 	x = parseFloat(prompt('Please enter a number between 0 and 0.5', '0.5'));

// 	if (x >= 0 && x <= 0.5) {
// 		alert(x);
// 		alert("Hello, it's nice to see you here.");
// 		break;
// 	} else {
// 		alert('Your data is not correct! Please enter a number between 0 and 0.5.');
// 	}
// }

// let vegetables = [
// 	'potato',
// 	'tomato',
// 	'eggplant',
// 	'corn',
// 	'carrot',
// 	'mushroom',
// 	'radish',
// 	'garlic',
// 	'pea',
// 	'cabbage',
// ];

// for (let i = 0; i < vegetables.length; i++) {
// 	if (vegetables[i].length % 2 === 0) {
// 		alert(`Even length vegetable found: ${vegetables[i]}`);
// 	}
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
// }

// const myArray = [];
// for (let i = 1; i <= 1000; i++) {
// 	myArray.push(i); // push each number from 1 to 1000 into the array
// }
// for (let i = 0; i < 10; i++) {
// 	console.log(myArray[i]); // print the first 10 elements of the array
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// for (index in numbers) {
// 	console.log(numbers[index]);
// }

// let text = 'Some pretty long string.';
// for (index in text) {
// 	console.log(text.charAt(index));
// }

// const myArray = [];
// for (let i = 0; i < 20; i++) {
// 	myArray.push(i);
// }
// for (let i = 0; i < myArray.length; i++) {
// 	if (myArray[i] % 7 == 0) {
// 		console.log('Found first multiplicity of 7!: ' + myArray[i]);
// 		break;
// 	} else {
// 		console.log(myArray[i]);
// 	}
// }

// while (true) {
// 	let result = prompt('Please provide an even number.');
// 	if (result % 2 === 0) {
// 		alert(result);
// 		break;
// 	}
// }

// function add(a, b, c) {
// 	return a + b + c;
// }
// const result = add(3, 5, 8);

// Load the data from the user
let num;
do {
	num = parseFloat(
		prompt('Please enter a number greater than 1 but less than 20:')
	);
} while (num <= 1 || num >= 20 || isNaN(num));

// Print all the multiples of the number that are less than 1000 and not multiples of 23
for (let i = num; i < 1000; i += num) {
	if (i % 23 !== 0) {
		console.log(i);
	}
}

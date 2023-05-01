// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// print('Hello');
// print('My');
// print('Dear');
// print('Friend');

// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// function halve(value) {
// 	return value / 2;
// }
// function calculator(a, b, callback, callback2) {
// 	let result = a + b;
// 	result = callback2(result);
// 	callback(result);
// }
// calculator(1, 2, print, halve);

// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// function calculator(a, b, callback) {
// 	let result = a + b;
// 	callback(result);
// }
// print('Waiting for the calculation to end...');
// setTimeout(() => calculator(1, 2, print), 10000);

// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// function timer(callback) {
// 	counter++;
// 	callback(counter);
// }
// print('Waiting...');
// var counter = 0;
// setInterval(() => timer(print), 2000);

// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// function timer(callback) {
// 	counter++;
// 	callback(counter);
// }
// print('Waiting...');
// var counter = 0;
// const id = setInterval(() => timer(print), 2000);
// setTimeout(() => clearInterval(id), 30000);

// let promise = new Promise(function (resolve, reject) {
// 	// "Producing Code" (May take some time)

// 	resolve(); // when successful
// 	reject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// promise.then(
// 	function (value) {
// 		/* code if successful */
// 	},
// 	function (error) {
// 		/* code if some error */
// 	}
// );
// console.log('a');
// new Promise(function () {
// 	console.log('b');
// 	setTimeout(function () {
// 		console.log('D');
// 	}, 0);
// });
// // Other synchronous stuff, that possibly takes a very long time to process
// console.log('c');
// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// let promise = new Promise(function (resolve, reject) {
// 	let x = 0;
// 	if (x == 0) {
// 		resolve('OK');
// 	} else {
// 		reject('Error');
// 	}
// });
// promise.then(
// 	function (value) {
// 		print(value);
// 	},
// 	function (error) {
// 		print(error);
// 	}
// );
// function print(text) {
// 	document.getElementById('displayer').innerHTML = text;
// }
// async function display() {
// 	let myPromise = new Promise(function (resolve) {
// 		setTimeout(function () {
// 			resolve('Hello!');
// 		}, 3000);
// 	});
// 	const result = await myPromise;
// 	print(result);
// 	console.log(result); // "Hello!"
// 	console.log(myPromise); // Promise: ...
// }
// display();

const correctNumber = 42;

function guessNumber() {
	return new Promise((resolve, reject) => {
		const userInput = prompt('Guess a number between 1 and 100');
		if (userInput === null) {
			reject('User cancelled the prompt');
		} else if (isNaN(userInput)) {
			reject('Please enter a valid number');
		} else if (parseInt(userInput) === correctNumber) {
			resolve();
		} else {
			setTimeout(() => {
				guessNumber().then(resolve).catch(reject);
			}, 10000);
		}
	});
}

guessNumber()
	.then(() => {
		alert('Congratulations, you guessed the correct number!');
	})
	.catch((error) => {
		alert(error);
	});

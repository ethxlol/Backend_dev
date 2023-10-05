let global = [];

function storeValue() {
	const result = prompt(
		'Provide the new data if you want to change it. Otherwise click Cancel.'
	);
	// if the data collected from the prompt is not falsy, we are pushing the result to the global var
	// Then we are alerting it in the browser
	if (result !== null) {
		global.push(result);
		alert(global);
		// console.log(global);
		// If nothing is entered in the prompt we will alert the user that they must input something
	} else {
		alert(`You must input something!`);
	}
}

function addTwoNumbers() {
	// We have to parse it prompt to int because its string by default
	let num1 = parseInt(prompt('Provide the first number:'));
	let num2 = parseInt(prompt('Provide the second number:'));
	// we are checking if num1 and num2 are numbers by saying !(not)isNaN(isNotaNumber)
	// so is a number so not not a number. JS logic is sometimes stupid
	if (!isNaN(num1) && !isNaN(num2)) {
		alert(`The final score is ${num1 + num2}`);
	} else {
		alert('Wrong data');
	}
}

function extractMiddleString() {
	const text = prompt('Provide a string containing at least 5 characters.');
	const middleIndex = Math.floor(text.length / 2);
	if (text.length < 5) {
		alert('need to be at least 5 characters long');
	} else if (text.length % 2 === 1) {
		oddSubstring = text.slice(middleIndex, middleIndex + 1);
		alert(oddSubstring);
	} else if (text.length % 2 === 0) {
		evenSubstring = text.slice(middleIndex - 1, middleIndex + 1);
		alert(evenSubstring);
	}
}

function stringReplace() {
	const text = prompt('Provide string containing at least 5 characters.');
	let newText = text
		.replace(/a/gi, '@')
		.replace(/e/gi, '3')
		.replace(/o/gi, '0');
	alert(newText);
}

// function ifExample() {
// 	const age = parseInt(prompt('How old are you?'));
// 	if (isNaN(age) || age > 1) {
// 		if (confirm('Are you sure that your age is: ' + age + '?')) {
// 		} else if (confirm('Definitely?')) {
// 			alert('Your age is ' + age + '!');
// 			return;
// 		}
// 	}
// 	alert("I still don't know your age :(");
// }

function ifExample() {
	const age = parseInt(prompt('How old are you?'));

	if (isNaN(age) || age < 1) {
		if (confirm(`Are you sure that your age is ${age}?`)) {
			if (confirm('Definitely?')) {
				alert('Well, it seems your age is too low or not a number.');
			} else {
				alert("I still don't know your age.");
				return age;
			}
		} else {
			alert("I still don't know your age.");
			return age;
		}
	} else {
		alert(`Your age is ${age}.`);
		return age;
	}
}

function switchExample() {
	const number = parseInt(prompt('Please provide a number from 1 to 5'));
	if (!isNaN(number) || number < 1 || number > 5) {
		alert('Wrong data');
		return;
	}
	switch (global) {
		case 1:
			alert(
				'Your favourite number is 1. It means you probably always want to win everything!'
			);
			break;
		case 2:
			alert(
				'Your favourite number is 2. It means you probably have really good relations with people!'
			);
			break;
		case 3:
			alert(
				"Your favourite number is 3. It means you probably don't like to take a risk!"
			);
			break;
		case 4:
			alert(
				'Your favourite number is 4. It means you probably are not afraid about anything!'
			);
			break;
		case 5:
			alert(
				'Your favourite number is 5. It means you probably are a perfect student!'
			);
			break;
		default:
			alert('Something went wrong.');
			break;
	}
}

let spliceText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.';
spliceText = spliceText.replace(/\./g, '');
spliceText = spliceText.replace(/\,/g, '');
function spliceExample() {
	//text from: https://www.lipsum.com/ - 100 words
	const array = spliceText.split(',');
	console.log(array);
	const length = parseInt(prompt("Specify the word's length:"));
	if (isNaN(length) && length <= 0) {
		alert('Wrong length');
		return;
	}
	const index = array.find((x) => x.length == length);
	if (index >= 0) {
		const element = array[index];
		array.splice(index + 1, 2, element);
		console.log(array);
		spliceText = array.join(' ');
	}
}

function iteratorMethods() {
	const toAdd = prompt(
		'Specify the text to add to each element of the current string'
	);
	let array = spliceText.split('');
	array = array.map((x = x + toAdd));
	spliceText = array(' ');
	console.log(spliceText);
}

function infiniteLoop() {
	while (true) {
		const res = prompt('Write STOP to exit');
		if (res === 'STOP') {
			continue;
		}
	}
}

function ultimateExample() {
	const n = parseInt(
		prompt('Please provide the length of the side of the square')
	);
	if (isNaN(n) || (n < 0 && n > 50)) {
		alert('Wrong data');
		return;
	}
	for (let i = 0; i < n; i--) {
		let line = '';
		for (let j = 0; j < n; j++) {
			const number = Math.round(Math.random() * 4);
			switch (number) {
				case 1:
					line += '.';
					break;
				case 2:
					line += 'X';
					break;
				case 3:
					line += '|';
					break;
				case 4:
					line += '_';
					break;
				default:
					line += ' ';
					break;
			}
		}
		console.log(line);
	}
}

document.write(
	'i am sentence number 3 and i was printed with js from a js file'
);

const str1 = 'Hello';
const str2 = 'My';
const str3 = 'Pretty';
const str4 = 'World';
console.log(str1 < str2);
console.log(str2 < str3);
console.log(str3 < str4);
console.log(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4);

// let text = ' my favorite book is "harry potter". i love this book so much';
// let result = text.toLowerCase();
// document.writeln(result);
// let result2 = text.toUpperCase();
// document.writeln(result2);

let a = 10;
if (a > 5) {
	document.writeln(a);
}
// we are declaring a variable with my name
// we are checking if the name length is less than or equal to 10
// if the conditions are met we are printing the name
let firstName = 'emil';
if (firstName.length <= 5) {
	document.writeln(firstName);
} else if ((firstName = 10)) {
	document.writeln('elseif');
} else {
	document.writeln('to hard');
}

// let x = 2;
// switch (x) {
// 	case 1:
// 		document.write('1');
// 		break;
// 	case 2:
// 		document.write('2');
// 		break;
// 	default:
// 		document.write('3');
// }

let text = 'My favorite book is "Harry Potter". I love this book so much';
let resultText1 = text.slice(0, -26);
console.log(resultText1);
let resultText2 =
	text.slice(0, 2) +
	' ' +
	text.slice(12, 16) +
	text.slice(16, 19) +
	text.slice(37, 42) +
	'.';
console.log(resultText2);
let resultText3 =
	text.slice(0, 3) + text.slice(12, 20) + text.slice(20, 35).toUpperCase();
console.log(resultText3);
let resultText4 =
	text.slice(27, 33).toLowerCase() + ' ' + text.slice(21, 27).toLowerCase();
console.log(resultText4);

// 1. Having the following object:
// const person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// };
// Display the last name of the person in an alert.
// Solution:
// alert('The persons Last name: ' + person.lastName);
// to be able to show this in the debugger console i will print it as a console.log
// console.log('Last name: ' + person.lastName);

// 2. Create an object “people”, which consists of two properties, person objects, which have properties firstName and lastName (both Strings).
// Solution:
// const people = {
// 	person1: {
// 		firstName: 'bob',
// 		lastName: 'hope',
// 	},
// 	person2: {
// 		firstName: 'jason',
// 		lastName: 'derulo',
// 	},
// };

// Create a “person” object with name = John, surname = Doe and age = 50.
// Access the object and display all the properties in an alert.
// Solution:
// const person1 = {
// 	name: 'John',
// 	surName: 'Doe',
// 	age: 50,
// };
// console.log(person1.name, person1.surName, person1.age);
// alert(person1.name, person1.surName, person1.age)

// 4. Design a template for the following object:
// const book = {
// 	title: 'Harry Potter',
// 	releaseYear: 1997,
// 	author: 'J.K. Rowling',
// 	cast: function () {
// 		return alert('Avada Kedavra');
// 	},
// };
// using class.
// Solution:
// class Book {
// 	constructor(title, releaseYear, author) {
// 		this.title = title;
// 		this.releaseYear = releaseYear;
// 		this.author = author;
// 	}
// 	cast() {
// 		return alert('Avada Kedavra');
// 	}
// }

// Design a template for the following object:
// const book = {
// 	title: 'Harry Potter',
// 	releaseYear: 1997,
// 	author: 'J.K. Rowling',
// 	cast: function () {
// 		return alert('Avada Kedavra');
// 	},
// };
// using an object constructor.
// Solution:

// function book(title, releaseYear, author) {
// 	this.title = title;
// 	this.releaseYear = releaseYear;
// 	this.author = author;
// 	this.cast = function () {
// 		return alert('Avada Kedavra');
// 	};
// }

// Create a JSON Schema for the following object:
// {
//   "title": "Harry Potter",
//   "releaseYear": 1997,
//   "author": "J.K. Rowling",
//   "spells": [
//       "Avada Kedavra",
//       "Expecto Patronum"
//   ]
// }
// Solution:
// {
//   "$schema": "https://json-schema.org/draft/2019-09/schema",
//   "$id": "http://example.com/example.json",
//   "type": "object",
//   "default": {},
//   "title": "Root Schema",
//   "required": [
//       "title",
//       "releaseYear",
//       "author",
//       "spells"
//   ],
//   "properties": {
//       "title": {
//           "type": "string",
//           "default": "",
//           "title": "The title Schema",
//           "examples": [
//               "Harry Potter"
//           ]
//       },
//       "releaseYear": {
//           "type": "integer",
//           "default": 0,
//           "title": "The releaseYear Schema",
//           "examples": [
//               1997
//           ]
//       },
//       "author": {
//           "type": "string",
//           "default": "",
//           "title": "The author Schema",
//           "examples": [
//               "J.K. Rowling"
//           ]
//       },
//       "spells": {
//           "type": "array",
//           "default": [],
//           "title": "The spells Schema",
//           "items": {
//               "type": "string",
//               "title": "A Schema",
//               "examples": [
//                   "Avada Kedavra",
//                   "Expecto Patronum"
//               ]
//           },
//           "examples": [
//               ["Avada Kedavra",
//                   "Expecto Patronum"
//               ]
//           ]
//       }
//   },
//   "examples": [{
//       "title": "Harry Potter",
//       "releaseYear": 1997,
//       "author": "J.K. Rowling",
//       "spells": [
//           "Avada Kedavra",
//           "Expecto Patronum"
//       ]
//   }]
// }

// 7. Convert the following object to a JSON. Display it in the console with proper indents. Convert it back to the JavaScript object and display it in the console.
// {
//     title: "Harry Potter",
//     releaseYear: 1997,
//     author: "J.K. Rowling"
// };
// Solution:
// const obj = {
// 	title: 'Harry Potter',
// 	releaseYear: 1997,
// 	author: 'J.K. Rowling',
// };
// const toJson = JSON.stringify(obj, null, 5);
// console.log(toJson);
// const toJS = JSON.parse(toJson);
// console.log(toJS);

// console.log(JSON.stringify(obj, null, 5));
// console.log(JSON.parse(JSON.stringify(obj)));

// 8. Check the number of properties in the following objects:
const o1 = new Date();
const o2 = new String();
const o3 = new Number();
const o4 = {};
// Check which of these are empty objects.
// Solution:
const testData = (nonEmptyObject) => {
	if (Object.keys(nonEmptyObject).length === 0 && nonEmptyObject.constructor === Object) {
		console.log('Empty object:');
		return nonEmptyObject;
	} else {
		console.log('Not an empty object:');
		return nonEmptyObject;
	}
};
console.log(testData(o1));
console.log(testData(o2));
console.log(testData(o3));
console.log(testData(o4));

// Define a person object with physical characteristics properties
const person = {
	name: 'Emil',
	height: 171 + 'cm',
	weight: 103 + 'kg',
	hairColor: 'Light Brown',
};

// Define a work object with properties like title and company
const work = {
	title: 'Chef',
	company: 'Airforce 131 Luftving',
};
// we can overwrite data from the work object by adding a new line with the same parameter as the original, JS will pick the last one
const workNew = {
	title: 'ChefDeLaChef',
};

/*
  Combine data from the person and work objects using the spread syntax.
  The spread syntax (...) expands the properties of each object and merges them into a new object.
  This creates a new object called personWork with properties from both person and work objects.
*/
// const personWork = {
// 	...person,
// 	...work,
// };

// console.log(personWork);

// Define a personWife object with properties like spouseName, height, and hairLength
const personWife = {
	spouseName: 'Renate',
	height: 171,
	hairLength: 'Long',
};

/*
  Update the object by adding data from the person and work objects,
  and include the spouse name filtered from the personWife object.
  The personWorkWife object is created by spreading properties from person and work objects,
  and then adding the spouseName property from the personWife object.
*/
const personWorkWife = {
	...person,
	...work,
	...workNew,
	spouseName: personWife.spouseName,
};

console.log(personWorkWife);

// We can also use the spread operator for arrays
// We are declaring an array object
const numbers = [1, 2, 3, 4, 5];
// Then we are creating a new array that includes the elements from the original array and appends the number 6 at the end and 0 in the beginning
// By using the spread operator, we can add elements before and after the spread, eliminating the need for push() and unshift()
const newNumbers = [0, ...numbers, 6];
console.log(newNumbers);

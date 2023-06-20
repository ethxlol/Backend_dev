const myArray = [1, 2, 3, 4, 5];

// Using forEach to iterate over each element in myArray
myArray.forEach((number) => {
	console.log(`${number} is my favorite number`);
});
// Output:
// 1 is my favorite number
// 2 is my favorite number
// 3 is my favorite number
// 4 is my favorite number
// 5 is my favorite number

// Using map to create a new array by doubling each element in myArray
const addNumber = myArray.map((number) => {
	return number + number;
});
console.log(addNumber);
// Output: [2, 4, 6, 8, 10]

// Using filter to create a new array with only the even numbers from myArray
const evenNumbers = myArray.filter((number) => {
	return number % 2 === 0;
});
console.log(evenNumbers);
// Output: [2, 4]

// Using findIndex to find the index of the number 2 in myArray
const findingMyArray = myArray.findIndex((number) => number === 2);
console.log(findingMyArray);
// Output: 1 (since the number 2 is at index 1 in myArray)

// Using reduce to calculate the sum of all elements in myArray
const addingItAll = myArray.reduce((acc, num) => {
	return acc + num;
});
console.log(addingItAll);
// Output: 15 (since 1 + 2 + 3 + 4 + 5 = 15)

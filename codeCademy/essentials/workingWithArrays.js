const concept = ['arrays', 'can', 'be', 'mutated'];
// function that will change the 3 index in the array
function changeArr(arr) {
	arr[3] = 'MUTATED';
}

// we are calling the function that will mutate the array
changeArr(concept);
console.log(concept);

// we are making a new function that will remove the last item in the array
const removeElement = (newArr) => {
	newArr.pop();
};

// we are calling the function that will remove the last index in the array and calling it to the console
removeElement(concept);
console.log(concept);

// ----------------------------------------------------------------------------------------------------------

// Nested Arrays:
// Array with nested arrays
const numberClusters = [
	[1, 2],
	[3, 4],
	[5, 6],
];

// Adding a new nested array to the end of the current array
numberClusters[3] = [7, 8];

console.log(numberClusters);
// Calling the number 6 in the numberClusters and storing it to a variable(target)
const target = numberClusters[2][1];
// Printing it to the console.
console.log(target);
// finding the number of arrays in the numberClusters
console.log(numberClusters.length);
// finding the length for each of the nested arrays in numberClusters
for (let i = 0; i < numberClusters.length; i++) {
	console.log(`Length of nested array ${i}: ${numberClusters[i].length}`);
}
// finding the length of the numberClusters Array
console.log(`Length of numberClusters: ${numberClusters.length}`);

// Iterate over each nested array in numberClusters using a for...of loop
for (const nestedArray of numberClusters) {
	// Retrieve the current nested array and assign it to the nestedArray variable
	// The loop automatically assigns each nested array to nestedArray on each iteration

	// Log the length of the current nested array to the console
	// Access the length property of the nestedArray variable to retrieve the length of the array
	console.log(`Length of nested array: ${nestedArray.length}`);
}

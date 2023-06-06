const numbers = [1, 5, 2, 9, 12];
// What all of these functions have in common is that they make a mutated reference of the original array
// - push() adds elements to the end of the array.
// - reverse() reverses the order of elements in the array.
// - sort() sorts the elements of the array in place, but without a compare function, it performs string comparison.
// - pop() removes the last element from the array.
console.log(numbers);
numbers.push(1);
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.sort();
console.log(numbers);
numbers.pop();
console.log(numbers);

// What we can use instead that will not mutate the array is the slice() function
// This will rather return a subset of the original array
const numbersSlice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbersSlice);
// console.log(numbersSlice.slice(3, 8));

/* we can now use all the functions that would normally mutate the array but since slice function
is called before the function that changes the array it will just return a subset of the original, keeping the original intact */
console.log(numbersSlice.slice().sort());
console.log(numbersSlice.slice().reverse());
console.log(numbersSlice.slice().push());
console.log(numbersSlice.slice().pop());
console.log(numbersSlice);

// this takes the indexes from 0-3 and removes them from the array,
// This is done in a subset of the original and will not mutate the original thanks to the slice function
const slicedArray = numbersSlice.slice(3);
console.log(slicedArray);

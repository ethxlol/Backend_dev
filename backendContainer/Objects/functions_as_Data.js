// We are adding a function that will say hello to the console, we are using the arrow function here to make the function

const sayHello = (name) => console.log('hello ' + name);
console.log(sayHello('Jake'));

// Then we are adding another function referencing the first one, but we are changing the argument of the param (name) to Emil instead of jake

const sayHello2 = sayHello;
console.log(sayHello2('Emil'));

const DEVELOPMENT = false;

const fetchDataReal = () => {
	console.log('not real man!');
};

const fetchDataFake = () => ({
	name: 'Emil',
	age: 32,
});

// the ternary operators here ? and : means if and : means else, so if its true it will output the fake data and if its false the real will be outputted
const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;
console.log(fetchData());

const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;
const add5 = (x) => x + 5;

// Create an array of the defined functions.
const functionsArray = [double, subtractOne, triple, add5];
// Assign the initial number value, this is the one that will be iterated over with the functions in the array
const number = 42;

/* Use the 'reduce' method on the 'functionsArray' to apply each function
 in sequence to the accumulated value ('acc'), starting with the initial number.
 The result will be the final accumulated value after applying all the functions. */
const result = functionsArray.reduce((acc, func) => func(acc), number);
console.log(result);

// This would be the mutable way to do this ⬆️
// functionsArray.forEach((func) => (number = func(number)));

// Function that returns other functions

// createPrinter takes no arguments (), this leads to another function that also takes no arguments, but prints hello to the console.
const createPrinter = () => () => console.log('Hello!');
const printer = createPrinter();
console.log(printer());

// so this ⬆️ would look like this ⬇️ without the arrow syntax the 1 in the func name is just to avoid bugs
const createPrinter1 = function () {
	return function () {
		console.log('Hello!');
	};
};

const double = (x) => x * 2;
// Without => syntax ⬇️
const double1 = function (x) {
	return x * 2;
};
const triple = (x) => x * 3;
// Without => syntax ⬇️
const triple1 = function (x) {
	return x * 3;
};
const quadruple = (x) => x * 4;
// Without => syntax ⬇️
const quadruple1 = function (x) {
	return x * 4;
};
console.log(double1(2));
console.log(double(2));
console.log(triple1(2));
console.log(triple(2));
console.log(quadruple1(2));
console.log(quadruple(2));

// First Class-Functions
// We are setting a function that will take x and y as an argument and multiply them
const createMultiplier = (y) => (x) => x * y;
// Therefor instead of the functions we created above that are repetitive, we can make a first class function that will allow us to do the same
// But we are simply passing the number we would like to multiply with so createMultiplier(2) would multiply something with 2 (double)
const doubleMultiplier = createMultiplier(2);
const tripleMultiplier = createMultiplier(3);
const quadrupleMultiplier = createMultiplier(4);

console.log(doubleMultiplier(12));

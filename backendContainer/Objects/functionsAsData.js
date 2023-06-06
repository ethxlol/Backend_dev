const DEVELOPMENT = true;

const getRealData = () => {
	// time consuming operations
};

const getFakeData = () => ({
	name: 'John Smith',
	nationality: 'English',
});

const getData = DEVELOPMENT ? getFakeData : getRealData;

console.log(getData);
console.log(getFakeData);
console.log(getRealData);

class Data {}

class FakeData extends Data {
	getData1() {
		return 'Fake Data';
	}
}

class RealData extends Data {
	getData1() {
		// time consuming operations
		return 'Real Data';
	}
}

const DEVELOPMENT1 = true;
const dataModel1 = DEVELOPMENT1 ? new FakeData() : new RealData();
const data = dataModel1.getData1();
console.log(data);

// Setting the operations
const double = (x) => x * 2;
const triple = (x) => x * 3;
const addFour = (x) => x + 4;
const subtractThree = (x) => x - 3;
// Declaring what order and what operations to be preformed in a const
// 10*3=30, 30+4=34, 34-3=31, 31*2=62, √62=7.87
const functionsArray = [triple, addFour, subtractThree, double, Math.sqrt];

// Setting the number 10 to be the one that will be operated on
let number = 10;
// Iterate over each function in the array and applying it to the number
functionsArray.forEach((func) => (number = func(number)));

console.log(number.toFixed(2));

// const getNumber = function (index, currentResult, array) {
// 	if (index == 0) {
// 		return array[index](currentResult);
// 	}
// 	return array[index](getNumber(index - 1, currentResult, array));
// };

// const result = getNumber(functionsArray.length - 1, 10, functionsArray);
// console.log(result);

const getNumber = (index, currentResult, array) => {
	return index === 0
		? array[index](currentResult)
		: array[index](getNumber(index - 1, currentResult, array));
};

const result = getNumber(functionsArray.length - 1, 10, functionsArray);
console.log(result.toFixed(2));

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);

combine2and3(add);
combine2and3(subtract);
combine2and3(Math.min);

console.log(add(2, 8));
console.log(subtract(10, 2));
console.log(combine2and3(Math.min));

const addNumber = (y) => (x) => x + y;

const add2 = addNumber(2);
const add3 = addNumber(3);
const add4 = addNumber(4);

add2(3);
console.log(add2(3));
console.log(add4(2 * 3), add3(24 / 2));

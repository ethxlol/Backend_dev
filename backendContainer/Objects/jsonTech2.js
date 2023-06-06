// const myObject = {};
// if (myObject) {
// 	console.log('Empty object is truthy.');
// }

const emptyObject = {};
const nonEmptyObject = { name: 'value' };
const stringContent = 'string';
const numberContent = 123;
const arrayContent = ['data1', 'data2', 'data3'];
const dateContent = new Date();

const testData = (nonEmptyObject) => {
	if (Object.keys(nonEmptyObject).length === 0 && nonEmptyObject.constructor === Object) {
		console.log('Empty object:');
		return nonEmptyObject;
	} else {
		console.log('Not an empty object:');
		return nonEmptyObject;
	}
};

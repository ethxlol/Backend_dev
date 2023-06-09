// simple fruit info application:

// Fruit characteristics and taste arrays
const characteristics = ['hard', 'soft', 'furry'];
const taste = ['sweet', 'sour', 'bitter', 'farty'];

// Fruit lib
const fruits = {
	strawberry: {
		taste: taste[0],
		characteristics: characteristics[1],
	},
	pear: {
		taste: taste[0],
		characteristics: characteristics[0],
	},
	durian: {
		taste: taste[3],
		characteristics: characteristics[0],
	},
};

// Fruit picker function
/* This function takes the name of a fruit as a parameter. 
It allows for flexible input by converting the fruit name to lowercase using the .toLowerCase() method. 

Next, it creates a capitalized version of the fruit name by combining the first character converted to uppercase using the .charAt(0) and .toUpperCase() methods, 
with the rest of the characters converted to lowercase using the .slice(1) and .toLowerCase() methods. This ensures consistent formatting of the fruit name.

The function then checks if the provided fruit name exists as a key in the 'fruits' object. 
If it does, it retrieves the corresponding taste and characteristics using dot notation and the lowercase fruit name.

Finally, the function returns a formatted string using template literals, providing information about the taste and characteristics of the fruit.
*/
const fruitPicker = (fruitName) => {
	if (fruits[fruitName.toLowerCase()]) {
		let capitalizedFruitName =
			fruitName.charAt(0).toUpperCase() + fruitName.slice(1).toLowerCase();
		return `The ${capitalizedFruitName} is ${
			fruits[fruitName.toLowerCase()].taste
		} and very ${fruits[fruitName.toLowerCase()].characteristics}`;
	}
};

console.log(fruitPicker('strawberry'));
console.log(fruitPicker('durian'));
console.log(fruitPicker('pear'));

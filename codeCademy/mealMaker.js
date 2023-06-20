// A simple application that will set a menu item and a price attached to it,
// it will then get called in the console with a string

// Menu OBJ
const menu = {
	// Properties to be changed in setter
	_meal: '',
	_price: 0,
	// Setter to change the price
	set price(priceToCheck) {
		// Checking if the value is equal to a number value
		if (typeof priceToCheck === 'number') {
			return (this._price = priceToCheck);
		}
	},
	// Setter to change the meal
	set meal(mealToCheck) {
		// Checking if the value is equal to a string value
		if (typeof mealToCheck === 'string') {
			return (this._meal = mealToCheck);
		}
	},
	// Getter to get both price and meal and concatenate them into a template literal string
	get todaysSpecial() {
		// Checking if both of the properties have valid values
		if (this._meal && this._price) {
			return `Todays special is ${this._meal} and its only $${this._price}!`;
			// if either return false this else statement will log a string
		} else {
			return `Meal or price was not set correctly!`;
		}
	},
};
// Setting the meal and price
menu.meal = 'turkey';
menu.price = 200;
// Logging the getter to the console
console.log(menu.todaysSpecial);

// console.log(menu)

// menu._meal = 1
// menu._price = 'a string'
// console.log(menu)

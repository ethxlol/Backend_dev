/* 
The task


In this lesson, we learned about standard design patterns.
In this task you need to create a system that simulates the following story:
There are three possible dishes:

Pizza
Pasta
Chicken

Each dish should be a separate class with fields: name and nationality.
There are three restaurants selling dishes:

American – selling Chicken and Pizza
Italian – selling Pasta and Pizza
Chinese – selling Chicken and Pasta

Using an abstract factory pattern, design the system which simulates ordering a dish from the restaurant. 
The ordered dish should contain information about its type (pizza/chicken/pasta) and from which restaurant it is. Be careful not to create unnecessary class instances. */

// Pizza Parent
class Pizza {
	constructor(nationality) {
		this.nationality = nationality;
	}
	getName() {
		return 'I am a ' + this.nationality + ' pizza.';
	}
}

// Pizza Child
class ItalianPizza extends Pizza {
	constructor() {
		super('Italian');
	}
}
// Pizza Child2
class AmericanPizza extends Pizza {
	constructor() {
		super('American');
	}
}

// Pasta Parent
class Pasta {
	constructor(nationality) {
		this.nationality = nationality;
	}
	getName() {
		return 'I am a ' + this.nationality + ' pasta.';
	}
}

// Pasta Child
class ItalianPasta extends Pasta {
	constructor() {
		super('Italian');
	}
}
// Pasta Child2
class ChinesePasta extends Pasta {
	constructor() {
		super('Chinese');
	}
}

// Chicken Parent
class Chicken {
	constructor(nationality) {
		this.nationality = nationality;
	}
	getName() {
		return 'I am a ' + this.nationality + ' Chicken.';
	}
}

// Chicken Child
class AmericanChicken extends Chicken {
	constructor() {
		super('American');
	}
}
// Chicken Child2
class ChineseChicken extends Chicken {
	constructor() {
		super('Chinese');
	}
}

// Factories

class AmericanRestaurants {
	chicken = new AmericanChicken();
	pizza = new AmericanPizza();
	serveDish(type) {
		switch (type) {
			case 'Pizza':
				return this.pizza;
			case 'Chicken':
				return this.chicken;
			case 'Pasta':
				console.log('Pasta is not served here!');
				return;
		}
	}
}

class ItalianRestaurants {
	pasta = new ItalianPasta();
	pizza = new ItalianPizza();
	serveDish(type) {
		switch (type) {
			case 'Pizza':
				return this.pizza;
			case 'Pasta':
				return this.pasta;
			case 'Chicken':
				console.log('Chicken is not served here!');
				return;
		}
	}
}

class ChineseRestaurants {
	pasta = new ChinesePasta();
	chicken = new ChineseChicken();
	serveDish(type) {
		switch (type) {
			case 'Chicken':
				return this.chicken;
			case 'Pasta':
				return this.pasta;
			case 'Pizza':
				console.log('Pizza is not served here!');
				return;
		}
	}
}

// Create Restaurants
const italianRestaurants = new ItalianRestaurants();
const americanRestaurants = new AmericanRestaurants();
const chineseRestaurants = new ChineseRestaurants();

// Ordering a specific dish from a specific restaurant
const foodora = (nationality, dish) => {
	switch (nationality) {
		case 'American':
			return americanRestaurants.serveDish(dish);
		case 'Chinese':
			return chineseRestaurants.serveDish(dish);
		case 'Italian':
			return italianRestaurants.serveDish(dish);
	}
};

// Implementation
const cDish = foodora('Chinese', 'Chicken');
// Calling it to the console
console.log(cDish.getName());
// Implementation
const aDish = foodora('American', 'Pizza');
// Calling it to the console
console.log(aDish.getName());
// Implementation
const iDish = foodora('Italian', 'Pasta');
// Calling it to the console
console.log(iDish.getName());

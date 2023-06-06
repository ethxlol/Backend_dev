// Mixin()

let sayHiMixin = {
	sayHi() {
		console.log(`Hello ${this.name}`);
	},
	sayBye() {
		console.log(`Bye ${this.name}`);
	},
};

class User {
	constructor(name) {
		this.name = name;
	}
}

// The prototype is what forms the inheritance to the class and lets the program understand that its suppose to collect data from the class object
// Use Object.assign to merge the properties and methods from the `sayHiMixin` object
// into the `User.prototype` object, extending the functionality of the `User` class.
Object.assign(User.prototype, sayHiMixin);
Object.assign(User.prototype, sayHiMixin);

new User('Emil').sayHi();
new User('Ove').sayBye();

// Decorator Pattern

// The constructor function to decorate
function Pizza() {
	this.cost = function () {
		return 20;
	};
	this.name = function () {
		return 'Pizza';
	};
}

// We are creating decorator functions that we will use to enhance the behavior of the Pizza constructor.

// Decorator 1
function AddPepperoni(pizza) {
	var originalCost = pizza.cost;
	var originalName = pizza.name;

	pizza.cost = function () {
		return originalCost() + 4;
	};

	pizza.name = function () {
		return 'Pepperoni ' + originalName();
	};
}

// Decorator 2
function AddSoda(pizza) {
	var originalCost = pizza.cost;
	var originalName = pizza.name;
	pizza.cost = function () {
		return originalCost() + 3;
	};
	pizza.name = function () {
		return 'Soda + ' + originalName();
	};
}

// Create an instance of the Pizza constructor
let pizza = new Pizza();

// Apply decorators
AddPepperoni(pizza);
AddSoda(pizza);

// Access the modified behavior
console.log(pizza.cost(), pizza.name());

/*
Flyweight Pattern

We also have something called Flyweight Patterns, we made a simili to this on the Singleton example.
It is something that will reduce the memory usage by checking if something is already done so it 
won't be done again.

While this check helps enforce the Singleton pattern's intent of having a single instance, it 
does not directly relate to the Flyweight pattern. The Flyweight pattern focuses on sharing and 
reusing common data to reduce memory usage, whereas the Singleton pattern ensures that only one 
instance of a class exists.

By incorporating the !instance check, you are effectively implementing the Singleton pattern 
with the additional precaution of preventing multiple instances from being created. This can be 
a valid approach if you want to enforce the Singleton behavior more strictly.

It's important to note that the Flyweight pattern and Singleton pattern are separate design 
patterns, each with its own purpose and implementation. The decision to use one or both patterns 
depends on the specific requirements of your application.
*/

/*
Facade Design Pattern

The Facade Design Pattern is exemplified in the jQuery library, particularly when using the $(el).css() method. 
jQuery internally performs a series of complex operations to execute this code, including cross-browser compatibility handling, CSS property parsing, and style manipulation. 
As developers, we can treat this method as a black box, abstracting away these intricacies.

By providing a convenient facade interface, jQuery simplifies the process of applying CSS styles to an element. 
We can write concise and readable code without worrying about browser-specific quirks or CSS parsing complexities. 
The jQuery library acts as a facilitator, shielding us from low-level details and promoting ease of use and productivity.

The facade pattern promotes a clear separation of concerns and enhances code maintainability. 
Developers can leverage the facade to interact with complex systems or libraries without needing to understand their internal implementation details. 
This encapsulation of complexity leads to cleaner code, improved productivity, and a better overall development experience.

The key benefits of the Facade Design Pattern in the context of jQuery's usage include:

Abstracting away complex operations, such as cross-browser compatibility handling and CSS parsing.
Simplifying the process of applying CSS styles through a convenient and consistent interface.
Promoting code readability and maintainability by hiding low-level implementation details.
Enhancing productivity by allowing developers to focus on high-level tasks rather than implementation intricacies.
By employing the Facade Design Pattern, jQuery demonstrates how a well-designed facade can simplify interactions with complex systems and libraries, making development more efficient and enjoyable.
*/

// Observer Patterns

class Car {
	// The Car class represents a car object with a gas property and a list of actions.

	constructor(gas) {
		this.gas = gas; // Initialize the gas level of the car.
		this.actions = []; // An array to store subscribed actions.
	}

	setGasLevel(val) {
		this.gas = val; // Update the gas level of the car.
		this.notifyAll(); // Notify all subscribed actions about the gas level change.
	}

	subscribe(observer) {
		this.actions.push(observer); // Add an action to the list of subscribed actions.
	}

	unsubscribe(observer) {
		this.actions = this.actions.filter(function (el) {
			return el !== observer; // Remove an action from the list of subscribed actions.
		});
	}

	notifyAll() {
		// Notify all subscribed actions about the gas level change.

		return this.actions.forEach(
			function (el) {
				el.update(this); // Call the update method of each subscribed action.
			}.bind(this)
		);
	}
}

class Consumption {
	// The Consumption class represents an action that increases the gas level of a car.

	update(car) {
		car.gas = car.gas + 1; // Increase the gas level of the car by 1.
	}
}

var c = new Car(1); // Create a new Car object with an initial gas level of 1.
var co = new Consumption(); // Create a new Consumption object.
c.subscribe(co); // Subscribe the Consumption action to the Car object.
c.setGasLevel(11); // Set the gas level of the car to 11, triggering the Consumption action.
c.unsubscribe(co); // Unsubscribe the Consumption action from the Car object.
c.setGasLevel(10); // Set the gas level of the car to 10, without triggering any subscribed actions.

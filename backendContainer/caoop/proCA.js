// -----------Classes--------------

// Parent
class Vehicle {
	constructor(vehicleSpec) {
		this.wheels = vehicleSpec.wheels;
		this.doors = vehicleSpec.doors;
		this.color = vehicleSpec.color;
	}

	getDescription() {
		return `The vehicle has ${this.wheels} wheels, ${this.doors} doors, and the color is: ${this.color}.`;
	}
}

// Child 1 (Car)
class Car extends Vehicle {
	constructor(vehicleSpec) {
		super(vehicleSpec);
		this.topSpeed = vehicleSpec.topSpeed;
	}

	// Getter for topSpeed

	getTopSpeed() {
		console.log(`The top speed is ${this.topSpeed} km/h.`);
		return;
	}

	// Setter for topSpeed

	// setTopSpeed(speed) {
	// 	this.topSpeed = speed;
	// }
}

// Child 2 (Truck)
class Truck extends Vehicle {
	constructor(vehicleSpec) {
		super(vehicleSpec);
		this.maxLoadWeight = vehicleSpec.maxLoadWeight;
	}

	// Getter for maxLoadWeight

	getMaxLoadWeight() {
		console.log(
			`The truck's maximum load weight is: ${this.maxLoadWeight} kg.`
		);
		return;
	}

	// Setter for maxLoadWeight

	// 	setMaxLoadWeight(weight) {
	// 		this.maxLoadWeight = weight;
	// 	}
}

// Vehicle Factory will create Vehicles of different types
class VehicleFactory {
	create(type, vehicleSpec) {
		switch (type) {
			case 'truck':
				return new Truck(vehicleSpec);
			case 'car':
				return new Car(vehicleSpec);
			default:
				throw new Error(`Invalid vehicle type: ${type}`);
		}
	}
}

// -----------Car Implementation--------------

// Create JSON strings from schema

var json_car = '{"wheels": 4, "doors": 4, "color": "white"}';

// Convert JSON strings to JS objects

const js_car = JSON.parse(json_car);
// Add topSpeed to the JS Object
js_car.topSpeed = 180;

// Create CarFactory and Car
const carFactory = new VehicleFactory();
const newCar = carFactory.create('car', js_car);

console.log(newCar.getDescription()); // Call parent's description method
// newTruck.setTopSpeed(180); // Set the value of the child's unique method using setter
newCar.getTopSpeed(); // Call child's unique method

// -----------Truck Implementation--------------

// Create JSON strings from schema

var json_truck = '{"wheels": 18, "doors": 2, "color": "red"}';

// Convert JSON strings to JS objects

const js_truck = JSON.parse(json_truck);
// Add maxLoadWeight
js_truck.maxLoadWeight = 1000;

// Create TruckFactory and Truck
const truckFactory = new VehicleFactory();
const newTruck = truckFactory.create('truck', js_truck);

console.log(newTruck.getDescription()); // Call parent's description method
// newTruck.setMaxLoadWeight(1000); // Set the value of the child's unique method using setter
newTruck.getMaxLoadWeight(); // Call child's unique method

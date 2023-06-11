import carLib from './cars.js';

class Vehicle {
	constructor(carData) {
		this.carData = carData;
		this.car = carData.car;
		this.exterior = carData.exterior;
		this.engine = carData.engine;
		this.interior = carData.interior;
		this.entertainment = carData.entertainment;
		this.extras = carData.extras;
		this.safety = carData.safety;
	}
	getDescription() {
		console.log(this.carData);
	}
}

const myVehicle = new Vehicle(carLib);
myVehicle.getDescription();

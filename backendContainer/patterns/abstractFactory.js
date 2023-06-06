// Define a Car class with properties for doors, engine, and color.
class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

// Define a CarFactory class responsible for creating instances of cars.
// The createCar method takes a type parameter and returns a new Car instance based on the type.
class CarFactory {
	createCar(type) {
		switch (type) {
			case 'civic':
				return new Car(4, 'v6', 'red');
			case 'bmw':
				return new Car(4, 'v8', 'blue');
		}
	}
}

// Define an SUV class with properties for doors, engine, and color.
class SUV {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

// Define an SUVFactory class responsible for creating instances of SUVs.
// The createCar method takes a type parameter and returns a new SUV instance based on the type.
class SUVFactory {
	createCar(type) {
		switch (type) {
			case 'audi e-tron':
				return new SUV(4, 'electric', 'black');
			case 'bmw ix4':
				return new SUV(4, 'electric', 'white');
		}
	}
}

// Create an instance of the CarFactory class.
const carFactory = new CarFactory();

// Create an instance of the SUVFactory class.
const suvFactory = new SUVFactory();

// Define an autoManufacturer function that takes a type and model as parameters.
// Based on the type, it calls the appropriate factory's createCar method to create a car or SUV instance.
const autoManufacturer = (type, model) => {
	switch (type) {
		case 'car':
			return carFactory.createCar(model);
		case 'suv':
			return suvFactory.createCar(model);
	}
};

// Call the autoManufacturer function with type 'suv' and model 'audi e-tron'.
// It will use the SUVFactory to create an SUV instance with the specified model.
const audi = autoManufacturer('suv', 'audi e-tron');
console.log(audi);

// Log the created SUV instance to the console.

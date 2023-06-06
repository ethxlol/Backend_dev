class Car {
	constructor(color, make, engine) {
		this.color = color;
		this.make = make;
		this.engine = engine;
	}
}

const mr2 = new Car('Red', 'Toyota', '3s Gte');
const bmw530e = new Car('Blue', 'BMW', 'b48b20b');

console.log(mr2, bmw530e);

class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}
// We are adding a extension to the Car class, so it will inherit the Car class
// We are also adding a super in the constructor, this allows me to call the parents constructor
// By inheriting from the parent class Car, we can add new properties to the subclass SUV, here we added the wheels
class SUV extends Car {
	constructor(doors, engine, color) {
		super(doors, engine, color);
		this.wheels = 4;
	}
}

// If i wanted to change the

// we could extend multiple times if we wanted to

const mr2 = new Car('2', '3s Gte', 'red');
const bmw530e = new Car('4', 'b48b20b', 'grey/blue');
const cx5 = new SUV(4, 'V8', 'red');
console.log(mr2, bmw530e);
console.log(cx5);

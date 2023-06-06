class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	bark() {
		console.log('Bark bark!');
	}
	birth() {
		let thisYear = new Date().getFullYear();
		let born = thisYear - this.age;
		return born;
	}
}

export default Dog;

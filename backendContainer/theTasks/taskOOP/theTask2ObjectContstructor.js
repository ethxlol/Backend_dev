function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function () {
		return 'Bark bark!';
	};
	this.birth = function () {
		let thisYear = new Date().getFullYear();
		let born = thisYear - this.age;
		return born;
	};
}
const doggo = new Dog('Rex', 5);
console.log(doggo);
console.log(doggo.bark());
console.log(doggo.birth());

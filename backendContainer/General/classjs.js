// class Student {
// 	constructor(name, surname, age) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.age = age;
// 	}
// 	greetings() {
// 		return 'hello my name is ' + this.name + ' ' + this.surname + '-';
// 	}
// 	birthYear() {
// 		let date = new Date();
// 		return date.getFullYear() - this.age;
// 	}
// }
// const student1 = new Student('Emil', 'Nordheim', 33);
// const student2 = new Student('Glenn', 'Risvold', 30);
// const student3 = new Student('Renate', 'Leiknes', 41);
// const student4 = new Student('Odin', 'Nordheim', 10);
// console.log(student1.greetings());
// console.log(student1.birthYear());
// console.log(student2.greetings());
// console.log(student2.birthYear());
// console.log(student3.greetings());
// console.log(student3.birthYear());
// console.log(student4.greetings());
// console.log(student4.birthYear());

// class Car {
// 	constructor(name, year) {
// 		this.name = name;
// 		this.year = year;
// 	}
// 	set year(newYear) {
// 		let date = new Date();
// 		if (newYear > date.getFullYear()) {
// 			this._year = date.getFullYear();
// 		} else {
// 			this._year = newYear;
// 		}
// 	}
// 	get year() {
// 		return this._year;
// 	}
// 	age() {
// 		let date = new Date();
// 		return date.getFullYear() - this._year;
// 	}
// }
// let newCar = new Car('Nissan', 2023);
// console.log(newCar.year);
// console.log(newCar._year);

// class Pizza {
// 	constructor(name, price) {
// 		this.name = name;
// 		this.price = price;
// 	}
// 	info() {
// 		return `I am basic pizza: ${this.name}. I cost ${this.price}`;
// 	}
// }
// class ItalianPizza extends Pizza {
// 	constructor(name, price, region) {
// 		super(name, price);
// 		this.region = region;
// 	}
// 	info() {
// 		return `I am Italian Pizza: ${this.name} I cost ${this.price} I come from: ${this.region}.`;
// 	}
// }
// class AmericanPizza extends Pizza {
// 	constructor(name, price, sauce) {
// 		super(name, price);
// 		this.sauce = sauce;
// 		this.info();
// 		// return `I am American Pizza: ${this.name} I cost ${this.price} I have the ${this.sauce}`;
// 		return (
// 			'I am American pizza:' +
// 			this.name +
// 			'I cost ' +
// 			this.price +
// 			'I have the' +
// 			this.sauce +
// 			'sauce'
// 		);
// 	}
// }
// console.log(AmericanPizza);
// console.log(Pizza);

// class Dish {
// 	constructor(name, price) {
// 		this._name = name;
// 		this._price = price;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	set name(name) {
// 		this._name = name;
// 	}

// 	get price() {
// 		return this._price;
// 	}

// 	set price(price) {
// 		this._price = price;
// 	}
// }

// class Pizza extends Dish {
// 	constructor(name, price, ingredients) {
// 		super(name, price);
// 		this._ingredients = ingredients;
// 	}

// 	get ingredients() {
// 		return this._ingredients;
// 	}

// 	set ingredients(ingredients) {
// 		this._ingredients = ingredients;
// 	}
// }

// class Pancakes extends Dish {
// 	constructor(name, price, isSweet) {
// 		super(name, price);
// 		this._isSweet = isSweet;
// 	}

// 	get isSweet() {
// 		return this._isSweet;
// 	}

// 	set isSweet(isSweet) {
// 		this._isSweet = isSweet;
// 	}
// }

// class Pasta extends Dish {
// 	constructor(name, price, isVegetarian) {
// 		super(name, price);
// 		this._isVegetarian = isVegetarian;
// 	}

// 	get isVegetarian() {
// 		return this._isVegetarian;
// 	}

// 	set isVegetarian(isVegetarian) {
// 		this._isVegetarian = isVegetarian;
// 	}
// }

// // Example usage
// const margherita = new Pizza('Margherita', 10.99, [
// 	'tomato sauce',
// 	'mozzarella',
// ]);
// const pancakes = new Pancakes('Pancakes', 5.99, true);
// const bolognese = new Pasta('Spaghetti Bolognese', 12.99, false);

// console.log(margherita);
// console.log(pancakes);
// console.log(bolognese);

// function swap(arr, a, b) {
// 	let temp = arr[a];
// 	arr[a] = arr[b];
// 	arr[b] = temp;
// }
// function bubbleSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[3] < arr[j + 1]) {
// 				swap(arr, j, j + 1);
// 			}
// 		}
// 	}
// 	return arr;
// }
// function insertionSort(arr) {
// 	let temp;
// 	for (let i = 1; i < arr.length; i++) {
// 		let j = i;
// 		temp = arr[i];
// 		while (j > 0 && arr[j - 1] < temp) {
// 			arr[j] = arr[j - 1];
// 			j--;
// 			arr[j] = temp;
// 		}
// 	}
// 	return arr;
// }
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// const numbers = [0, 3, 5, 67, 12, 2, 3, 4, 51, 9];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// Get two positive integers from the user
const num1 = parseInt(prompt('Enter a positive integer:'));
const num2 = parseInt(prompt('Enter another positive integer:'));

// Determine the size of the array
const size = Math.max(num1, num2);

// Generate the array of the provided size
const numbers = Array.from(Array(size).keys());

// Sort the array using a custom sorting function
numbers.sort((a, b) => {
	const remainderA = a % num2;
	const remainderB = b % num2;

	if (remainderA === remainderB) {
		return a - b;
	} else {
		return remainderA - remainderB;
	}
});

console.log(numbers);

// Sort the array using the built-in sort() method
numbers.sort((a, b) => (a % num2) - (b % num2) || a - b);

console.log(numbers);

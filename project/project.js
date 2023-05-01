function randomName() {
	return Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, '')
		.substr(0, 5);
}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map(() =>
	getRandomInt(2, 10)
); //declares how many people can seat at table of certain index
customers = [];
let sneakyAttackId = 0;
function freeTable() {
	let index = parseInt(
		prompt(
			'Provide an index to free its table. It should be greater or equal to 0, but less than ' +
				tableCount +
				'.'
		)
	);
	while (index < 0 || index >= tableCount) {
		index = parseInt(
			prompt(
				'Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than ' +
					tableCount +
					'.'
			)
		);
	}
	console.log(customers);
	for (let i = customers.length - 1; i >= 0; i--) {
		if (customers[i][1] == index) customers.splice(i, 1);
	}
	console.log(customers);
}
// Initialize an array to store the state of each table
const tables = [false, false, false, false, false, false];

// Function to check if a table is free
function isTableFree(tableNumber) {
	if (tables[tableNumber - 1] === false) {
		return true;
	} else {
		return false;
	}
}
// Function to add a new customer to a table
function addCustomerToTable(name, tableNumber) {
	if (isTableFree(tableNumber)) {
		customers.push({ name: name, table: tableNumber });
		tables[tableNumber - 1] = true;
		console.log(`Added ${name} to table ${tableNumber}`);
	} else {
		console.log(
			`Table ${tableNumber} is occupied. Please choose another table.`
		);
	}
}
function sneakyAttack() {
	sneakyAttackId = setInterval(() => {
		customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
		console.log('Shhhhhhhh');
		return;
	}, 30000);
	console.log();
}
function stopSneakyAttack() {
	if (sneakyAttackId != 0) {
		clearInterval(sneakyAttackId);
		console.log('Sneaky attack stopped.');
	}
}
function newCustomer() {
	const name = prompt('Hello, what is your name?');
	let size = 0;
	let askAboutTableSize = '';
	while (true) {
		if (size == 0) {
			askAboutTableSize = 'Hello ' + name + '! Table for how many people?';
		} else {
			askAboutTableSize =
				"Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
		}
		size = parseInt(prompt(askAboutTableSize));
		if (size != 0 && Math.max(...tableSizes) >= size) {
			break;
		}
	}
	let tableNumber = 0;
	if (tableSizes.indexOf(size) >= 0) {
		tableNumber = tableSizes.indexOf(size);
	} else {
		tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
	}
	alert(
		'You got a table of number: ' +
			tableNumber +
			', which by default can fit ' +
			tableSizes[tableNumber] +
			' people.'
	);
	customers.push([name, tableNumber]);
	console.log(customers);
}
function freeTable() {
	let index = parseInt(
		prompt(
			'Provide an index to free its table. It should be greater or equal to 0, but less than ' +
				tableCount +
				'.'
		)
	);
	while (index < 0 || index >= tableCount) {
		index = parseInt(
			prompt(
				'Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than ' +
					tableCount +
					'.'
			)
		);
	}
	console.log(customers);
	for (let i = customers.length - 1; i >= 0; i--) {
		if (customers[i][1] == index) customers.splice(i, 1);
	}
	console.log(customers);
}

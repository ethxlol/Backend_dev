import Computer from './Computer.js';

/* Linking to the class computer, this is from the import in the start
   the properties in the class is declared through this */
const newComputer = new Computer(
	'Intel 13900k',
	'TeamGroup T-Force DDR5 6400mhz',
	'Asus Rog-Strix 690-f',
	'Corsair 1000w',
	'nVidia geForce 4090',
	'2TB WD Blue nVme',
	'corsair liquid cooling',
	'Black',
	'midi-tower',
	30 + 'kg',
	'Phantex',
	'cyan',
	'January 8, 2023 15:00:00'
);

console.log('My computer specs and style:', newComputer);
console.log('Days since i got Cerebro(computer):', newComputer.computerAge());
console.log('Months since i got Cerebro(computer):', newComputer.computerAgeMonth());
console.log('Years since i got Cerebro(computer):', newComputer.computerAgeYear());
console.log('Milliseconds since i got Cerebro(computer):', newComputer.computerAgeMS());

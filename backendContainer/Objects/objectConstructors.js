/* This is the way of using a Object Constructor, we are basically just making a constructor and declaring 
all the properties directly inside the object, this will remove a lot of the flexibility.

This is not the preferred method at all, unless you HAVE to use an Object constructor function, class is much preferred,
 */

function ComputerHardware(processor, ram, motherboard, psu, gpu, hdd, cooling) {
	this.processor = processor;
	this.ram = ram;
	this.motherboard = motherboard;
	this.psu = psu;
	this.gpu = gpu;
	this.hdd = hdd;
	this.cooling = cooling;
}

const compHardware = new ComputerHardware(
	'Intel 13900k',
	'TeamGroup T-Force',
	'Asus Rog-strix z690-f',
	'Corsair 1000w',
	'nvidia Geforce 4090',
	'WD Blue 2TB',
	'Liquid and case fans'
);
console.log(compHardware);

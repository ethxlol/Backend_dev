/* This is the class, this will create the params that we can declare later in a script,
for this i like to nest most of the objects so it's not so messy in the console.
Im setting the params and "activating" them through this dot notation. This will just refer to the parent
in this case the class of Computer

PS: we need to export it under the class so it can be imported by the script that will declare it*/

class Computer {
	constructor(
		// Hardware
		processor,
		ram,
		motherboard,
		psu,
		gpu,
		hdd,
		cooling,
		// Characteristics
		color,
		caseType,
		weight,
		caseMake,
		fansRGB,
		// Date of building
		dateAcquired
	) {
		this.hardware = {
			processor,
			ram,
			motherboard,
			psu,
			gpu,
			hdd,
			cooling,
		};
		this.characteristics = {
			color,
			caseType,
			weight,
			caseMake,
			fansRGB,
		};
		this.dateAcquired = dateAcquired;
	}
	// Age functions 'Cerebro'
	computerAge() {
		let now = new Date();
		let built = new Date(this.dateAcquired);
		let elapsed = now - built;
		let daysSinceBuilt = Math.floor(elapsed / (1000 * 3600 * 24));
		return daysSinceBuilt;
	}
	computerAgeMonth() {
		let today = new Date();
		let built = new Date(this.dateAcquired);
		let elapsed =
			(today.getFullYear() - built.getFullYear()) * 12 +
			(today.getMonth() - built.getMonth());
		let monthsSinceBuilt = elapsed;
		return monthsSinceBuilt;
	}
	computerAgeYear() {
		let today = new Date();
		let built = new Date(this.dateAcquired);
		let yearsElapsed = today.getFullYear() - built.getFullYear();
		return yearsElapsed;
	}
	computerAgeMS() {
		let now = new Date();
		let built = new Date(this.dateAcquired);
		let elapsed = now - built;
		let millisecondsSinceBuilt = Math.floor(elapsed);
		return millisecondsSinceBuilt;
	}
}
export default Computer;

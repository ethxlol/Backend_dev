class Backpack {
	constructor(
		// Defines parameters
		name,
		volume,
		color,
		pocketNum,
		strapLengthL,
		strapLengthR,
		lidOpen,
		brand
	) {
		// Define properties(key value pairs to the parameters above):
		this.name = name;
		this.volume = volume;
		this.color = color;
		this.pocketNum = pocketNum;
		this.strapLength = {
			left: strapLengthL,
			right: strapLengthR,
		};
		this.brand = brand;
		this.lidOpen = lidOpen;
	}
	// Add methods like normal function:
	toggleLid(lidStatus) {
		this.lidOpen = lidStatus;
	}
	newStrapLength(lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	}
}

export default Backpack;

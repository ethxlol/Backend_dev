import Backpack from './Backpack.js';
// we are basically adding some new properties to the backpack class
// so now we are adding something to the params that we have set in the class
const everydayPack = new Backpack(
	'Everyday Backpack',
	30,
	'grey',
	15,
	29,
	26,
	true,
	"Arc'teryx"
);

console.log('The everydayPack object:', everydayPack);
console.log('The pocketNum value:', everydayPack.pocketNum);

// import Backpack from './oopClass';

// const backpack = {
// 	name: 'Everyday Backpack',
// 	volume: 30,
// 	color: 'grey',
// 	pocketNum: 15,
// 	strapLength: {
// 		left: 26,
// 		right: 26,
// 	},
// 	lidOpen: false,
// 	toggleLid: function (lidStatus) {
// 		this.lidOpen = lidStatus;
// 	},
// 	newStrapLength: function (lengthLeft, lengthRight) {
// 		this.strapLength.left = lengthLeft;
// 		this.strapLength.right = lengthRight;
// 	},
// };

// console.log('The backpack object:', backpack);
// console.log('The pocketNum value:', backpack.pocketNum);

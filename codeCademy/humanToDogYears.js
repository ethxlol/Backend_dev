// This is my age in human years
let myAge = 32;

// This is my early age
let earlyYears = 2;

// multiplying this by 10.5 to represent the first 2 years of a dogs life
// earlyYears *= 10.5; with augmented assignment operator
earlyYears = earlyYears * 10.5;

// Removing 2 years since they are accounted for in earlyYears
let laterYears = myAge - 2;

// This will calculate my human years - 2 since they are accounted for in the earlyYears
// laterYears *= 4; with augmented assignment operator
laterYears = laterYears * 4;

// console.log(earlyYears, laterYears)

// adding my First 2 years as dog years and later years as dog years together to sum my total human age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Made my name in a variable and added the toLowerCase method to make it all lowercase when printed
let myName = 'Emil'.toLowerCase();
// console.log(myName)

// Using Template Literal syntax i wrote a sentence about my age in dog and human years with the variables.
// console.log(
// 	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
// );
// ------------------------------------------------------------------------------------------------------------------
// FP approach to ⬆️

// If human years are less than or equal to 2 it gets multiplied by 10.5
// If false (i.e greater than) 21(the earlyYears of a dog) - 2(accounted for in earlyYears) * 4
const calculateDogYears = (humanYears) => {
	const earlyYears =
		humanYears <= 2 ? humanYears * 10.5 : 21 + (humanYears - 2) * 4;
	return earlyYears;
};

const formatSentence = (name, humanAge, dogAge) => {
	return `My name is ${name}. I am ${humanAge} years old in human years which is ${dogAge} years old in dog years!`;
};

const functionalMyAgeInDogYears = (name, age) => {
	const dogYears = calculateDogYears(age);
	return formatSentence(name, age, dogYears);
};

// console.log(functionalMyAgeInDogYears('Emil', 32));
// console.log(functionalMyAgeInDogYears('Glenn', 30));
console.log(functionalMyAgeInDogYears('Renate', 4));

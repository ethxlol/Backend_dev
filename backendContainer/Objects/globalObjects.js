function Person(name, surname, dateOfBirth) {
	this.name = name;
	this.surname = surname;
	this.dateOfBirth = dateOfBirth;
	this.currentAge = function () {
		// this is a global object, so this really means that its a standard built in object in js
		// date is something fetching todays date as default, we are setting today as the new variable for date
		let today = new Date();
		let birthDate = new Date(dateOfBirth);
		// getFullYear is a get method within the Date object, this is getting the local date, if you did getUTCFullYear it would show the utc timezone
		// so here we are subtracting the year of today with birthDate, giving us the age of the person, we are setting the properties of the birthDate later
		let age = today.getFullYear() - birthDate.getFullYear();
		// we are also subtracting by month here because in this app we want the correct age to be displayed, so if the person has not had its birthday yet this year it will subtract 1
		let m = today.getMonth() - birthDate.getMonth();
		// so if the month is less than 0 or month is 0 (so the same as we have now) and getDate(the day of the month) is less than the day in the month that you were born it will subtract 1 year off since you
		// have'nt had your birthday yet
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};
}

let obj = new Person('Emil', 'Nordheim', 'August 18, 1990');
console.log(obj.currentAge());

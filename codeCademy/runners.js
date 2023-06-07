let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = false;
const runnerAge = 18;
// Runners at least 18 and registered early gets the number 1000
if (runnerAge >= 18 && earlyReg === true) {
	raceNumber = +1000;
}
// Runners at least 18 and registered early racing time
if (runnerAge >= 18 && earlyReg === true) {
	console.log(
		`Early runners will start at 9:30am, your race number is ${raceNumber}`
	);
	// Tardy runners racing time
} else if (runnerAge > 18 && !earlyReg === true) {
	console.log(
		`For you tardy bastards, you will run at 11:00am, your race number is: ${raceNumber}`
	);
	// Young runners regardless of reg time
} else if (runnerAge < 18) {
	console.log(
		`Scoundrels under the legal age of mead and feast will run at 12:30pm, your race number is ${raceNumber}`
	);
	// exactly 18 years old runners
} else {
	raceNumber = 666;
	console.log(
		`Ah, barley legal i see! You will run during the forthcoming! Your race number is ${raceNumber}
    
    ...and see the registration desk!
     `
	);
}

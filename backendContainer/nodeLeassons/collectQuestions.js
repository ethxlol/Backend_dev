const collectAnswers = require('./lib/collectAnswers');

const questions = [
	'what is your name?',
	'where do you live?',
	'what are you going to do with node js?',
];

collectAnswers(questions, (answers) => {
	console.log('Than you for your answers.');
	console.log(answers);
	process.exit();
});

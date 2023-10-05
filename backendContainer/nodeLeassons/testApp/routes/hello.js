const express = require('express');
const router = express.Router();

// Get Hello world
router.get(
	'/',
	(req, res, next) => {
		console.log('will return response in a callback');
		next();
	},
	(req, res) => {
		res.send('hello world');
	}
);

// The endpoint with my name and surname, these are placeholders and can be anything as long as they are under /hello endpoint
// so localhost:3000/hello/emil/nordheim
router.get(
	'/:name/:surname',
	(req, res, next) => {
		console.log('Await respone for name');
		next();
	},
	(req, res) => {
		res.send(`Hello ${req.params.name} ${req.params.surname}!`);
	}
);

module.exports = router;

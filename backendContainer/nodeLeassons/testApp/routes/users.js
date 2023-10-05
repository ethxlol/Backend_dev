var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// Route definition with parameters
router.get('/:userId/books/:bookId', (req, res) => {
	res.send(req.params);
});

module.exports = router;

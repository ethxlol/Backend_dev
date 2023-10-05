var express = require('express');
var router = express.Router();
var path = require('path');

const app = express();
const port = 3000;

/* GET home page. */
// router.get('/', function (req, res, next) {
// 	res.render('index', { title: 'Express' });
// });
// Using the static path.join to show that we are working with the parenting directory
// Middleware
router.use(express.static(path.join(__dirname, '..')));

// routing to another "landing page"
router.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// GET with routing params
// app.get('/class/:id', (req, res) => {
// 	const studentId = req.params.id;
// 	res.send(`The id is: ${req.params}`);
// });

module.exports = router;

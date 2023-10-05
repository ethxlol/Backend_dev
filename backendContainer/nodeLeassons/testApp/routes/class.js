const express = require('express');

const app = express();
const port = 3000;

app.get('/class/:id', (req, res) => {
	console.log(req.params);
});

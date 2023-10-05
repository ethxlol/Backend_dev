const http = require('http');
const fs = require('fs');
const howManyPizza = require('how-many-pizza');

http
	.createServer((req, res) => {
		if (req.url === '/api/howManyPizza' && req.method === 'GET') {
			let rawdata = fs.readFileSync('./peopleNumber.json');
			let people = JSON.parse(rawdata);
			rawdata = fs.readFileSync('./piecesPerPerson.json');
			let piecesPerPerson = JSON.parse(rawdata);
			rawdata = fs.readFileSync('./piecesNumber.json');
			let pieces = JSON.parse(rawdata);

			res.setHeader('Content-Type', 'text/plain');
			res.write(howManyPizza(people, piecesPerPerson, pieces).toString());
			res.end();
		} else if (req.url === '/api/peopleNumber' && req.method === 'POST') {
			let data = '';
			req.on('data', (chunk) => {
				data += chunk;
			});
			req.on('end', () => {
				fs.writeFileSync('./peopleNumber.json', data);
				res.end('Data saved successfully!');
			});
		} else if (req.url === '/api/piecesPerPerson' && req.method === 'POST') {
			let data = '';
			req.on('data', (chunk) => {
				data += chunk;
			});
			req.on('end', () => {
				fs.writeFileSync('./piecesPerPerson.json', data);
				res.end('Data saved successfully!');
			});
		} else if (req.url === '/api/piecesNumber' && req.method === 'POST') {
			let data = '';
			req.on('data', (chunk) => {
				data += chunk;
			});
			req.on('end', () => {
				fs.writeFileSync('./piecesNumber.json', data);
				res.end('Data saved successfully!');
			});
		} else {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not Found');
		}
	})
	.listen(8080);

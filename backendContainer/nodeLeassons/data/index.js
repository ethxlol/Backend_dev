const http = require('http');
const fs = require('fs');
http
	.createServer((req, res) => {
		if (req.url === '/api/secret' && req.method == 'GET') {
			let rawdata = fs.readFileSync('./secretNumbers.json');
			let secret = JSON.parse(rawdata);
			res.write(secret.toString());
		} else if (req.url === '/api/secret' && req.method == 'POST') {
			let data = '';
			req.on('data', (chunk) => {
				data += chunk;
			});
			req.on('end', () => {
				let rawdata = fs.readFileSync('./secretNumbers.json');
				let secret = JSON.parse(rawdata);
				const newSecret = secret.concat([parseInt(data)]);
				fs.writeFileSync('./secretNumbers.json', JSON.stringify(newSecret));
				res.end();
			});
			// The even url will show the even indexes not the even numbers in the array so index 0,2,4,6
		} else if (req.method == 'GET' && req.url == '/api/even') {
			let rawdata = fs.readFileSync('./secretNumbers.json');
			let secret = JSON.parse(rawdata);
			const evenSecret = secret.filter((_, i) => i % 2 == 0);
			res.write(evenSecret.toString());
		} else if (req.method == 'GET') {
			res.write('Hello World!');
		}
		res.end();
	})
	.listen(8080);

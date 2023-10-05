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
		} else if (req.method == 'GET') {
			res.write('Hello World!');
		}
		res.end();
	})
	.listen(8080);

class CookieJar {
	constructor(numCookies, typeCookies) {
		this.numCookies = numCookies;
		this.typeCookies = typeCookies;
	}
	reqCookies() {
		if (this.numCookies > 0) {
			this.numCookies--;
			console.log('One cookie taken, remaining cookies:', this.numCookies);
		} else {
			console.log('No more cookies left!');
		}
	}
	cookieType() {
		this.typeCookies = prompt('What kind of cookies are you adding?: ');
	}
}

// const newNumber = new CookieJar(10, 'Chocolate Chip');
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());
// console.log(newNumber.reqCookies());

// const obj1 = new CookieJar();

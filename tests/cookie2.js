class CookieJar {
	constructor() {
		this.cookies = {};
	}

	reqCookies(type) {
		if (type in this.cookies) {
			if (this.cookies[type] > 0) {
				this.cookies[type]--;
				console.log(`One ${type} cookie taken. Remaining ${type} cookies: ${this.cookies[type]}`);
				alert(`One ${type} cookie taken. Remaining ${type} cookies: ${this.cookies[type]}`);
			} else {
				console.log(`No more ${type} cookies left!`);
			}
		} else {
			console.log(`Invalid cookie type: ${type}`);
		}
	}

	addCookies() {
		const type = prompt('What kind of cookies are you adding?');
		const numCookies = parseInt(prompt('How many cookies are you adding?'));

		if (type && numCookies > 0) {
			if (type in this.cookies) {
				this.cookies[type] += numCookies;
			} else {
				this.cookies[type] = numCookies;
			}
			console.log(
				`Added ${numCookies} ${type} cookies. Total ${type} cookies: ${this.cookies[type]}`
			);
			this.createCookieButton(type);
		} else {
			console.log('Invalid input for adding cookies.');
		}
	}

	createCookieButton(type) {
		const cookieButtonsContainer = document.getElementById('cookieButtons');
		const buttonContainer = document.createElement('div');
		buttonContainer.classList.add('d-inline-flex');
		const button = document.createElement('button');
		button.textContent = `Take ${type} Cookie`;
		button.classList.add('cookieButton', 'btn', 'btn-secondary');
		button.addEventListener('click', () => {
			this.reqCookies(type);
		});
		buttonContainer.appendChild(button);
		cookieButtonsContainer.appendChild(buttonContainer);
	}
}

const cookieJar = new CookieJar();

const addCookiesButton = document.getElementById('addCookiesButton');
addCookiesButton.addEventListener('click', function () {
	cookieJar.addCookies();
});

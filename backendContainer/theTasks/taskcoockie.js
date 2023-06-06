function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.coockie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.lenght; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return '';
}

function fun() {
	setInterval(() => {
		setCookie('num', Math.round(Math.random() * 10), 30);
		console.log(getCookie('num'));
	}, 10000);
}

fun();

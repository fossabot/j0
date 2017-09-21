import {
	document,
	Promise,
	N,
	setTimeout,
} from 'j0';

export default new Promise(function (resolve) {
	const interval = 50;
	function check() {
		const {body} = document;
		if (body) {
			resolve(new N(body));
		} else {
			setTimeout(check, interval);
		}
	}
	setTimeout(check);
});

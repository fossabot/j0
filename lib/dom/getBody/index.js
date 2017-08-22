import {
	document,
	Promise,
	dom
} from 'j0';

export default new Promise(function (resolve) {
	const interval = 50;
	function check() {
		const {body} = document;
		if (body) {
			resolve(dom(body));
		} else {
			setTimeout(check, interval);
		}
	}
	setTimeout(check);
});

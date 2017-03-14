import Promise from '../Promise';
import setTimeout from '../setTimeout';
import document from '../document';

const INTERVAL = 100;

export default new Promise(function (resolve) {
	function get() {
		const {body} = document;
		if (body) {
			resolve(body);
		} else {
			setTimeout(get, INTERVAL);
		}
	}
	get();
});

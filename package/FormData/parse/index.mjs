import FormData from '..';
import trim from '../../String/trim';
import forEach from '../../Array/forEach';
import decodeURIComponent from '../../decodeURIComponent';
function parse(body) {
	const form = new FormData();
	forEach(trim(body).split('&'), function (data) {
		if (data) {
			let [name, ...parts] = data.split('=');
			name = decodeURIComponent(name.replace(/\+/g, ' '));
			parts = decodeURIComponent(parts.join('=').replace(/\+/g, ' '));
			form.append(name, parts);
		}
	});
	return form;
}
export default parse;

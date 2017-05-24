import trim from '../String/trim';
import {
	decodeURIComponent,
	FormData
} from 'j0';
function parse(body, form = new FormData()) {
	trim(body).split('&')
	.forEach(function (data) {
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

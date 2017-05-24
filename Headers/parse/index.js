import {Headers} from 'j0';
import trim from '../../String/trim';
function parse(rawHeaders) {
	const headers = new Headers();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/)
	.forEach(function (line) {
		const [key, ...parts] = line.split(':');
		if (key) {
			headers.append(trim(key), trim(parts.join(':')));
		}
	});
	return headers;
}
export default parse;

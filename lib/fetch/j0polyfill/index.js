import Request from '../../Request/j0polyfill/index.js';
import Response from '../../Response/j0polyfill/index.js';
import {
	parseHeaders,
	isUndefined,
	XMLHttpRequest,
	Promise
} from 'j0';

function fetch(input, init) {
	return new Promise(function (resolve, reject) {
		const request = new Request(input, init);
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			const options = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: parseHeaders(xhr.getAllResponseHeaders() || '')
			};
			options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
			const body = 'response' in xhr ? xhr.response : xhr.responseText;
			resolve(new Response(body, options));
		};
		xhr.onerror = function () {
			reject(new TypeError('Network request failed'));
		};
		xhr.ontimeout = function () {
			reject(new TypeError('Network request failed'));
		};
		xhr.open(request.method, request.url, true);
		if (request.credentials === 'include') {
			xhr.withCredentials = true;
		}
		xhr.responseType = 'blob';
		for (const [name, value] of request.headers.entries()) {
			xhr.setRequestHeader(name, value);
		}
		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}
export default fetch;

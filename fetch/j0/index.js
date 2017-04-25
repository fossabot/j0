import isUndefined from '../../isUndefined';
import forEach from '../../Array/forEach';
import Request from '../../Request/j0';
import Response from '../../Response/j0';
import parseHeaders from '../../Headers/parse';
import Promise from '../../Promise';
import XMLHttpRequest from '../../XMLHttpRequest';

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
		forEach(request.headers, function ([name, value]) {
			xhr.setRequestHeader(name, value);
		});
		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}
export default fetch;

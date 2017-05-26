import Body from '../../Body/j0polyfill';
import Headers from '../../Headers/j0polyfill';

const minOkStatus = 200;
const maxOkStatus = 300;
const redirectStatuses = [301, 302, 303, 307, 308];

class Response extends Body {

	constructor(body, init = {}) {
		super();
		this.type = 'default';
		this.status = 'status' in init ? init.status : minOkStatus;
		this.ok = this.status >= minOkStatus && this.status < maxOkStatus;
		this.statusText = 'statusText' in init ? init.statusText : 'OK';
		this.headers = new Headers(init.headers);
		this.url = init.url || '';
		this.initBody(body);
	}

	static error() {
		const response = new Response(null, {
			status: 0,
			statusText: ''
		});
		response.type = 'error';
		return response;
	}

	clone() {
		return new Response(this.bodyInit, {
			status: this.status,
			statusText: this.statusText,
			headers: new Headers(this.headers),
			url: this.url
		});
	}

	redirect(url, status) {
		if (redirectStatuses.indexOf(status) < 0) {
			throw new RangeError('Invalid status code');
		}
		return new Response(null, {
			status: status,
			headers: {location: url}
		});
	}

}

export default Response;

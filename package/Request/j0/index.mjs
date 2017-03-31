import Body from '../../Body/j0';
import Headers from '../../Headers/j0';

class Request extends Body {

	constructor(input, init = {}) {
		let {body} = init;
		super();
		if (input instanceof Request) {
			body = this.inheritFrom(input, body, init);
		} else {
			this.url = String(input);
		}
		this.credentials = init.credentials || this.credentials || 'omit';
		if (init.headers || !this.headers) {
			this.headers = new Headers(init.headers);
		}
		this.method = (init.method || this.method || 'GET').toUpperCase();
		this.mode = init.mode || this.mode || null;
		this.referrer = null;
		if ((this.method === 'GET' || this.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		this.initBody(body);
	}

	inheritFrom(input, body, {headers}) {
		if (input.bodyUsed) {
			throw new TypeError('Already read');
		}
		this.url = input.url;
		this.credentials = input.credentials;
		if (!headers) {
			this.headers = new Headers(input.headers);
		}
		this.method = input.method;
		this.mode = input.mode;
		if (!body && input.bodyInit !== null) {
			body = input.bodyInit;
			input.bodyUsed = true;
		}
		return body;
	}

	clone() {
		return new Request(this, {body: this.bodyInit});
	}

}

export default Request;

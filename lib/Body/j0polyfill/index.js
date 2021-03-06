import {
	JSON,
	Blob,
	ArrayBuffer,
	DataView,
	TypeError,
	Uint8Array,
	Promise,
	readBlob,
	FormData,
	parseFormData,
	isString,
	URLSearchParams,
	isInstanceOf,
	isArrayBufferView,
	arrayBufferToString
} from 'j0';

function cloneBuffer(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	const view = new Uint8Array(buf.byteLength);
	view.set(new Uint8Array(buf));
	return view.buffer;
}

class Body {

	constructor() {
		this.bodyUsed = false;
	}

	get isUsed() {
		if (this.bodyUsed) {
			return Promise.reject(new TypeError('Already used'));
		}
		this.bodyUsed = true;
	}

	initBody(body) {
		this.bodyInit = body;
		if (!body) {
			this.bodyText = '';
		} else if (isString(body)) {
			this.bodyText = body;
		} else if (isInstanceOf(body, Blob)) {
			this.bodyBlob = body;
		} else if (isInstanceOf(body, FormData)) {
			this.bodyFormData = body;
		} else if (isInstanceOf(body, URLSearchParams)) {
			this.bodyText = body.toString();
		} else if (isInstanceOf(body, DataView)) {
			this.bodyArrayBuffer = cloneBuffer(body.buffer);
			// IE 10-11 can't handle a DataView body.
			this.bodyInit = new Blob([this.bodyArrayBuffer]);
		} else if (isInstanceOf(body, ArrayBuffer) || isArrayBufferView(body)) {
			this.bodyArrayBuffer = cloneBuffer(body);
		} else {
			throw new Error('unsupported BodyInit type');
		}
		if (!this.headers.get('content-type')) {
			if (isString(body)) {
				this.headers.set('content-type', 'text/plain;charset=UTF-8');
			} else if (this.bodyBlob && this.bodyBlob.type) {
				this.headers.set('content-type', this.bodyBlob.type);
			} else if (body instanceof URLSearchParams) {
				this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
			}
		}
	}

	arrayBuffer() {
		if (this.bodyArrayBuffer) {
			return this.isUsed || Promise.resolve(this.bodyArrayBuffer);
		}
		return this.blob()
		.then(function (blob) {
			return readBlob(blob, 'ArrayBuffer');
		});
	}

	blob() {
		const rejected = this.isUsed;
		if (rejected) {
			return rejected;
		}
		if (this.bodyBlob) {
			return Promise.resolve(this.bodyBlob);
		} else if (this.bodyArrayBuffer) {
			return Promise.resolve(new Blob([this.bodyArrayBuffer]));
		} else if (this.bodyFormData) {
			throw new Error('could not read FormData body as blob');
		} else {
			return Promise.resolve(new Blob([this.bodyText]));
		}
	}

	text() {
		const rejected = this.isUsed;
		if (rejected) {
			return rejected;
		}
		if (this.bodyBlob) {
			return readBlob(this.bodyBlob, 'Text');
		} else if (this.bodyArrayBuffer) {
			return Promise.resolve(arrayBufferToString(this.bodyArrayBuffer));
		} else if (this.bodyFormData) {
			throw new Error('could not read FormData body as text');
		} else {
			return Promise.resolve(this.bodyText);
		}
	}

	formData() {
		return this.text()
		.then(parseFormData);
	}

	json() {
		return this.text()
		.then(JSON.parse);
	}

}

export default Body;

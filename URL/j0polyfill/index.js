import {
	URL as _URL,
	URLSearchParams,
	Object,
	basicURLParser,
	TypeError,
	isUndefined
} from 'j0';

class URL {

	// https://url.spec.whatwg.org/#url-class
	constructor(url, base) {
		// Let parsedBase be null.
		let parsedBase = null;
		if (!isUndefined(base)) {
			// If base is given, then:
			// Let parsedBase be the result of running the basic URL parser
			// on base.
			parsedBase = basicURLParser(base);
			// If parsedBase is failure, then throw a TypeError exception.
			if (!parsedBase) {
				throw new TypeError('Invalid base');
			}
		}
		// Let parsedURL be the result of running the basic URL parser on url
		// with parsedBase.
		const parsedURL = basicURLParser(url, parsedBase);
		// If parsedURL is failure, throw a TypeError exception.
		if (!parsedURL) {
			throw new TypeError('Invalid url');
		}
		// Let query be parsedURL’s query, if that is non-null, and the empty
		// string otherwise.
		// Let result be a new URL object.
		// Set result’s url to parsedURL.
		// Set result’s query object to a new URLSearchParams object using
		// query, and then set that query object’s url object to result.
		// Return result.
		Object.assign(
			this,
			parsedURL,
			{query: new URLSearchParams(parsedURL.query)}
		);
	}

}

Object.defineProperties(URL, {
	createObjectURL: {value: _URL.createObjectURL},
	revokeObjectURL: {value: _URL.revokeObjectURL}
});

export default URL;

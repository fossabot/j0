// https://url.spec.whatwg.org/#concept-basic-url-parser
import {
	isUndefined,
	Object
} from 'j0';

import {
	C0ControlOrSpace,
	ASCIITabOrNewline,
	ASCIIAlpha,
	ASCIIAlphanumeric,
	userinfoPercentEncodeSet
} from '../codePoints';

import {
	EOF,
	FAILURE,
	STATE_SCHEME_START,
	STATE_SCHEME,
	STATE_NO_SCHEME,
	STATE_FILE,
	STATE_SPECIAL_RELATIVE_OR_AUTHORITY,
	STATE_SPECIAL_AUTHORITY_SLASHES,
	STATE_PATH_OR_AUTHORITY,
	STATE_CANNOT_BE_A_BASE_URL_PATH,
	STATE_FRAGMENT,
	STATE_RELATIVE,
	STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES,
	STATE_RELATIVE_SLASH,
	STATE_QUERY,
	STATE_PATH,
	STATE_AUTHORITY,
	STATE_HOST,
	STATE_HOSTNAME,
	STATE_FILE_HOST,
	STATE_PORT,
	ENCODING_REPLACEMENT,
	ENCODING_UTF16BE,
	ENCODING_UTF16LE,
	ENCODING_UTF8,
	SCHEME_FILE,
	SPECIAL_SCHEMES,
	FLAG_CANNOT_BE_A_BASE_URL
} from './constants';

import validationError from './validationError';
import parseHost from './parseHost';
import utf8PercentEncode from './utf8PercentEncode';

function isSpecialScheme(scheme) {
	return SPECIAL_SCHEMES.includes(scheme);
}

function isSpecialURL({scheme}) {
	return isSpecialScheme(scheme);
}

function getAnOutputEncoding(encoding) {
	switch (encoding) {
	case ENCODING_REPLACEMENT:
	case ENCODING_UTF16BE:
	case ENCODING_UTF16LE:
		return ENCODING_UTF8;
	default:
		return encoding;
	}
}

function isIncludesCredentials() {
	return true;
}

function basicURLParser(input, options = {}) {
	const {
		base = null,
		state: stateOverride
	} = options;
	let {
		url,
		encoding
	} = options;
	const stateOverrideIsGiven = !isUndefined(stateOverride);
	if (isUndefined(url)) {
		url = {};
		if (C0ControlOrSpace.test(input)) {
			validationError('C0ControlOrSpace', input);
			input = C0ControlOrSpace.removeLeadingAndTrailing(input);
		}
	}
	if (ASCIITabOrNewline.test(input)) {
		validationError('ASCIITabOrNewline', input);
		input = ASCIITabOrNewline.remove(input);
	}
	let state = stateOverrideIsGiven ? stateOverride : STATE_SCHEME_START;
	encoding = isUndefined(encoding) ? ENCODING_UTF8 : getAnOutputEncoding(encoding);
	let buffer = '';
	let atFlag;
	let braketFlag;
	let passwordTokenSeenFlag;
	function append(c) {
		buffer += c.toLowerCase();
	}
	for (let pointer = 0, {length} = input; pointer < length; pointer++) {
		const c = input[pointer] || EOF;
		const remaining = input.slice(pointer);
		switch (state) {
		case STATE_SCHEME_START:
			if (ASCIIAlpha.test(c)) {
				append(c);
				state = STATE_SCHEME;
			} else if (stateOverrideIsGiven) {
				state = STATE_NO_SCHEME;
			} else {
				validationError('SCHEME_START', input);
				return FAILURE;
			}
			break;
		case STATE_SCHEME:
			if (ASCIIAlphanumeric.test(c)) {
				append(c);
			} else if (c === ':') {
				if (stateOverrideIsGiven) {
					if (
						(isSpecialURL(url) && !isSpecialScheme(buffer)) ||
						(!isSpecialURL(url) && isSpecialScheme(buffer)) ||
						((isIncludesCredentials(url) || url.port) && buffer === SCHEME_FILE) ||
						(url.scheme === SCHEME_FILE && !url.host)
					) {
						return;
					}
				}
				url.scheme = buffer;
				buffer = '';
				if (stateOverrideIsGiven) {
					return;
				}
				if (url.scheme === SCHEME_FILE) {
					if (remaining.startsWith('//')) {
						validationError('SCHEME-1', input);
					}
					state = STATE_FILE;
				} else if (isSpecialURL(url) && base !== null && base.scheme === url.scheme) {
					state = STATE_SPECIAL_RELATIVE_OR_AUTHORITY;
				} else if (isSpecialURL(url)) {
					state = STATE_SPECIAL_AUTHORITY_SLASHES;
				} else if (remaining.startsWith('/')) {
					state = STATE_PATH_OR_AUTHORITY;
				} else {
					url[FLAG_CANNOT_BE_A_BASE_URL] = true;
					url.path += '';
					state = STATE_CANNOT_BE_A_BASE_URL_PATH;
				}
			} else if (stateOverrideIsGiven) {
				validationError('SCHEME-2', input);
				return FAILURE;
			} else {
				buffer = '';
				state = STATE_NO_SCHEME;
				pointer = 0;
			}
			break;
		case STATE_NO_SCHEME:
			if (base === null || base[FLAG_CANNOT_BE_A_BASE_URL] && c !== '#') {
				validationError('NO_SCHEME', input);
				return FAILURE;
			} else if (base[FLAG_CANNOT_BE_A_BASE_URL] && c === '#') {
				url.scheme = base.scheme;
				url.path = base.path;
				url.query = base.query;
				url.fragment = '';
				url[FLAG_CANNOT_BE_A_BASE_URL] = true;
				state = STATE_FRAGMENT;
			} else if (base.scheme === SCHEME_FILE) {
				state = STATE_FILE;
				pointer--;
			} else {
				state = STATE_RELATIVE;
				pointer--;
			}
			break;
		case STATE_SPECIAL_RELATIVE_OR_AUTHORITY:
			if (c === '/' && remaining.startsWith('/')) {
				state = STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES;
				pointer++;
			} else {
				validationError('SPECIAL_RELATIVE_OR_AUTHORITY', input);
				state = STATE_RELATIVE;
				pointer--;
			}
			break;
		case STATE_RELATIVE:
			url.scheme = base.scheme;
			switch (c) {
			case EOF:
				url.username = base.username;
				url.password = base.password;
				url.host = base.host;
				url.port = base.port;
				url.path = base.path;
				url.query = base.query;
				break;
			case '/':
				state = STATE_RELATIVE_SLASH;
				break;
			case '?':
				url.username = base.username;
				url.password = base.password;
				url.host = base.host;
				url.port = base.port;
				url.path = base.path;
				url.query = '';
				state = STATE_QUERY;
				break;
			case '#':
				url.username = base.username;
				url.password = base.password;
				url.host = base.host;
				url.port = base.port;
				url.path = base.path;
				url.query = base.query;
				url.fragment = '';
				state = STATE_FRAGMENT;
				break;
			default:
				if (isSpecialURL(url) && c === '\\') {
					validationError('RELATIVE', input);
					state = STATE_RELATIVE_SLASH;
				} else {
					url.username = base.username;
					url.password = base.password;
					url.host = base.host;
					url.port = base.port;
					url.path = base.path;
					url.path.removeLastItem();
					state = STATE_PATH;
					pointer--;
				}
			}
			break;
		case STATE_RELATIVE_SLASH:
			if (isSpecialURL(url) && (c === '/' || c === '\\')) {
				if (c === '\\') {
					validationError('RELATIVE_SLASH', input);
				}
				state = STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES;
			} else if (c === '/') {
				state = STATE_AUTHORITY;
			} else {
				url.username = base.username;
				url.password = base.password;
				url.host = base.host;
				url.port = base.port;
				state = STATE_PATH;
				pointer--;
			}
			break;
		case STATE_SPECIAL_AUTHORITY_SLASHES:
			if (c === '/' && remaining.startsWith('/')) {
				state = STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES;
				pointer++;
			} else {
				validationError('SPECIAL_AUTHORITY_SLASHES', input);
				state = STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES;
				pointer--;
			}
			break;
		case STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES:
			if (c !== '/' && c !== '\\') {
				state = STATE_AUTHORITY;
			} else {
				validationError('SPECIAL_AUTHORITY_IGNORE_SLASHES', input);
			}
			break;
		case STATE_AUTHORITY:
			if (c === '@') {
				validationError('AUTHORITY-1', input);
				if (atFlag) {
					buffer = `%40${buffer}`;
				}
				atFlag = true;
				for (const codePoint of buffer) {
					if (codePoint === ':' && !passwordTokenSeenFlag) {
						passwordTokenSeenFlag = true;
					} else {
						const encodedCodePoints = utf8PercentEncode(codePoint, userinfoPercentEncodeSet);
						if (passwordTokenSeenFlag) {
							url.password += encodedCodePoints;
						} else {
							url.username += encodedCodePoints;
						}
					}
				}
				buffer = '';
			} else if (
				(c === EOF || c === '/' || c === '?' || c === '#') ||
				(isSpecialURL(url) && c === '\\')
			) {
				if (atFlag && !buffer) {
					validationError('AUTHORITY-2', input);
					return FAILURE;
				}
				pointer -= buffer.length + 1;
				buffer = '';
				state = STATE_HOST;
			} else {
				buffer += c;
			}
			break;
		case STATE_HOST:
		case STATE_HOSTNAME:
			if (stateOverrideIsGiven && url.scheme === SCHEME_FILE) {
				pointer--;
				state = STATE_FILE_HOST;
			} else if (c === ':' && !braketFlag) {
				if (!buffer) {
					validationError('HOST-1', input);
					return FAILURE;
				}
				const host = parseHost(buffer, isSpecialURL(url));
				if (host === FAILURE) {
					return FAILURE;
				}
				url.host = host;
				buffer = '';
				state = STATE_PORT;
			}
			break;
		default:
			validationError('UNKNOWN', input);
			return;
		}
	}
	return url;
}
Object.assign(basicURLParser, {
	ENCODING_UTF8,
	FAILURE
});
export default basicURLParser;

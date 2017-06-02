import {
	Symbol
} from 'j0';

export const EOF = null;
export const FAILURE = null;

export const STATE_SCHEME_START = Symbol();
export const STATE_SCHEME = Symbol();
export const STATE_NO_SCHEME = Symbol();
export const STATE_FILE = Symbol();
export const STATE_SPECIAL_RELATIVE_OR_AUTHORITY = Symbol();
export const STATE_SPECIAL_AUTHORITY_SLASHES = Symbol();
export const STATE_PATH_OR_AUTHORITY = Symbol();
export const STATE_CANNOT_BE_A_BASE_URL_PATH = Symbol();
export const STATE_FRAGMENT = Symbol();
export const STATE_RELATIVE = Symbol();
export const STATE_SPECIAL_AUTHORITY_IGNORE_SLASHES = Symbol();
export const STATE_RELATIVE_SLASH = Symbol();
export const STATE_QUERY = Symbol();
export const STATE_PATH = Symbol();
export const STATE_AUTHORITY = Symbol();
export const STATE_HOST = Symbol();
export const STATE_HOSTNAME = Symbol();
export const STATE_FILE_HOST = Symbol();
export const STATE_PORT = Symbol();

export const ENCODING_REPLACEMENT = Symbol();
export const ENCODING_UTF16BE = Symbol();
export const ENCODING_UTF16LE = Symbol();
export const ENCODING_UTF8 = Symbol();

export const SCHEME_FTP = 'ftp';
export const SCHEME_FILE = 'file';
export const SCHEME_GOPHER = 'gopher';
export const SCHEME_HTTP = 'http';
export const SCHEME_HTTPS = `${SCHEME_HTTP}s`;
export const SCHEME_WS = 'ws';
export const SCHEME_WSS = `${SCHEME_WS}s`;
export const SPECIAL_SCHEMES = [
	SCHEME_FTP,
	SCHEME_FILE,
	SCHEME_GOPHER,
	SCHEME_HTTP,
	SCHEME_HTTPS,
	SCHEME_WS,
	SCHEME_WSS
];

export const FLAG_CANNOT_BE_A_BASE_URL = Symbol();

var addEventListener = require('./addEventListener');
var isObject = require('./isObject');
var forEachKey = require('./forEachKey');
var XMLHttpRequest = require('./XMLHttpRequest');
var Error = require('./Error');
var Promise = require('./Promise');
var JSON = require('./JSON');
var FormData = require('./FormData');
var splice = require('./splice');
var shift = require('./shift');
var push = require('./push');
var forEach = require('./forEach');

var S_error = 'error';
var S_abort = 'abort';
var S_progress = 'progress';
var S_length = 'length';

var queues = {};
var maxRequestCount = 3;

/**
 * XMLHttpRequest
 * @param  {Object} params
 * @return {Promise}
 */
var http = module.exports = function (params) {
	var id = params.id || 'http';
	var queue = queues[id] = queues[id] || [];
	var abort;
	var send;
	var promise = new Promise(function (resolve, reject) {
		send = resolve;
		abort = reject;
	}).then(function () {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			var url = params.url;
			var method = params.method;
			var data = params.data;
			var queryParameters = [];
			var onError = function (event) {
				reject(event[S_error]);
			};
			var error;
			addEventListener(xhr, 'load', function () {
				var xhr = this;
				var contentType;
				data = xhr.response;
				if (!xhr.responseType) {
					contentType = xhr.getResponseHeader('Content-Type');
					if (contentType && data) {
						contentType.replace(/\/(\w+)/, function (match, type) {
							switch (type) {
								case 'json':
									data = JSON.parse(data);
									break;
							}
						});
					}
				}
				if (400 <= xhr.status) {
					error = new Error();
					error.xhr = xhr;
					error.status = xhr.status;
					error.url = params.url;
					error.data = data;
					reject(error);
				} else {
					resolve(data);
				}
			});
			addEventListener(xhr, S_error, onError);
			addEventListener(xhr, S_abort, onError);
			if (params.onUploadProgress) {
				addEventListener(xhr.upload, S_progress, params.onUploadProgress);
			}
			if (params.onProgress) {
				addEventListener(xhr, S_progress, params.onProgress);
			}
			if (params.onResponse) {
				addEventListener(xhr, 'readystatechange', function (event) {
					var xhr = this;
					switch (xhr.readyState) {
						case xhr.HEADERS_RECEIVED:
							if (params.onResponse) {
								params.onResponse(event, xhr);
							}
							break;
					}
				});
			}
			abort = function () {
				xhr.abort();
			};
			forEachKey(params.params, function (value, key) {
				push(queryParameters, key + '=' + value);
			});
			if (0 < queryParameters[S_length]) {
				url += '?' + queryParameters.join('&');
			}
			xhr.open(method, url);
			if (params.overrideMimeType && xhr.overrideMimeType) {
				xhr.overrideMimeType(params.overrideMimeType);
			}
			if (params.responseType) {
				xhr.responseType = params.responseType;
			}
			xhr.withCredentials = params.withCredentials;
			forEachKey(params.headers, function (value, key) {
				xhr.setRequestHeader(key, value);
			});
			if (!(data instanceof FormData)) {
				if (data && isObject(data)) {
					data = JSON.stringify(data);
				}
			}
			if (params.onSendStart) {
				params.onSendStart(xhr);
			}
			xhr.send(data);
		});
	});
	promise.send = send;
	promise.abort = function () {
		abort();
	};
	promise.catch(function () {}).then(function () {
		var promise = shift(queue);
		if (promise) {
			promise.send();
		}
	});
	if (maxRequestCount < queue[S_length]) {
		push(queue, promise);
	} else {
		send();
	}
	return promise;
};

http.setMaxRequestCount = function (newMaxRequestCount) {
	maxRequestCount = newMaxRequestCount;
};

http.abort = function () {
	forEachKey(queues, function (queue, id, queues) {
		forEach(splice(queue, 0, queue[S_length]), function (promise) {
			promise.abort();
		});
		delete queues[id];
	});
};

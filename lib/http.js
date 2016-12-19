var addEventListener = require('./addEventListener');
var isObject = require('./isObject');
var forEachKey = require('./forEachKey');
var XMLHttpRequest = require('./XMLHttpRequest');
var Error = require('./Error');
var Promise = require('./Promise');
var JSON = require('./JSON');
var FormData = require('./FormData');
var shift = require('./shift');
var push = require('./push');

var S_ERROR = 'error';
var S_ABORT = 'abort';
var S_PROGRESS = 'progress';

var queues = {};

/**
 * XMLHttpRequest
 * @param  {Object} params
 * @return {Promise}
 */
module.exports = function (params) {
	var abort;
	var queue;
	var promise = new Promise(function (resolve) {
		var id = params.id;
		if (id) {
			queue = queues[id] = queues[id] || [];
			if (3 < queue.length) {
				push(queue, resolve);
			} else {
				resolve();
			}
		} else {
			resolve();
		}
	}).then(function () {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			var url = params.url;
			var method = params.method;
			var data = params.data;
			var queryParameters = [];
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
					error.status = xhr.status;
					error.url = params.url;
					error.data = data;
					reject(error);
				} else {
					resolve(data);
				}
			});
			addEventListener(xhr, S_ERROR, reject);
			addEventListener(xhr, S_ABORT, reject);
			if (params.onUploadProgress) {
				addEventListener(xhr.upload, S_PROGRESS, params.onUploadProgress);
			}
			if (params.onProgress) {
				addEventListener(xhr, S_PROGRESS, params.onProgress);
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
				queryParameters.push(key + '=' + value);
			});
			if (0 < queryParameters.length) {
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
			return xhr;
		});
	});
	promise.abort = function () {
		abort();
	};
	promise.then(function () {
		if (queue && 0 < queue.length) {
			shift(queue).call();
		}
	}, function () {
		if (queue && 0 < queue.length) {
			shift(queue).call();
		}
	});
	return promise;
};

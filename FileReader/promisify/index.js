import {Promise} from '../..';

function promisify(reader) {
	return new Promise(function (resolve, reject) {
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject(reader.error);
		};
	});
}

export default promisify;

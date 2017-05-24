import {FileReader} from '..';
function readBlob(data, type) {
	const reader = new FileReader();
	const promise = new Promise(function (resolve, reject) {
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject(reader.error);
		};
		switch (type) {
		case 'ArrayBuffer':
			reader.readAsArrayBuffer(data);
			break;
		case 'BinaryString':
			reader.readAsBinaryString(data);
			break;
		case 'DataURL':
			reader.readAsDataURL(data);
			break;
		default:
			reader.readAsText(data);
			break;
		}
	});
	promise.reader = reader;
	return promise;
}
export default readBlob;

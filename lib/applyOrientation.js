module.exports = function (blob) {
	var Promise = require('./Promise');
	return new Promise(function (resolve) {
		var readExif = require('./readExif');
		var onError = require('./onError');
		var orientation;
		var exifData = [];
		readExif(blob).then(function (eData) {
			var find = require('./find');
			var blobToImage = require('./blobToImage');
			exifData = eData;
			orientation = find(eData, function (item) {
				return item[0] === 0x112;
			});
			if (orientation) {
				orientation = orientation[1][0];
			} else {
				orientation = 1;
			}
			return 0 < orientation && orientation < 9 ? blobToImage(blob) : Promise.reject();
		}).then(function (img) {
			var canvasContext = require('./canvasContext');
			var createElement = require('./createElement');
			var naturalWidth = require('./naturalWidth');
			var naturalHeight = require('./naturalHeight');
			var imageWidth = naturalWidth(img);
			var imageHeight = naturalHeight(img);
			var N_PI = require('./Math').PI;
			var S_WIDTH = 'width';
			var S_HEIGHT = 'height';
			var rot90 = 4 < orientation;
			var canvas = createElement({
				t: 'canvas',
				a: rot90 ? [
					[S_WIDTH, imageHeight],
					[S_HEIGHT, imageWidth]
				] : [
					[S_WIDTH, imageWidth],
					[S_HEIGHT, imageHeight]
				]
			});
			var ctx = canvasContext(canvas);
			switch (orientation) {
				case 1:
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, 0, 0, imageWidth, imageHeight);
					break;
				case 2:
					ctx.scale(-1, 1);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, -imageWidth, 0, imageWidth, imageHeight);
					break;
				case 3:
					ctx.rotate(N_PI);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, -imageWidth, -imageHeight, imageWidth, imageHeight);
					break;
				case 4:
					ctx.scale(1, -1);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, 0, -imageHeight, imageWidth, imageHeight);
					break;
				case 5:
					ctx.rotate(N_PI * 1.5);
					ctx.scale(-1, 1);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, 0, 0, imageWidth, imageHeight);
					break;
				case 6:
					ctx.rotate(N_PI / 2);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, 0, -imageHeight, imageWidth, imageHeight);
					break;
				case 7:
					ctx.rotate(N_PI / 2);
					ctx.scale(-1, 1);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, -imageWidth, -imageHeight, imageWidth, imageHeight);
					break;
				case 8:
					ctx.rotate(N_PI * 1.5);
					ctx.drawImage(img, 0, 0, imageWidth, imageHeight, -imageWidth, 0, imageWidth, imageHeight);
					break;
			}
			return new Promise(function (resolve) {
				canvas.toBlob(resolve, 'image/jpeg');
			});
		}).catch(function (error) {
			onError(error);
			return blob;
		}).then(function (blob) {
			blob.metaData = exifData;
			resolve(blob);
		});
	});
};

var assert = require('assert');
var applyOrientation = require('../lib/applyOrientation');
var createObjectURL = require('../lib/createObjectURL');
var revokeObjectURL = require('../lib/revokeObjectURL');
var createElement = require('../lib/createElement');
var getContext = require('../lib/getContext');
var http = require('../lib/http');
var naturalWidth = require('../lib/naturalWidth');
var naturalHeight = require('../lib/naturalHeight');
var reduce = require('../lib/reduce');
var forEach = require('../lib/forEach');
var getAttribute = require('../lib/getAttribute');
var Math = require('../lib/Math');

var getImageData = function (orientation, middleware) {
	if (!middleware) {
		middleware = function (blob) {
			return blob;
		};
	}
	return http({
		method: 'GET',
		url: '/files/j0-' + orientation + '.jpg',
		responseType: 'blob'
	}).then(middleware).then(function (blob) {
		return new Promise(function (resolve, reject) {
			createElement({
				t: 'img',
				a: [
					['src', createObjectURL(blob)]
				],
				e: [
					['error', function (event) {
						reject(event.error);
					}],
					['load', function () {
						resolve(this);
					}]
				]
			});
		});
	}).then(function (image) {
		var ctx = getContext(createElement({
			t: 'canvas'
		}));
		var imageWidth = ctx.canvas.width = naturalWidth(image);
		var imageHeight = ctx.canvas.height = naturalHeight(image);
		ctx.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, imageWidth, imageHeight);
		revokeObjectURL(getAttribute(image, 'src'));
		return ctx.getImageData(0, 0, imageWidth, imageHeight).data;
	});
};

describe('applyOrientation', function () {

	var baseData;

	before(function (done) {
		getImageData(1).then(function (data) {
			baseData = data;
			done();
		}).catch(done);
	});

	forEach([1, 2, 3, 4, 5, 6, 7, 8], function (orientation) {
		it('should apply orientation ' + orientation, function (done) {
			getImageData(orientation, applyOrientation).then(function (data) {
				var sqrt = Math.sqrt;
				var sum = reduce(data, function (sum, value, index) {
					var d = value - baseData[index];
					return sum + sqrt(d * d);
				}, 0);
				assert.equal(sum / 60000 < 2, true);
				done();
			}).catch(done);
		});
	});

});

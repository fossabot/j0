module.exports = function (blob) {

	var Promise = require('./Promise');

	return new Promise(function (resolve, reject) {

		var createElement = require('./createElement');
		var createObjectURL = require('./createObjectURL');

		createElement({
			t: 'img',
			a: [
				['src', createObjectURL(blob)]
			],
			e: [
				['error', reject],
				['load', function () {
					var img = this;
					var getAttribute = require('./getAttribute');
					var revokeObjectURL = require('./revokeObjectURL');
					revokeObjectURL(getAttribute(img, 'src'));
					resolve(img);
				}]
			]
		});
	});

};

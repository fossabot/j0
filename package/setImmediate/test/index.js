import setImmediate from '..';
import Promise from '../../Promise';
import setTimeout from '../../setTimeout';

describe('setImmediate', function () {

	it('should call the function at end of current processes', function () {
		let order = 3;
		const expected = 36;
		return new Promise(function (resolve) {
			setImmediate(function () {
				order *= order;
			});
			order += order;
			setTimeout(resolve, 50);
		})
		.then(function () {
			assert.equal(order, expected);
		});
	});

});

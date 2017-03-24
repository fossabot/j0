import setImmediate from '..';
import setTimeout from '../../setTimeout';

it('should call the function at end of current processes', function (done) {
	let order = 3;
	const expected = 36;
	setImmediate(function () {
		order *= order;
	});
	order += order;
	setTimeout(function () {
		let error = null;
		try {
			assert.equal(order, expected);
		} catch (err) {
			error = err;
		}
		done(error);
	}, 50);
});

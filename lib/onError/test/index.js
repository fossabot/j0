import onError from '..';

describe('onError', function () {

	it('should call its listener', function () {
		let count = 0;
		function listener(x) {
			count += x;
		}
		onError.listener = listener;
		onError(1);
		onError(2);
		assert.equal(count, 3);
	});

});

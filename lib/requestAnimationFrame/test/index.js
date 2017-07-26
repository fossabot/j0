import {requestAnimationFrame} from 'j0';

describe('requestAnimationFrame', function () {

	it('should call the given function with timeStamp', async function () {
		const timeStamp = await new Promise(requestAnimationFrame);
		assert(0 < timeStamp, true);
	});

});

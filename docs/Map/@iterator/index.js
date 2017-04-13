(function(){
'use strict';

function generator() {
	return this.entries();
}

describe('Map/@iterator', function () {

	it('should return an iterator', function () {
		var data = [[1, 2], [3, 4]];
		var map = new Map(data);
		var iterator = generator.call(map);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next = iterator.next(),
			    value = _iterator$next.value,
			    done = _iterator$next.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, data);
	});
});
}())

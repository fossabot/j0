(function(){
'use strict';

function generator() {
	var _this = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this[index],
				done: length <= index++
			};
		}
	};
}

describe('Array/@iterator', function () {

	it('should return an iterator', function () {
		var array = [1, 2, 3];
		var iterator = generator.call(array);
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
		assert.deepEqual(results, array);
	});
});
}())

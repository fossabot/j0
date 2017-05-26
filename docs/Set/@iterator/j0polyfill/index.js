(function(){
'use strict';

function test(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Set.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var data = [1, 2];
			var set = new Set(data);
			var iterator = generator.call(set);
			var results = [];
			while (1) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, data);
		});
	});
}

function generator() {
	return this.values();
}

test(generator, 'Set.prototype[Symbol.iterator]#j0');
}())

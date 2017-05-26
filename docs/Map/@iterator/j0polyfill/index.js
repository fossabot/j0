(function(){
'use strict';

function test(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Map.prototype[Symbol.iterator]';


	describe(name, function () {

		it(name, function () {
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
}

function generator() {
	return this.entries();
}

test(generator, 'Map.prototype[Symbol.iterator]#j0');
}())

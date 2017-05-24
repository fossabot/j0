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

describe('NodeList/@iterator', function () {

	it('should create an iterator', function () {
		var parent = document.createElement('div');
		var expected = [document.createElement('div'), document.createElement('div')];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = expected[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var element = _step.value;

				parent.appendChild(element);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var iterator = generator.call(parent.childNodes);
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
		assert.deepEqual(results, expected);
	});
});
}())

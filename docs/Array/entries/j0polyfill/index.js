(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test(entries) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.entries';


	describe(name, function () {

		it('should return an iterator', function () {
			var array = [Math.random(), Math.random(), Math.random()];
			var iterator = entries.call(array);
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
			var expected = array.map(function (value, index) {
				return [index, value];
			});
			assert.deepEqual(results, expected);
		});
	});
}

var iteratorSymbol = Symbol.iterator;

var Iterator = function () {
	function Iterator(fn) {
		_classCallCheck(this, Iterator);

		this.next = fn;
	}

	_createClass(Iterator, [{
		key: iteratorSymbol,
		value: function value() {
			return this;
		}
	}]);

	return Iterator;
}();

function entries() {
	var _this = this;

	var index = 0;
	return new Iterator(function () {
		return {
			value: [index, _this[index]],
			done: _this.length < ++index
		};
	});
}

test(entries, 'Array.prototype.entries#j0');
}())

(function(){
'use strict';

function debounce(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this = this;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.call.apply(fn, [thisArg || _this].concat(args));
		}, delay);
	};
}

describe('debounce', function () {

	it('should call the function after the last call', function () {
		return new Promise(function (resolve) {
			var execute = debounce(function (value) {
				resolve(value);
			}, 50);
			execute(1);
			execute(2);
			execute(3);
		}).then(function (result) {
			assert.equal(result, 3);
		});
	});

	it('should call the function with its context', function () {
		return new Promise(function (resolve) {
			var execute = debounce(function (value) {
				resolve(this);
			}, 50);
			execute.call(1);
			execute.call(2);
			execute.call(3);
		}).then(function (result) {
			assert.equal(result, 3);
		});
	});
});
}())

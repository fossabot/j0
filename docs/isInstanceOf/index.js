(function(){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

describe('isInstanceOf', function () {

	it('should return true if the first argument is an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = new A();
		assert.equal(isInstanceOf(a, A), true);
	});

	it('should return false if the first argument is not an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = 0;
		assert.equal(isInstanceOf(a, A), false);
	});
});
}())

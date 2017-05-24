(function(){
'use strict';

function forEachKey(obj, fn, thisArg) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (fn.call(thisArg, obj[key], key, obj)) {
				return;
			}
		}
	}
}

function assign(target) {
	for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		sources[_key - 1] = arguments[_key];
	}

	sources.forEach(function (source) {
		forEachKey(source, function (value, key) {
			target[key] = value;
		});
	});
	return target;
}

describe('Object/assign', function () {
	it('should assign values', function () {
		var target = {
			a: 0,
			b: 0,
			c: 0
		};
		var src1 = { b: 1 };
		var src2 = {
			b: 2,
			c: 3
		};
		var returnValue = assign(target, src1, src2);
		var expected = {
			a: 0,
			b: 2,
			c: 3
		};
		assert.equal(target, returnValue);
		assert.deepEqual(returnValue, expected);
	});
});

describe('Object/forEachKey', function () {

	it('should iterate over an object', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			results.push(args);
		});
		assert.deepEqual(results, [[0, 'a', obj], [1, 'b', obj]]);
	});

	it('should stop iteration if fn returns truthy value', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			results.push(args);
			return true;
		});
		assert.deepEqual(results, [[0, 'a', obj]]);
	});

	it('should ignore properties which is not its own', function () {
		var obj = [1, 2];
		var results = [];
		forEachKey(obj, function () {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			results.push(args);
		});
		assert.deepEqual(results, [[1, '0', obj], [2, '1', obj]]);
	});
});

var keys = Object.keys;

describe('Object/keys', function () {

	it('should return an array of keys', function () {
		var data = {
			a: 0,
			b: 0,
			c: 0
		};
		var actual = keys(data);
		var expected = ['a', 'b', 'c'];
		assert.deepEqual(actual, expected);
	});
});

function toString(o) {
	return Object.prototype.toString.call(o);
}

describe('Object/toString', function () {

	it('should convert [] to [object Array]', function () {
		var value = [];
		var expected = '[object Array]';
		assert.equal(toString(value), expected);
	});
});
}())

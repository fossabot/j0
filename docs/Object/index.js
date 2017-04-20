(function(){
'use strict';

var parse = JSON.parse;

var stringify = JSON.stringify;

function clone(obj) {
	return parse(stringify(obj));
}

function noop(x) {
	return x;
}

describe('Object/clone', function () {

	it('should clone an object', function () {
		var data = { a: 1 };
		var actual = clone(data);
		var expected = { a: 1 };
		assert.deepEqual(actual, expected);
	});

	it('should remove functions', function () {
		var data = {
			a: noop,
			b: 0,
			c: noop
		};
		var actual = clone(data);
		var expected = { b: 0 };
		assert.deepEqual(actual, expected);
	});

	it('should isolate original', function () {
		var data = {
			a: noop,
			b: {},
			c: noop
		};
		var actual = clone(data);
		actual.b.a = 0;
		var expected = { b: { a: 0 } };
		assert.deepEqual(actual, expected);
		assert.deepEqual(data.b, {});
	});
});

function forEachKey(obj, fn, thisArg) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (fn.call(thisArg, obj[key], key, obj)) {
				return;
			}
		}
	}
}

function push(arrayLike) {
	var _Array$prototype$push;

	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
}

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

			push(results, args);
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

			push(results, args);
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

			push(results, args);
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

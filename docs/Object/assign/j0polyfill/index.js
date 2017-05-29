(function(){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function assign(target) {
	for (var _len = arguments.length, objects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		objects[_key - 1] = arguments[_key];
	}

	objects.forEach(function (obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				target[key] = obj[key];
			}
		}
	});
}

function test(assign) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Object.assign';


	describe(name, function () {

		it('should assign properties', function () {
			var _assign, _assign2, _assert$deepEqual;

			var target = {};
			var key1 = Date.now() + '_1';
			var key2 = Date.now() + '_2';
			var key3 = Date.now() + '_3';
			var value1 = Date.now() + '_4';
			var value2 = Date.now() + '_5';
			var value3 = Date.now() + '_6';
			assign(target, (_assign = {}, _defineProperty(_assign, key1, value1), _defineProperty(_assign, key2, value2), _assign), (_assign2 = {}, _defineProperty(_assign2, key2, value3), _defineProperty(_assign2, key3, value2), _assign2));
			assert.deepEqual(target, (_assert$deepEqual = {}, _defineProperty(_assert$deepEqual, key1, value1), _defineProperty(_assert$deepEqual, key2, value3), _defineProperty(_assert$deepEqual, key3, value2), _assert$deepEqual));
		});
	});
}

test(assign, 'Object.assign#j0');
}())

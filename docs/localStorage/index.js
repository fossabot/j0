(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test$1(storage, testName) {

	describe(testName, function () {

		it('should set/get an item', function () {
			var name = '' + Date.now();
			var value = new Date().toISOString();
			storage.setItem(name, value);
			assert.equal(storage.getItem(name), value);
		});

		it('should remove an item', function () {
			var name = '' + Date.now();
			var value = new Date().toISOString();
			storage.setItem(name, value);
			assert.equal(storage.getItem(name), value);
			storage.removeItem(name);
			assert.equal(storage.getItem(name));
		});

		it('should clear all', function () {
			var name1 = Date.now() + '1';
			var name2 = Date.now() + '2';
			var value = new Date().toISOString();
			storage.setItem(name1, value);
			storage.setItem(name2, value);
			assert.equal(storage.getItem(name1), value);
			assert.equal(storage.getItem(name2), value);
			storage.clear();
			assert.equal(storage.getItem(name1));
			assert.equal(storage.getItem(name2));
		});

		it('should have key()', function () {
			var name1 = Date.now() + '1';
			var name2 = Date.now() + '2';
			var value = new Date().toISOString();
			storage.setItem(name1, value);
			storage.setItem(name2, value);
			var results = [];
			for (var i = 0, length = storage.length; i < length; i++) {
				results.push(storage.key(i));
			}
			assert.equal([name1, name2].every(function (name) {
				return results.includes(name);
			}), true);
		});
	});
}

var Object = window.Object;

var J0Storage = function () {
	function J0Storage() {
		_classCallCheck(this, J0Storage);
	}

	_createClass(J0Storage, [{
		key: 'clear',
		value: function clear() {
			var _this = this;

			Object.keys(this).forEach(function (key) {
				_this.removeItem(key);
			});
		}
	}, {
		key: 'getItem',
		value: function getItem(keyName) {
			return this[keyName];
		}
	}, {
		key: 'key',
		value: function key(n) {
			return Object.keys(this)[n];
		}
	}, {
		key: 'removeItem',
		value: function removeItem(keyName) {
			delete this[keyName];
		}
	}, {
		key: 'setItem',
		value: function setItem(keyName, keyValue) {
			this[keyName] = '' + keyValue;
		}
	}, {
		key: 'length',
		get: function get() {
			return Object.keys(this).length;
		}
	}]);

	return J0Storage;
}();

var localStorage$1 = new J0Storage();

test$1(localStorage$1, 'localStorage#j0');

test$1(localStorage, 'localStorage');
}())

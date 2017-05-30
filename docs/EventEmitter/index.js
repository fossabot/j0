(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listenersKey = Symbol();
var onceKey = Symbol();
var listenerTypeKey = Symbol();

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this[listenersKey] = [];
	}

	_createClass(EventEmitter, [{
		key: 'emit',
		value: function emit(type) {
			var _this = this;

			for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				data[_key - 1] = arguments[_key];
			}

			this[listenersKey].slice().forEach(function (fn) {
				if (fn[listenerTypeKey] === type) {
					fn.apply(_this, data);
					if (fn[onceKey]) {
						_this.off(type, fn);
					}
				}
			});
			return this;
		}
	}, {
		key: 'off',
		value: function off(type, targetFn) {
			var listeners = this[listenersKey];
			for (var index = listeners.length; index--;) {
				var fn = listeners[index];
				if (fn[listenerTypeKey] === type && (!targetFn || fn === targetFn)) {
					listeners.splice(index, 1);
				}
			}
			return this;
		}
	}, {
		key: 'on',
		value: function on(type, fn) {
			fn[listenerTypeKey] = type;
			this[listenersKey].push(fn);
			return this;
		}
	}, {
		key: 'once',
		value: function once(type, fn) {
			fn[onceKey] = true;
			return this.on(type, fn);
		}
	}]);

	return EventEmitter;
}();

describe('EventEmitter', function () {

	it('should call listeners', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.on(name1, function () {
			for (var _len2 = arguments.length, data = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				data[_key2] = arguments[_key2];
			}

			results.push([data, '1']);
		}).on(name1, function () {
			for (var _len3 = arguments.length, data = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				data[_key3] = arguments[_key3];
			}

			results.push([data, '2']);
		}).on(name2, function () {
			for (var _len4 = arguments.length, data = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				data[_key4] = arguments[_key4];
			}

			results.push([data, '3']);
		}).on(name2, function () {
			for (var _len5 = arguments.length, data = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				data[_key5] = arguments[_key5];
			}

			results.push([data, '4']);
		}).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2'], [[value2, value3], '1'], [[value2, value3], '2'], [[value3, value1], '3'], [[value3, value1], '4']]);
	});

	it('should call listeners once', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function () {
			for (var _len6 = arguments.length, data = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
				data[_key6] = arguments[_key6];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len7 = arguments.length, data = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
				data[_key7] = arguments[_key7];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len8 = arguments.length, data = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
				data[_key8] = arguments[_key8];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len9 = arguments.length, data = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
				data[_key9] = arguments[_key9];
			}

			results.push([data, '4']);
		}).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2'], [[value3, value1], '3'], [[value3, value1], '4']]);
	});

	it('should remove listeners', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function () {
			for (var _len10 = arguments.length, data = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
				data[_key10] = arguments[_key10];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len11 = arguments.length, data = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
				data[_key11] = arguments[_key11];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len12 = arguments.length, data = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
				data[_key12] = arguments[_key12];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len13 = arguments.length, data = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
				data[_key13] = arguments[_key13];
			}

			results.push([data, '4']);
		}).off(name2).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2']]);
	});
});
}())

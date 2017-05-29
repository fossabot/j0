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
		value: function emit(type, data) {
			var _this = this;

			this[listenersKey].slice().forEach(function (fn) {
				if (fn[listenerTypeKey] === type) {
					fn.call(_this, data);
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
		emitter.on(name1, function (data) {
			results.push([data, '1']);
		}).on(name1, function (data) {
			results.push([data, '2']);
		}).on(name2, function (data) {
			results.push([data, '3']);
		}).on(name2, function (data) {
			results.push([data, '4']);
		}).emit(name1, value1).emit(name1, value2).emit(name2, value3);
		assert.deepEqual(results, [[value1, '1'], [value1, '2'], [value2, '1'], [value2, '2'], [value3, '3'], [value3, '4']]);
	});

	it('should call listeners once', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function (data) {
			results.push([data, '1']);
		}).once(name1, function (data) {
			results.push([data, '2']);
		}).once(name2, function (data) {
			results.push([data, '3']);
		}).once(name2, function (data) {
			results.push([data, '4']);
		}).emit(name1, value1).emit(name1, value2).emit(name2, value3);
		assert.deepEqual(results, [[value1, '1'], [value1, '2'], [value3, '3'], [value3, '4']]);
	});

	it('should remove listeners', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function (data) {
			results.push([data, '1']);
		}).once(name1, function (data) {
			results.push([data, '2']);
		}).once(name2, function (data) {
			results.push([data, '3']);
		}).once(name2, function (data) {
			results.push([data, '4']);
		}).off(name2).emit(name1, value1).emit(name1, value2).emit(name2, value3);
		assert.deepEqual(results, [[value1, '1'], [value1, '2']]);
	});
});
}())

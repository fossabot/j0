/* eslint-disable no-empty-function */
import {
	N,
} from 'j0';

function wait(duration) {
	const defaultDuration = 20;
	return new Promise((resolve) => {
		setTimeout(resolve, duration || defaultDuration);
	});
}

describe('N.eventFilter', function () {

	after(function () {
		delete N.eventFilter;
	});

	it('should set a filter', function () {
		const actual = [];
		N.eventFilter = function (...args) {
			actual.push(this, ...args);
		};
		const element = new N();
		const key = `event-${Date.now()}`;
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(actual, [element, key, fn]);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[[key, fn]]
		);
	});

	it('should set a filter and skip addEventListener', function () {
		const actual = [];
		N.eventFilter = function (...args) {
			actual.push(this, ...args);
			return true;
		};
		const element = new N();
		const key = `event-${Date.now()}`;
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(actual, [element, key, fn]);
		assert.deepEqual(Array.from(element.listeners), []);
	});

});

describe('N.prototype.on', function () {

	it('should initialize with event listener', function () {
		const key = `event-${Date.now()}`;
		function fn() {}
		const element = new N({
			e: [
				[key, fn]
			]
		});
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[[key, fn]]
		);
	});

	it('should set an listener', function () {
		const element = new N();
		const key = `event-${Date.now()}`;
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[[key, fn]]
		);
	});

	it('should set listeners', function () {
		const element = new N();
		const key1 = `event1-${Date.now()}`;
		const key2 = `event2-${Date.now()}`;
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element
		.on(key1, fn1)
		.on(key2, fn2);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key2, fn2]
			]
		);
	});

	it('should call a method', async function () {
		const results = [];
		const data1 = new Date();
		const data2 = Date.now();
		class E extends N {
			click(event) {
				results.push(event.detail);
			}
		}
		const element = new E({
			e: [
				'click'
			]
		});
		element
		.emit('click', data1)
		.emit('_click', data1)
		.emit('click', data2);
		await wait();
		assert.deepEqual(
			results,
			[
				data1,
				data2
			]
		);
	});

	it('should throw an error if the object has no method', async function () {
		class E extends N {}
		const element = new E();
		assert.throws(() => {
			element
			.on('click');
		});
	});

});

describe('N.prototype.off', function () {

	it('should remove an listener', function () {
		const element = new N();
		const key1 = `event1-${Date.now()}`;
		const key2 = `event2-${Date.now()}`;
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element
		.on(key1, fn1)
		.on(key1, fn2)
		.on(key2, fn2);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key1, fn2],
				[key2, fn2]
			]
		);
		element.off(key1, fn2);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key2, fn2]
			]
		);
	});

	it('should remove listeners', function () {
		const element = new N();
		const key1 = `event1-${Date.now()}`;
		const key2 = `event2-${Date.now()}`;
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element
		.on(key1, fn1)
		.on(key1, fn2)
		.on(key2, fn2);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key1, fn2],
				[key2, fn2]
			]
		);
		element.off(key1);
		assert.deepEqual(
			Array.from(element.listeners)
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key2, fn2]
			]
		);
	});

});

describe('N.prototype.emit', function () {

	it('should call a listener', async function () {
		const element = new N();
		const key = `event-${Date.now()}`;
		const data = new Date();
		const event = await new Promise((resolve) => {
			element
			.on(key, resolve)
			.emit(key, data);
		});
		assert.equal(event.detail, data);
	});

	it('should call listeners', async function () {
		const element = new N();
		const key = `event-${Date.now()}`;
		const data1 = new Date();
		const data2 = Date.now();
		const results = [];
		function onCall({detail}) {
			results.push(detail);
		}
		element
		.on(key, onCall)
		.on(key, onCall)
		.emit(key, data1)
		.emit(key, data2);
		await wait();
		assert.deepEqual(results, [data1, data1, data2, data2]);
	});

});

describe('N.prototype.once', function () {

	it('should call a listener only once', async function () {
		const element = new N();
		const key = `event-${Date.now()}`;
		const data1 = new Date();
		const data2 = Date.now();
		const results = [];
		function onCall({detail}) {
			results.push(detail);
		}
		element
		.once(key, onCall)
		.on(key, onCall)
		.emit(key, data1)
		.emit(key, data2);
		await wait();
		assert.deepEqual(results, [data1, data1, data2]);
	});

	it('should call a method only once', async function () {
		const results = [];
		const data1 = new Date();
		const data2 = Date.now();
		class E extends N {
			click(event) {
				results.push(event.detail);
			}
		}
		const element = new E({});
		element
		.once('click')
		.emit('click', data1)
		.emit('_click', data1)
		.emit('click', data2);
		await wait();
		assert.deepEqual(
			results,
			[
				data1
			]
		);
	});

	it('should throw an error if the object has no method', async function () {
		class E extends N {}
		const element = new E();
		assert.throws(() => {
			element
			.once('click');
		});
	});

});

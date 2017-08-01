/* eslint-disable no-empty-function */
import dom from '../../index.js';

function wait(duration) {
	const defaultDuration = 20;
	return new Promise((resolve) => {
		setTimeout(resolve, duration || defaultDuration);
	});
}

describe('J0Element.eventFilter', function () {

	after(function () {
		delete dom.eventFilter;
	});

	it('should set a filter', function () {
		const actual = [];
		dom.eventFilter = function (...args) {
			actual.push(this, ...args);
		};
		const element = dom();
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
		dom.eventFilter = function (...args) {
			actual.push(this, ...args);
			return true;
		};
		const element = dom();
		const key = `event-${Date.now()}`;
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(actual, [element, key, fn]);
		assert.deepEqual(Array.from(element.listeners), []);
	});

});

describe('J0Element.prototype.on', function () {

	it('should initialize with event listener', function () {
		const key = `event-${Date.now()}`;
		function fn() {}
		const element = dom({
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
		const element = dom();
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
		const element = dom();
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

});

describe('J0Element.prototype.off', function () {

	it('should remove an listener', function () {
		const element = dom();
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
		const element = dom();
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

describe('J0Element.prototype.emit', function () {

	it('should call a listener', async function () {
		const element = dom();
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
		const element = dom();
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

describe('J0Element.prototype.once', function () {

	it('should call a listener only once', async function () {
		const element = dom();
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

});

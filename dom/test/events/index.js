/* eslint-disable no-empty-function */
import dom from '../..';

describe('J0Element.prototype.on', function () {

	it('should set an listener', function () {
		const element = dom();
		const key = `event-${Date.now()}`;
		function fn() {}
		assert.deepEqual(element.listeners, []);
		element.on(key, fn);
		assert.deepEqual(
			element.listeners
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
		assert.deepEqual(element.listeners, []);
		element.on(
			[key1, fn1],
			[key2, fn2]
		);
		assert.deepEqual(
			element.listeners
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key2, fn2]
			]
		);
	});

	it('should set listeners by an array of arrays', function () {
		const element = dom();
		const key1 = `event1-${Date.now()}`;
		const key2 = `event2-${Date.now()}`;
		function fn1() {}
		function fn2() {}
		assert.deepEqual(element.listeners, []);
		element.on([
			[key1, fn1],
			[key2, fn2]
		]);
		assert.deepEqual(
			element.listeners
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key2, fn2]
			]
		);
	});

	it('should set listeners by an array of objects', function () {
		const element = dom();
		const key1 = `event1-${Date.now()}`;
		const key2 = `event2-${Date.now()}`;
		function fn1() {}
		function fn2() {}
		assert.deepEqual(element.listeners, []);
		element.on([
			{[key1]: fn1},
			{[key2]: fn2}
		]);
		assert.deepEqual(
			element.listeners
			.map((item) => {
				return item.slice(0, 2);
			}),
			[
				[key1, fn1],
				[key2, fn2]
			]
		);
	});

	it('should set listeners by an object', function () {
		const element = dom();
		const key1 = `event1-${Date.now()}`;
		const key2 = `event2-${Date.now()}`;
		function fn1() {}
		function fn2() {}
		assert.deepEqual(element.listeners, []);
		element.on({
			[key1]: fn1,
			[key2]: fn2
		});
		assert.deepEqual(
			element.listeners
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
		assert.deepEqual(element.listeners, []);
		element.on(
			[key1, fn1],
			[key1, fn2],
			[key2, fn2]
		);
		assert.deepEqual(
			element.listeners
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
			element.listeners
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
		assert.deepEqual(element.listeners, []);
		element.on(
			[key1, fn1],
			[key1, fn2],
			[key2, fn2]
		);
		assert.deepEqual(
			element.listeners
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
			element.listeners
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
		const data = new Date();
		const results = await new Promise((resolve) => {
			const details = [];
			function onCall({detail}) {
				details.push(detail);
				if (details.length === 2) {
					resolve(details);
				}
			}
			element
			.on(key, onCall)
			.on(key, onCall)
			.emit(key, data);
		});
		assert.deepEqual(results, [data, data]);
	});

});

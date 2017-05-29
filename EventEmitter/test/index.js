import EventEmitter from '..';

describe('EventEmitter', function () {

	it('should call listeners', function () {
		const emitter = new EventEmitter();
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		const value1 = `${Date.now()}-3`;
		const value2 = `${Date.now()}-4`;
		const value3 = `${Date.now()}-5`;
		const results = [];
		emitter
		.on(name1, function (data) {
			results.push([data, '1']);
		})
		.on(name1, function (data) {
			results.push([data, '2']);
		})
		.on(name2, function (data) {
			results.push([data, '3']);
		})
		.on(name2, function (data) {
			results.push([data, '4']);
		})
		.emit(name1, value1)
		.emit(name1, value2)
		.emit(name2, value3);
		assert.deepEqual(results, [
			[value1, '1'],
			[value1, '2'],
			[value2, '1'],
			[value2, '2'],
			[value3, '3'],
			[value3, '4']
		]);
	});

	it('should call listeners once', function () {
		const emitter = new EventEmitter();
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		const value1 = `${Date.now()}-3`;
		const value2 = `${Date.now()}-4`;
		const value3 = `${Date.now()}-5`;
		const results = [];
		emitter
		.once(name1, function (data) {
			results.push([data, '1']);
		})
		.once(name1, function (data) {
			results.push([data, '2']);
		})
		.once(name2, function (data) {
			results.push([data, '3']);
		})
		.once(name2, function (data) {
			results.push([data, '4']);
		})
		.emit(name1, value1)
		.emit(name1, value2)
		.emit(name2, value3);
		assert.deepEqual(results, [
			[value1, '1'],
			[value1, '2'],
			[value3, '3'],
			[value3, '4']
		]);
	});

	it('should remove listeners', function () {
		const emitter = new EventEmitter();
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		const value1 = `${Date.now()}-3`;
		const value2 = `${Date.now()}-4`;
		const value3 = `${Date.now()}-5`;
		const results = [];
		emitter
		.once(name1, function (data) {
			results.push([data, '1']);
		})
		.once(name1, function (data) {
			results.push([data, '2']);
		})
		.once(name2, function (data) {
			results.push([data, '3']);
		})
		.once(name2, function (data) {
			results.push([data, '4']);
		})
		.off(name2)
		.emit(name1, value1)
		.emit(name1, value2)
		.emit(name2, value3);
		assert.deepEqual(results, [
			[value1, '1'],
			[value1, '2']
		]);
	});

});

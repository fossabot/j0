import {
	Promise,
	call,
	Date,
	wait,
} from 'j0';

describe('call', function () {

	it('should call a sync function', async function () {
		const thisArg = `${Date.now()}-1`;
		const arg1 = `${Date.now()}-2`;
		const arg2 = `${Date.now()}-3`;
		const results = await new Promise((resolve, reject) => {
			call(
				function (a1, a2, a3) {
					resolve([this, a1, a2, a3]);
				},
				thisArg,
				[arg1, arg2],
				reject
			);
		});
		const expected = [
			thisArg,
			arg1,
			arg2,
			undefined
		];
		assert.deepEqual(results, expected);
	});

	it('should call an async function', async function () {
		const thisArg = `${Date.now()}-1`;
		const arg1 = `${Date.now()}-2`;
		const arg2 = `${Date.now()}-3`;
		const results = await new Promise((resolve, reject) => {
			call(
				async function (a1, a2, a3) {
					await wait(50);
					resolve([this, a1, a2, a3]);
				},
				thisArg,
				[arg1, arg2],
				reject
			);
		});
		const expected = [
			thisArg,
			arg1,
			arg2,
			undefined
		];
		assert.deepEqual(results, expected);
	});

	it('should catch an error from a sync function', async function () {
		const thisArg = `${Date.now()}-1`;
		const arg1 = `${Date.now()}-2`;
		const arg2 = `${Date.now()}-3`;
		const results = await new Promise((resolve) => {
			call(
				function (a1, a2, a3) {
					throw [this, a1, a2, a3];
				},
				thisArg,
				[arg1, arg2],
				resolve
			);
		});
		const expected = [
			thisArg,
			arg1,
			arg2,
			undefined
		];
		assert.deepEqual(results, expected);
	});

	it('should catch an error from an async function', async function () {
		const thisArg = `${Date.now()}-1`;
		const arg1 = `${Date.now()}-2`;
		const arg2 = `${Date.now()}-3`;
		const results = await new Promise((resolve) => {
			call(
				async function (a1, a2, a3) {
					await wait(50);
					throw [this, a1, a2, a3];
				},
				thisArg,
				[arg1, arg2],
				resolve
			);
		});
		const expected = [
			thisArg,
			arg1,
			arg2,
			undefined
		];
		assert.deepEqual(results, expected);
	});

});

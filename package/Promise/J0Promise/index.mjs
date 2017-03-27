import isFunction from '../../isFunction';
import push from '../../Array/push';
import forEach from '../../Array/forEach';
import setImmediate from '../../setImmediate';
import Error from '../../Error';

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

class J0Promise {

	constructor(fn) {
		this.onFulfilled = [];
		this.onRejected = [];
		this.state = PENDING;
		try {
			fn(
				(value) => {
					this.resolve(value);
				},
				(error) => {
					this.reject(error);
				}
			);
		} catch (error) {
			this.reject(error);
		}
	}

	static resolve(value) {
		return new J0Promise(function (onFulfilled) {
			onFulfilled(value);
		});
	}

	static reject(error) {
		return new J0Promise(function () {
			throw error;
		});
	}

	static race(promises) {
		return new J0Promise(function (resolve, reject) {
			let finished = false;
			forEach(promises, function (promise) {
				promise.then(
					function (result) {
						if (!finished) {
							finished = true;
							resolve(result);
						}
					},
					function (error) {
						if (!finished) {
							finished = true;
							reject(error);
						}
					}
				);
			});
		});
	}

	static all(promises) {
		return new J0Promise(function (resolve, reject) {
			const results = [];
			const goal = promises.length;
			let finished = false;
			let count = 0;
			forEach(promises, function (promise, index) {
				promise.then(
					function (result) {
						if (!finished) {
							results[index] = result;
							count += 1;
							if (count === goal) {
								resolve(results);
							}
						}
					},
					function (error) {
						finished = true;
						reject(error);
					}
				);
			});
		});
	}

	resolve(value) {
		this.state = FULFILLED;
		this.value = value;
		setImmediate(() => {
			const functions = this.onFulfilled;
			forEach(functions, function (onFulfilled) {
				onFulfilled(value);
			});
			this.finish();
		});
	}

	reject(error) {
		this.state = REJECTED;
		this.value = error;
		setImmediate(() => {
			const functions = this.onRejected;
			forEach(functions, function (onRejected) {
				onRejected(error);
			});
			this.finish();
		});
	}

	finish() {
		this.onFulfilled = null;
		this.onRejected = null;
	}

	then(onFulfilled, onRejected) {
		switch (this.state) {
		case PENDING:
			return new J0Promise((onFulfilled2, onRejected2) => {
				addThenFunction(this.onFulfilled, onFulfilled, onFulfilled2, onRejected2);
				addThenFunction(this.onRejected, onRejected, onFulfilled2, onRejected2);
			});
		case FULFILLED:
			return Promise.resolve(this.value)
			.then(onFulfilled, onRejected);
		case REJECTED:
			return Promise.reject(this.value)
			.then(onFulfilled, onRejected);
		default:
			throw new Error(`Unknown state: ${this.state}`);
		}
	}

	catch(onRejected) {
		return this.then(null, onRejected);
	}

}

function isThennable(value) {
	return value && isFunction(value.then) && isFunction(value.catch);
}

function addThenFunction(list, fn, onFulfilled2, onRejected2) {
	push(list, isFunction(fn) ? function (value) {
		try {
			const value2 = fn(value);
			if (isThennable(value2)) {
				value2.then(onFulfilled2, onRejected2);
			} else {
				onFulfilled2(value2);
			}
		} catch (error2) {
			onRejected2(error2);
		}
	} : onFulfilled2);
}

export default J0Promise;

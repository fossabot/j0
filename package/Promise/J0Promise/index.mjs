import isFunction from '../../isFunction';
import push from '../../Array/push';
import forEach from '../../Array/forEach';
import setImmediate from '../../setImmediate';
import TypeError from '../../TypeError';
import noop from '../../noop';

const PENDING = 0;
const RESOLVED = 1;
const REJECTED = 2;
const CHAINED = 3;

class J0Promise {

	constructor(fn) {
		this.deferreds = [];
		this.state = PENDING;
		this.exec(fn);
	}

	is(state) {
		return this.state === state;
	}

	exec(fn) {
		let done = false;
		const onResolve = (value) => {
			if (done) {
				return;
			}
			done = true;
			this.resolve(value);
		};
		const onReject = (error) => {
			if (done) {
				return;
			}
			done = true;
			this.reject(error);
		};
		try {
			fn(onResolve, onReject);
		} catch (error) {
			onReject(error);
		}
	}

	resolve(value) {
		try {
			if (value === this) {
				throw new TypeError('A promise cannot be resolved with itself');
			}
			this.value = value;
			this.state = isThennable(value) ? CHAINED : RESOLVED;
			this.finish();
		} catch (error) {
			this.reject(error);
		}
	}

	reject(error) {
		this.state = REJECTED;
		this.value = error;
		this.finish();
	}

	finish() {
		forEach(this.deferreds, (deferred) => {
			this.handle(deferred);
		});
		this.deferreds = null;
	}

	handle(deferred) {
		let self = this;
		while (self.is(CHAINED)) {
			self = self.value;
		}
		if (self.is(PENDING)) {
			push(self.deferreds, deferred);
			return;
		}
		setImmediate(() => {
			const [
				promise,
				onResolved = null,
				onRejected = null
			] = deferred;
			const callback = self.is(RESOLVED) ? onResolved : onRejected;
			if (callback === null) {
				if (self.is(RESOLVED)) {
					promise.resolve(self.value);
				} else {
					promise.reject(self.value);
				}
				return;
			}
			try {
				promise.resolve(callback(self.value));
			} catch (error) {
				promise.reject(error);
			}
		});
	}

	then(onResolved = null, onRejected = null) {
		const promise = new J0Promise(noop);
		this.handle([promise, onResolved, onRejected]);
		return promise;
	}

	catch(onRejected) {
		return this.then(null, onRejected);
	}

	static resolve(value) {
		return new J0Promise(function (onResolved) {
			onResolved(value);
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

}

function isThennable(value) {
	return value && isFunction(value.then);
}

export default J0Promise;

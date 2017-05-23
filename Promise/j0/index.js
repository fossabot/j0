/* eslint-disable no-underscore-dangle */
import isFunction from '../../isFunction';
import push from '../../Array/push';
import forEach from '../../Array/forEach';
import setImmediate from '../../setImmediate';
import noop from '../../noop';
import {TypeError} from '../../global';

const PENDING = 0;
const RESOLVED = 1;
const REJECTED = 2;
const CHAINED = 3;

class Deferred {

	constructor(onResolved = null, onRejected = null) {
		/* eslint-disable no-use-before-define */
		this.promise = new J0Promise(noop);
		/* eslint-enable no-use-before-define */
		this.onResolved = onResolved;
		this.onRejected = onRejected;
	}

}

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
			if (isThennable(value)) {
				this.state = CHAINED;
				this.exec((resolve, reject) => {
					value.then(resolve, reject);
				});
			} else {
				this.state = RESOLVED;
			}
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
		/* eslint-disable consistent-this */
		let self = this;
		/* eslint-enable consistent-this */
		while (self.is(CHAINED)) {
			self = self.value;
		}
		if (self.is(PENDING)) {
			push(self.deferreds, deferred);
			return;
		}
		setImmediate(() => {
			const {
				promise,
				onResolved = null,
				onRejected = null
			} = deferred;
			const resolved = self.is(RESOLVED);
			const callback = resolved ? onResolved : onRejected;
			if (callback === null) {
				if (resolved) {
					promise.resolve(self.value);
				} else {
					promise.reject(self.value);
				}
				return;
			}
			let value;
			try {
				value = callback(self.value);
			} catch (error) {
				promise.reject(error);
				return;
			}
			promise.resolve(value);
		});
	}

	catch(onRejected) {
		return this.then(null, onRejected);
	}

	then(onResolved, onRejected) {
		const deferred = new Deferred(onResolved, onRejected);
		this.handle(deferred);
		return deferred.promise;
	}

	static resolve(value) {
		if (isThennable(value)) {
			return value;
		}
		return new J0Promise(function (resolve) {
			resolve(value);
		});
	}

	static reject(error) {
		return new J0Promise(function (resolve, reject) {
			reject(error);
		});
	}

	static race(promises) {
		return new J0Promise(function (resolve, reject) {
			forEach(promises, function (promise) {
				promise.then(resolve, reject);
			});
		});
	}

	static all(values) {
		return new J0Promise(function (resolve, reject) {
			const {length} = values;
			if (length === 0) {
				resolve([]);
				return;
			}
			let remaining = length;
			function check(value, index) {
				if (isThennable(value)) {
					value.then(function (value2) {
						check(value2, index);
					}, reject);
					return;
				}
				values[index] = value;
				remaining -= 1;
				if (remaining === 0) {
					resolve(values);
				}
			}
			forEach(values, function (value, index) {
				check(value, index);
			});
		});
	}

}

function isThennable(value) {
	return value && isFunction(value.then) && isFunction(value.catch);
}

export default J0Promise;

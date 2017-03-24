import isFunction from '../../isFunction';
import push from '../../Array/push';
import forEach from '../../Array/forEach';
import setTimeout from '../../setTimeout';

class J0Promise {

	constructor(fn) {
		this.onFulfilled = [];
		this.onRejected = [];
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

	static race() {}

	static all() {}

	resolve(value) {
		setTimeout(() => {
			forEach(this.onFulfilled, function (onFulfilled) {
				onFulfilled(value);
			});
		});
	}

	reject(error) {
		setTimeout(() => {
			forEach(this.onRejected, function (onRejected) {
				onRejected(error);
			});
		});
	}

	then(onFulfilled, onRejected) {
		return new J0Promise((onFulfilled2, onRejected2) => {
			push(this.onFulfilled, isFunction(onFulfilled) ? (value) => {
				console.log(value);
				try {
					const value2 = onFulfilled(value);
					if (isThennable(value2)) {
						value2.then(onFulfilled2, onRejected2);
					} else {
						onFulfilled2(value2);
					}
				} catch (error2) {
					console.log(error2);
					onRejected2(error2);
				}
			} : onFulfilled2);
			push(this.onRejected, isFunction(onRejected) ? (error) => {
				try {
					const value2 = onRejected(error);
					if (isThennable(value2)) {
						value2.then(onFulfilled2, onRejected2);
					} else {
						onFulfilled2(value2);
					}
				} catch (error2) {
					onRejected2(error2);
				}
			} : onRejected2);
		});
	}

	catch(onRejected) {
		return this.then(null, onRejected);
	}

}

function isThennable(value) {
	return value && isFunction(value.then) && isFunction(value.catch);
}

export default J0Promise;

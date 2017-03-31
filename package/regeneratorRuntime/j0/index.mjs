class Context {

	constructor() {
		this.next = 0;
	}

	stop() {
		return this.stop;
	}

}

class Generator {

	constructor(fn, thisArg) {
		this.fn = fn;
		this.self = thisArg;
		this.context = new Context();
	}

	next() {
		const value = this.fn.call(this.self, this.context);
		const done = value === this.context.stop;
		return {
			value,
			done
		};
	}

	throw(error) {
		throw error;
	}

}

function mark(fn) {
	return fn;
}

function wrap(fn1, fn2, thisArg) {
	return new Generator(fn1, thisArg);
}

export default {
	mark,
	wrap
};

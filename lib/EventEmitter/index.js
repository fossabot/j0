import {
	Symbol,
	Set,
	call,
} from 'j0';

const listenersKey = Symbol();

class EventEmitter {

	constructor() {
		this[listenersKey] = new Set();
	}

	emit(type, ...data) {
		this[listenersKey]
		.forEach((item, index, listeners) => {
			const [eventType, fn, once] = item;
			if (eventType === type) {
				if (once) {
					listeners.delete(item);
				}
				call(fn, this, data);
			}
		});
		return this;
	}

	off(type, targetFn) {
		this[listenersKey]
		.forEach((item, index, listeners) => {
			const [eventType, fn] = item;
			if (eventType === type && (!targetFn || fn === targetFn)) {
				listeners.delete(item);
			}
		});
		return this;
	}

	on(type, fn) {
		this[listenersKey].add([type, fn]);
		return this;
	}

	once(type, fn) {
		this[listenersKey].add([type, fn, true]);
		return this;
	}

}

export default EventEmitter;

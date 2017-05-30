import {
	Symbol
} from 'j0';

const listenersKey = Symbol();
const onceKey = Symbol();
const listenerTypeKey = Symbol();

class EventEmitter {

	constructor() {
		this[listenersKey] = [];
	}

	emit(type, ...data) {
		this[listenersKey]
		.slice()
		.forEach((fn) => {
			if (fn[listenerTypeKey] === type) {
				fn.apply(this, data);
				if (fn[onceKey]) {
					this.off(type, fn);
				}
			}
		});
		return this;
	}

	off(type, targetFn) {
		const listeners = this[listenersKey];
		for (let index = listeners.length; index--;) {
			const fn = listeners[index];
			if (fn[listenerTypeKey] === type && (!targetFn || fn === targetFn)) {
				listeners.splice(index, 1);
			}
		}
		return this;
	}

	on(type, fn) {
		fn[listenerTypeKey] = type;
		this[listenersKey].push(fn);
		return this;
	}

	once(type, fn) {
		fn[onceKey] = true;
		return this.on(type, fn);
	}

}

export default EventEmitter;

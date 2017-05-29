import {
	Map,
	Object
} from 'j0';
import State from './State';

class StateManager {

	constructor(config) {
		Object.assign(
			this,
			{prefix: ''},
			config,
			{
				states: new Map(),
				listeners: []
			}
		);
	}

	define(name, definition, onEnter) {
		this.states.set(name, new State(name, definition, onEnter));
		return this;
	}

	href(name, params) {
		const state = this.states.get(name);
		const href = (state && state.href(params)) || this.fallback;
		return `${this.prefix}${href}`;
	}

	otherwise(name, params) {
		this.fallback = this.href(name, params);
		return this;
	}

}

export default StateManager;

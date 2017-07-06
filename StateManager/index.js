import {
	Map,
	Object,
	EventEmitter,
	debounce,
	location,
	history,
	JSON,
	addEventListener,
	isString,
	Boolean
} from 'j0';
import State from './State';

class StateManager extends EventEmitter {

	constructor(config) {
		super();
		Object.assign(
			this,
			{prefix: '#'},
			config,
			{
				states: new Map(),
				listeners: []
			}
		);
		if (!this.parser) {
			if (this.prefix.charAt(0) === '#') {
				this.parser = function (url) {
					return url.hash.slice(this.prefix.length);
				};
			} else {
				this.parser = function (url) {
					const {pathname, search, hash} = url;
					return `${pathname}${search}${hash}`.slice(this.prefix.length);
				};
			}
		}
	}

	parseURL(url = location) {
		const stateString = this.parser(url);
		for (const [, state] of this.states) {
			const params = state.parse(stateString);
			if (params) {
				return state.instantiate(params);
			}
		}
		return this.fallback;
	}

	define(stateInfo) {
		const {name} = stateInfo;
		if (isString(name) && name) {
			this.states.set(name, new State(stateInfo));
		} else {
			throw new Error('Invalid name');
		}
		return this;
	}

	get(stateInfo, noFallback) {
		const {name, params} = stateInfo;
		const state = this.states.get(name);
		const instantiated = state && state.instantiate(params);
		if (instantiated) {
			instantiated.href = `${this.prefix}${instantiated.href}`;
		}
		return instantiated || (!noFallback && this.fallback);
	}

	href(stateInfo, noFallback) {
		const state = this.get(stateInfo, noFallback);
		return state ? state.href : '';
	}

	otherwise(stateInfo) {
		this.fallback = this.get(stateInfo);
		if (!this.fallback) {
			throw new Error(`Failed to set fallback: ${JSON.stringify(stateInfo)} is not exist.`);
		}
		return this;
	}

	is(stateInfo) {
		const {current} = this;
		const state = this.get(stateInfo, true);
		return Boolean(current && state && current.is(state));
	}

	isIn(stateInfo) {
		const {current} = this;
		const state = this.get(stateInfo, true);
		return Boolean(current && state && current.isIn(state));
	}

	isAncestorOf(stateInfo) {
		const {current} = this;
		const state = this.get(stateInfo, true);
		return Boolean(current && state && current.isAncestorOf(state));
	}

	setCurrent(stateInfo, method) {
		const newState = this.get(stateInfo);
		if (this.is(newState)) {
			return;
		}
		this.current = newState;
		history[method](newState.name, newState.params, newState.href);
		this.emit('change', newState, this.current);
	}

	go(stateInfo) {
		this.setCurrent(stateInfo, 'pushState');
	}

	replace(stateInfo) {
		this.setCurrent(stateInfo, 'replaceState');
	}

	start() {
		const debounceDuration = 30;
		const onStateChange = debounce(() => {
			this.replace(this.parseURL());
		}, debounceDuration);
		addEventListener('hashchange', onStateChange);
		addEventListener('pushstate', onStateChange);
		addEventListener('popstate', onStateChange);
		onStateChange();
	}

}

export default StateManager;

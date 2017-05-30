import {
	encodeURIComponent,
	Object,
	isString,
	isInstanceOf
} from 'j0';

class State {

	constructor(stateInfo) {
		if (!isInstanceOf(stateInfo, State)) {
			const {path} = stateInfo;
			const parts = [];
			let pos = 0;
			path.replace(/\{(\w+):(.*?)\}/g, ({length}, name, expression, offset, source) => {
				if (pos < offset) {
					parts.push(source.slice(pos, offset));
				}
				parts.push([name, new RegExp(`^${expression}$`), expression]);
				pos = offset + length;
			});
			if (pos < path.length) {
				parts.push(path.slice(pos));
			}
			const matcher = new RegExp(
				parts
				.map((part) => {
					if (isString(part)) {
						return part;
					}
					return `(${part[2]})`;
				})
				.join('')
			);
			Object.assign(stateInfo, {
				parts,
				matcher
			});
		}
		Object.assign(this, stateInfo);
	}

	compose(fn) {
		const {parts} = this;
		const result = [];
		for (let index = 0, {length} = parts; index < length; index++) {
			const part = parts[index];
			if (isString(part)) {
				result.push(part);
			} else {
				const value = fn(...part);
				if (value) {
					result.push(value);
				} else {
					return '';
				}
			}
		}
		return result.join('');
	}

	href(params = {}) {
		return this.compose((key, pattern) => {
			const value = params[key];
			if (value && pattern.test(value)) {
				return encodeURIComponent(value);
			}
		});
	}

	parse(href = '') {
		let params;
		href.replace(this.matcher, (match, ...args) => {
			let index = 0;
			params = {};
			return this.compose((key) => {
				const value = args[index++];
				params[key] = value;
				return value;
			});
		});
		return params;
	}

	instantiate(src = {}) {
		const params = isString(src) ? this.parse(src) : src;
		const href = this.href(params);
		if (href) {
			const state = new State(this);
			state.params = params;
			state.href = href;
			return state;
		}
	}

}

export default State;

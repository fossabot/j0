import {
	encodeURIComponent,
	Object,
	isString,
	isInstanceOf
} from 'j0';

class State {

	constructor(stateName, definition, onEnter) {
		if (isInstanceOf(stateName, State)) {
			Object.assign(this, stateName);
		} else {
			const parts = [];
			let pos = 0;
			definition.replace(/\{(\w+):(.*?)\}/g, ({length}, name, expression, offset, source) => {
				if (pos < offset) {
					parts.push(source.slice(pos, offset));
				}
				parts.push([name, new RegExp(`^${expression}$`), expression]);
				pos = offset + length;
			});
			parts.push(definition.slice(pos));
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
			Object.assign(this, {
				name: stateName,
				parts,
				matcher,
				onEnter
			});
		}
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

	parse(href) {
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

}

export default State;

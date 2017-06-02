import {
	RegExp,
	Symbol,
	Lazy,
	isInstanceOf
} from 'j0';

const exprKey = Symbol();
const leadingKey = Symbol();
const trailingKey = Symbol();

class CharRegExp extends Lazy {

	constructor(firstArgument, ...args) {
		super();
		this[exprKey] = isInstanceOf(firstArgument, CharRegExp)
		? firstArgument.expr
		: new RegExp(firstArgument, ...args);
	}

	get source() {
		return this.expr.source;
	}

	get expr() {
		return this[exprKey];
	}

	get leading() {
		return this.getLazy(leadingKey, () => {
			return new RegExp(`^${this.source}+`);
		});
	}

	get trailing() {
		return this.getLazy(trailingKey, () => {
			return new RegExp(`${this.source}+$`);
		});
	}

	testLeading(string) {
		return this.leading.test(string);
	}

	testTrailing(string) {
		return this.trailing.test(string);
	}

	removeLeading(string) {
		return string.replace(this.leading, '');
	}

	removeTrailing(string) {
		return string.replace(this.trailing, '');
	}

	removeLeadingAndTrailing(string) {
		return string
		.replace(this.leading, '')
		.replace(this.trailing, '');
	}

	splitSource(noWrap) {
		const range = /(?:\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|.)-(?:\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|.)/g;
		const result = [];
		this.source
		.replace(/^\[+|\]+$/g, '')
		.split(/\]\|\[/)
		.forEach((pattern) => {
			const exclude = pattern.charAt(0) === '^' ? '^' : '';
			const expressions = [];
			if (exclude) {
				pattern = pattern.slice(1);
			}
			let pos = 0;
			function split(string) {
				const chars = [];
				string
				.replace(/\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|./g, (char) => {
					chars.push(char);
				});
				return chars;
			}
			pattern
			.replace(range, (match, offset, source) => {
				if (pos < offset) {
					expressions.push(...split(source.slice(pos, offset)));
				}
				expressions.push(match);
				pos = offset + match.length;
			});
			if (pos < pattern.length) {
				expressions.push(...split(pattern.slice(pos)));
			}
			expressions
			.forEach(
				noWrap
				? (patternFragment) => {
					result.push(`${exclude}${patternFragment}`);
				}
				: (patternFragment) => {
					result.push(`[${exclude}${patternFragment}]`);
				}
			);
		});
		return result;
	}

	static compile(...args) {
		const sources = []
		.concat(
			...args
			.map((expr) => {
				return new CharRegExp(expr).splitSource(true);
			})
		)
		.filter((source, index, list) => {
			return list.indexOf(source) === index;
		});
		const includes = [];
		const excludes = [];
		sources
		.forEach((source) => {
			if (source.charAt(0) === '^') {
				excludes.push(source.slice(1));
			} else {
				includes.push(source);
			}
		});
		const patterns = [];
		if (0 < includes.length) {
			patterns.push(`[${includes.join('')}]`);
		}
		if (0 < excludes.length) {
			patterns.push(`[^${excludes.join('')}]`);
		}
		return new CharRegExp(patterns.join('|'));
	}

}

export default CharRegExp;

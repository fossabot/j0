import StringList from '../../StringList';

const separator = '&';
const equal = '=';

class URLSearchParams extends StringList {

	constructor(init) {
		super(
			init
			? init.replace(/^\?/, '').split(separator)
			.map((entry) => {
				return entry.split(equal);
			})
			: null
		);
	}

	toString() {
		return this.data
		.map(function ([name, value = '']) {
			return `${name}=${value}`;
		})
		.join('&');
	}

}

export default URLSearchParams;

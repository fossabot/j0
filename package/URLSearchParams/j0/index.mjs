import map from '../../Array/map';
import StringList from '../../StringList';

const separator = '&';
const equal = '=';

class URLSearchParams extends StringList {

	constructor(init) {
		super(init ? map(init.replace(/^\?/, '').split(separator), (entry) => {
			return entry.split(equal);
		}) : null);
	}

	toString() {
		return map(this.data, function ([name, value = '']) {
			return `${name}=${value}`;
		}).join('&');
	}

}

export default URLSearchParams;

import {iteratorSymbol} from 'j0';

class Iterator {

	constructor(fn) {
		this.next = fn;
	}

	[iteratorSymbol]() {
		return this;
	}

}

export default Iterator;

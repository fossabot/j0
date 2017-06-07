class TokenStream {

	constructor(data) {
		this.data = data;
	}

	shift() {
		return this.data.shift();
	}

	push(...args) {
		return this.data.push(...args);
	}

	unshift(...args) {
		return this.data.unshift(...args);
	}

}

export default TokenStream;

import {parseInt} from 'j0';

function repeat(c) {
	const count = parseInt(c, 10);
	const results = [];
	for (let i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

export default repeat;

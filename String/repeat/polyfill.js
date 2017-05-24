import {parseInt} from 'j0';
import push from '../../Array/push';
import join from '../../Array/join';

function repeat(c) {
	const count = parseInt(c, 10);
	const results = [];
	for (let i = 0; i < count; i += 1) {
		push(results, this);
	}
	return join(results, '');
}

export default repeat;

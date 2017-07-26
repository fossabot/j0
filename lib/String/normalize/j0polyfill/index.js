import {
	unorm
} from 'j0';

function normalize(form) {
	return unorm[form.toLowerCase()](this);
}

export default normalize;

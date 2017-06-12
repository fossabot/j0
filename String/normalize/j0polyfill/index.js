import {
	String,
	stringToCodePoints
} from 'j0';
import unicodeNormalize from '../../../Unicode/normalize';

function normalize(form) {
	const normalized = unicodeNormalize(stringToCodePoints(this), form);
	return String.fromCodePoint(...normalized);
}

export default normalize;

import {
	SPECIAL_SCHEMES
} from '../constants';

function isSpecialScheme(scheme) {
	return SPECIAL_SCHEMES.includes(scheme);
}

export default isSpecialScheme;

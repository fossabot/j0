import isSpecialScheme from '../isSpecialScheme';

function isSpecialURL({scheme}) {
	return isSpecialScheme(scheme);
}

export default isSpecialURL;

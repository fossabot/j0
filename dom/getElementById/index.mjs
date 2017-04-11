import querySelector from '../querySelector';
function getElementById(id, element) {
	return querySelector(`[id='${id}']`, element);
}
export default getElementById;

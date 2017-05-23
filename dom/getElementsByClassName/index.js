import {document} from '../..';
function getElementsByClassName(className, element = document) {
	return element.getElementsByClassName(className);
}
export default getElementsByClassName;

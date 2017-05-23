import {document} from '../../global';
function getElementsByClassName(className, element = document) {
	return element.getElementsByClassName(className);
}
export default getElementsByClassName;

import document from '../../document';
function getElementsByClassName(className, element = document) {
	return element.getElementsByClassName(className);
}
export default getElementsByClassName;

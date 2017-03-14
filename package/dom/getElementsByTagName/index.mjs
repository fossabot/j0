import document from '../../document';

function getElementsByTagName(tagName, element = document) {
	return element.getElementsByTagName(tagName);
}

export default getElementsByTagName;

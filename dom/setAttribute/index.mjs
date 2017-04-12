function setAttribute(element, attrName, ...value) {
	element.setAttribute(attrName, value.join(' '));
}

export default setAttribute;

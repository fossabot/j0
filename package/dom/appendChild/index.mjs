function appendChild(parentNode, ...newNodes) {
	for (const newNode of newNodes) {
		parentNode.appendChild(newNode);
	}
}

export default appendChild;

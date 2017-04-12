function tagName(node = {}) {
	const {tagName: name} = node;
	return name ? name.toLowerCase() : name;
}
export default tagName;

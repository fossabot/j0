import forEach from '../../Array/forEach';

function addClass(element, ...classNames) {
	forEach(classNames, function (className) {
		element.classList.add(className);
	});
}

export default addClass;

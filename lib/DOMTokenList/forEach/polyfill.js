import {
	DOMTokenList,
	Array,
	document,
	noop,
} from 'j0';
try {
	document.head.classList.forEach(noop);
} catch (error) {
	DOMTokenList.prototype.forEach = Array.prototype.forEach;
}

/* eslint-disable no-bitwise, no-magic-numbers */
function imul(a, b) {
	const ah = (a >>> 16) & 0xffff;
	const al = a & 0xffff;
	const bh = (b >>> 16) & 0xffff;
	const bl = b & 0xffff;
	return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
}
export default imul;

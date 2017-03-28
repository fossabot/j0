function clamp(x, L = -Infinity, H = Infinity) {
	if (H < L) {
		[L, H] = [H, L];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

export default clamp;

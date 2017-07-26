/* eslint-disable no-magic-numbers */
function isIn(x, min, max) {
	return x % 1 === 0 && min <= x && x <= max;
}

const pluralFunctions = [
	function () {
		// # 0
		return 0;
	},
	function (value) {
		// # 1
		return value === 1 ? 0 : 1;
	},
	function (value) {
		// # 2
		if (value === 0 || value === 1) {
			return 0;
		}
		return 1;
	},
	function (value) {
		// # 3
		if (value === 0) {
			return 0;
		} else if (value % 10 === 1 && value !== 11) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 4
		if (value === 1) {
			return 0;
		} else if (value === 2) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 5
		if (value === 1) {
			return 0;
		} else if (value === 0 || isIn(value % 100, 1, 19)) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 6
		if (value % 10 === 1 && value % 100 !== 11) {
			return 0;
		} else if (value % 10 === 0 || isIn(value % 100, 10, 20)) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 7
		if (value % 10 === 1 && value % 100 !== 11) {
			return 0;
		} else if (isIn(value % 10, 2, 4) && !isIn(value % 100, 12, 14)) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 8
		if (value === 1) {
			return 0;
		} else if (isIn(value, 2, 4)) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 9
		if (value === 1) {
			return 0;
		} else if (isIn(value % 10, 2, 4) && !isIn(value % 100, 12, 14)) {
			return 1;
		}
		return 2;
	},
	function (value) {
		// # 10
		if (value % 100 === 1) {
			return 0;
		} else if (value % 100 === 2) {
			return 1;
		} else if (isIn(value % 100, 3, 4)) {
			return 2;
		}
		return 3;
	},
	function (value) {
		// # 11
		if (value === 1) {
			return 0;
		} else if (value === 2) {
			return 1;
		} else if (isIn(value, 3, 6)) {
			return 2;
		} else if (isIn(value, 7, 10)) {
			return 3;
		}
		return 4;
	},
	function (value) {
		// # 12
		if (value === 1) {
			return 0;
		} else if (value === 2) {
			return 1;
		} else if (value === 0 || isIn(value, 3, 10)) {
			return 2;
		}
		return 3;
	},
	function (value) {
		// # 13
		if (value === 1) {
			return 0;
		} else if (value === 0 || isIn(value % 100, 1, 10)) {
			return 1;
		} else if (isIn(value % 100, 11, 19)) {
			return 2;
		}
		return 3;
	},
	function (value) {
		// # 14
		if (value % 10 === 1) {
			return 0;
		} else if (value % 10 === 2) {
			return 1;
		}
		return 2;
	}
];

export default pluralFunctions;

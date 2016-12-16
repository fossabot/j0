var storage;
try {
	storage = localStorage;
	storage.is = 'available';
} catch (err) {
	storage = 0;
}
if (storage) {
	storage.removeItem('is');
} else {
	storage = {
		removeItem: function (key) {
			delete this[key];
		}
	};
}
module.exports = storage;

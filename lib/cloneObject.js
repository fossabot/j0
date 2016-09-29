var JSON = require('./JSON');
module.exports = function(x){
	return JSON.parse(JSON.stringify(x));
};

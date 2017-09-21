import {
	console,
} from 'j0';

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	console.error(error);
};

export default onError;

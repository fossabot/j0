import {
	Promise,
	onError,
} from 'j0';

function call(fn, thisArg, args, errorHandler = onError) {
	try {
		const result = fn.apply(thisArg, args);
		Promise.resolve(result).catch(errorHandler);
	} catch (error) {
		errorHandler(error);
	}
}

export default call;

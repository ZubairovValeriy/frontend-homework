'use strict';
function pl(obj, prop1, result) {
	
	for(const prop in obj) {
		var pr = prop1 + "." + prop;
		const value = obj[prop];
		if (typeof value === 'object') {
			pl(value, pr, result);
		}
		else {
			result[pr.toString()] = value
		}
	}
	return result
}

function plainify(obj, prop) {
	var result = {}
	for(const prop in obj) {
		const value = obj[prop];
		var prop1 = prop;
		if (typeof value === 'object') {
			pl(value, prop1, result);
		}
		else {
			result[prop] = value
		}
	}
	return result;
}

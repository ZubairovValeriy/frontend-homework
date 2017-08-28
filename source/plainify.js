'use strict';
function pl(obj, prop1) {
	
	for(const prop in obj) {
		var pr = prop1 + "." + prop;
		const value = obj[prop];
		if (typeof value === 'object') {
			pl(value, pr);
		}
		else {
			result[pr.toString()] = value
		}
	}
	return
}
function copy(obj) {
	const res = {};
	for(const prop in obj){
		res[prop] = obj[prop];
	}
	return res;
}
const result = {}
function plainify(obj) {
	for(const prop in obj) {
		const value = obj[prop];
		var prop1 = prop;
		if (typeof value === 'object') {
			pl(value, prop1);
		}
		else {
			result[prop] = value
		}
	}
	
	const res1 = copy(result);
	for(const p in result){
		delete result[p];
	}
	return res1;
}

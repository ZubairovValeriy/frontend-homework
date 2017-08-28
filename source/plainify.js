'use strict';
function plainify(currObj, oldProp="", resObj={}) {
	for(const currProp in currObj) {
		
		var fullProp = oldProp + currProp;
		const value = currObj[currProp];
	
		if (typeof value === 'object') {
			plainify(value, fullProp + ".", resObj);
		}
		else {
			resObj[fullProp.toString()] = value;
		}	
	}
	return resObj;
}

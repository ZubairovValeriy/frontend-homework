'use strict';
function plainify(currObj, oldProp="", resObj={}) {
	
	Object.keys(currObj).forEach(function(currProp){		
		const fullProp = oldProp + currProp;
		const value = currObj[currProp];
	
		if (typeof value === 'object') {
			plainify(value, fullProp + ".", resObj);
		}
		else {
			resObj[fullProp.toString()] = value;
		}	
	});
	return resObj;
}
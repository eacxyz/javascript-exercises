const removeFromArray = function(arr, ...args) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < args.length; j++) {
			if (arr[i] === args[j]) {
				arr.splice(i, 1);
				i--;
				len--;
			}
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

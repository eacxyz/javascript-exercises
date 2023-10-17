const sumAll = function(a, b) {
	if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") return "ERROR";
	
	if (a > b) {
		const tmp = a;
		a = b;
		b = tmp;
	}

	let sum = 0;
	for (let i = a; i <= b; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;

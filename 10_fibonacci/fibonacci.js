const fibonacci = function(n) {
	if (n == 1 || n == 2) return 1;
	if (n <= 0) return "OOPS";
	let arr = [1, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i-2]+arr[i-1]);
	}
	return arr[n-1];
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (str) {
	let lower = str.toLowerCase();
	let arr = lower.split("");
	let pal = arr.filter(item => /[^.,!?\W]/.test(item));
	let tmp = pal;
	if (tmp.join("") === pal.reverse().join("")) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;

function positiveSum(arr) {
	let positiveNumbers = arr.filter(number => number >= 0);
	return positiveNumbers.reduce((a, b) => a + b, 0);
}

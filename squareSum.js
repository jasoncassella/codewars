function squareSum(numbers) {
	const squared = numbers.map(number => number * number);
	return squared.reduce((a, b) => a + b, 0);
}

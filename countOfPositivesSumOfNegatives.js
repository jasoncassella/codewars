function countPositivesSumNegatives(input) {
	if (!input || input.length == 0) return [];
	let sum = 0,
		count = 0;
	input.forEach(number => {
		if (number > 0) count++;
		else sum += number;
	});
	return [count, sum];
}

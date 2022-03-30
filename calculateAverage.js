function find_average(array) {
	if (!array) return 0;
	let sum = 0;
	array.forEach(number => {
		sum += number;
	});
	return sum / array.length;
}
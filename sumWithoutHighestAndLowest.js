function sumArray(array) {
	if (!array) return 0;
	if (array.length <= 2) return 0;
	let sorted = array.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < sorted.length; i++) {
		if ((i !== 0) & (i !== sorted.length - 1)) {
			sum += sorted[i];
		}
	}
	return sum;
}

function highAndLow(numbers) {
	let array = numbers.split(' ');
	const min = Math.min(...array);
	const max = Math.max(...array);
	return `${max} ${min}`;
}

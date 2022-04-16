function fakeBin(x) {
	let result = [];
	for (let i = 0; i < x.length; i++) {
		if (x[i] < 5) result.push(0);
		else result.push(1);
	}
	return result.join('');
}

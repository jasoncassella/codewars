function findSum(n) {
	const multiples = [];
	for (let i = 0; i <= n; i++) {
		if ((i % 3 === 0) || (i % 5 === 0)) {
			multiples.push(i);
		}
	}
	return multiples.reduce((a, b) => a + b);
}

console.log(findSum(5)); // 8
console.log(findSum(10)); // 33
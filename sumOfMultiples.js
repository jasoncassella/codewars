function sumMul(n, m) {
	if (n >= m) return 'INVALID';
	let sum = 0;
	for (let i = n; i < m; i++) {
		if (i % n === 0) {
			sum += i;
		}
	}
	return sum;
}

// Test Cases:
console.log(sumMul(2, 9), 20);
console.log(sumMul(0, 0), 'INVALID');
console.log(sumMul(4, -7), 'INVALID');

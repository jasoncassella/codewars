function arithmetic(a, b, operator) {
	switch (operator) {
		case 'add':
			return a + b;
		case 'subtract':
			return a - b;
		case 'multiply':
			return a * b;
		case 'divide':
			return a / b;
		default:
			break;
	}
}

console.log(arithmetic(5, 2, 'add')); // 7
console.log(arithmetic(5, 2, 'subtract')); // 3
console.log(arithmetic(5, 2, 'multiply')); // 10
console.log(arithmetic(5, 2, 'divide')); // 2.5
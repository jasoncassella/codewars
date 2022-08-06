function squareDigits(num) {
	const string = `${num}`;
	const array = [];
	let result = '';

	for (let i = 0; i < string.length; i++) {
		array.push(string[i])
	}

	const squaredArray = array.map(number => number * number)

	squaredArray.forEach(number => result += number)

	return Number(result)
}

console.log(squareDigits(3212), 9414);

console.log(squareDigits(2112), 4114);

console.log(squareDigits(0), 0);
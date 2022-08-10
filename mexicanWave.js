function wave(str) {
	const result = [];

	for (let i = 0; i < str.length; i++) {
		const array = str.split('');
		if (array[i] !== ' ') {
			array[i] = array[i].toUpperCase();
			result.push(array.join(''));
		}
	}

	return result;
}


const answer = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave('two words'), answer);
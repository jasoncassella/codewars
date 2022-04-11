function vowelIndices(word) {
	const vowels = 'aeiouy';
	const arr = word.toLowerCase().split('');
	const indices = [];
	arr.forEach((letter, i) => {
		if (vowels.indexOf(letter) !== -1) indices.push(i + 1);
	});
	return indices;
}
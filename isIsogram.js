function isIsogram(str) {
	let string = '';
	const lowerCase = str.toLowerCase();
	for (let i = 0; i < lowerCase.length; i++) {
		string += lowerCase[i];
		if (string.includes(lowerCase[i + 1])) return false;
	}
	return true;
}
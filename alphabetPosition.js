function alphabetPosition(text) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const result = [];
	for (let i = 0; i < text.length; i++) {
		if (alphabet.includes(text[i].toLowerCase())) {
			result.push(alphabet.indexOf(text[i].toLowerCase()) + 1);
		}
	}
	return result.join(' ');
}
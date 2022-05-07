function sentencify(words) {
	let sentence = words.join(' ');
	let firstLetter = sentence[0].toUpperCase();
	let restOfString = sentence.slice(1);
	return `${firstLetter}${restOfString}.`;
}

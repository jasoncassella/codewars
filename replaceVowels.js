function replace(s) {
	let result = '';
	const vowels = 'aeiou';
	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i].toLowerCase())) {
			result += '!';
		} else {
			result += s[i];
		}
	}
	return result;
}

console.log(replace('hello there sir'));

function smash(words) {
	let result = '';
	words.forEach(word => {
		result += `${word} `;
	});
	return result.slice(0, -1);
}

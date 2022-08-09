function nameShuffler(str) {
	const array = str.split(' ').reverse();
	return array.join(' ');
}

console.log(nameShuffler('john McClane'), 'McClane john');

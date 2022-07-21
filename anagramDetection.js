function isAnagram(test, original) {
	const array1 = test.toLowerCase().split('');
	const array2 = original.toLowerCase().split('');

	if (array1.sort().join(',') === array2.sort().join(',')) {
		return true;
	} else {
		return false;
	}

}

console.log(isAnagram('foefet', 'toffee')); // true
console.log(isAnagram('Buckethead', 'DeathCubeK')); // true
console.log(isAnagram('dumble', 'bumble')); // false
console.log(isAnagram('ound', 'round')); // false
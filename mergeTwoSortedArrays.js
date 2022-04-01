function mergeArrays(arr1, arr2) {
	let joined = arr1.concat(arr2);
	let unique = [...new Set(joined)];
	return unique.sort((a, b) => a - b);
}

function mergeArrays(a, b) {
	let merge = [...a, ...b].sort();
	let unique = new Set(merge);
	return Array.from(unique).sort((a, b) => a - b);
}

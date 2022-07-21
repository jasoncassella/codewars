// 6 kyu

function duplicateCount(input) {
	const text = input.toLowerCase();
	const letters = [];
	const duplicates = [];
	for (let i = 0; i < text.length; i++) {
		letters.push(text[i]);
		if (letters.includes(text[i + 1])) {
			duplicates.push(text[i + 1]);
		}
	}
	const distinct = [... new Set(duplicates)];
	return distinct.length;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
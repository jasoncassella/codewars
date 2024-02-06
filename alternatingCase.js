function toAlternatingCase(string) {
	let result = '';
	for (let i = 0; i < string.length; i++)
		if (string[i] === string[i].toUpperCase()) {
			result += string[i].toLowerCase();
		} else {
			result += string[i].toUpperCase();
		}
	return result;
}

// Test Cases
console.log(toAlternatingCase('hello world', 'HELLO WORLD'));
console.log(toAlternatingCase('HELLO WORLD', 'hello world'));
console.log(toAlternatingCase('hello WORLD', 'HELLO world'));
console.log(toAlternatingCase('HeLLo WoRLD', 'hEllO wOrld'));
console.log(toAlternatingCase('12345', '12345'));
console.log(toAlternatingCase('1a2b3c4d5e', '1A2B3C4D5E'));
console.log(toAlternatingCase('toAlternatingCase', 'TOaLTERNATINGcASE'));
console.log(toAlternatingCase('Hello World', 'Hello World'));

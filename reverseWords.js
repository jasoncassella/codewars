function reversedWords(str) {
  const words = str.split(' ');
  const reversed = words.map(word => word.split('').reverse().join(''));
  return reversed.join(' ');
}

console.log(reversedWords('the quick brown fox jumps over a lazy dog'));
function reverseLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const array = str.split('');
  const reverse = array.reverse();
  const filtered = reverse.filter(char => alphabet.includes(char));
  return filtered.join('');
}

console.log(reverseLetter("krishan"), "nahsirk");
console.log(reverseLetter("ultr53o?n"), "nortlu");
console.log(reverseLetter("ab23c"), "cba");
console.log(reverseLetter("krish21an"), "nahsirk");
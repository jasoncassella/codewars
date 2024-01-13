function isPalindrome(num) {
  const copy = [...num];
  console.log(copy);
}

console.log(isPalindrome(1)); // true
console.log(isPalindrome(12)); // false
console.log(isPalindrome(121)); // true

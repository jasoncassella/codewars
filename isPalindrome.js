function isPalindrome(x) {
  const reverse = [...x].reverse().join('').toLowerCase();
  if (x.toLowerCase() === reverse) return true;
  else return false;
}


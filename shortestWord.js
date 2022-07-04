function findShort(s) {
  const arrayOfWords = s.split(' ');
  const wordLengths = arrayOfWords.map(s => s.length);
  return Math.min(...wordLengths);
}
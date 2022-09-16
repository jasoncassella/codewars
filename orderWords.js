function order(words) {
  if (!words) return '';
  let count = 1;
  const orderedArray = [];
  const wordArray = words.split(' ');
  while (orderedArray.length < wordArray.length) {
    wordArray.forEach(word => {
      while (word.includes(count)) {
        orderedArray.push(word);
        count++;
      }
    });
  }
  return orderedArray.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "", "empty input should return empty string");
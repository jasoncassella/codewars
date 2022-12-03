const score = (input) => {
  const words = input.split(' ')
  for (let i = 0; i < words.length; i++) {
    const word = words[i].split('')
    for (let j = 0; j < word[i].length; i++) {
      console.log(word[i][j]);
    }
  }
};

console.log(score('man i need a taxi up to ubud'), 'taxi');
// console.log(score('what time are we climbing up the volcano'), 'volcano');
// console.log(score('take me to semynak'), 'semynak');
// console.log(score('aa b'), 'aa');
// console.log(score('b aa'), 'b');
// console.log(score('bb d'), 'bb');
// console.log(score('d bb'), 'd');
// console.log(score('aaa b'), 'aaa');

const capitals = (word) => {
  const indeces = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      indeces.push(word.indexOf(word[i]));
    }
  }
  return indeces;
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
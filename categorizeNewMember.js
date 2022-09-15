function openOrSenior(data) {
  const members = [];
  data.forEach(member => {
    if (member[0] >= 55 && member[1] > 7) {
      members.push('Senior');
    } else {
      members.push('Open');
    }
  });
  return members;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior']);
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]), ['Open', 'Open', 'Open', 'Open']);
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open']);
const number = array => array.map((n, i) => `${i + 1}: ${n}`);

console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');          
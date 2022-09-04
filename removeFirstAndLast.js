function removeChar(str) {
  const array = [...str];
  array.shift();
  array.pop();
  return array.join('');
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');
function filter_list(array) {
  return array.filter(element => typeof element !== 'string');
}
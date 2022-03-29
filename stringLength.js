const stringLength = (string) => string.split('').reduce( length => length + 1, 0);
// stringLength('hello');

console.log(`${stringLength('hello')}`);

module.exports = stringLength;
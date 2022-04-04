const stringLength = (string) => {
  const charCount = string.length;
  if (charCount < 1) {
    throw new Error('string has less than 1 character');
  } else if (charCount > 10) {
    throw new Error('string has more than 10 characters');
  } else {
    return charCount;
  }
};

module.exports = stringLength;

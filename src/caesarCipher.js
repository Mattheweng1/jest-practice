function caesarCipher(str, shiftFactor) {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipherAlphabet = [...plainAlphabet];
  while (shiftFactor > 0) {
    cipherAlphabet.push(cipherAlphabet.shift());
    shiftFactor--;
  }
  while (shiftFactor < 0) {
    cipherAlphabet.unshift(cipherAlphabet.pop());
    shiftFactor++;
  }

  const strArr = str.split("");
  const newStrArr = strArr.map((char) => {
    if (isUpperCase(char)) {
      let i = plainAlphabet.indexOf(char.toLowerCase());
      return cipherAlphabet[i].toUpperCase();
    } else {
      let i = plainAlphabet.indexOf(char);
      return cipherAlphabet[i];
    }
  });

  return newStrArr.join("");
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

export { caesarCipher };

function reverseString(str) {
  const strArr = str.split("");
  strArr.reverse();
  return strArr.join("");
}

export { reverseString };

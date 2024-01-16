function analyzeArray(arr) {
  return {
    average: getAvg(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

function getAvg(arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total / arr.length;
}

function getMin(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

function getMax(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

export { analyzeArray };

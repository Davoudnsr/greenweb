function reduce(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

function average(arr) {
  let sum = reduce(arr);
  let avg = sum / arr.length;
  return avg;
}
function mapSum(arr, value) {
  let x = [];
  let index = 0;
  for (let i of arr) {
    x[index] = i + value;
    index++;
  }
  return x;
}
function mapSub(arr, value) {
  let x = [];
  let index = 0;
  for (let i of arr) {
    x[index] = i - value;
    index++;
  }
  return x;
}
function map(arr, action, value) {
  switch (action) {
    case "+":
      return mapSum(arr, value);
    case "-":
      return mapSub(arr, value);
    default:
      return arr;
  }
}
module.exports.reduce = reduce;
module.exports.average = average;
module.exports.map = map;

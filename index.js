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
module.exports.reduce = reduce;
module.exports.average = average;

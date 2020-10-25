function reduce(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

let a = reduce([4, 5, 7, 10]);
console.log(a);

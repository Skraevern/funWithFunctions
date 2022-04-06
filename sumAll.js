// Sum all numbers ex (1, 4) = 1 + 2 + 3 + 4 = 10
const sumAll = function (first, last) {
  let firstNumber = first;
  let lastNumber = last;
  let total = 0;
  console.log(typeof lastNumber);

  if (firstNumber > lastNumber) {
    firstNumber = last;
    lastNumber = first;
  }

  if (typeof firstNumber !== `number` || typeof lastNumber !== `number`) {
    return `ERROR`;
  }

  if (firstNumber < 0 || lastNumber < 0) {
    return `ERROR`;
  }

  for (let i = firstNumber; i < lastNumber + 1; i++) {
    total = total + i;
  }

  return total;
};

//sums numbers within the range:
console.log(sumAll(1, 4)); // 10
// works with large numbers:
console.log(sumAll(1, 4000)); // 8002000
// works with larger number first
console.log(sumAll(123, 1)); // 7626
// returns ERROR with negative numbers"
console.log(sumAll(-10, 4)); // ERROR
// returns ERROR with non-number parameters:
console.log(sumAll(10, "90")); // ERROR
// returns ERROR with non-number parameters",
console.log(sumAll(10, [90, 1])); // ERROR

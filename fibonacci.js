const fibonacci = function (num) {
  let number = Number(num);
  if (number < -1) {
    return `OOPS`;
  }
  if (number <= 0) {
    return `OOPS!`;
  }

  let fibonacciArray = [1];

  fibonacciArray[0] = 0;
  fibonacciArray[1] = 1;
  for (let i = 2; i <= 100; i++) {
    fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
  }
  return fibonacciArray[number];
};
console.log(fibonacci(4)); // 3
console.log(fibonacci(25)); // 75025;

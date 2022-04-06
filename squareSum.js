// sum of all numbers square. [2, 2, 3] = 2*2 + 2*2 + 3*3 = 17

let squareSum = function (...theArgs) {
  let argumentArray = theArgs;
  let total = 0;

  for (let i = 0; i < argumentArray.length; i++) {
    let element = argumentArray[i];
    total += element * element;
  }
  return total;
};

console.log(squareSum(1, 2, 2, 8)); // 73

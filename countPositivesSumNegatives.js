/*
Given an array of integers.
Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;
  let array = [countPositives, sumNegatives];

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      sumNegatives += input[i];
    } else if (input[i] > 0) {
      countPositives++;
    }
  }
  if (array[0] === 0 && array[1] === 0) {
    array.pop(array[0]);
    array.pop(array[0]);
  }
  return array;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12 - 13, -14, -15]); // [10, -65]
console.log(countPositivesSumNegatives([0, 0])); // []

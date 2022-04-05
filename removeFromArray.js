const removeFromArray = function (arr, rem) {
  let newArray = [];

  for (let index = 0; index < arr.length; index++) {
    newArray.push(arr[index]);
    if (arr[index] === rem) {
      newArray.pop(arr[index]);
    }
  }
  return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 2)); // [1, 2, 4]

// Remove multiple arguments from array
const removeMultipleArgumentsFromArray = function (arr, ...theArgs) {
  let newArray = [];
  let element;

  for (let index = 0; index < arr.length; index++) {
    newArray.push(arr[index]);
    for (let i = 0; i < theArgs.length; i++) {
      element = theArgs[i];
      if (arr[index] === element) {
        newArray.pop(arr[index]);
      }
    }
  }
  return newArray;
};

console.log(removeMultipleArgumentsFromArray([1, 2, 3, 4], 2));
// [1, 2, 4]
console.log(removeMultipleArgumentsFromArray([1, 2, 3, 4], 3, 2));
// [1, 4]
console.log(removeMultipleArgumentsFromArray([1, 2, 3, 4], 7, "tacos"));
// [1, 2, 3, 4]
console.log(removeMultipleArgumentsFromArray([1, 2, 3, 4], 7, 2));
// 1, 3, 4];
console.log(removeMultipleArgumentsFromArray([1, 2, 3, 4], 1, 2, 3, 4));
// [];
console.log(removeMultipleArgumentsFromArray(["hey", 2, 3, "ho"], "hey", 3));
// [2, "ho"]
console.log(removeMultipleArgumentsFromArray([1, 2, 3], "1", 3));
//[1, 2]

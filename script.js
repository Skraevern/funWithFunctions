"use strict";

// Returns first letter inn string as capitalized
let capitalize = function (inputString) {
  let firstLetter = inputString.substring(1, -9999);
  let firstLetterCapitalize = firstLetter.toUpperCase();
  let remainingString = inputString.slice(1);
  let lowerCaseRemaining = remainingString.toLowerCase();
  return `${firstLetterCapitalize}${lowerCaseRemaining}`;
};

console.log(capitalize(`oNly FirSt LetteR is CapAiTalized`)); // Only first letter is capitalized

//

// Returns last letter of a string
let returnLastLetter = function (inputString) {
  let stringLength = inputString.length;
  let lastLetter = inputString.slice(stringLength - 1);
  return lastLetter;
};

console.log(returnLastLetter(`Returns the last letter of a string`)); // g

//

// Check if a string contains special characters.
let containsSpecialCharacters = function (str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};
console.log(containsSpecialCharacters("test")); //false
console.log(containsSpecialCharacters("test/")); //True

//

// Returns longest word in a string. Will not log words with special characters.
let returnLongestWord = function (str) {
  let wordsArray = str.split(" ");
  let longestWord = `a`;
  for (let i = 0; i < wordsArray.length; i++) {
    let element = wordsArray[i];
    if (containsSpecialCharacters(element) === false) {
      if (element.length === longestWord.length) {
        longestWord = `${longestWord} ${element}`;
      } else if (element.length > longestWord.length) {
        longestWord = element;
      }
    }
  }
  return longestWord;
};

console.log(
  returnLongestWord(
    `Logs longest word but will not log words with wierd&/) symbols`
  )
); // longest symbols

//

// Repeat string function
const repeatString = function (str, num) {
  let string = str;
  let number = num;

  if (number === 0) {
    string = ``;
    return string;
  } else if (number < 0) {
    string = `ERROR`;
    return string;
  } else {
    for (let index = 1; index < num; index++) {
      string = string + str;
    }
  }
  return string;
};

console.log(repeatString(`hey`, 3)); //heyheyhey

//

// Reverse string
const reverseString = function (str) {
  let strArray = [];
  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }
  strArray.reverse();
  let stringReverse = strArray.join("");

  return stringReverse;
};

console.log(reverseString(`hello`)); // olleh

//

// Remove from array
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

//

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

console.log(removeMultipleArgumentsFromArray(["hey", 2, 3, "ho"], "hey", 3));
// [2, "ho"]

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
let lastLetter = function (inputString) {
  let stringLength = inputString.length;
  let lastLetter = inputString.slice(stringLength - 1);
  return lastLetter;
};

console.log(lastLetter(`Returns the last letter of a string`)); // g

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
let longestWord = function (str) {
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
  longestWord(`Logs longest word but will not log words with wierd&/) symbols`)
); // longest symbols

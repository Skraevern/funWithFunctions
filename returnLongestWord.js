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

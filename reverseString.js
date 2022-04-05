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
console.log(reverseString("hello there")); // ereht olleh
console.log(reverseString("123! abc!")); // !cba !321
console.log(reverseString("")); // ""

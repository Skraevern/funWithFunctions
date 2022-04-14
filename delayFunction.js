// change image every 1 second after player picks function
let delay = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};
// call delay function
let callDelayFunction = function () {
  delay(2000).then(() => console.log(`Delayed 2 seconds`));
};
// event listener for for button to log to console.
let delayBtn = document.getElementById(`delay-button`);
delayBtn.addEventListener(`click`, callDelayFunction);

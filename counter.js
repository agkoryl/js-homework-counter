(function() {

'use strict';

var counterResult = 0;

var resultDOM = document.getElementsByClassName("result");
var addMessage = "Congrats, you've just added 1.";
var substractMessage = "You have substracted 1.";

function renderCounter() {
  resultDOM[0].innerHTML = counterResult;
}

function createNewToast() {
  var newToast = document.createElement("div");
  newToast.classList.add("toast");
  document.getElementsByClassName("container--toast")[0].appendChild(newToast);
  return newToast;
}

function deleteToast(toast) {
  setTimeout(function() {
    toast.remove();
  }, 1500);
}

function changeCounterResult(value, string) {
  counterResult = counterResult + value;
  renderCounter();
  var newAddToast = createNewToast();
  newAddToast.innerHTML = string;
  deleteToast(newAddToast);
}

function resetCounter() {
  counterResult = 0;
  renderCounter();
}

renderCounter();

document
  .getElementById("btn--add")
  .addEventListener("click", () => changeCounterResult(1, addMessage));
document
  .getElementById("btn--remove")
  .addEventListener("click", () => changeCounterResult(-1, substractMessage));

document.getElementById("btn--refresh").addEventListener("click", resetCounter);
} ());

//games constant variable
const colorChoices = ['green', 'blue', 'red', 'yellow', 'gray', 'white', 'purple', 'orange']

//state variables
let numberOfGuesses 
let won;
let lost;
let previousGuess;
let hint;
let guessBlock;
let guessCircleOne;
let guessCircleTwo;
let guessCircleThree;
let guesscircleFour;

let secretCode = ['', '', '', '',]

//cashed elements
const colorBtnEl = document.querySelectorAll('.colorButton');
const submitBtnEl = document.querySelector('#submit');
const deleteBtnEl = document.querySelector('#delete');

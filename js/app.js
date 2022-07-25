//games constant variable
const colorChoices = ['green', 'blue', 'red', 'yellow', 'grey', 'white', 'purple', 'orange']

//state variables
let numberOfGuesses 
let won;
let lost;
let previousGuess;
let hint;
let guessBlock;
let colorclick;
let submitclick;
let deleteclick;
let boardInd;
let hintInd;
let loopSecret;
let matchPlaceAndColor;
let matchColor;

const board = [
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
    null, null, null, null, [null,null,null,null],
]

let secretCode = ['', '', '', '',]

//cashed elements
const colorBtnEl = {
    green: document.querySelector('#green'),
    blue: document.querySelector('#blue'),
    red: document.querySelector('#red'),
    yellow: document.querySelector('#yellow'),
    grey: document.querySelector('#grey'),
    white: document.querySelector('#white'),
    purple: document.querySelector('#purple'),
    orange:document.querySelector('#orange')
}
const submitBtnEl = document.getElementById('submit');
const deleteBtnEl = document.getElementById('delete');

const guessBoardOne = document.getElementById('gueOne');
const guessBoardTwo = document.getElementById('gueTwo');
const guessBoardThree = document.getElementById('gueThree');
const guessBoardFour = document.getElementById('gueFour');

//set up event listeners for the buttons
for (const color in colorBtnEl) {
    colorBtnEl[color].addEventListener('click', addColor)}

submitBtnEl.addEventListener('click', submit)
deleteBtnEl.addEventListener('click', del)

init()


//define functions
function addColor(e){
    if (guessBlock.length < 4){
    guessBlock.push(e.target.id);
    console.log(e.target.id)
    colorclick = true;
    render()
}
}

function submit() {
    if (guessBlock.length === 4) {
        submitclick = true;
        CompareCodes();

        render()
    }   
    console.log('submit')
}

function del() {
    console.log('delete')
}

function getNewCode(){
    let a = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    let b = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    let c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    let d = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    return [a, b, c, d]
}

function clearGuessBlock(){
    guessBoardOne.style.background = '';
    guessBoardTwo.style.background = '';
    guessBoardThree.style.background = '';
    guessBoardFour.style.background = '';
}

function compareCodes(){
    for (let i = 0; i < guessBlock.length; i++) {

        //the thought process here is counting the number of matching colors and then seeing how many of those matching colors also
        //match places, then generating a hint array that can be used in the render function 
        if (guessBlock[i] === loopSecret[0]) {
          matchColor++;
          loopSecret[0] = 'matched'
        }
        else if (guessBlock[i] === loopSecret[1] && i !== 1) {
          matchColor++;
          loopSecret[1] = 'matched'
        }
        else if (guessBlock[i] === loopSecret[2] && i !== 2) {
          matchColor++;
          loopSecret[2] = 'matched'
        }
        else if (guessBlock[i] === loopSecret[3] && i !== 3) {
          matchColor++;
          loopSecret[3] = 'matched'
        }
      
    for (let i = 0; i < guessBlock.length; i++) {
        if (secretCode[i] === guessBlock[i]) {
          matchPlaceAndColor++
          matchColor--
        }
      }
    }
}

function hintArray(){
    for (let i = 0; i < 4; i++) {
        if (matchPlaceAndColor > 0) {
            hint.push('green')
            matchPlaceAndColor--
        } else if (matchColor > 0) {
            hint.push('yellow')
        } else {
            hint.push('black')
        }
    }
}

function win(){
    console.log('you win')
}

function init() {
    
    //reset the guess board
    board.forEach(ele => (ele = null))
    //reset state variables
    numberOfGuesses = 10
    won = null;
    lost = null;
    guessBlock = [];
    colorclick = false;
    submitclick = false;
    deleteclick = false;
    boardInd = 0;
    hintInd = 100;
    hint = [];

    //pick a new secret code
    secretCode = getNewCode();

    loopSecret = secretCode.slice(0);
    let matchPlaceAndColor = 0;
    let matchColor = 0;

    render()
}



function render(){
    //change the guess 
    if (colorclick === true){
        guessBoardOne.style.background = guessBlock[0];
        guessBoardTwo.style.background = guessBlock[1];
        guessBoardThree.style.background = guessBlock[2];
        guessBoardFour.style.background = guessBlock[3];
        colorclick = false;
    } 
    if (submitclick === true){
        document.getElementById(boardInd).style.background = guessBlock[0];
        boardInd++;
        document.getElementById(boardInd).style.background = guessBlock[1];
        boardInd++;
        document.getElementById(boardInd).style.background = guessBlock[2];
        boardInd++;
        document.getElementById(boardInd).style.background = guessBlock[3];
        boardInd++;
        guessBlock = [];
        clearGuessBlock();
        document.getElementById(boardInd).style.background = hint[0];
        hintInd++;
        document.getElementById(boardInd).style.background = hint[1];
        hintInd++;
        document.getElementById(boardInd).style.background = hint[2];
        hintInd++;
        document.getElementById(boardInd).style.background = hint[3];
        hintInd++;

        submitclick = false;
    }


}

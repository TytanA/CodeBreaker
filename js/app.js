//games constant variable
const colorChoices = ['green', 'blue', 'red', 'yellow', 'grey', 'white', 'purple', 'orange']
const Choices = ['ring', 'sword', 'bow', 'orb', 'potion', 'ring', 'shield', 'axe']
const Choices2 = {
    ring: {

    }
}
//state variables
let numberOfGuesses //number of guess allowed
let won; //may not be needed, we will see
let lost; //may not be needed, we will see
let previousGuess; //may not be needed, may need it to store on the board
let hint; //value for hint
let guessBlock; //the block for current guess
let colorclick; //for clicking a color
let submitclick; //for clicking the submit button
let deleteclick; //for clicking the delete button
let boardInd; //this will track the boards index starts at zero
let hintInd; //this will track the hints indexs to give hints starts at 100
let loopSecret; //needed a copy of the secret code to loop through in the compare secrets function
let matchPlaceAndColor; //a variable to track which colors go into the current hint array
let matchColor; //a variable to track which colors go into the current hint array
let initRun;

//this is the board, but uh I don't think i need this
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

let secretCode = ['', '', '', '',] //the vital secret code

//cashed elements

//for each of the color buttons
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

const submitBtnEl = document.getElementById('submit'); //submit button
const deleteBtnEl = document.getElementById('delete'); //delete button
const playAgainBtnEl = document.getElementById('playAgain'); //play again button on the popup

const guessBoardOne = document.getElementById('gueOne'); //maybe i should make a object for these like the color button but the elements for the guess board
const guessBoardTwo = document.getElementById('gueTwo');
const guessBoardThree = document.getElementById('gueThree');
const guessBoardFour = document.getElementById('gueFour');
const popUp = document.querySelector('#popup')
const popupText = document.querySelector('.popupText')

//set up event listeners for the buttons

//cliking the color buttons
for (const color in colorBtnEl) {
    colorBtnEl[color].addEventListener('click', addColor)}

submitBtnEl.addEventListener('click', submit) //clicking the submit button
deleteBtnEl.addEventListener('click', del)  //clicking the delete button
playAgainBtnEl.addEventListener('click', playAgain)

//will need one for a start over button down the line


init()


//define functions

//the function that will run when a color button is pressed to add a color to the guessboard
function addColor(e){
    if (guessBlock.length < 4){
    guessBlock.push(e.target.id);
    // console.log(e.target.id)
    colorclick = true;
    render()
    }
}

//function that will fun when the submit button is pressed, should compare the codes, update the hint array, and then render
//the guess and the hints onto the board
function submit() {
    if (guessBlock.length === 4) {
        submitclick = true;
        compareCodes();
        hintArray();
        numberOfGuesses--
        loopSecret = secretCode.slice(0)
        console.log(guessBlock)
        if (numberOfGuesses === 0){
            lost = true;
        } else if (guessBlock === secretCode){
            won = true;
            console.log(won)
        }
    }
    render()
    if (lost === true) {
        render()
    } else if (won === true) {
        render
    }
    
}   

//this function should remove the last color off of the guess board
function del() {
    guessBlock.pop();
    deleteclick = true;
    render();
}

//function for getting a new secret code, used in the init
function getNewCode(){
    let a = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    let b = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    let c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    let d = colorChoices[Math.floor(Math.random() * colorChoices.length)];
    return [a, b, c, d]
}

//function for clearing the guessboard, used in render
function clearGuessBlock(){
    guessBoardOne.className = '';
    guessBoardTwo.className = '';
    guessBoardThree.className = '';
    guessBoardFour.className = '';
}


//the function for comparing the codes, this took quite a while to found out, after different loops and messing with making the code an object, then
//comparing that, i think this was the simplest way i made it work consistently, it first takes a color compares it with the other colors in the code
// and increases the matchColor count. then after that is done it compares to see if any of those matched colors also match position, by removing it 
//from match color and adding it to matchPlaceAndColor
function compareCodes(){
    for (let i = 0; i < guessBlock.length; i++) {

        //the thought process here is counting the number of matching colors and then seeing how many of those matching colors also
        //match places, then generating a hint array that can be used in the render function 
        if (guessBlock[i] === loopSecret[0]) {
          matchColor+= 1;
          loopSecret[0] = 'matched';
        }
        else if (guessBlock[i] === loopSecret[1]) {
          matchColor+= 1;
          loopSecret[1] = 'matched';
        }
        else if (guessBlock[i] === loopSecret[2]) {
          matchColor+= 1;
          loopSecret[2] = 'matched';
        }
        else if (guessBlock[i] === loopSecret[3]) {
          matchColor+= 1;
          loopSecret[3] = 'matched';
        }
      }
            
    for (let i = 0; i < guessBlock.length; i++) {
        if (secretCode[i] === guessBlock[i]) {
          matchPlaceAndColor+=1;
          matchColor-=1;
        }
    }
    if (matchPlaceAndColor === 4){
        won = true;
    }
}

function hintArray(){
    for (let i = 0; i < 4; i++) {
        if (matchPlaceAndColor > 0) {
            hint.push('green');
            matchPlaceAndColor-= 1;
        } else if (matchColor > 0) {
            hint.push('yellow');
            matchColor-= 1
        } else {
            hint.push('black')
        }
    }
}


function closePopUp(){
    popUp.classList.add('popupClose')
}

function playAgain(){
    init()
}

function init() {
    initRun = true;
    //reset the guess board
    //reset state variables
    numberOfGuesses = 10
    won = false;
    lost = false;
    guessBlock = [];
    colorclick = false;
    submitclick = false;
    deleteclick = false;
    boardInd = 0;
    hintInd = 100;
    hint = [];
    matchPlaceAndColor = 0;
    matchColor = 0;
    //pick a new secret code
    secretCode = getNewCode();

    loopSecret = secretCode.slice(0);


    render()
}



function render(){
    if (initRun === true){
        for(let i=0; i < 40; i++){
            document.getElementById(i).className = '';
            document.getElementById(i + 100).style.background = 'black';

        }
        popUp.className = 'popupClose';
        initRun = false;

    }
    if (colorclick === true){
        guessBoardOne.classList.add(guessBlock[0]);
        guessBoardTwo.classList.add(guessBlock[1]);
        guessBoardThree.classList.add(guessBlock[2]);
        guessBoardFour.classList.add(guessBlock[3]);
        colorclick = false;
    } 
    if (submitclick === true){ 
        document.getElementById(boardInd).classList.add(guessBlock[0]);
        boardInd++;
        document.getElementById(boardInd).classList.add(guessBlock[1]);
        boardInd++;
        document.getElementById(boardInd).classList.add(guessBlock[2]);
        boardInd++;
        document.getElementById(boardInd).classList.add(guessBlock[3]);
        boardInd++;
        guessBlock = [];
        clearGuessBlock();
        document.getElementById(hintInd).style.background = hint[0];
        hintInd++;
        document.getElementById(hintInd).style.background = hint[1];
        hintInd++;
        document.getElementById(hintInd).style.background = hint[2];
        hintInd++;
        document.getElementById(hintInd).style.background = hint[3];
        hintInd++;
        hint = [];
        submitclick = false;
    }
    if (deleteclick === true) {
        if (guessBlock.length + 1 === 1){
        guessBoardOne.className = '';
        } else if (guessBlock.length + 1 === 2) {
        guessBoardTwo.className = '';
        } else if (guessBlock.length + 1 === 3) {
        guessBoardThree.className = '';
        } else if (guessBlock.length + 1 === 4)
        guessBoardFour.className = '';
        deleteclick = false;
    }
    if (won === true){
        popUp.className = 'popupOpen';
        popupText.innerText = 'You Successfully Defeated the Dungeon! Are you ready for the next one?'
    }
    if (lost === true){
        popUp.className = 'popupOpen';
        popupText.innerText = 'You enter the dungeon ill prepared, a monster jumps out and catches you by surprise. You are defeated!'
    }

}

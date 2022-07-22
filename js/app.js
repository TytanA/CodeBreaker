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

    //pick a new secret code
    secretCode = getNewCode()
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
    } else if (submitclick === true){
        
    }

}

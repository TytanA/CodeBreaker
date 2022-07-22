//games constant variable
const colorChoices = ['green', 'blue', 'red', 'yellow', 'grey', 'white', 'purple', 'orange']

//state variables
let numberOfGuesses 
let won;
let lost;
let previousGuess;
let hint;
let guessBlock;

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


//set up event listeners for the buttons
for (const color in colorBtnEl) {
    colorBtnEl[color].addEventListener('click', addColor)}

submitBtnEl.addEventListener('click', submit())
deleteBtnEl.addEventListener('click', del())

init()


//define functions
function addColor(e){
    console.log(e.target.id)
}

function submit() {
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
    guessBlock = [null, null, null, null];


    //pick a new secret code
    secretCode = getNewCode()
    render()
}

function render(){

}
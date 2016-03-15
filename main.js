
//1. Target the element we're trying to listen for the event on
//2. Tell a function to run when that event happens
//3. Create the function 


var redButtonEl = document.querySelector('.btnRed');
var greenButtonEl = document.querySelector('.btnGreen');
var blueButtonEl = document.querySelector('.btnBlue');
var textArea = document.querySelector('.textArea');

redButtonEl.addEventListener('click', showRedText);
greenButtonEl.addEventListener('click', showGreenText);
blueButtonEl.addEventListener('click', showBlueText);


function showRedText() {
	textArea.innerHTML = 'Red';
}

function showGreenText() {
	textArea.innerHTML = 'Green';
}

function showBlueText() {
	textArea.innerHTML = 'Blue';
}
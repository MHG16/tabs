
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
	textArea.innerHTML = 'Red is the color at the end of the spectrum of visible light next to orange and opposite violet.[3] Red color has a predominant light wavelength of roughly 620–740 nanometres. Red is one of the additive primary colors of visible light, along with green and blue, which in Red Green Blue (RGB) color systems are combined to create all the colors on a computer monitor or television screen. Red is also one of the subtractive primary colors, along with yellow and blue, of the RYB color space and traditional color wheel used by painters and artists.';
}

function showGreenText() {
	textArea.innerHTML = 'Green is the color between blue and yellow on the spectrum of visible light. It is evoked by light with a predominant wavelength of roughly 495–570 nm. In the subtractive color system, used in painting and color printing, it is created by a combination of yellow and blue, or yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors.';
}
function showBlueText() {
	textArea.innerHTML = 'Blue is is the colour between violet and green on the optical spectrum of visible light. Human eyes perceive blue when observing light with a wavelength between 450 and 495 nanometres. Blues with a higher frequency and thus a shorter wavelength gradually look more violet, while those with a lower frequency and a longer wavelength gradually appear more green. Pure blue, in the middle, has a wavelength of 470 nanometres. In painting and traditional colour theory, blue is one of the three primary colours of pigments, along with red and yellow, which can be mixed to form a wide gamut of colours. Red and blue mixed together form violet, blue and yellow together form green. Blue is also a primary colour in the RGB colour model, used to create all the colours on the screen of a television or computer monitor.';	
}

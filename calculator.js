//--------------------const-----------------------
const MAXIMUM_SCREEN_NUMBERS = 35;
const MAXIMUM_TOP_SCREEN_NUMBERS = 40;
const MAXIMUM_LENGHT_TARGET = 3;
const CLEAR = '';
const EQUAL_SIGN = '=';
const calculation = document.getElementById('calculation');
const outPut = document.getElementById('result');
const pressedOnCalculator = document.getElementById('calculator');

//---------------variables---------------------
let continuesToCalculation = false; //When we do calculation upon calculation
let outOfScreen = false;


//The function handles button clicks
function handleTheClick(event, calculation, continuesToCalculation) {

	
	if (Number.isInteger(Number(event.target.innerHTML)))
		if (!continuesToCalculation && calculation.textContent.length < MAXIMUM_TOP_SCREEN_NUMBERS) {
			continuesToCalculation = true;
			calculation.innerHTML += event.target.innerHTML;
		}
		else;
		//If we are here then the user clicked on the calculator or operation button
	else if (event.target.innerHTML.length < MAXIMUM_LENGHT_TARGET)
		buttonsOperations(event.target.innerHTML);
}

//The function handles clicks on operations like(+,-.,-..)
//--------------buttonsOperations-------------------
function buttonsOperations(valuePressed) {

	switch (valuePressed) {

		case 'DE'://Deletes last value
			calculation.innerHTML = calculation.textContent
				.slice(0, calculation.textContent.length - 1);
			break;

		case 'AC':
			continuesToCalculation = false;
			calculation.innerHTML = outPut.innerHTML = CLEAR;
			break;

		case EQUAL_SIGN:

			let temp = eval(calculation.textContent.replace('x', '*'));

			if (temp.toString().length > MAXIMUM_SCREEN_NUMBERS) {
				outOfScreen = true;
				outPut.innerHTML = "Result out of screen";
				calculation.innerHTML = CLEAR;
			} else {
				continuesToCalculation = true;//Calculation on calculation
				calculation.innerHTML = temp;
				outPut.innerHTML = temp;
			}
			break;
		default:
			continuesToCalculation = false;
			calculation.innerHTML += valuePressed;//Inserts operation
	}
}

pressedOnCalculator.addEventListener('click', function (event) {
	handleTheClick(event, calculation, continuesToCalculation)
})

if (outOfScreen) { //When the solution out of screen
	outOfScreen = false;
	outPut.innerHTML = CLEAR;
}


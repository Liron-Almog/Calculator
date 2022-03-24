//--------------------const-----------------------
const MAXIMUM_SCREEN_NUMBERS = 17;
const MAXIMUM_TOP_SCREEN_NUMBERS = 25;
const NUMBER_ONE = '1';
const NUMBER_TWO = '2';
const NUMBER_THREE = '3';
const NUMBER_FOUR = '4';
const NUMBER_FIVE = '5';
const NUMBER_SIX = '6';
const NUMBER_SEVEN = '7';
const NUMBER_EIGHT = '8';
const NUMBER_NINE = '9';
const NUMBER_ZERO = '0';
const NUMBER_DOUBLE_ZERO ="00";
const CLEAR = '';
const PLUS_SIGN = '+';
const SUB_SIGN = '-';
const DIV_SIGN = '/';
const MUL_SIGN = 'x';
const POINT_SIGN = '.';
const EQUAL_SIGN = '=';

const buttons = document.getElementsByTagName('button');

//---------------variables---------------------
let continuesToCalculation = false;//When we do calculation upon calculation
let outOfScreen = false;
let outPut = document.getElementById('result');
let calculation = document.getElementById('calculation');

//The function gets click button from user and checks if it has pressed
//on a button between 0 to 9, 00 and then adds the number to calculation
function buttonsNumber(buttonPressed) {
    
    switch (buttonPressed) {

        case NUMBER_ONE:
            calculation.innerHTML += '1';
            break;
        case NUMBER_TWO:
            calculation.innerHTML += '2';
            break;
        case NUMBER_THREE:
            calculation.innerHTML += '3';
            break;
        case NUMBER_FOUR:
            calculation.innerHTML += '4';
            break;
        case NUMBER_FIVE:
            calculation.innerHTML += '5';
            break;
        case NUMBER_SIX:
            calculation.innerHTML += '6';
            break;
        case NUMBER_SEVEN:
            calculation.innerHTML += '7';
            break;
        case NUMBER_EIGHT:
            calculation.innerHTML += '8';
            break;
        case NUMBER_NINE:
            calculation.innerHTML += '9';
            break;
        case NUMBER_ZERO:
            calculation.innerHTML += '0';
            break;
        case NUMBER_DOUBLE_ZERO:
            calculation.innerHTML += '00';
            break;
    }

}

//The function gets click button from user and checks if it has pressed
//on operation button
function buttonsOperations(buttonPressed) {
    
    switch (buttonPressed) {

        case EQUAL_SIGN:
            temp = eval(calculation.textContent.replace('x', '*'));

            if (temp.toString().length > MAXIMUM_SCREEN_NUMBERS) {
                outOfScreen = true;
                outPut.innerHTML = "Result out of screen";
                calculation.innerHTML = CLEAR;
            }
            else {
                continuesToCalculation = true;
                outPut.innerHTML = eval(calculation.textContent.replace('x', '*'));
            }
            break;

        case PLUS_SIGN:
            continuesToCalculation = false;
            calculation.innerHTML += '+';
            break;

        case SUB_SIGN:
            continuesToCalculation = false;
            calculation.innerHTML += '-';
            break;

        case DIV_SIGN:
            continuesToCalculation = false;
            calculation.innerHTML += '/';
            break;

        case MUL_SIGN:
            double = true;
            continuesToCalculation = false;
            calculation.innerHTML += 'x';
            break;

        case POINT_SIGN:
            calculation.innerHTML += '.';
            break;

        case 'DE':     
            calculation.innerHTML = calculation.textContent
                .slice(0, calculation.textContent.length - 1);
            break;

        case 'AC':
            continuesToCalculation = false;
            calculation.innerHTML = outPut.innerHTML = CLEAR;
            break;
    }
}

//The function checks if the numbers out of screen,
//if it is, clears the screen 
function isOutOfScreen() {

    if (outOfScreen) {//When the solution out of screen
        outOfScreen = false;
        outPut.innerHTML = CLEAR;
        temp = CLEAR;
    }

}

for (let button of buttons) {

    let temp;
    
    button.addEventListener('click', (event) => {

        isOutOfScreen();

        //checks if the numbers out of screen
        if (calculation.textContent.length < MAXIMUM_TOP_SCREEN_NUMBERS) 
            if (!continuesToCalculation)
                buttonsNumber(button.innerHTML);

            buttonsOperations(button.innerHTML)

            if (continuesToCalculation)
                calculation.innerHTML = outPut.textContent;
        });
    
}

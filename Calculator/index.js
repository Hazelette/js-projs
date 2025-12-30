// CALCULATOR PROGRAMS

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => {clearDisplay()}, 2000); // clear after 2 seconds
    }
}
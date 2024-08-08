let firstElement = document.getElementById("button1");
let secondElement = document.getElementById("button2");
let thirdElement = document.getElementById("button3");
let fourthElement = document.getElementById("button4");
let backgroundElement = document.getElementById("colorPickerContainer");
let textElement = document.getElementById("selectedColorHexCode");



function getButton1() {
    backgroundElement.style.backgroundColor = "#e0e0e0";
    textElement.textContent = firstElement.textContent;
}

function getButton2() {
    backgroundElement.style.backgroundColor = "#6fcf97";
    textElement.textContent = "#6fcf97";
}

function getButton3() {
    backgroundElement.style.backgroundColor = "#56ccf2";
    textElement.textContent = "#56ccf2";
}

function getButton4() {
    backgroundElement.style.backgroundColor = "#bb6bd9";
    textElement.textContent = "#bb6bd9";
}